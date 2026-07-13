import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import {
  formatDurationRange,
  themeDurationRange,
  themes,
} from '../data/routines'

export function StretchListPage() {
  return (
    <main className="flex flex-1 flex-col py-4">
      <BackLink />
      <header className="animate-fade-up mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Stretch</h1>
        <p className="mt-2 text-ink-muted">
          Pick a theme, then swipe between variations.
        </p>
      </header>

      <ul className="flex flex-col gap-2">
        {themes.map((theme, i) => {
          const range = themeDurationRange(theme)
          return (
            <li
              key={theme.id}
              className="animate-fade-up"
              style={{ animationDelay: `${80 + i * 40}ms` }}
            >
              <Link
                to={`/stretch/${theme.id}`}
                className="block rounded-2xl px-1 py-4 transition hover:bg-white/5 active:bg-white/8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-xl font-medium text-ink">{theme.title}</h2>
                  <span className="shrink-0 text-sm text-ink-muted">
                    {formatDurationRange(range.min, range.max)}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{theme.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-muted/70">
                  {theme.variations.length} variations
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
