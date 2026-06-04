import type { Metadata } from "next";
import { siteConfig } from "./site-data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightfutureadmission.in";

export const defaultKeywords = [
  "Bright Future Admission",
  "admission consultancy Bihar",
  "college admission Patna",
  "Bihar Student Credit Card admission",
  "ANM GNM admission Bihar",
  "B.Tech admission guidance",
  "nursing course admission India",
  "polytechnic admission Bihar",
  "paramedical admission",
  "MBA BCA MCA admission",
  "pharmacy admission Bihar",
  "education consultant Nawada",
  "Hanuman Nagar Patna admission",
];

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/admission", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/developer", priority: 0.7, changeFrequency: "monthly" as const },
];

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${normalized}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/banner2.jpg",
  ogImageAlt,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);
  const mergedKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function getRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.name} | Admission Guidance in Bihar & India`,
      template: `%s | ${siteConfig.name}`,
    },
    description:
      "Bright Future Admission helps students get admission in B.Tech, Nursing, Pharmacy, MBA, Polytechnic, Paramedical and more across India. Bihar Student Credit Card guidance available in Patna & Nawada.",
    keywords: defaultKeywords,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "education",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | Admission Guidance in Bihar & India`,
      description:
        "Professional admission counselling for engineering, nursing, pharmacy, management & paramedical courses. Offices in Patna and Nawada, Bihar.",
      images: [
        {
          url: absoluteUrl("/banner2.jpg"),
          width: 1200,
          height: 630,
          alt: "Bright Future Admission — courses and admission guidance banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | Admission Guidance in Bihar & India`,
      description:
        "Get admission help for B.Tech, ANM, GNM, MBA, Polytechnic & more. Bihar Student Credit Card support available.",
      images: [absoluteUrl("/banner2.jpg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
    other: {
      "geo.region": "IN-BR",
      "geo.placename": "Patna, Bihar",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/banner2.jpg"),
    description:
      "Education admission consultancy helping students secure seats in professional courses across India with Bihar Student Credit Card guidance.",
    slogan: siteConfig.tagline,
    telephone: siteConfig.phones.map((p) => `+91-${p}`),
    areaServed: [
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
    address: siteConfig.addresses.map((addr) => ({
      "@type": "PostalAddress",
      addressLocality: addr.line.split(",")[0]?.trim(),
      addressRegion: "Bihar",
      addressCountry: "IN",
    })),
    sameAs: Object.values(siteConfig.social),
    contactPoint: siteConfig.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: `+91-${phone}`,
      contactType: "admissions",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description:
      "Admission guidance for B.Tech, nursing, pharmacy, MBA, polytechnic and paramedical courses in Bihar and India.",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: ["en-IN", "hi-IN"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/courses?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl("/banner2.jpg"),
    url: siteUrl,
    telephone: `+91-${siteConfig.primaryPhone}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hanuman Nagar",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5941,
      longitude: 85.1376,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  };
}

export function courseListJsonLd() {
  const courses = [
    "ANM",
    "GNM",
    "B.Sc Nursing",
    "B.Tech",
    "M.Tech",
    "Polytechnic",
    "BBA",
    "MBA",
    "BCA",
    "MCA",
    "B.Ed",
    "B.Pharma",
    "D.Pharma",
    "Paramedical",
    "MBBS",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Admission Courses at Bright Future Admission",
    description: "Professional courses with admission guidance across India",
    url: absoluteUrl("/courses"),
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course,
        description: `Admission guidance for ${course} in India`,
        provider: { "@id": `${siteUrl}/#organization` },
        url: absoluteUrl("/courses"),
      },
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
