import { Link } from "react-router-dom";

export default function Layout({ children, step = 0, showNav = true }) {
  const steps = ["Learn", "Spot It", "Voice", "Brief"];

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-5">
      <header className="mb-8 flex items-center gap-3 border-b border-navy/10 pb-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-lg font-black text-gold">
            S
          </span>
          <div className="text-left">
            <h1 className="text-xl font-black tracking-tight text-navy">SAUTI</h1>
            <p className="text-[11px] font-medium leading-tight text-gold">
              Your Voice. Uganda&apos;s Digital Future.
            </p>
          </div>
        </Link>
      </header>

      {showNav && step > 0 && (
        <nav className="mb-7 text-left">
          <div className="mb-2 flex justify-between text-[11px] font-bold uppercase tracking-wide text-navy/40">
            {steps.map((label, i) => (
              <span key={label} className={i + 1 <= step ? "text-navy" : ""}>
                {label}
              </span>
            ))}
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-navy/10">
            <div
              className="h-full rounded-full bg-gold transition-all duration-500"
              style={{ width: `${(step / steps.length) * 100}%` }}
            />
          </div>
        </nav>
      )}

      <main className="flex-1 text-left">{children}</main>

      <footer className="mt-10 border-t border-navy/10 pt-5 text-left">
        <p className="text-xs font-bold text-navy">Team Digital Voices Uganda</p>
        <p className="mt-1 text-[11px] text-slate/50">UYIGF 2026 · sauti-digital-uganda.vercel.app</p>
      </footer>
    </div>
  );
}
