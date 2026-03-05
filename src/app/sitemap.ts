import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/nashville`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${base}/blog/what-is-openclaw`,
      lastModified: new Date("2026-03-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/openclaw-vs-chatgpt`,
      lastModified: new Date("2026-03-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
