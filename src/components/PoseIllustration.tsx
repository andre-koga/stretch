import type { PoseImageKey } from '../data/poseImages'
import { poseImageSrc, shouldMirrorPose } from '../data/poseImages'

type Props = {
  imageKey?: PoseImageKey
  /** For Cat–Cow, pass a second key to alternate visuals. */
  alternateKey?: PoseImageKey
  alternate?: boolean
  side?: 'left' | 'right' | 'both'
  name: string
  size?: 'sm' | 'lg'
  className?: string
}

export function PoseIllustration({
  imageKey,
  alternateKey,
  alternate = false,
  side,
  name,
  size = 'lg',
  className = '',
}: Props) {
  const key = alternate && alternateKey ? alternateKey : imageKey
  if (!key) {
    return (
      <div
        aria-hidden
        className={`flex items-center justify-center ${size === 'lg' ? 'h-52 w-52' : 'h-12 w-12'} ${className}`}
      >
        <div
          className={`animate-soft-pulse rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.28)_0%,transparent_70%)] ${
            size === 'lg' ? 'h-24 w-24' : 'h-8 w-8'
          }`}
        />
      </div>
    )
  }

  const mirror = shouldMirrorPose(side)
  const dim = size === 'lg' ? 'h-52 w-52 sm:h-60 sm:w-60' : 'h-12 w-12'

  return (
    <div className={`relative ${dim} ${className}`}>
      <img
        src={poseImageSrc(key)}
        alt={`${name} pose illustration`}
        draggable={false}
        className={`h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-500 ${
          mirror ? '-scale-x-100' : ''
        }`}
      />
    </div>
  )
}
