export type SoundId = 'silence' | 'rain' | 'ocean' | 'drone'

export type SoundOption = {
  id: SoundId
  label: string
  description: string
}

export const sounds: SoundOption[] = [
  { id: 'silence', label: 'Silence', description: 'Quiet space' },
  { id: 'rain', label: 'Rain', description: 'Soft rainfall' },
  { id: 'ocean', label: 'Ocean', description: 'Distant waves' },
  { id: 'drone', label: 'Soft drone', description: 'Warm low tone' },
]

export const meditationDurations = [5, 10, 15, 20] as const
