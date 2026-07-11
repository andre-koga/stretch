import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { formatDuration, routineDurationSec, routines } from '../data/routines'

export function StretchListPage() {
  return (
    <main className="flex flex-1 flex-col py-4">
      <BackLink />
      <header className="animate-fade-up mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Stretch</h1>
        <p className="mt-2 text-ink-muted">Pick a routine. We’ll time each pose for you.</p>
      </header>

      <ul className="flex flex-col gap-2">
        {routines.map((routine, i) => (
          <li
            key={routine.id}
            className="animate-fade-up"
            style={{ animationDelay: `${80 + i * 40}ms` }}
          >
            <Link
              to={`/stretch/${routine.id}`}
              className="block rounded-2xl px-1 py-4 transition hover:bg-white/5 active:bg-white/8"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl font-medium text-ink">{routine.title}</h2>
                <span className="shrink-0 text-sm text-ink-muted">
                  {formatDuration(routineDurationSec(routine))}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{routine.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
