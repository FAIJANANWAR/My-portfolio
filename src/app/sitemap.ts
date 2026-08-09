import { MetadataRoute } from "next";
import { portfolioService } from "@/lib/services/portfolioService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://faijan.in";

  // Public Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Dynamic Published Projects Routes
  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projects = await portfolioService.getProjects();
    projectRoutes = projects
      .filter((p) => p.status === "published")
      .map((p) => ({
        url: `${baseUrl}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      }));
  } catch (e) {
    console.error("Sitemap generation error:", e);
  }

  return [...staticRoutes, ...projectRoutes];
}
