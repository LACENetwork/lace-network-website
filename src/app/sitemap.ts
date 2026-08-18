import type { MetadataRoute } from "next";

const baseUrl = "https://www.lacenetwork.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/events", priority: 0.8 },
    { path: "/partner-with-us", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
