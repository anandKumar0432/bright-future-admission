"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red text-sm font-bold text-white">
            BF
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-brand-navy sm:text-base">
              {siteConfig.name}
            </p>
            <p className="hidden text-xs text-muted sm:block">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-gold-light text-brand-red-dark"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={`tel:+91${siteConfig.primaryPhone}`}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-brand-navy transition hover:border-brand-red hover:text-brand-red"
          >
            Call Now
          </a>
          <Link
            href="/admission"
            className="rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-brand-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-brand-gold-light text-brand-red-dark"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`tel:+91${siteConfig.primaryPhone}`}
              className="rounded-lg border border-slate-200 py-2.5 text-center text-sm font-medium text-brand-navy"
            >
              Call {siteConfig.primaryPhone}
            </a>
            <Link
              href="/admission"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-brand-red py-2.5 text-center text-sm font-semibold text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
