import type { MetadataRoute } from "next";
import { publishedProjects } from "@/data/projects";
import { publishedNews } from "@/data/news";
import { newsHref, projectHref, routes } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.values(routes).flatMap((route) => [route.de, route.en]);
  const projectRoutes = publishedProjects.flatMap((project) => [projectHref(project.slug, "de"), projectHref(project.slug, "en")]);
  const newsRoutes = publishedNews.flatMap((item) => [newsHref(item.slug, "de"), newsHref(item.slug, "en")]);

  return [...staticRoutes, ...projectRoutes, ...newsRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path.includes("/aktuell") || path.includes("/news") ? "monthly" : "yearly",
    priority: path === "/" || path === "/en" ? 1 : path.includes("/projekte") || path.includes("/projects") ? 0.8 : 0.6,
  }));
}
