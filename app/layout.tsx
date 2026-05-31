import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import {
  getRootMetadata,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = getRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${poppins.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={[organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()]}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
