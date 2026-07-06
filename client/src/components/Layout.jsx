import { Link, useLocation } from "react-router-dom";

const stepRoutes = [
  { label: "Learn", path: "/learn" },
  { label: "Spot It", path: "/spot-it" },
  { label: "Voice", path: "/voice" },
  { label: "Brief", path: "/brief" },
];

export default function Layout({ children, step = 0, showNav = true }) {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-cream">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <header className="mb-8 flex w-full items-center justify-between gap-4 border-b border-navy/[0.08] pb-5">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy font-display text-lg font-extrabold text-gold shadow-soft transition group-hover:bg-navy-light">
              S
            </span>
            <div className="text-left">
              <h1 className="font-display text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                SAUTI
              </h1>
              <p className="text-[11px] font-medium text-gold sm:text-xs">
                Your Voice. Uganda&apos;s Digital Future.
              </p>
            </div>
          </Link>

          {location.pathname !== "/" && (
            <Link
              to="/"
              className="hidden rounded-lg border border-navy/10 px-3 py-2 text-xs font-semibold text-navy transition hover:border-navy/25 sm:inline-block"
            >
              Home
            </Link>
          )}
        </header>

        {showNav && step > 0 && (
          <nav className="mb-8 w-full" aria-label="Progress">
            <div className="mb-3 flex flex-wrap gap-2">
              {stepRoutes.map((item, i) => {
                const active = i + 1 === step;
                const done = i + 1 < step;
                return (
                  <span
                    key={item.label}
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide sm:text-xs ${
                      active
                        ? "bg-navy text-gold"
                        : done
                          ? "bg-navy/10 text-navy"
                          : "bg-white text-navy/35 ring-1 ring-navy/10"
                    }`}
                  >
                    {item.label}
                  </span>
                );
              })}
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${(step / stepRoutes.length) * 100}%` }} />
            </div>
          </nav>
        )}

        <main className="w-full flex-1 text-left">{children}</main>

        <footer className="mt-12 w-full border-t border-navy/[0.08] pt-6 text-left">
          <p className="font-display text-sm font-bold text-navy">Team Digital Voices Uganda</p>
          <p className="mt-1 text-xs text-slate/50">UYIGF 2026 · sauti-digital-uganda.vercel.app</p>
        </footer>
      </div>
    </div>
  );
}
