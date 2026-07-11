import { useEffect } from 'react'

export function useWakeLock(active: boolean) {
  useEffect(() => {
    if (!active || !('wakeLock' in navigator)) return

    let released = false
    let lock: WakeLockSentinel | null = null

    const request = async () => {
      try {
        lock = await navigator.wakeLock.request('screen')
        lock.addEventListener('release', () => {
          lock = null
        })
      } catch {
        // unsupported / denied
      }
    }

    void request()

    const onVisibility = () => {
      if (document.visibilityState === 'visible' && !released) {
        void request()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      released = true
      document.removeEventListener('visibilitychange', onVisibility)
      void lock?.release()
    }
  }, [active])
}
