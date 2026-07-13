import { Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,#3d5c52_0%,transparent_55%),radial-gradient(ellipse_at_90%_20%,#2a453c_0%,transparent_45%),linear-gradient(165deg,#0f1c18_0%,#1a2e28_45%,#152621_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-lg flex-col overflow-hidden px-5 safe-pt safe-pb [&>*]:min-h-0">
        <Outlet />
      </div>
    </div>
  )
}
