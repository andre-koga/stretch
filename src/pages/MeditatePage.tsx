import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Button } from '../components/Button'
import { playAmbient, type AmbientHandle } from '../features/audio/ambient'
import { formatClock, useSessionTimer } from '../features/timer/useSessionTimer'
import { useWakeLock } from '../features/timer/useWakeLock'
import { meditationDurations, sounds, type SoundId } from '../data/sounds'
import { loadPrefs, savePrefs } from '../lib/storage'

export function MeditatePage() {
  const prefs = loadPrefs()
  const [durationMin, setDurationMin] = useState(prefs.meditationDurationMin)
  const [soundId, setSoundId] = useState<SoundId>(prefs.soundId)
  const [phase, setPhase] = useState<'setup' | 'active' | 'done'>('setup')
  const ambientRef = useRef<AmbientHandle | null>(null)

  const stopAmbient = (fade = 700) => {
    ambientRef.current?.stop(fade)
    ambientRef.current = null
  }

  const onComplete = () => {
    stopAmbient(1200)
    setPhase('done')
  }

  const timer = useSessionTimer({ onComplete })
  useWakeLock(phase === 'active' && timer.status === 'running')

  useEffect(() => () => stopAmbient(0), [])

  const start = async () => {
    savePrefs({ meditationDurationMin: durationMin, soundId })
    stopAmbient(0)
    ambientRef.current = await playAmbient(soundId)
    setPhase('active')
    timer.start(durationMin * 60 * 1000)
  }

  const endSession = () => {
    timer.reset()
    stopAmbient()
    setPhase('setup')
  }

  if (phase === 'done') {
    return (
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="animate-fade-up">
          <p className="font-display text-4xl font-semibold">At ease</p>
          <p className="mt-3 text-ink-muted">Your sit is complete.</p>
          <div className="mt-10 flex flex-col gap-3">
            <Button onClick={() => setPhase('setup')}>Sit again</Button>
            <Link to="/" className="text-sm text-ink-muted hover:text-ink">
              Back home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  if (phase === 'active') {
    return (
      <main className="relative flex flex-1 flex-col py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/4 mx-auto h-64 w-64 -translate-y-8"
        >
          <div className="animate-breathe h-full w-full rounded-full bg-[radial-gradient(circle,rgba(90,122,110,0.45)_0%,rgba(26,46,40,0.1)_55%,transparent_70%)]" />
        </div>

        <BackLink onClick={endSession} label="End" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">meditate</p>
          <p className="mt-6 font-display text-7xl font-medium tabular-nums tracking-tight text-ink">
            {formatClock(timer.remainingMs)}
          </p>
          <p className="mt-4 text-ink-muted">
            {sounds.find((s) => s.id === soundId)?.label ?? 'Silence'}
          </p>
        </div>

        <div className="relative z-10 flex justify-center gap-3 safe-pb">
          <Button
            variant="primary"
            className="h-16 min-w-32 rounded-full text-lg"
            onClick={() => {
              if (timer.status === 'running') {
                timer.pause()
                stopAmbient(400)
              } else {
                void (async () => {
                  ambientRef.current = await playAmbient(soundId)
                  timer.resume()
                })()
              }
            }}
          >
            {timer.status === 'running' ? 'Pause' : 'Resume'}
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-1 flex-col py-4">
      <BackLink />
      <header className="animate-fade-up mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Meditate</h1>
        <p className="mt-2 text-ink-muted">A quiet timer and a soft soundscape.</p>
      </header>

      <section className="animate-fade-up mb-8">
        <h2 className="mb-3 text-sm uppercase tracking-[0.16em] text-ink-muted">Duration</h2>
        <div className="flex flex-wrap gap-2">
          {meditationDurations.map((min) => {
            const selected = durationMin === min
            return (
              <button
                key={min}
                type="button"
                onClick={() => setDurationMin(min)}
                className={`rounded-2xl px-4 py-3 text-base transition ${
                  selected
                    ? 'bg-amber text-moss-deep'
                    : 'border border-white/12 bg-white/6 text-ink hover:bg-white/10'
                }`}
              >
                {min} min
              </button>
            )
          })}
        </div>
      </section>

      <section className="animate-fade-up mb-10" style={{ animationDelay: '80ms' }}>
        <h2 className="mb-3 text-sm uppercase tracking-[0.16em] text-ink-muted">Sound</h2>
        <ul className="flex flex-col gap-1">
          {sounds.map((sound) => {
            const selected = soundId === sound.id
            return (
              <li key={sound.id}>
                <button
                  type="button"
                  onClick={() => setSoundId(sound.id)}
                  className={`flex w-full items-baseline justify-between rounded-2xl px-3 py-3.5 text-left transition ${
                    selected ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <span>
                    <span className="block font-medium text-ink">{sound.label}</span>
                    <span className="text-sm text-ink-muted">{sound.description}</span>
                  </span>
                  {selected ? <span className="text-amber">●</span> : null}
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <div className="mt-auto safe-pb">
        <Button className="w-full" onClick={() => void start()}>
          Begin
        </Button>
      </div>
    </main>
  )
}
