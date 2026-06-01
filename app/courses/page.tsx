import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, courseListJsonLd, createPageMetadata } from "@/lib/seo";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = createPageMetadata({
  title: "Courses & Admission Programs",
  description:
    "Explore nursing (ANM, GNM), engineering (B.Tech), pharmacy, MBA, polytechnic, paramedical & MBBS courses. Eligibility, duration, fees and admission process guidance in Bihar.",
  path: "/courses",
  keywords: [
    "ANM course admission Bihar",
    "GNM nursing admission",
    "B.Tech colleges admission",
    "D.Pharma B.Pharma admission",
    "polytechnic diploma Bihar",
    "paramedical courses admission",
    "MBA BCA MCA admission guidance",
  ],
  ogImage: "/banner2.jpg",
  ogImageAlt: "Bright Future Admission — popular courses and programs",
});

export default function CoursesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
          ]),
          courseListJsonLd(),
        ]}
      />
      <CoursesClient />
    </>
  );
}
