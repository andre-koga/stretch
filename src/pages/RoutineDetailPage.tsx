import { Link, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Button } from '../components/Button'
import { PoseIllustration } from '../components/PoseIllustration'
import {
  formatDuration,
  getRoutine,
  routineDurationSec,
} from '../data/routines'

export function RoutineDetailPage() {
  const { routineId } = useParams()
  const routine = routineId ? getRoutine(routineId) : undefined

  if (!routine) {
    return (
      <main className="py-8">
        <BackLink to="/stretch" />
        <p className="mt-8 text-ink-muted">Routine not found.</p>
      </main>
    )
  }

  return (
    <main className="flex flex-1 flex-col py-4">
      <BackLink to="/stretch" />
      <header className="animate-fade-up mt-6 mb-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight">{routine.title}</h1>
        <p className="mt-2 text-ink-muted">
          {formatDuration(routineDurationSec(routine))} · {routine.poses.length} poses
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{routine.description}</p>
      </header>

      <ol className="mb-6 flex-1 space-y-2 overflow-y-auto">
        {routine.poses.map((pose, index) => (
          <li key={pose.id} className="flex items-center gap-3 py-2 text-sm">
            <PoseIllustration
              imageKey={pose.imageKey}
              side={pose.side}
              name={pose.name}
              size="sm"
              className="shrink-0"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-medium text-ink">
                  <span className="mr-2 text-ink-muted/70">{index + 1}</span>
                  {pose.name}
                  {pose.side && pose.side !== 'both' ? (
                    <span className="ml-1.5 font-normal text-ink-muted">({pose.side})</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-ink-muted">{pose.durationSec}s</span>
              </div>
              {pose.cue ? <p className="mt-0.5 text-ink-muted">{pose.cue}</p> : null}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-auto pt-2 safe-pb">
        <Link to={`/stretch/${routine.id}/session`} className="block">
          <Button className="w-full">Begin</Button>
        </Link>
      </div>
    </main>
  )
}
