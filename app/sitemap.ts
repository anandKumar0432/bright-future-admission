import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
