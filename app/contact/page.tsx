import type { Metadata } from "next";
import Link from "next/link";
import { Facebook } from "@/components/icons/Facebook";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact bright career admission — call 7992256327, 7250513800, 7870607458, 6200871609. Offices in Hanuman Nagar Patna & Warisaliganj Nawada. WhatsApp & map available.",
  path: "/contact",
  keywords: [
    "bright career admission contact number",
    "admission consultant Patna phone",
    "education consultancy Nawada contact",
    "college admission help Bihar WhatsApp",
    "Hanuman Nagar Patna admission office",
  ],
  ogImage: "/banner2.jpg",
  ogImageAlt: "Contact bright career admission — Patna and Nawada offices",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    "Hello bright career admission, I need admission guidance.",
  )}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Contact Us"
        subtitle="Reach us by phone, WhatsApp, or visit our offices in Patna and Nawada. We're here to help with all admission queries."
        subtitleHi="संपर्क करें"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact cards */}
            <div className="space-y-5">
              <div className="rounded-2xl bg-brand-navy p-6 text-white shadow-lg sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-bold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                    📞
                  </span>
                  Phone Numbers
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+91${phone}`}
                      className="rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-semibold transition hover:bg-white/20"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-lg font-bold text-brand-navy">Office Addresses</h2>
                <div className="mt-5 space-y-4">
                  {siteConfig.addresses.map((addr) => (
                    <div
                      key={addr.label}
                      className="rounded-xl bg-surface p-4"
                    >
                      <p className="text-sm font-semibold text-brand-red">{addr.label}</p>
                      <p className="mt-1 text-sm text-slate-700">{addr.line}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-lg font-bold text-brand-navy">Follow Us</h2>
                <p className="mt-2 text-sm text-muted">
                  Stay updated with admission news, deadlines, and tips on Facebook.
                </p>
                <SocialLinks className="mt-4" />
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] transition hover:text-brand-navy"
                >
                  <Facebook className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  bright career admissions on Facebook
                </a>
              </div>

              <Link
                href="/admission"
                className="block rounded-2xl bg-brand-red p-6 text-center text-white shadow-lg transition hover:bg-brand-red-dark"
              >
                <p className="font-bold">Ready to apply?</p>
                <p className="mt-1 text-sm text-red-100">Fill the admission form →</p>
              </Link>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
              <div className="bg-brand-gold-light px-6 py-4">
                <h2 className="font-bold text-brand-navy">Find Us on Map</h2>
                <p className="text-sm text-muted">Branch Office — Warisaliganj, Nawada, Bihar</p>
              </div>
              <iframe
                title="bright career admission office location"
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick action bar */}
      <section className="border-t border-slate-100 bg-surface py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
          <a
            href={`tel:+91${siteConfig.primaryPhone}`}
            className="rounded-xl bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-light"
          >
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            WhatsApp
          </a>
          <Link
            href="/admission"
            className="rounded-xl border-2 border-brand-red px-6 py-3 text-sm font-semibold text-brand-red transition hover:bg-brand-red hover:text-white"
          >
            Admission Form
          </Link>
        </div>
      </section>
    </>
  );
}
