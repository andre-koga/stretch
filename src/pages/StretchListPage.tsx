import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import {
  formatDurationRange,
  themeDurationRange,
  themesBySection,
  type Theme,
} from '../data/routines'

export function StretchListPage() {
  const routines = themesBySection('routine')
  const regions = themesBySection('region')

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden py-4">
      <BackLink />
      <header className="animate-fade-up mt-4 mb-5 shrink-0">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Stretch</h1>
        <p className="mt-2 text-ink-muted">
          Pick a theme, then swipe between variations.
        </p>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto pb-2">
        <ThemeSection
          title="Routines"
          description="Full sequences for morning, desk, and wind-down."
          themes={routines}
          startDelay={80}
        />
        <ThemeSection
          title="By region"
          description="Focus on a body part — each set has three variations."
          themes={regions}
          startDelay={80 + routines.length * 40}
        />
      </div>
    </main>
  )
}

function ThemeSection({
  title,
  description,
  themes,
  startDelay,
}: {
  title: string
  description: string
  themes: Theme[]
  startDelay: number
}) {
  return (
    <section className="shrink-0">
      <div className="animate-fade-up mb-3 px-1" style={{ animationDelay: `${startDelay}ms` }}>
        <h2 className="font-display text-lg font-medium tracking-tight text-ink">{title}</h2>
        <p className="mt-1 text-sm text-ink-muted">{description}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {themes.map((theme, i) => {
          const range = themeDurationRange(theme)
          return (
            <li
              key={theme.id}
              className="animate-fade-up"
              style={{ animationDelay: `${startDelay + 40 + i * 40}ms` }}
            >
              <Link
                to={`/stretch/${theme.id}`}
                className="block rounded-2xl px-1 py-4 transition hover:bg-white/5 active:bg-white/8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-medium text-ink">{theme.title}</h3>
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
    </section>
  )
}
