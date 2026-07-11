export type PoseImageKey =
  | 'childs-pose'
  | 'cat'
  | 'cow'
  | 'downward-dog'
  | 'low-lunge'
  | 'standing-forward-fold'
  | 'warrior-i'
  | 'warrior-ii'
  | 'pigeon'
  | 'butterfly'
  | 'savasana'
  | 'seated-forward-fold'
  | 'crescent-lunge'
  | 'seated-twist'
  | 'upward-dog'
  | 'bridge'
  | 'sphinx'
  | 'plank'
  | 'tree'

const poseFiles: Record<PoseImageKey, string> = {
  'childs-pose': '/poses/childs-pose.png',
  cat: '/poses/cat.png',
  cow: '/poses/cow.png',
  'downward-dog': '/poses/downward-dog.png',
  'low-lunge': '/poses/low-lunge.png',
  'standing-forward-fold': '/poses/standing-forward-fold.png',
  'warrior-i': '/poses/warrior-i.png',
  'warrior-ii': '/poses/warrior-ii.png',
  pigeon: '/poses/pigeon.png',
  butterfly: '/poses/butterfly.png',
  savasana: '/poses/savasana.png',
  'seated-forward-fold': '/poses/seated-forward-fold.png',
  'crescent-lunge': '/poses/crescent-lunge.png',
  'seated-twist': '/poses/seated-twist.png',
  'upward-dog': '/poses/upward-dog.png',
  bridge: '/poses/bridge.png',
  sphinx: '/poses/sphinx.png',
  plank: '/poses/plank.png',
  tree: '/poses/tree.png',
}

/** Source illustrations face with the working leg toward the viewer's right. */
const DEFAULT_FACING: 'left' | 'right' = 'right'

export function poseImageSrc(key: PoseImageKey): string {
  return poseFiles[key]
}

export function shouldMirrorPose(
  side: 'left' | 'right' | 'both' | undefined,
): boolean {
  if (!side || side === 'both') return false
  return side !== DEFAULT_FACING
}
