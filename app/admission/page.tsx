import type { Metadata } from "next";
import AdmissionForm from "@/components/AdmissionForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-data";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Apply Now — Admission Form",
  description:
    "Apply for admission in B.Tech, nursing, pharmacy, MBA, polytechnic & paramedical courses. Free inquiry form — submit via WhatsApp. Bright Future Admission, Patna & Nawada.",
  path: "/admission",
  keywords: [
    "admission form Bihar",
    "apply for college admission",
    "online admission inquiry",
    "WhatsApp admission form",
    "free admission counselling",
  ],
  ogImage: "/banner2.jpg",
  ogImageAlt: "Apply for admission at Bright Future Admission",
});

const admissionFaqs = [
  {
    question: "Is the admission form free?",
    answer:
      "Yes. Submitting the inquiry form is completely free. Our counsellors will contact you with available course and college options.",
  },
  {
    question: "How do I submit the admission form?",
    answer:
      "Fill in your name, mobile number, course, and city on our form. It opens WhatsApp with your details pre-filled so our team can respond quickly.",
  },
  {
    question: "Which courses can I apply for?",
    answer:
      "You can apply for ANM, GNM, B.Tech, MBA, BCA, MCA, Polytechnic, Paramedical, Pharmacy, B.Ed, MBBS, and other professional courses listed on our courses page.",
  },
];

export default function AdmissionPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Apply Now", path: "/admission" },
          ]),
          faqJsonLd(admissionFaqs),
        ]}
      />
      <PageHero
        title="Admission Form"
        subtitle="Fill in your details below. Your inquiry will be sent directly to our counsellors via WhatsApp for a quick response."
        subtitleHi="सभी प्रकार का एडमिशन के लिए संपर्क करें"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Apply Now" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-lg font-bold text-brand-navy">Your Details</h2>
              <AdmissionForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-24 space-y-5">
              <div className="rounded-2xl bg-brand-navy p-6 text-white">
                <h3 className="font-bold">Need help filling the form?</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Call us directly — our counsellors are available to guide you in Hindi and English.
                </p>
                <div className="mt-4 space-y-2">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+91${phone}`}
                      className="block rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-white/20"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold-light p-6">
                <h3 className="font-semibold text-brand-navy">What happens next?</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                      1
                    </span>
                    Submit your details via WhatsApp
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                      2
                    </span>
                    Our counsellor reviews your profile
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                      3
                    </span>
                    We call you with course &amp; college options
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                      4
                    </span>
                    Complete admission with our full support
                  </li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface py-12" aria-labelledby="admission-faq">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="admission-faq" className="mb-6 text-xl font-bold text-brand-navy">
            Admission Form — FAQ
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {admissionFaqs.map((faq) => (
              <article key={faq.question} className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-brand-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
