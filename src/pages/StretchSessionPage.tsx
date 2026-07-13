import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Button } from '../components/Button'
import { PoseIllustration } from '../components/PoseIllustration'
import { ProgressBar } from '../components/ProgressBar'
import { playChime } from '../features/audio/ambient'
import { formatClock, useSessionTimer } from '../features/timer/useSessionTimer'
import { useWakeLock } from '../features/timer/useWakeLock'
import { findVariation } from '../data/routines'
import { loadPrefs } from '../lib/storage'

const TRANSITION_MS = 5000

type Phase = 'ready' | 'hold' | 'transition'

export function StretchSessionPage() {
  const { themeId, variationId } = useParams()
  const navigate = useNavigate()
  const match =
    themeId && variationId ? findVariation(themeId, variationId) : undefined
  const theme = match?.theme
  const routine = match?.variation
  const sessionTitle = theme && routine ? `${theme.title} · ${routine.label}` : ''
  const themePath = theme ? `/stretch/${theme.id}` : '/stretch'
  const [poseIndex, setPoseIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('ready')
  const [done, setDone] = useState(false)
  const [sessionKey, setSessionKey] = useState(0)
  const chimeOn = useRef(loadPrefs().stretchChime)
  const advancingRef = useRef(false)
  const phaseRef = useRef<Phase>('ready')
  const poseIndexRef = useRef(0)

  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  useEffect(() => {
    poseIndexRef.current = poseIndex
  }, [poseIndex])

  const onTimerComplete = useCallback(() => {
    if (!routine || advancingRef.current) return
    advancingRef.current = true

    if (phaseRef.current === 'ready') {
      setPhase('hold')
      phaseRef.current = 'hold'
      window.setTimeout(() => {
        advancingRef.current = false
      }, 50)
      return
    }

    if (phaseRef.current === 'transition') {
      setPoseIndex((i) => i + 1)
      setPhase('hold')
      phaseRef.current = 'hold'
      window.setTimeout(() => {
        advancingRef.current = false
      }, 50)
      return
    }

    // Hold finished
    if (chimeOn.current) void playChime()
    const i = poseIndexRef.current
    if (i >= routine.poses.length - 1) {
      setDone(true)
      window.setTimeout(() => {
        advancingRef.current = false
      }, 50)
      return
    }

    setPhase('transition')
    phaseRef.current = 'transition'
    window.setTimeout(() => {
      advancingRef.current = false
    }, 50)
  }, [routine])

  const timer = useSessionTimer({ onComplete: onTimerComplete })
  useWakeLock(
    (timer.status === 'running' || phase === 'ready' || phase === 'transition') &&
      !done,
  )

  const pose = routine?.poses[poseIndex]
  const nextPose =
    routine && poseIndex < routine.poses.length - 1
      ? routine.poses[poseIndex + 1]
      : undefined

  useEffect(() => {
    if (!routine || !pose || done) return
    if (phase === 'hold') {
      timer.start(pose.durationSec * 1000)
    } else {
      timer.start(TRANSITION_MS)
    }
    // restart timer whenever pose, phase, or session resets
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poseIndex, routine?.id, done, sessionKey, phase])

  if (!theme || !routine || !pose) {
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
          <p className="mt-3 text-ink-muted">{sessionTitle} — well done.</p>
          <div className="mt-10 flex flex-col gap-3">
            <Button
              onClick={() => {
                setDone(false)
                setPoseIndex(0)
                setPhase('ready')
                phaseRef.current = 'ready'
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

  const isPrep = phase === 'ready' || phase === 'transition'
  const holdProgress =
    phase === 'hold'
      ? 1 - timer.remainingMs / Math.max(timer.durationMs, 1)
      : phase === 'ready'
        ? 0
        : 1
  const overall = (poseIndex + holdProgress) / routine.poses.length

  const elapsedMs = Math.max(0, timer.durationMs - timer.remainingMs)
  const alternate =
    phase === 'hold' &&
    Boolean(pose.alternateKey) &&
    Math.floor(elapsedMs / 4000) % 2 === 1

  const startHoldAt = (index: number) => {
    setPoseIndex(index)
    setPhase('hold')
    phaseRef.current = 'hold'
  }

  const startReadyAt = (index: number) => {
    setPoseIndex(index)
    setPhase('ready')
    phaseRef.current = 'ready'
  }

  const goPrev = () => {
    if (phase === 'ready') {
      // Restart the headstart countdown
      timer.start(TRANSITION_MS)
      return
    }
    if (phase === 'transition') {
      startHoldAt(poseIndex)
      return
    }
    if (poseIndex === 0) {
      startReadyAt(0)
      return
    }
    startHoldAt(poseIndex - 1)
  }

  const goNext = () => {
    if (phase === 'ready') {
      startHoldAt(poseIndex)
      return
    }
    if (phase === 'transition') {
      if (!nextPose) return
      startHoldAt(poseIndex + 1)
      return
    }
    if (poseIndex >= routine.poses.length - 1) {
      setDone(true)
      timer.reset()
      return
    }
    if (chimeOn.current) void playChime()
    setPhase('transition')
    phaseRef.current = 'transition'
  }

  const showing = phase === 'transition' && nextPose ? nextPose : pose

  return (
    <main className="flex flex-1 flex-col py-4">
      <div className="flex items-center justify-between">
        <BackLink
          onClick={() => {
            timer.reset()
            navigate(themePath)
          }}
          label="End"
        />
        <span className="text-sm text-ink-muted">
          {phase === 'transition'
            ? `Next · ${poseIndex + 2} / ${routine.poses.length}`
            : `${poseIndex + 1} / ${routine.poses.length}`}
        </span>
      </div>

      <ProgressBar value={overall} className="mt-4" />

      <div
        className="animate-fade-up flex flex-1 flex-col items-center justify-center text-center"
        key={
          phase === 'ready'
            ? `ready-${pose.id}`
            : phase === 'transition'
              ? `switch-${pose.id}`
              : pose.id
        }
      >
        <PoseIllustration
          imageKey={showing.imageKey}
          alternateKey={phase === 'hold' ? showing.alternateKey : undefined}
          alternate={alternate}
          side={showing.side}
          name={showing.name}
          className={`mb-2 ${isPrep ? 'opacity-90' : ''}`}
        />
        <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">
          {isPrep
            ? 'get ready'
            : showing.side && showing.side !== 'both'
              ? showing.side
              : 'hold'}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {showing.name}
        </h1>
        {isPrep ? (
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted sm:text-base">
            {phase === 'ready'
              ? 'First pose coming up — get into position.'
              : 'Take a moment to switch into the next pose.'}
          </p>
        ) : pose.cue ? (
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
          onClick={() => {
            if (phase === 'ready') {
              startHoldAt(poseIndex)
              return
            }
            if (phase === 'transition') {
              if (nextPose) startHoldAt(poseIndex + 1)
              return
            }
            if (timer.status === 'running') timer.pause()
            else timer.resume()
          }}
        >
          {isPrep ? 'Skip' : timer.status === 'running' ? 'Pause' : 'Resume'}
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
