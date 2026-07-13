import { useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { VariationCarousel } from '../components/VariationCarousel'
import { getTheme } from '../data/routines'

export function ThemeDetailPage() {
  const { themeId } = useParams()
  const theme = themeId ? getTheme(themeId) : undefined

  if (!theme) {
    return (
      <main className="py-8">
        <BackLink to="/stretch" />
        <p className="mt-8 text-ink-muted">Theme not found.</p>
      </main>
    )
  }

  return (
    <main className="flex min-h-0 flex-1 flex-col py-4">
      <BackLink to="/stretch" />
      <header className="animate-fade-up mt-6 mb-4">
        <h1 className="font-display text-3xl font-semibold tracking-tight">{theme.title}</h1>
        <p className="mt-2 text-ink-muted">{theme.description}</p>
      </header>
      <VariationCarousel theme={theme} />
    </main>
  )
}
