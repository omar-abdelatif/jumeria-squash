import { MetadataRoute } from "next";
import { newsArticles } from "@/lib/newsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeira-squash.com";

  const staticRoutes = [
    "",
    "/about",
    "/coaches",
    "/news",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...newsRoutes];
}
