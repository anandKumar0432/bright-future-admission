import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SectionHeading } from "@/components/PageHero";
import {
  biharCreditCardBenefits,
  popularCourses,
  siteConfig,
  specialties,
} from "@/lib/site-data";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Admission Guidance in Bihar & India",
  description:
    "Bright Future Admission — expert counselling for B.Tech, ANM, GNM, MBA, Polytechnic, Paramedical & pharmacy admissions. Bihar Student Credit Card support. Call 7992256327.",
  path: "/",
  keywords: [
    "college admission consultant Patna",
    "best admission consultancy Bihar",
    "ANM GNM nursing admission",
    "B.Tech admission Bihar 2026",
    "student credit card admission help",
  ],
  ogImage: "/banner.png",
  ogImageAlt:
    "Bright Future Admission banner — engineering, nursing, pharmacy and management course admissions",
});

const homeFaqs = [
  {
    question: "Which courses does Bright Future Admission help with?",
    answer:
      "We provide admission guidance for ANM, GNM, B.Sc Nursing, B.Tech, M.Tech, Polytechnic, BBA, MBA, BCA, MCA, B.Ed, B.Pharma, D.Pharma, Paramedical, MBBS, and related professional courses across India.",
  },
  {
    question: "Do you help with Bihar Student Credit Card admissions?",
    answer:
      "Yes. We guide eligible Bihar students through the Student Credit Card process, including documentation and linking it with college admission.",
  },
  {
    question: "Where are Bright Future Admission offices located?",
    answer:
      "Our head office is in Hanuman Nagar, Patna, and our branch office is in Warisaliganj, Nawada, Bihar.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Fill the online admission form on our website, call us directly, or send your details on WhatsApp. Our counsellors respond quickly with course and college options.",
  },
];

const courseColors = [
  "from-red-500 to-red-700",
  "from-blue-600 to-indigo-800",
  "from-emerald-500 to-teal-700",
  "from-amber-500 to-orange-600",
  "from-purple-500 to-violet-700",
  "from-rose-500 to-pink-700",
  "from-cyan-500 to-blue-700",
  "from-lime-600 to-green-700",
  "from-fuchsia-500 to-purple-700",
  "from-sky-500 to-blue-700",
];

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    "Hello, I want admission guidance from Bright Future Admission.",
  )}`;

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy" aria-labelledby="hero-heading">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/banner.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
          <div className="text-white">
            <p className="font-hindi mb-2 text-sm text-brand-gold">{siteConfig.invocation}</p>
            <p className="font-hindi mb-4 text-lg text-blue-100 sm:text-xl">
              {siteConfig.sloganHi}
            </p>
            <h1 id="hero-heading" className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block text-brand-gold">ADMISSION</span>
              <span className="mt-1 block text-2xl font-semibold sm:text-3xl">
                {siteConfig.name}
              </span>
            </h1>
            <p className="font-hindi mt-4 inline-block rounded-lg bg-brand-gold/20 px-4 py-2 text-sm text-brand-gold sm:text-base">
              {siteConfig.taglineHi}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-blue-100 sm:text-base">
              सभी प्रकार का एडमिशन के लिए संपर्क करें — Engineering, Nursing, Pharmacy,
              Management, Polytechnic &amp; more across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admission"
                className="rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-red-dark"
              >
                Apply Now
              </Link>
              <a
                href={`tel:+91${siteConfig.primaryPhone}`}
                className="rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Call {siteConfig.primaryPhone}
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

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border-4 border-brand-gold/40 shadow-2xl">
              <Image
                src="/banner.png"
                alt="Bright Future Admission - courses and admission guidance"
                width={800}
                height={600}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-surface py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Why Choose Us"
            title="हमारी विशेषताएँ"
            description="Trusted admission support with experienced counsellors who stay with you from inquiry to enrollment."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {specialties.map((item, i) => (
              <div
                key={item.title}
                className="card-hover rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold-light text-lg font-bold text-brand-red">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-brand-navy">{item.title}</h3>
                <p className="font-hindi mt-2 text-xs leading-relaxed text-muted">
                  {item.titleHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Courses"
            title="Popular Courses"
            description="Explore our most requested programs. Tap any course to view full details."
            action={{ href: "/courses", text: "View all courses" }}
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-4">
            {popularCourses.map((course, i) => (
              <Link
                key={course.name}
                href={`/courses#${course.slug}`}
                className={`card-hover group relative overflow-hidden rounded-2xl bg-gradient-to-br ${courseColors[i % courseColors.length]} p-4 text-white shadow-md sm:p-5`}
              >
                <p className="text-base font-bold sm:text-lg">{course.name}</p>
                <p className="mt-1 text-xs text-white/80 opacity-0 transition group-hover:opacity-100">
                  View details →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bihar Student Credit Card */}
      <section className="border-y border-slate-100 bg-brand-gold-light py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="section-label">Financial Support</span>
              <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                Bihar Student Credit Card
              </h2>
              <p className="font-hindi mt-3 text-base text-brand-red-dark">
                बिहार स्टूडेंट क्रेडिट कार्ड के माध्यम से भी प्रवेश होता है।
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                We guide eligible Bihar students through the Student Credit Card process so
                you can pursue your dream course without financial worry.
              </p>
              <ul className="mt-6 space-y-3">
                {biharCreditCardBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs text-white">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-xl bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-light"
              >
                Learn about our services
              </Link>
            </div>
            <div className="rounded-2xl border border-brand-gold/40 bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-brand-navy to-brand-navy-light text-xs font-bold text-white">
                  BSCC
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">Student Credit Card</p>
                  <p className="text-sm text-muted">Government of Bihar Initiative</p>
                </div>
              </div>
              <div className="space-y-4 rounded-xl bg-surface p-5">
                <p className="text-sm text-slate-600">
                  Need help understanding eligibility or documentation? Our counsellors walk you
                  through every step — from application to college admission.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl bg-brand-red py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-red-dark"
                >
                  Ask about BSCC on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-14 sm:py-16" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers about admissions, courses, and how we can help you."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {homeFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-brand-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red to-brand-red-dark p-8 text-white shadow-xl sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to start your admission?</h2>
              <p className="mt-3 text-sm text-red-100 sm:text-base">
                Fill a quick form or call us directly. Free counselling for all courses.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/admission"
                  className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-red transition hover:bg-brand-gold-light"
                >
                  Admission Form
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-6 text-sm text-red-100">
                📞 {siteConfig.phones.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
