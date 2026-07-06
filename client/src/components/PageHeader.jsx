export default function PageHeader({ label, title, subtitle, children }) {
  return (
    <header className="mb-6 text-left">
      {label && <p className="section-label">{label}</p>}
      {title && <h2 className="page-title">{title}</h2>}
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {children}
    </header>
  );
}
