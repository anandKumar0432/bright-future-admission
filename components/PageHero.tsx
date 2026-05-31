import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  subtitleHi?: string;
  breadcrumb?: string;
  breadcrumbItems?: BreadcrumbItem[];
};

export default function PageHero({
  title,
  subtitle,
  subtitleHi,
  breadcrumb,
  breadcrumbItems,
}: PageHeroProps) {
  return (
    <section
      className="hero-pattern border-b border-slate-100 bg-gradient-to-br from-brand-gold-light via-white to-blue-50"
      aria-labelledby="page-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {breadcrumbItems && breadcrumbItems.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
              {breadcrumbItems.map((item, index) => (
                <li key={item.label} className="flex items-center gap-1">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="transition hover:text-brand-navy">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-slate-700">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : (
          breadcrumb && <p className="mb-3 text-sm text-muted">{breadcrumb}</p>
        )}
        <h1 id="page-title" className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        )}
        {subtitleHi && (
          <p className="font-hindi mt-2 text-sm text-brand-red-dark sm:text-base">
            {subtitleHi}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  action,
}: {
  label?: string;
  title: string;
  description?: string;
  action?: { href: string; text: string };
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {label && <span className="section-label">{label}</span>}
        <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-semibold text-brand-red transition hover:text-brand-red-dark"
        >
          {action.text} →
        </Link>
      )}
    </div>
  );
}
