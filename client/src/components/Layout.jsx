import { Link } from "react-router-dom";

export default function Layout({ children, step = 0, showNav = true }) {
  const steps = ["Learn", "Spot It", "Voice", "Brief"];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="flex min-h-screen w-full flex-col px-4 pb-10 pt-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <header className="mb-6 flex w-full items-center gap-3 border-b border-white/50 pb-5 sm:mb-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/90 text-lg font-black text-gold shadow-glass-navy ring-2 ring-white/20 backdrop-blur-sm sm:h-11 sm:w-11">
              S
            </span>
            <div className="text-left">
              <h1 className="text-xl font-black tracking-tight text-navy sm:text-2xl">SAUTI</h1>
              <p className="text-[11px] font-medium leading-tight text-gold sm:text-xs">
                Your Voice. Uganda&apos;s Digital Future.
              </p>
            </div>
          </Link>
        </header>

        {showNav && step > 0 && (
          <nav className="mb-6 w-full text-left sm:mb-7">
            <div className="mb-2 flex justify-between gap-1 text-[10px] font-bold uppercase tracking-wide text-navy/40 sm:text-[11px]">
              {steps.map((label, i) => (
                <span key={label} className={i + 1 <= step ? "text-navy" : ""}>
                  {label}
                </span>
              ))}
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full border border-white/40 bg-white/30 backdrop-blur-sm">
              <div
                className="h-full rounded-full bg-gold transition-all duration-500"
                style={{ width: `${(step / steps.length) * 100}%` }}
              />
            </div>
          </nav>
        )}

        <main className="w-full flex-1 text-left">{children}</main>

        <footer className="mt-10 w-full border-t border-white/50 pt-5 text-left">
          <p className="text-xs font-bold text-navy">Team Digital Voices Uganda</p>
          <p className="mt-1 text-[11px] text-slate/50 sm:text-xs">
            UYIGF 2026 · sauti-digital-uganda.vercel.app
          </p>
        </footer>
      </div>
    </div>
  );
}
