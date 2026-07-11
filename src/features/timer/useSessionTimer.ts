import { useCallback, useEffect, useRef, useState } from 'react'

export type TimerStatus = 'idle' | 'running' | 'paused' | 'completed'

type Options = {
  onComplete?: () => void
  onTick?: (remainingMs: number) => void
}

export function useSessionTimer(options: Options = {}) {
  const [status, setStatus] = useState<TimerStatus>('idle')
  const [remainingMs, setRemainingMs] = useState(0)
  const [durationMs, setDurationMs] = useState(0)

  const endAtRef = useRef<number | null>(null)
  const remainingWhenPausedRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const onCompleteRef = useRef(options.onComplete)
  const onTickRef = useRef(options.onTick)

  useEffect(() => {
    onCompleteRef.current = options.onComplete
    onTickRef.current = options.onTick
  }, [options.onComplete, options.onTick])

  const clearRaf = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  const tick = useCallback(() => {
    if (endAtRef.current == null) return
    const left = Math.max(0, endAtRef.current - Date.now())
    setRemainingMs(left)
    onTickRef.current?.(left)
    if (left <= 0) {
      clearRaf()
      endAtRef.current = null
      setStatus('completed')
      onCompleteRef.current?.()
      return
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [clearRaf])

  const start = useCallback(
    (ms: number) => {
      clearRaf()
      const duration = Math.max(0, ms)
      setDurationMs(duration)
      setRemainingMs(duration)
      remainingWhenPausedRef.current = duration
      if (duration === 0) {
        setStatus('completed')
        onCompleteRef.current?.()
        return
      }
      endAtRef.current = Date.now() + duration
      setStatus('running')
      rafRef.current = requestAnimationFrame(tick)
    },
    [clearRaf, tick],
  )

  const pause = useCallback(() => {
    if (status !== 'running' || endAtRef.current == null) return
    const left = Math.max(0, endAtRef.current - Date.now())
    remainingWhenPausedRef.current = left
    setRemainingMs(left)
    endAtRef.current = null
    clearRaf()
    setStatus('paused')
  }, [status, clearRaf])

  const resume = useCallback(() => {
    if (status !== 'paused') return
    const left = remainingWhenPausedRef.current
    if (left <= 0) {
      setStatus('completed')
      onCompleteRef.current?.()
      return
    }
    endAtRef.current = Date.now() + left
    setStatus('running')
    rafRef.current = requestAnimationFrame(tick)
  }, [status, tick])

  const reset = useCallback(() => {
    clearRaf()
    endAtRef.current = null
    remainingWhenPausedRef.current = 0
    setRemainingMs(0)
    setDurationMs(0)
    setStatus('idle')
  }, [clearRaf])

  useEffect(() => () => clearRaf(), [clearRaf])

  return {
    status,
    remainingMs,
    durationMs,
    start,
    pause,
    resume,
    reset,
  }
}

export function formatClock(ms: number): string {
  const totalSec = Math.ceil(ms / 1000)
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
