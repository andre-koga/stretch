import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Button } from '../components/Button'
import { PoseIllustration } from '../components/PoseIllustration'
import { ProgressBar } from '../components/ProgressBar'
import { playChime } from '../features/audio/ambient'
import { formatClock, useSessionTimer } from '../features/timer/useSessionTimer'
import { useWakeLock } from '../features/timer/useWakeLock'
import { getRoutine } from '../data/routines'
import { loadPrefs } from '../lib/storage'

export function StretchSessionPage() {
  const { routineId } = useParams()
  const navigate = useNavigate()
  const routine = routineId ? getRoutine(routineId) : undefined
  const [poseIndex, setPoseIndex] = useState(0)
  const [done, setDone] = useState(false)
  const [sessionKey, setSessionKey] = useState(0)
  const chimeOn = useRef(loadPrefs().stretchChime)
  const advancingRef = useRef(false)

  const advance = useCallback(() => {
    if (!routine || advancingRef.current) return
    advancingRef.current = true
    if (chimeOn.current) void playChime()
    setPoseIndex((i) => {
      if (i >= routine.poses.length - 1) {
        setDone(true)
        return i
      }
      return i + 1
    })
    window.setTimeout(() => {
      advancingRef.current = false
    }, 50)
  }, [routine])

  const timer = useSessionTimer({ onComplete: advance })
  useWakeLock(timer.status === 'running' && !done)

  const pose = routine?.poses[poseIndex]

  useEffect(() => {
    if (!routine || !pose || done) return
    timer.start(pose.durationSec * 1000)
    // restart timer whenever pose or session resets
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poseIndex, routine?.id, done, sessionKey])

  if (!routine || !pose) {
    return (
      <main className="py-8">
        <BackLink to="/stretch" />
        <p className="mt-8 text-ink-muted">Routine not found.</p>
      </main>
    )
  }

  if (done) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="animate-fade-up">
          <p className="font-display text-4xl font-semibold">Complete</p>
          <p className="mt-3 text-ink-muted">{routine.title} — well done.</p>
          <div className="mt-10 flex flex-col gap-3">
            <Button
              onClick={() => {
                setDone(false)
                setPoseIndex(0)
                setSessionKey((k) => k + 1)
              }}
            >
              Start again
            </Button>
            <Link to="/" className="text-sm text-ink-muted hover:text-ink">
              Back home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const overall =
    (poseIndex + (1 - timer.remainingMs / Math.max(timer.durationMs, 1))) /
    routine.poses.length

  const elapsedMs = Math.max(0, timer.durationMs - timer.remainingMs)
  const alternate = Boolean(pose.alternateKey) && Math.floor(elapsedMs / 4000) % 2 === 1

  const goPrev = () => {
    if (poseIndex === 0) {
      timer.start(pose.durationSec * 1000)
      return
    }
    setPoseIndex((i) => i - 1)
  }

  const goNext = () => {
    if (poseIndex >= routine.poses.length - 1) {
      setDone(true)
      timer.reset()
      return
    }
    if (chimeOn.current) void playChime()
    setPoseIndex((i) => i + 1)
  }

  return (
    <main className="flex flex-1 flex-col py-4">
      <div className="flex items-center justify-between">
        <BackLink
          onClick={() => {
            timer.reset()
            navigate(`/stretch/${routine.id}`)
          }}
          label="End"
        />
        <span className="text-sm text-ink-muted">
          {poseIndex + 1} / {routine.poses.length}
        </span>
      </div>

      <ProgressBar value={overall} className="mt-4" />

      <div
        className="animate-fade-up flex flex-1 flex-col items-center justify-center text-center"
        key={pose.id}
      >
        <PoseIllustration
          imageKey={pose.imageKey}
          alternateKey={pose.alternateKey}
          alternate={alternate}
          side={pose.side}
          name={pose.name}
          className="mb-2"
        />
        <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">
          {pose.side && pose.side !== 'both' ? pose.side : 'hold'}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {pose.name}
        </h1>
        {pose.cue ? (
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted sm:text-base">
            {pose.cue}
          </p>
        ) : null}
        <p className="mt-6 font-display text-5xl font-medium tabular-nums tracking-tight text-amber-bright sm:text-6xl">
          {formatClock(timer.remainingMs)}
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 safe-pb">
        <Button
          variant="control"
          aria-label="Previous pose"
          onClick={goPrev}
          className="h-14 w-14 rounded-full p-0 text-xl"
        >
          ‹
        </Button>
        <Button
          variant="primary"
          className="h-16 min-w-28 rounded-full px-8 text-lg"
          onClick={() => (timer.status === 'running' ? timer.pause() : timer.resume())}
        >
          {timer.status === 'running' ? 'Pause' : 'Resume'}
        </Button>
        <Button
          variant="control"
          aria-label="Next pose"
          onClick={goNext}
          className="h-14 w-14 rounded-full p-0 text-xl"
        >
          ›
        </Button>
      </div>
    </main>
  )
}
