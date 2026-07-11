const STORAGE_KEY = 'ease-prefs-v1'

export type Prefs = {
  meditationDurationMin: number
  soundId: 'silence' | 'rain' | 'ocean' | 'drone'
  stretchChime: boolean
}

const defaults: Prefs = {
  meditationDurationMin: 10,
  soundId: 'rain',
  stretchChime: true,
}

export function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaults }
    return { ...defaults, ...JSON.parse(raw) }
  } catch {
    return { ...defaults }
  }
}

export function savePrefs(partial: Partial<Prefs>): Prefs {
  const next = { ...loadPrefs(), ...partial }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // ignore quota / private mode
  }
  return next
}
