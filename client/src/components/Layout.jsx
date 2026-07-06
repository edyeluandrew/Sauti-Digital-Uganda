import { Link } from "react-router-dom";

export default function Layout({ children, step = 0, showNav = true }) {
  const steps = ["Learn", "Spot It", "Voice", "Brief"];

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col px-4 pb-8 pt-4">
      <header className="mb-6 text-center">
        <Link to="/" className="inline-block">
          <h1 className="text-2xl font-extrabold tracking-tight text-navy">SAUTI</h1>
          <p className="text-xs font-medium text-gold">Your Voice. Uganda's Digital Future.</p>
        </Link>
      </header>

      {showNav && step > 0 && (
        <nav className="mb-6">
          <div className="flex justify-between text-xs font-medium text-navy/60">
            {steps.map((label, i) => (
              <span key={label} className={i + 1 <= step ? "text-navy font-semibold" : ""}>
                {label}
              </span>
            ))}
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
            <div
              className="h-full rounded-full bg-gold transition-all duration-500"
              style={{ width: `${(step / steps.length) * 100}%` }}
            />
          </div>
        </nav>
      )}

      <main className="flex-1">{children}</main>

      <footer className="mt-8 border-t border-navy/10 pt-4 text-center">
        <p className="text-xs font-semibold text-navy">Team Digital Voices Uganda</p>
        <p className="text-xs text-slate/50">UYIGF 2026 Hackathon · Sauti Digital Uganda</p>
      </footer>
    </div>
  );
}
