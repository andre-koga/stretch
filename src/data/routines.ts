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

export type ThemeSection = 'routine' | 'region'

export type Theme = {
  id: string
  title: string
  description: string
  /** `routine` = time-of-day / general; `region` = body-part focus. */
  section: ThemeSection
  variations: Variation[]
}

export const themes: Theme[] = [
  // —— Main routines ——
  {
    id: 'morning',
    title: 'Morning Wake-up',
    description: 'Open the body gently and greet the day.',
    section: 'routine',
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
    section: 'routine',
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
    id: 'full',
    title: 'Full Body',
    description: 'Balanced sequences from head to toe.',
    section: 'routine',
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
    section: 'routine',
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

  // —— Region focus (body parts / muscles) ——
  {
    id: 'lower-back',
    title: 'Lower Back',
    description: 'Soothe and mobilize the lumbar spine.',
    section: 'region',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Cat-cow, gentle extension, and twists for the low back.',
        poses: [
          { id: 'lb1-1', name: 'Cat–Cow', durationSec: 60, cue: 'Wave through the low spine slowly.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'lb1-2', name: 'Child’s Pose', durationSec: 45, cue: 'Widen the knees to ease the lumbar.', imageKey: 'childs-pose' },
          { id: 'lb1-3', name: 'Sphinx', durationSec: 40, cue: 'Low backbend — keep the glutes soft.', imageKey: 'sphinx' },
          { id: 'lb1-4', name: 'Supine Twist', durationSec: 45, side: 'left', cue: 'Knees left, keep both shoulders down.' },
          { id: 'lb1-5', name: 'Supine Twist', durationSec: 45, side: 'right', cue: 'Other side — no forcing the twist.' },
          { id: 'lb1-6', name: 'Knees to Chest', durationSec: 40, cue: 'Hug in and rock to massage the low back.' },
          { id: 'lb1-7', name: 'Savasana', durationSec: 50, cue: 'Let the spine settle flat.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'soothe',
        label: 'Soothe',
        description: 'Quieter shapes when the low back feels tender.',
        poses: [
          { id: 'lb2-1', name: 'Knees to Chest', durationSec: 50, cue: 'Small rocks only — less is more.' },
          { id: 'lb2-2', name: 'Supine Twist', durationSec: 50, side: 'left', cue: 'Keep the range gentle.' },
          { id: 'lb2-3', name: 'Supine Twist', durationSec: 50, side: 'right', cue: 'Same care on this side.' },
          { id: 'lb2-4', name: 'Bridge', durationSec: 35, cue: 'Lift lightly or stay on the floor and tilt.', imageKey: 'bridge' },
          { id: 'lb2-5', name: 'Child’s Pose', durationSec: 55, cue: 'Support the head with hands if needed.', imageKey: 'childs-pose' },
          { id: 'lb2-6', name: 'Savasana', durationSec: 70, cue: 'Rest flat and easy.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'mobilize',
        label: 'Mobilize',
        description: 'A bit more movement to wake stiffness.',
        poses: [
          { id: 'lb3-1', name: 'Cat–Cow', durationSec: 50, cue: 'Find the full wave.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'lb3-2', name: 'Sphinx', durationSec: 35, cue: 'Lift through the chest, soft belly.', imageKey: 'sphinx' },
          { id: 'lb3-3', name: 'Bridge', durationSec: 40, cue: 'Press through the feet, lengthen the tailbone.', imageKey: 'bridge' },
          { id: 'lb3-4', name: 'Seated Twist', durationSec: 40, side: 'left', cue: 'Lengthen first, then twist.', imageKey: 'seated-twist' },
          { id: 'lb3-5', name: 'Seated Twist', durationSec: 40, side: 'right', cue: 'Keep both sit bones grounded.', imageKey: 'seated-twist' },
          { id: 'lb3-6', name: 'Child’s Pose', durationSec: 45, cue: 'Close with a soft curve.', imageKey: 'childs-pose' },
        ],
      },
    ],
  },
  {
    id: 'hips',
    title: 'Hips',
    description: 'Make space in the hips and outer glutes.',
    section: 'region',
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
    id: 'neck-shoulders',
    title: 'Neck & Shoulders',
    description: 'Release upper-body tension from screens and stress.',
    section: 'region',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Rolls, openers, and a soft fold for the upper body.',
        poses: [
          { id: 'ns1-1', name: 'Neck Rolls', durationSec: 45, cue: 'Slow circles — pause where it’s tight.' },
          { id: 'ns1-2', name: 'Shoulder Rolls', durationSec: 45, cue: 'Lift, open, drop — then reverse.' },
          { id: 'ns1-3', name: 'Chest Opener', durationSec: 50, cue: 'Clasp hands behind, lift the heart.' },
          { id: 'ns1-4', name: 'Seated Twist', durationSec: 40, side: 'left', cue: 'Lengthen the spine, then twist.', imageKey: 'seated-twist' },
          { id: 'ns1-5', name: 'Seated Twist', durationSec: 40, side: 'right', cue: 'Same care on the other side.', imageKey: 'seated-twist' },
          { id: 'ns1-6', name: 'Child’s Pose', durationSec: 45, cue: 'Arms long — let the shoulders melt.', imageKey: 'childs-pose' },
        ],
      },
      {
        id: 'desk-day',
        label: 'Desk Day',
        description: 'Seated-friendly relief you can do at a chair.',
        poses: [
          { id: 'ns2-1', name: 'Shoulder Rolls', durationSec: 40, cue: 'Keep the jaw soft.' },
          { id: 'ns2-2', name: 'Neck Rolls', durationSec: 40, cue: 'Small range only.' },
          { id: 'ns2-3', name: 'Chest Opener', durationSec: 45, cue: 'Open without forcing the neck.' },
          { id: 'ns2-4', name: 'Wrist Stretch', durationSec: 35, cue: 'Flex and extend both wrists.' },
          { id: 'ns2-5', name: 'Seated Forward Fold', durationSec: 45, cue: 'Hang the head heavy.', imageKey: 'seated-forward-fold' },
          { id: 'ns2-6', name: 'Mountain Pose', durationSec: 30, cue: 'Sit tall — shoulders away from ears.' },
        ],
      },
      {
        id: 'deep-ease',
        label: 'Deep Ease',
        description: 'Longer holds when the neck and traps feel locked.',
        poses: [
          { id: 'ns3-1', name: 'Neck Rolls', durationSec: 55, cue: 'Move like honey — no rushing.' },
          { id: 'ns3-2', name: 'Shoulder Rolls', durationSec: 50, cue: 'Big circles, then tiny ones.' },
          { id: 'ns3-3', name: 'Chest Opener', durationSec: 55, cue: 'Breathe into the collarbones.' },
          { id: 'ns3-4', name: 'Child’s Pose', durationSec: 60, cue: 'Forehead down if you can.', imageKey: 'childs-pose' },
          { id: 'ns3-5', name: 'Savasana', durationSec: 60, cue: 'Arms out, palms up — let go.', imageKey: 'savasana' },
        ],
      },
    ],
  },
  {
    id: 'hamstrings',
    title: 'Hamstrings',
    description: 'Lengthen the backs of the legs without forcing.',
    section: 'region',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Standing and seated folds with soft knees.',
        poses: [
          { id: 'hs1-1', name: 'Mountain Pose', durationSec: 25, cue: 'Stand tall, soft knees ready.' },
          { id: 'hs1-2', name: 'Standing Forward Fold', durationSec: 50, cue: 'Bend the knees as much as you need.', imageKey: 'standing-forward-fold' },
          { id: 'hs1-3', name: 'Downward Dog', durationSec: 45, cue: 'Pedal the feet — one heel, then the other.', imageKey: 'downward-dog' },
          { id: 'hs1-4', name: 'Seated Forward Fold', durationSec: 55, cue: 'Hinge from the hips, spine long.', imageKey: 'seated-forward-fold' },
          { id: 'hs1-5', name: 'Wide-Leg Forward Fold', durationSec: 45, cue: 'Hands to floor or blocks — hang heavy.', imageKey: 'standing-forward-fold' },
          { id: 'hs1-6', name: 'Child’s Pose', durationSec: 40, cue: 'Rest the legs.', imageKey: 'childs-pose' },
        ],
      },
      {
        id: 'gentle',
        label: 'Gentle',
        description: 'Softer holds when hamstrings feel stubborn.',
        poses: [
          { id: 'hs2-1', name: 'Cat–Cow', durationSec: 40, cue: 'Warm the spine first.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'hs2-2', name: 'Standing Forward Fold', durationSec: 45, cue: 'Knees bent is still a stretch.', imageKey: 'standing-forward-fold' },
          { id: 'hs2-3', name: 'Seated Forward Fold', durationSec: 50, cue: 'Loop a strap around the feet if helpful.', imageKey: 'seated-forward-fold' },
          { id: 'hs2-4', name: 'Butterfly', durationSec: 40, cue: 'Ease the inner thighs too.', imageKey: 'butterfly' },
          { id: 'hs2-5', name: 'Savasana', durationSec: 45, cue: 'Legs long and soft.', imageKey: 'savasana' },
        ],
      },
      {
        id: 'deep',
        label: 'Deep',
        description: 'Longer folds for a deeper release.',
        poses: [
          { id: 'hs3-1', name: 'Downward Dog', durationSec: 50, cue: 'Settle into the V — soft knees ok.', imageKey: 'downward-dog' },
          { id: 'hs3-2', name: 'Standing Forward Fold', durationSec: 60, cue: 'Shake the head yes and no.', imageKey: 'standing-forward-fold' },
          { id: 'hs3-3', name: 'Seated Forward Fold', durationSec: 70, cue: 'Breathe into the backs of the legs.', imageKey: 'seated-forward-fold' },
          { id: 'hs3-4', name: 'Wide-Leg Forward Fold', durationSec: 55, cue: 'Let gravity do the work.', imageKey: 'standing-forward-fold' },
          { id: 'hs3-5', name: 'Child’s Pose', durationSec: 45, cue: 'Round and recover.', imageKey: 'childs-pose' },
          { id: 'hs3-6', name: 'Savasana', durationSec: 50, cue: 'Notice the length.', imageKey: 'savasana' },
        ],
      },
    ],
  },
  {
    id: 'chest-posture',
    title: 'Chest & Posture',
    description: 'Open the front body and stack the spine tall.',
    section: 'region',
    variations: [
      {
        id: 'classic',
        label: 'Classic',
        description: 'Openers, mild backbends, and a tall finish.',
        poses: [
          { id: 'cp1-1', name: 'Shoulder Rolls', durationSec: 35, cue: 'Clear the upper back first.' },
          { id: 'cp1-2', name: 'Chest Opener', durationSec: 50, cue: 'Clasp behind, lift the sternum.' },
          { id: 'cp1-3', name: 'Sphinx', durationSec: 40, cue: 'Forearms down, heart forward.', imageKey: 'sphinx' },
          { id: 'cp1-4', name: 'Bridge', durationSec: 40, cue: 'Press the floor, open the chest.', imageKey: 'bridge' },
          { id: 'cp1-5', name: 'Cat–Cow', durationSec: 40, cue: 'Balance with a rounded spine.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'cp1-6', name: 'Mountain Pose', durationSec: 35, cue: 'Stand tall — shoulders soft.' },
        ],
      },
      {
        id: 'desk-undo',
        label: 'Desk Undo',
        description: 'Counter rounded shoulders from sitting.',
        poses: [
          { id: 'cp2-1', name: 'Chest Opener', durationSec: 45, cue: 'Open without pinching the low back.' },
          { id: 'cp2-2', name: 'Seated Twist', durationSec: 35, side: 'left', cue: 'Lengthen, then twist.', imageKey: 'seated-twist' },
          { id: 'cp2-3', name: 'Seated Twist', durationSec: 35, side: 'right', cue: 'Other side.', imageKey: 'seated-twist' },
          { id: 'cp2-4', name: 'Sphinx', durationSec: 40, cue: 'Gentle lift through the heart.', imageKey: 'sphinx' },
          { id: 'cp2-5', name: 'Child’s Pose', durationSec: 40, cue: 'Round to counter.', imageKey: 'childs-pose' },
          { id: 'cp2-6', name: 'Mountain Pose', durationSec: 30, cue: 'Reset your posture.' },
        ],
      },
      {
        id: 'awaken',
        label: 'Awaken',
        description: 'More extension when you want to feel open.',
        poses: [
          { id: 'cp3-1', name: 'Cat–Cow', durationSec: 40, cue: 'Warm the spine.', imageKey: 'cat', alternateKey: 'cow' },
          { id: 'cp3-2', name: 'Sphinx', durationSec: 35, cue: 'Lift through the chest.', imageKey: 'sphinx' },
          { id: 'cp3-3', name: 'Upward Dog', durationSec: 30, cue: 'Thighs active if it feels good.', imageKey: 'upward-dog' },
          { id: 'cp3-4', name: 'Bridge', durationSec: 40, cue: 'Open the front body.', imageKey: 'bridge' },
          { id: 'cp3-5', name: 'Downward Dog', durationSec: 40, cue: 'Lengthen after the lifts.', imageKey: 'downward-dog' },
          { id: 'cp3-6', name: 'Mountain Pose', durationSec: 30, cue: 'Stack tall and breathe.' },
        ],
      },
    ],
  },
]

export function themesBySection(section: ThemeSection): Theme[] {
  return themes.filter((t) => t.section === section)
}

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
