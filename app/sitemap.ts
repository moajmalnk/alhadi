import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services";
import { getPublishedBlogs } from "@/lib/blogs-store";
import { absoluteUrl } from "@/lib/seo/site";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.6 },
  { path: "/projects-detail", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().map(
    (slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }),
  );

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedBlogs();
    blogEntries = posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    blogEntries = [];
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
