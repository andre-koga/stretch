import { useCallback, useRef, useState, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { PoseIllustration } from './PoseIllustration'
import {
  formatDuration,
  routineDurationSec,
  type Theme,
  type Variation,
} from '../data/routines'

type Props = {
  theme: Theme
}

const SWIPE_THRESHOLD_PX = 48

export function VariationCarousel({ theme }: Props) {
  const [index, setIndex] = useState(0)
  const [dragPx, setDragPx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startXRef = useRef(0)
  const widthRef = useRef(0)
  const indexRef = useRef(0)
  const trackRef = useRef<HTMLDivElement>(null)

  indexRef.current = index

  const goTo = useCallback(
    (i: number) => {
      const next = Math.min(theme.variations.length - 1, Math.max(0, i))
      setIndex(next)
      setDragPx(0)
    },
    [theme.variations.length],
  )

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    // Ignore drags that start on the vertical pose list
    const target = event.target as HTMLElement
    if (target.closest('[data-pose-list]')) return

    widthRef.current = trackRef.current?.clientWidth ?? 0
    startXRef.current = event.clientX
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const dx = event.clientX - startXRef.current
    const atStart = indexRef.current === 0 && dx > 0
    const atEnd = indexRef.current === theme.variations.length - 1 && dx < 0
    const resistance = atStart || atEnd ? 0.28 : 1
    setDragPx(dx * resistance)
  }

  const finishDrag = (clientX: number) => {
    if (!dragging) return
    setDragging(false)
    const dx = clientX - startXRef.current
    const width = widthRef.current || 1
    // Require a deliberate swipe; never jump more than one variation
    if (Math.abs(dx) >= SWIPE_THRESHOLD_PX || Math.abs(dx) / width >= 0.18) {
      if (dx < 0) goTo(indexRef.current + 1)
      else goTo(indexRef.current - 1)
    } else {
      setDragPx(0)
    }
  }

  const current = theme.variations[index] ?? theme.variations[0]
  const offsetPct = -index * 100
  const dragPct = widthRef.current > 0 ? (dragPx / widthRef.current) * 100 : 0

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <p className="text-sm text-ink-muted">
          Swipe for variations · {index + 1} / {theme.variations.length}
        </p>
        <div className="flex gap-1.5">
          {theme.variations.map((v, i) => (
            <button
              key={v.id}
              type="button"
              aria-label={`Show ${v.label}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-amber' : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="min-h-0 flex-1 touch-pan-y overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => finishDrag(e.clientX)}
        onPointerCancel={() => {
          setDragging(false)
          setDragPx(0)
        }}
      >
        <div
          className={`flex h-full ${dragging ? '' : 'transition-transform duration-300 ease-out'}`}
          style={{ transform: `translate3d(calc(${offsetPct}% + ${dragPct}%), 0, 0)` }}
        >
          {theme.variations.map((variation) => (
            <VariationSlide key={variation.id} variation={variation} />
          ))}
        </div>
      </div>

      <div className="mt-auto pt-3 safe-pb">
        <Link to={`/stretch/${theme.id}/${current.id}/session`} className="block">
          <Button className="w-full">Begin · {current.label}</Button>
        </Link>
      </div>
    </div>
  )
}

function VariationSlide({ variation }: { variation: Variation }) {
  return (
    <section className="flex w-full shrink-0 flex-col px-0.5">
      <header className="mb-4">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{variation.label}</h2>
        <p className="mt-1 text-sm text-ink-muted">
          {formatDuration(routineDurationSec(variation))} · {variation.poses.length} poses
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{variation.description}</p>
      </header>

      <ol
        data-pose-list
        className="max-h-[46vh] touch-pan-y space-y-2 overflow-y-auto pb-2"
      >
        {variation.poses.map((pose, poseIndex) => (
          <li key={pose.id} className="flex items-center gap-3 py-1.5 text-sm">
            <PoseIllustration
              imageKey={pose.imageKey}
              side={pose.side}
              name={pose.name}
              size="sm"
              className="shrink-0"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-medium text-ink">
                  <span className="mr-2 text-ink-muted/70">{poseIndex + 1}</span>
                  {pose.name}
                  {pose.side && pose.side !== 'both' ? (
                    <span className="ml-1.5 font-normal text-ink-muted">({pose.side})</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-ink-muted">{pose.durationSec}s</span>
              </div>
              {pose.cue ? <p className="mt-0.5 text-ink-muted">{pose.cue}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
