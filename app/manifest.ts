import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "BFA Admission",
    description:
      "Admission guidance for B.Tech, nursing, pharmacy, MBA and more in Bihar & India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c62828",
    lang: "en-IN",
    icons: [
      {
        src: absoluteUrl("/banner.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
