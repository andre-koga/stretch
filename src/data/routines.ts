import type { PoseImageKey } from './poseImages'

export type Pose = {
  id: string
  name: string
  durationSec: number
  cue?: string
  side?: 'left' | 'right' | 'both'
  imageKey?: PoseImageKey
  /** Used for Cat–Cow to swap illustrations while holding. */
  alternateKey?: PoseImageKey
}

export type Variation = {
  id: string
  label: string
  description: string
  poses: Pose[]
}

export type Theme = {
  id: string
  title: string
  description: string
  variations: Variation[]
}

export const themes: Theme[] = [
  {
    id: 'morning',
    title: 'Morning Wake-up',
    description: 'Open the body gently and greet the day.',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Gentle full-body openers to start the day.',
        poses: [
          { id: 'm1-1', name: 'Child’s Pose', durationSec: 45, cue: 'Hips to heels, arms long, forehead soft.', imageKey: 'childs-pose' },
          { id: 'm1-2', name: 'Cat–Cow', durationSec: 60, cue: 'Move with the breath — arch and round slowly.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'm1-3', name: 'Downward Dog', durationSec: 45, cue: 'Press the floor away, bend knees if you need.', imageKey: 'downward-dog' },
          { id: 'm1-4', name: 'Low Lunge', durationSec: 40, side: 'left', cue: 'Left foot forward, hips sink gently.', imageKey: 'low-lunge' },
          { id: 'm1-5', name: 'Low Lunge', durationSec: 40, side: 'right', cue: 'Right foot forward, lengthen the back leg.', imageKey: 'low-lunge' },
          { id: 'm1-6', name: 'Standing Forward Fold', durationSec: 45, cue: 'Soft knees, let the head hang heavy.', imageKey: 'standing-forward-fold' },
          { id: 'm1-7', name: 'Mountain Pose', durationSec: 30, cue: 'Stand tall, feel both feet, easy breath.' },
        ],
      },
      {
        id: 'sun-flow',
        label: 'Sun Flow',
        description: 'A warmer standing sequence to wake the legs and breath.',
        poses: [
          { id: 'm2-1', name: 'Mountain Pose', durationSec: 30, cue: 'Root down, lengthen through the crown.' },
          { id: 'm2-2', name: 'Standing Forward Fold', durationSec: 35, cue: 'Fold with soft knees, shake out the neck.', imageKey: 'standing-forward-fold' },
          { id: 'm2-3', name: 'Downward Dog', durationSec: 40, cue: 'Pedal the feet, settle into the shape.', imageKey: 'downward-dog' },
          { id: 'm2-4', name: 'Low Lunge', durationSec: 35, side: 'left', cue: 'Step left foot forward, lift the chest.', imageKey: 'low-lunge' },
          { id: 'm2-5', name: 'Warrior I', durationSec: 40, side: 'left', cue: 'Arms reach up, hips square forward.', imageKey: 'warrior-i' },
          { id: 'm2-6', name: 'Low Lunge', durationSec: 35, side: 'right', cue: 'Step right foot forward.', imageKey: 'low-lunge' },
          { id: 'm2-7', name: 'Warrior I', durationSec: 40, side: 'right', cue: 'Strong legs, soft face.', imageKey: 'warrior-i' },
          { id: 'm2-8', name: 'Downward Dog', durationSec: 40, cue: 'Return to the V-shape and breathe.', imageKey: 'downward-dog' },
          { id: 'm2-9', name: 'Mountain Pose', durationSec: 30, cue: 'Stand tall — day begun.' },
        ],
      },
      {
        id: 'soft-start',
        label: 'Soft Start',
        description: 'Extra-gentle floor work for slower mornings.',
        poses: [
          { id: 'm3-1', name: 'Child’s Pose', durationSec: 50, cue: 'Take your time arriving here.', imageKey: 'childs-pose' },
          { id: 'm3-2', name: 'Cat–Cow', durationSec: 50, cue: 'Slow waves through the spine.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'm3-3', name: 'Sphinx', durationSec: 40, cue: 'Forearms down, heart soft forward.', imageKey: 'sphinx' },
          { id: 'm3-4', name: 'Seated Forward Fold', durationSec: 45, cue: 'Hinge gently, no forcing.', imageKey: 'seated-forward-fold' },
          { id: 'm3-5', name: 'Butterfly', durationSec: 45, cue: 'Soles together, easy breath.', imageKey: 'butterfly' },
          { id: 'm3-6', name: 'Savasana', durationSec: 45, cue: 'Rest a moment before standing.', imageKey: 'savasana' },
        ],
      },
    ],
  },
  {
    id: 'desk',
    title: 'Desk Relief',
    description: 'Undo screen posture without leaving your day.',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Neck, shoulders, twist, and fold — under ten minutes.',
        poses: [
          { id: 'd1-1', name: 'Neck Rolls', durationSec: 40, cue: 'Slow circles — only as far as feels kind.' },
          { id: 'd1-2', name: 'Shoulder Rolls', durationSec: 40, cue: 'Lift, open, and drop the shoulders.' },
          { id: 'd1-3', name: 'Seated Twist', durationSec: 35, side: 'left', cue: 'Sit tall, twist gently to the left.', imageKey: 'seated-twist' },
          { id: 'd1-4', name: 'Seated Twist', durationSec: 35, side: 'right', cue: 'Sit tall, twist gently to the right.', imageKey: 'seated-twist' },
          { id: 'd1-5', name: 'Chest Opener', durationSec: 45, cue: 'Clasp hands behind you, lift the heart.' },
          { id: 'd1-6', name: 'Wrist Stretch', durationSec: 40, cue: 'Flex and extend both wrists slowly.' },
          { id: 'd1-7', name: 'Seated Forward Fold', durationSec: 50, cue: 'Hinge from the hips, soft spine.', imageKey: 'seated-forward-fold' },
        ],
      },
      {
        id: 'neck-shoulders',
        label: 'Neck & Shoulders',
        description: 'Focused relief for upper-body tension.',
        poses: [
          { id: 'd2-1', name: 'Neck Rolls', durationSec: 45, cue: 'Move slowly; pause where it’s tight.' },
          { id: 'd2-2', name: 'Shoulder Rolls', durationSec: 45, cue: 'Big circles, then reverse.' },
          { id: 'd2-3', name: 'Chest Opener', durationSec: 50, cue: 'Open the front body, soften the jaw.' },
          { id: 'd2-4', name: 'Seated Twist', durationSec: 40, side: 'left', cue: 'Lengthen up, then twist.', imageKey: 'seated-twist' },
          { id: 'd2-5', name: 'Seated Twist', durationSec: 40, side: 'right', cue: 'Same care on the other side.', imageKey: 'seated-twist' },
          { id: 'd2-6', name: 'Child’s Pose', durationSec: 45, cue: 'Forehead down if you can — reset.', imageKey: 'childs-pose' },
        ],
      },
      {
        id: 'quick-reset',
        label: 'Quick Reset',
        description: 'A short break you can do between meetings.',
        poses: [
          { id: 'd3-1', name: 'Shoulder Rolls', durationSec: 30, cue: 'Three slow rolls each way.' },
          { id: 'd3-2', name: 'Neck Rolls', durationSec: 30, cue: 'Keep it small and kind.' },
          { id: 'd3-3', name: 'Chest Opener', durationSec: 35, cue: 'Inhale open, exhale soft.' },
          { id: 'd3-4', name: 'Seated Forward Fold', durationSec: 40, cue: 'Hang for a few breaths.', imageKey: 'seated-forward-fold' },
          { id: 'd3-5', name: 'Mountain Pose', durationSec: 25, cue: 'Sit or stand tall — done.' },
        ],
      },
    ],
  },
  {
    id: 'hips',
    title: 'Hip Openers',
    description: 'Make space in the hips and lower back.',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Figure four, pigeon, butterfly, and happy baby.',
        poses: [
          { id: 'h1-1', name: 'Figure Four', durationSec: 50, side: 'left', cue: 'Ankle over knee, ease the hips back.' },
          { id: 'h1-2', name: 'Figure Four', durationSec: 50, side: 'right', cue: 'Switch sides, keep the breath steady.' },
          { id: 'h1-3', name: 'Pigeon Pose', durationSec: 55, side: 'left', cue: 'Square the hips, fold forward if ready.', imageKey: 'pigeon' },
          { id: 'h1-4', name: 'Pigeon Pose', durationSec: 55, side: 'right', cue: 'Other side — no forcing the stretch.', imageKey: 'pigeon' },
          { id: 'h1-5', name: 'Butterfly', durationSec: 50, cue: 'Soles together, let the knees fall open.', imageKey: 'butterfly' },
          { id: 'h1-6', name: 'Happy Baby', durationSec: 45, cue: 'Hold the feet, rock gently side to side.' },
        ],
      },
      {
        id: 'deep-release',
        label: 'Deep Release',
        description: 'Longer holds for a deeper hip unwind.',
        poses: [
          { id: 'h2-1', name: 'Butterfly', durationSec: 60, cue: 'Stay soft through the inner thighs.', imageKey: 'butterfly' },
          { id: 'h2-2', name: 'Pigeon Pose', durationSec: 70, side: 'left', cue: 'Breathe into the outer hip.', imageKey: 'pigeon' },
          { id: 'h2-3', name: 'Pigeon Pose', durationSec: 70, side: 'right', cue: 'Same patience on this side.', imageKey: 'pigeon' },
          { id: 'h2-4', name: 'Low Lunge', durationSec: 50, side: 'left', cue: 'Sink the hips, back knee can rest.', imageKey: 'low-lunge' },
          { id: 'h2-5', name: 'Low Lunge', durationSec: 50, side: 'right', cue: 'Keep the pelvis heavy.', imageKey: 'low-lunge' },
          { id: 'h2-6', name: 'Happy Baby', durationSec: 55, cue: 'Rock side to side if it helps.' },
          { id: 'h2-7', name: 'Savasana', durationSec: 60, cue: 'Let the hips melt.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'gentle',
        label: 'Gentle',
        description: 'Softer options when hips feel cranky.',
        poses: [
          { id: 'h3-1', name: 'Butterfly', durationSec: 45, cue: 'Sit on a cushion if you like.', imageKey: 'butterfly' },
          { id: 'h3-2', name: 'Figure Four', durationSec: 45, side: 'left', cue: 'Keep it light — no yanking.' },
          { id: 'h3-3', name: 'Figure Four', durationSec: 45, side: 'right', cue: 'Same ease on the other side.' },
          { id: 'h3-4', name: 'Child’s Pose', durationSec: 50, cue: 'Knees wide if hips prefer it.', imageKey: 'childs-pose' },
          { id: 'h3-5', name: 'Happy Baby', durationSec: 40, cue: 'Hold behind the thighs if needed.' },
        ],
      },
    ],
  },
  {
    id: 'full',
    title: 'Full Body',
    description: 'Balanced sequences from head to toe.',
    variations: [
      {
        id: 'classic',
        label: 'Classic Flow',
        description: 'Standing shapes, warriors, and a soft landing.',
        poses: [
          { id: 'f1-1', name: 'Mountain Pose', durationSec: 30, cue: 'Root down, lengthen up through the crown.' },
          { id: 'f1-2', name: 'Standing Forward Fold', durationSec: 40, cue: 'Fold with soft knees, shake the head yes and no.', imageKey: 'standing-forward-fold' },
          { id: 'f1-3', name: 'Downward Dog', durationSec: 45, cue: 'Pedal the feet, settle into the shape.', imageKey: 'downward-dog' },
          { id: 'f1-4', name: 'Warrior I', durationSec: 40, side: 'left', cue: 'Left foot forward, arms reach up.', imageKey: 'warrior-i' },
          { id: 'f1-5', name: 'Warrior II', durationSec: 40, side: 'left', cue: 'Open the hips, gaze over the front hand.', imageKey: 'warrior-ii' },
          { id: 'f1-6', name: 'Warrior I', durationSec: 40, side: 'right', cue: 'Right foot forward, strong legs.', imageKey: 'warrior-i' },
          { id: 'f1-7', name: 'Warrior II', durationSec: 40, side: 'right', cue: 'Wide stance, long arms, easy face.', imageKey: 'warrior-ii' },
          { id: 'f1-8', name: 'Wide-Leg Forward Fold', durationSec: 45, cue: 'Hands to the floor or shins, hang heavy.', imageKey: 'standing-forward-fold' },
          { id: 'f1-9', name: 'Child’s Pose', durationSec: 50, cue: 'Rest here. Soften the jaw and belly.', imageKey: 'childs-pose' },
        ],
      },
      {
        id: 'strength',
        label: 'Strength & Stretch',
        description: 'A little more fire with planks and warriors.',
        poses: [
          { id: 'f2-1', name: 'Mountain Pose', durationSec: 25, cue: 'Find your stance.' },
          { id: 'f2-2', name: 'Downward Dog', durationSec: 40, cue: 'Strong arms, soft knees ok.', imageKey: 'downward-dog' },
          { id: 'f2-3', name: 'Plank', durationSec: 35, cue: 'Long line from head to heels.', imageKey: 'plank' },
          { id: 'f2-4', name: 'Upward Dog', durationSec: 30, cue: 'Thighs lift, heart forward.', imageKey: 'upward-dog' },
          { id: 'f2-5', name: 'Downward Dog', durationSec: 35, cue: 'Push back and reset.', imageKey: 'downward-dog' },
          { id: 'f2-6', name: 'Warrior II', durationSec: 40, side: 'left', cue: 'Bend deep, arms strong.', imageKey: 'warrior-ii' },
          { id: 'f2-7', name: 'Warrior II', durationSec: 40, side: 'right', cue: 'Same effort, soft breath.', imageKey: 'warrior-ii' },
          { id: 'f2-8', name: 'Standing Forward Fold', durationSec: 40, cue: 'Release the effort.', imageKey: 'standing-forward-fold' },
          { id: 'f2-9', name: 'Child’s Pose', durationSec: 45, cue: 'Recover here.', imageKey: 'childs-pose' },
        ],
      },
      {
        id: 'express',
        label: 'Express',
        description: 'A shorter full-body pass when time is tight.',
        poses: [
          { id: 'f3-1', name: 'Cat–Cow', durationSec: 40, cue: 'Wake the spine.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'f3-2', name: 'Downward Dog', durationSec: 40, cue: 'Stretch long.', imageKey: 'downward-dog' },
          { id: 'f3-3', name: 'Low Lunge', durationSec: 30, side: 'left', cue: 'Quick open on the left.', imageKey: 'low-lunge' },
          { id: 'f3-4', name: 'Low Lunge', durationSec: 30, side: 'right', cue: 'Then the right.', imageKey: 'low-lunge' },
          { id: 'f3-5', name: 'Standing Forward Fold', durationSec: 35, cue: 'Hang and shake.', imageKey: 'standing-forward-fold' },
          { id: 'f3-6', name: 'Mountain Pose', durationSec: 25, cue: 'Stand tall — finished.' },
        ],
      },
    ],
  },
  {
    id: 'evening',
    title: 'Wind-down',
    description: 'Slow stretches to settle before sleep.',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Twists, knees to chest, legs up, savasana.',
        poses: [
          { id: 'e1-1', name: 'Seated Forward Fold', durationSec: 50, cue: 'Breathe into the backs of the legs.', imageKey: 'seated-forward-fold' },
          { id: 'e1-2', name: 'Supine Twist', durationSec: 45, side: 'left', cue: 'Knees left, arms open, gaze optional right.' },
          { id: 'e1-3', name: 'Supine Twist', durationSec: 45, side: 'right', cue: 'Knees right — keep both shoulders soft.' },
          { id: 'e1-4', name: 'Knees to Chest', durationSec: 40, cue: 'Hug the knees, rock if it feels good.' },
          { id: 'e1-5', name: 'Legs Up the Wall', durationSec: 90, cue: 'Hips close to the wall, arms rest by your sides.' },
          { id: 'e1-6', name: 'Savasana', durationSec: 90, cue: 'Lie still. Nothing to do but breathe.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'restore',
        label: 'Restore',
        description: 'Longer restorative holds to fully downshift.',
        poses: [
          { id: 'e2-1', name: 'Child’s Pose', durationSec: 60, cue: 'Forehead soft, jaw soft.', imageKey: 'childs-pose' },
          { id: 'e2-2', name: 'Seated Forward Fold', durationSec: 60, cue: 'No agenda — just fold.', imageKey: 'seated-forward-fold' },
          { id: 'e2-3', name: 'Butterfly', durationSec: 55, cue: 'Let gravity do the work.', imageKey: 'butterfly' },
          { id: 'e2-4', name: 'Supine Twist', durationSec: 50, side: 'left', cue: 'Heavy legs, easy breath.' },
          { id: 'e2-5', name: 'Supine Twist', durationSec: 50, side: 'right', cue: 'Other side, same softness.' },
          { id: 'e2-6', name: 'Legs Up the Wall', durationSec: 100, cue: 'Close the eyes if you like.' },
          { id: 'e2-7', name: 'Savasana', durationSec: 120, cue: 'Stay as long as you need.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'bedtime',
        label: 'Bedtime',
        description: 'Short and sleepy — right before lights out.',
        poses: [
          { id: 'e3-1', name: 'Knees to Chest', durationSec: 40, cue: 'Hug in, rock a little.' },
          { id: 'e3-2', name: 'Supine Twist', durationSec: 40, side: 'left', cue: 'Gentle twist left.' },
          { id: 'e3-3', name: 'Supine Twist', durationSec: 40, side: 'right', cue: 'Gentle twist right.' },
          { id: 'e3-4', name: 'Happy Baby', durationSec: 40, cue: 'Soft hips, soft face.' },
          { id: 'e3-5', name: 'Savasana', durationSec: 75, cue: 'Drift toward sleep.', imageKey: 'savasana' },
        ],
      },
    ],
  },
  {
    id: 'back',
    title: 'Back Care',
    description: 'Mobilize and soothe the spine.',
    variations: [
      {
        id: 'mobility',
        label: 'Mobility',
        description: 'Cat-cow, twists, and gentle extension.',
        poses: [
          { id: 'b1-1', name: 'Cat–Cow', durationSec: 60, cue: 'Find the full wave of the spine.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'b1-2', name: 'Child’s Pose', durationSec: 40, cue: 'Round and rest.', imageKey: 'childs-pose' },
          { id: 'b1-3', name: 'Sphinx', durationSec: 40, cue: 'Low backbend, elbows under shoulders.', imageKey: 'sphinx' },
          { id: 'b1-4', name: 'Seated Twist', durationSec: 40, side: 'left', cue: 'Lengthen first, then twist.', imageKey: 'seated-twist' },
          { id: 'b1-5', name: 'Seated Twist', durationSec: 40, side: 'right', cue: 'Keep both sit bones grounded.', imageKey: 'seated-twist' },
          { id: 'b1-6', name: 'Downward Dog', durationSec: 40, cue: 'Long spine, soft knees.', imageKey: 'downward-dog' },
          { id: 'b1-7', name: 'Child’s Pose', durationSec: 45, cue: 'Close with a curve.', imageKey: 'childs-pose' },
        ],
      },
      {
        id: 'soothe',
        label: 'Soothe',
        description: 'Quieter shapes when the back feels tender.',
        poses: [
          { id: 'b2-1', name: 'Knees to Chest', durationSec: 45, cue: 'Massage the low back with small rocks.' },
          { id: 'b2-2', name: 'Supine Twist', durationSec: 45, side: 'left', cue: 'Keep it gentle — less is more.' },
          { id: 'b2-3', name: 'Supine Twist', durationSec: 45, side: 'right', cue: 'Other side, same care.' },
          { id: 'b2-4', name: 'Cat–Cow', durationSec: 45, cue: 'Small ranges only.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'b2-5', name: 'Child’s Pose', durationSec: 50, cue: 'Support the head with hands if needed.', imageKey: 'childs-pose' },
          { id: 'b2-6', name: 'Savasana', durationSec: 60, cue: 'Rest flat and easy.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'awaken',
        label: 'Awaken',
        description: 'A bit more extension and standing length.',
        poses: [
          { id: 'b3-1', name: 'Cat–Cow', durationSec: 45, cue: 'Warm the spine.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'b3-2', name: 'Sphinx', durationSec: 35, cue: 'Lift through the chest.', imageKey: 'sphinx' },
          { id: 'b3-3', name: 'Upward Dog', durationSec: 30, cue: 'Thighs active if it feels good.', imageKey: 'upward-dog' },
          { id: 'b3-4', name: 'Downward Dog', durationSec: 40, cue: 'Counter with a long stretch.', imageKey: 'downward-dog' },
          { id: 'b3-5', name: 'Standing Forward Fold', durationSec: 40, cue: 'Hang and decompress.', imageKey: 'standing-forward-fold' },
          { id: 'b3-6', name: 'Mountain Pose', durationSec: 30, cue: 'Stack the spine tall.' },
        ],
      },
    ],
  },
]

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id)
}

export function getVariation(
  themeId: string,
  variationId: string,
): Variation | undefined {
  return getTheme(themeId)?.variations.find((v) => v.id === variationId)
}

export function findVariation(
  themeId: string,
  variationId: string,
): { theme: Theme; variation: Variation } | undefined {
  const theme = getTheme(themeId)
  if (!theme) return undefined
  const variation = theme.variations.find((v) => v.id === variationId)
  if (!variation) return undefined
  return { theme, variation }
}

export function routineDurationSec(routine: { poses: Pose[] }): number {
  const holds = routine.poses.reduce((sum, pose) => sum + pose.durationSec, 0)
  const switches = Math.max(0, routine.poses.length - 1) * 5
  const headstart = routine.poses.length > 0 ? 5 : 0
  return holds + switches + headstart
}

export function themeDurationRange(theme: Theme): { min: number; max: number } {
  const durations = theme.variations.map(routineDurationSec)
  return { min: Math.min(...durations), max: Math.max(...durations) }
}

export function formatDuration(totalSec: number): string {
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  if (m === 0) return `${s}s`
  if (s === 0) return `${m} min`
  return `${m}m ${s}s`
}

export function formatDurationRange(minSec: number, maxSec: number): string {
  if (minSec === maxSec) return formatDuration(minSec)
  const minM = Math.max(1, Math.round(minSec / 60))
  const maxM = Math.max(minM, Math.round(maxSec / 60))
  if (minM === maxM) return `${minM} min`
  return `${minM}–${maxM} min`
}
