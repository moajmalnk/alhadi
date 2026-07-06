export type BlogStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  status: BlogStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  coverImage: string;
  content: string;
  author: string;
  category: string;
  tags?: string[];
  status: BlogStatus;
};

export type UpdateBlogInput = Partial<CreateBlogInput>;

export const BLOG_STATUS_LABELS: Record<BlogStatus, string> = {
  draft: "Draft",
  published: "Published",
};

export const BLOG_STATUSES: BlogStatus[] = ["draft", "published"];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatBlogDate(value: string | null | undefined): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatBlogDateTime(value: string | null | undefined): string {
  if (!value) return "";
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
