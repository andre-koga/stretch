export type Pose = {
  id: string
  name: string
  durationSec: number
  cue?: string
  side?: 'left' | 'right' | 'both'
}

export type Routine = {
  id: string
  title: string
  description: string
  category: 'morning' | 'desk' | 'hips' | 'full' | 'evening'
  poses: Pose[]
}

export const routines: Routine[] = [
  {
    id: 'morning-wake',
    title: 'Morning Wake-up',
    description: 'Gentle full-body openers to start the day.',
    category: 'morning',
    poses: [
      { id: 'mw-1', name: 'Child’s Pose', durationSec: 45, cue: 'Hips to heels, arms long, forehead soft.' },
      { id: 'mw-2', name: 'Cat–Cow', durationSec: 60, cue: 'Move with the breath — arch and round slowly.' },
      { id: 'mw-3', name: 'Downward Dog', durationSec: 45, cue: 'Press the floor away, bend knees if you need.' },
      { id: 'mw-4', name: 'Low Lunge', durationSec: 40, side: 'left', cue: 'Left foot forward, hips sink gently.' },
      { id: 'mw-5', name: 'Low Lunge', durationSec: 40, side: 'right', cue: 'Right foot forward, lengthen the back leg.' },
      { id: 'mw-6', name: 'Standing Forward Fold', durationSec: 45, cue: 'Soft knees, let the head hang heavy.' },
      { id: 'mw-7', name: 'Mountain Pose', durationSec: 30, cue: 'Stand tall, feel both feet, easy breath.' },
    ],
  },
  {
    id: 'desk-relief',
    title: 'Desk Relief',
    description: 'Undo screen posture in under ten minutes.',
    category: 'desk',
    poses: [
      { id: 'dr-1', name: 'Neck Rolls', durationSec: 40, cue: 'Slow circles — only as far as feels kind.' },
      { id: 'dr-2', name: 'Shoulder Rolls', durationSec: 40, cue: 'Lift, open, and drop the shoulders.' },
      { id: 'dr-3', name: 'Seated Twist', durationSec: 35, side: 'left', cue: 'Sit tall, twist gently to the left.' },
      { id: 'dr-4', name: 'Seated Twist', durationSec: 35, side: 'right', cue: 'Sit tall, twist gently to the right.' },
      { id: 'dr-5', name: 'Chest Opener', durationSec: 45, cue: 'Clasp hands behind you, lift the heart.' },
      { id: 'dr-6', name: 'Wrist Stretch', durationSec: 40, cue: 'Flex and extend both wrists slowly.' },
      { id: 'dr-7', name: 'Seated Forward Fold', durationSec: 50, cue: 'Hinge from the hips, soft spine.' },
    ],
  },
  {
    id: 'hip-openers',
    title: 'Hip Openers',
    description: 'Release tight hips and lower back.',
    category: 'hips',
    poses: [
      { id: 'ho-1', name: 'Figure Four', durationSec: 50, side: 'left', cue: 'Ankle over knee, ease the hips back.' },
      { id: 'ho-2', name: 'Figure Four', durationSec: 50, side: 'right', cue: 'Switch sides, keep the breath steady.' },
      { id: 'ho-3', name: 'Pigeon Pose', durationSec: 55, side: 'left', cue: 'Square the hips, fold forward if ready.' },
      { id: 'ho-4', name: 'Pigeon Pose', durationSec: 55, side: 'right', cue: 'Other side — no forcing the stretch.' },
      { id: 'ho-5', name: 'Butterfly', durationSec: 50, cue: 'Soles together, let the knees fall open.' },
      { id: 'ho-6', name: 'Happy Baby', durationSec: 45, cue: 'Hold the feet, rock gently side to side.' },
    ],
  },
  {
    id: 'full-body',
    title: 'Full Body Flow',
    description: 'A balanced sequence from head to toe.',
    category: 'full',
    poses: [
      { id: 'fb-1', name: 'Mountain Pose', durationSec: 30, cue: 'Root down, lengthen up through the crown.' },
      { id: 'fb-2', name: 'Standing Forward Fold', durationSec: 40, cue: 'Fold with soft knees, shake the head yes and no.' },
      { id: 'fb-3', name: 'Downward Dog', durationSec: 45, cue: 'Pedal the feet, settle into the shape.' },
      { id: 'fb-4', name: 'Warrior I', durationSec: 40, side: 'left', cue: 'Left foot forward, arms reach up.' },
      { id: 'fb-5', name: 'Warrior II', durationSec: 40, side: 'left', cue: 'Open the hips, gaze over the front hand.' },
      { id: 'fb-6', name: 'Warrior I', durationSec: 40, side: 'right', cue: 'Right foot forward, strong legs.' },
      { id: 'fb-7', name: 'Warrior II', durationSec: 40, side: 'right', cue: 'Wide stance, long arms, easy face.' },
      { id: 'fb-8', name: 'Wide-Leg Forward Fold', durationSec: 45, cue: 'Hands to the floor or shins, hang heavy.' },
      { id: 'fb-9', name: 'Child’s Pose', durationSec: 50, cue: 'Rest here. Soften the jaw and belly.' },
    ],
  },
  {
    id: 'wind-down',
    title: 'Wind-down',
    description: 'Slow stretches to settle before sleep.',
    category: 'evening',
    poses: [
      { id: 'wd-1', name: 'Seated Forward Fold', durationSec: 50, cue: 'Breathe into the backs of the legs.' },
      { id: 'wd-2', name: 'Supine Twist', durationSec: 45, side: 'left', cue: 'Knees left, arms open, gaze optional right.' },
      { id: 'wd-3', name: 'Supine Twist', durationSec: 45, side: 'right', cue: 'Knees right — keep both shoulders soft.' },
      { id: 'wd-4', name: 'Knees to Chest', durationSec: 40, cue: 'Hug the knees, rock if it feels good.' },
      { id: 'wd-5', name: 'Legs Up the Wall', durationSec: 90, cue: 'Hips close to the wall, arms rest by your sides.' },
      { id: 'wd-6', name: 'Savasana', durationSec: 90, cue: 'Lie still. Nothing to do but breathe.' },
    ],
  },
]

export function getRoutine(id: string): Routine | undefined {
  return routines.find((r) => r.id === id)
}

export function routineDurationSec(routine: Routine): number {
  return routine.poses.reduce((sum, pose) => sum + pose.durationSec, 0)
}

export function formatDuration(totalSec: number): string {
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  if (m === 0) return `${s}s`
  if (s === 0) return `${m} min`
  return `${m}m ${s}s`
}
