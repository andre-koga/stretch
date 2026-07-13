import { useCallback, useEffect, useRef, useState } from 'react'
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

export function VariationCarousel({ theme }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const syncIndex = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const width = el.clientWidth
    if (width <= 0) return
    const next = Math.round(el.scrollLeft / width)
    setIndex(Math.min(theme.variations.length - 1, Math.max(0, next)))
  }, [theme.variations.length])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    syncIndex()
    el.addEventListener('scroll', syncIndex, { passive: true })
    return () => el.removeEventListener('scroll', syncIndex)
  }, [syncIndex])

  const goTo = (i: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    setIndex(i)
  }

  const current = theme.variations[index] ?? theme.variations[0]

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
        ref={scrollerRef}
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {theme.variations.map((variation) => (
          <VariationSlide key={variation.id} variation={variation} />
        ))}
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
    <section className="flex w-full shrink-0 snap-center flex-col px-0.5">
      <header className="mb-4">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{variation.label}</h2>
        <p className="mt-1 text-sm text-ink-muted">
          {formatDuration(routineDurationSec(variation))} · {variation.poses.length} poses
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{variation.description}</p>
      </header>

      <ol className="max-h-[46vh] space-y-2 overflow-y-auto pb-2">
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
