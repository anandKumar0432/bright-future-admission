import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <Logo size={44} variant="light" className="shrink-0" />
            <div>
              <p className="text-lg font-bold">{siteConfig.name}</p>
              <p className="font-hindi text-sm text-blue-200">{siteConfig.taglineHi}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-blue-100">
            Professional admission guidance for engineering, nursing, pharmacy, management,
            and paramedical courses across India — with Bihar Student Credit Card support.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-blue-100 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-blue-100">
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:+91${phone}`} className="transition hover:text-white">
                  +91 {phone}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-sm text-blue-100">
            {siteConfig.addresses.map((addr) => (
              <p key={addr.label}>
                <span className="font-medium text-white">{addr.label}:</span> {addr.line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-blue-200 sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-hindi">{siteConfig.invocation}</p>
        </div>
      </div>
    </footer>
  );
}
