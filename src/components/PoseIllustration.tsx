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
  const dim = size === 'lg' ? 'h-52 w-52 sm:h-60 sm:w-60' : 'h-12 w-12'

  if (!key) {
    return (
      <div
        aria-hidden
        className={`flex shrink-0 items-center justify-center ${dim} ${className}`}
      >
        <div
          className={`rounded-full border border-white/15 ${
            size === 'lg' ? 'h-28 w-28' : 'h-9 w-9'
          }`}
        />
      </div>
    )
  }

  const mirror = shouldMirrorPose(side)

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full ${dim} ${className}`}>
      <img
        src={poseImageSrc(key)}
        alt={`${name} pose illustration`}
        draggable={false}
        className={`h-full w-full object-contain transition-transform duration-500 ${
          mirror ? '-scale-x-100' : ''
        }`}
      />
    </div>
  )
}
