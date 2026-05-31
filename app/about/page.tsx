import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { biharCreditCardBenefits, siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Meet Bright Future Admission — trusted education consultants in Patna & Nawada helping students with college admission, Bihar Student Credit Card, and end-to-end counselling across India.",
  path: "/about",
  keywords: [
    "about Bright Future Admission",
    "admission consultant Patna",
    "education consultancy Nawada Bihar",
    "BSCC admission guidance",
    "student counselling Bihar",
  ],
  ogImage: "/owner-pic.jpeg",
  ogImageAlt: "Bright Future Admission counsellor and founder",
});

const services = [
  {
    title: "Admission Counselling",
    desc: "Personalized guidance to choose the right course and college based on your marks, budget, and career goals.",
  },
  {
    title: "Document Support",
    desc: "Help with form filling, document verification, and ensuring your application is complete and accurate.",
  },
  {
    title: "Bihar Student Credit Card",
    desc: "Step-by-step assistance for eligible students to use BSCC for funding their professional education.",
  },
  {
    title: "End-to-End Enrollment",
    desc: "From first inquiry to final seat confirmation — we stay with you at every stage of the admission process.",
  },
];

const stats = [
  { value: "500+", label: "Students Guided" },
  { value: "15+", label: "Course Categories" },
  { value: "2", label: "Office Locations" },
  { value: "100%", label: "Dedicated Support" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <PageHero
        title="About Us"
        subtitle="We help students get admission in professional courses across India — with dedicated guidance for Bihar Student Credit Card facilities."
        subtitleHi={siteConfig.taglineHi}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border-4 border-brand-gold/30 shadow-xl">
                <Image
                  src="/owner-pic.jpeg"
                  alt="Bright Future Admission founder and counsellor"
                  width={500}
                  height={650}
                  className="h-auto w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-brand-red px-5 py-3 text-white shadow-lg">
                <p className="text-sm font-bold">Trusted Counsellor</p>
                <p className="text-xs text-red-100">Patna &amp; Nawada</p>
              </div>
            </div>

            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                {siteConfig.name}
              </h2>
              <p className="font-hindi mt-2 text-brand-red-dark">{siteConfig.sloganHi}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Bright Future Admission is a professional education consultancy based in Bihar,
                dedicated to helping students secure admission in engineering, nursing, pharmacy,
                management, polytechnic, paramedical, and medical courses across India.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                With offices in Patna and Nawada, our experienced team understands local student
                needs — including Bihar Student Credit Card eligibility — and provides honest,
                transparent guidance so families can make confident decisions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-brand-gold-light px-3 py-4 text-center"
                  >
                    <p className="text-xl font-bold text-brand-red sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="section-label">What We Do</span>
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Our Services</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="section-label">Student Support</span>
              <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                We&apos;re with you every step
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Free initial counselling — no hidden charges for first consultation",
                  "Course and college shortlisting based on your profile",
                  "Help with entrance exams, counselling rounds, and seat allotment",
                  "Bihar Student Credit Card documentation and process guidance",
                  "Support for both parents and students in Hindi and English",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold-light p-8">
              <h3 className="text-lg font-bold text-brand-navy">Bihar Student Credit Card</h3>
              <p className="font-hindi mt-2 text-sm text-brand-red-dark">
                बिहार स्टूडेंट क्रेडिट कार्ड के माध्यम से भी प्रवेश होता है।
              </p>
              <ul className="mt-4 space-y-2">
                {biharCreditCardBenefits.map((b) => (
                  <li key={b} className="text-sm text-slate-700">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-brand-navy py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Talk to our counsellor today
          </h2>
          <p className="mt-2 text-sm text-blue-200">
            Free guidance for admission in any course across India
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/admission"
              className="rounded-xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
