import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden py-3">
      <div className="animate-fade-up shrink-0">
        <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Ease
        </p>
        <p className="mt-2 max-w-[17rem] text-base leading-snug text-ink-muted sm:text-lg">
          Stretch and sit still — offline, on your phone, no account.
        </p>
      </div>

      <div className="relative my-3 flex min-h-0 flex-1 items-center justify-center">
        <div
          aria-hidden
          className="animate-breathe absolute aspect-square size-56 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.35)_0%,rgba(90,122,110,0.2)_45%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="animate-soft-pulse absolute aspect-square size-40 rounded-full border border-amber/30"
        />
      </div>

      <nav
        className="animate-fade-up flex shrink-0 flex-col gap-2.5"
        style={{ animationDelay: '120ms' }}
      >
        <Link
          to="/stretch"
          className="rounded-2xl bg-amber px-5 py-3.5 text-center text-lg font-medium text-moss-deep transition hover:bg-amber-bright active:scale-[0.98]"
        >
          Stretch
        </Link>
        <Link
          to="/meditate"
          className="rounded-2xl border border-white/12 bg-white/8 px-5 py-3.5 text-center text-lg font-medium text-ink transition hover:bg-white/12 active:scale-[0.98]"
        >
          Meditate
        </Link>
        <p className="pt-1 text-center text-xs text-ink-muted/80">
          Installable · works offline · stored on this device
        </p>
        <p className="text-center text-[10px] text-ink-muted/50">
          Pose art from Yoga API (CC0)
        </p>
      </nav>
    </main>
  )
}
