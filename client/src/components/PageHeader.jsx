export default function PageHeader({ label, title, subtitle, children }) {
  return (
    <header className="mb-8 border-b border-navy/[0.06] pb-6 text-left">
      {label && <p className="section-label">{label}</p>}
      {title && <h2 className="page-title">{title}</h2>}
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {children}
    </header>
  );
}
