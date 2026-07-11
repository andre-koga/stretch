import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-between py-6">
      <div className="animate-fade-up pt-8">
        <p className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Ease
        </p>
        <p className="mt-4 max-w-[18rem] text-lg leading-relaxed text-ink-muted">
          Stretch and sit still — offline, on your phone, no account.
        </p>
      </div>

      <div className="relative my-10 flex flex-1 items-center justify-center">
        <div
          aria-hidden
          className="animate-breathe absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.35)_0%,rgba(90,122,110,0.2)_45%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="animate-soft-pulse absolute h-40 w-40 rounded-full border border-amber/30"
        />
      </div>

      <nav className="animate-fade-up flex flex-col gap-3 pb-2" style={{ animationDelay: '120ms' }}>
        <Link
          to="/stretch"
          className="rounded-2xl bg-amber px-5 py-4 text-center text-lg font-medium text-moss-deep transition hover:bg-amber-bright active:scale-[0.98]"
        >
          Stretch
        </Link>
        <Link
          to="/meditate"
          className="rounded-2xl border border-white/12 bg-white/8 px-5 py-4 text-center text-lg font-medium text-ink transition hover:bg-white/12 active:scale-[0.98]"
        >
          Meditate
        </Link>
        <p className="pt-3 text-center text-xs text-ink-muted/80">
          Installable · works offline · stored on this device
        </p>
      </nav>
    </main>
  )
}
