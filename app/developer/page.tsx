import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

const { developer } = siteConfig;

export const metadata: Metadata = createPageMetadata({
  title: "Website Developer",
  description:
    "Need a website? Contact Anand Kumar — 7033626094. Static and dynamic websites for business, education, e-commerce, and custom web apps. Fast, mobile-friendly builds.",
  path: "/developer",
  keywords: [
    "website developer Bihar",
    "web development Patna",
    "static website developer",
    "dynamic website development",
    "Anand Kumar web developer",
    "business website maker",
    "education website development",
  ],
  ogImage: "/banner2.jpg",
  ogImageAlt: "Website development services by Anand Kumar",
});

const processSteps = [
  { step: "1", title: "Share your idea", desc: "Tell us what you need — business type, pages, and features." },
  { step: "2", title: "Plan & quote", desc: "We suggest static or dynamic options with a clear timeline." },
  { step: "3", title: "Design & build", desc: "Modern, mobile-friendly site aligned with your brand." },
  { step: "4", title: "Launch & support", desc: "Go live with guidance on updates and maintenance." },
];

export default function DeveloperPage() {
  const whatsappUrl = `https://wa.me/${developer.whatsappPhone}?text=${encodeURIComponent(
    "Hello Anand Kumar, I want to develop a website. Please share details.",
  )}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Website Developer", path: "/developer" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: developer.name,
            jobTitle: developer.title,
            telephone: `+91-${developer.phone}`,
            description: developer.tagline,
            knowsAbout: ["Web Development", "Static Websites", "Dynamic Websites"],
          },
        ]}
      />

      <PageHero
        title="Website Development"
        subtitle="Looking for a professional website? Get static or dynamic sites built for your business, institute, or personal brand."
        subtitleHi="वेबसाइट बनवाने के लिए संपर्क करें"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Web Developer" },
        ]}
      />

      {/* Developer profile */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy shadow-xl">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
              <div className="text-white">
                <span className="inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  Available for new projects
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{developer.name}</h2>
                <p className="mt-2 text-lg text-blue-200">{developer.title}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-100 sm:text-base">
                  {developer.tagline}. From simple brochure sites to full dynamic platforms with
                  forms, dashboards, and databases — any type of website you need.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:+91${developer.phone}`}
                    className="rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
                  >
                    Call +91 {developer.phone}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="text-lg font-bold text-brand-gold">Quick contact</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-blue-200">Name</dt>
                    <dd className="font-semibold text-white">{developer.name}</dd>
                  </div>
                  <div>
                    <dt className="text-blue-200">Mobile</dt>
                    <dd>
                      <a
                        href={`tel:+91${developer.phone}`}
                        className="font-semibold text-white hover:text-brand-gold"
                      >
                        +91 {developer.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-blue-200">Website types</dt>
                    <dd className="text-white">Static · Dynamic · Custom</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static vs Dynamic */}
      <section className="bg-surface py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="section-label">What we build</span>
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
              Static or dynamic — your choice
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
              Not sure which you need? We&apos;ll recommend the right approach based on your goals
              and budget.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {developer.websiteTypes.map((item, i) => (
              <article
                key={item.type}
                className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
                    i === 0
                      ? "bg-blue-100 text-brand-navy"
                      : "bg-brand-gold-light text-brand-red-dark"
                  }`}
                >
                  {i === 0 ? "📄" : "⚡"}
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{item.type}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.examples.map((ex) => (
                    <li
                      key={ex}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <span className="section-label">Services</span>
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
              What you can get built
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {developer.services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-sm font-medium text-slate-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-slate-100 bg-brand-gold-light py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="section-label">How it works</span>
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Simple process</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-brand-red to-brand-red-dark p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to build your website?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-red-100 sm:text-base">
              Call or WhatsApp {developer.name} to discuss your project — static, dynamic, or
              fully custom.
            </p>
            <p className="mt-2 text-lg font-bold">+91 {developer.phone}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:+91${developer.phone}`}
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-red transition hover:bg-brand-gold-light"
              >
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
              >
                WhatsApp {developer.name}
              </a>
            </div>
            <p className="mt-8 text-sm text-red-100">
              This site was built for {siteConfig.name}. Need admission help?{" "}
              <Link href="/contact" className="font-semibold text-white underline hover:no-underline">
                Contact us here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
