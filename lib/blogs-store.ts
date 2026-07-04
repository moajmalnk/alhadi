import { promises as fs } from "fs";
import path from "path";
import {
  BlogPost,
  BlogStatus,
  CreateBlogInput,
  UpdateBlogInput,
  slugify,
} from "@/lib/blogs";
import { sanitizeBlogHtml } from "@/lib/sanitize-blog-html";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blogs.json");

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function uniqueSlug(base: string, posts: BlogPost[], excludeId?: string): string {
  const root = slugify(base) || "post";
  let candidate = root;
  let n = 2;
  while (
    posts.some((post) => post.slug === candidate && post.id !== excludeId)
  ) {
    candidate = `${root}-${n}`;
    n += 1;
  }
  return candidate;
}

function normalizeTags(tags?: string[]): string[] {
  if (!tags) return [];
  return tags
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag, index, arr) => arr.indexOf(tag) === index);
}

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

export async function readBlogs(): Promise<BlogPost[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw) as BlogPost[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeBlogs(posts: BlogPost[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
}

export async function getPublishedBlogs(): Promise<BlogPost[]> {
  const posts = await readBlogs();
  return posts
    .filter((post) => post.status === "published")
    .sort((a, b) => {
      const aDate = a.publishedAt ?? a.createdAt;
      const bDate = b.publishedAt ?? b.createdAt;
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const posts = await readBlogs();
  return posts.sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export async function getBlogById(id: string): Promise<BlogPost | undefined> {
  const posts = await readBlogs();
  return posts.find((post) => post.id === id);
}

export async function getBlogBySlug(
  slug: string,
  options?: { publishedOnly?: boolean }
): Promise<BlogPost | undefined> {
  const posts = await readBlogs();
  return posts.find((post) => {
    if (post.slug !== slug) return false;
    if (options?.publishedOnly) return post.status === "published";
    return true;
  });
}

export async function createBlog(input: CreateBlogInput): Promise<BlogPost> {
  const posts = await readBlogs();
  const now = new Date().toISOString();
  const status: BlogStatus = input.status === "published" ? "published" : "draft";
  const title = input.title.trim();
  const slug = uniqueSlug(input.slug?.trim() || title, posts);

  const post: BlogPost = {
    id: createId(),
    title,
    slug,
    excerpt: input.excerpt.trim(),
    coverImage: input.coverImage.trim(),
    content: sanitizeBlogHtml(input.content),
    author: input.author.trim() || "AL HADI Business Services",
    category: input.category.trim(),
    tags: normalizeTags(input.tags),
    status,
    publishedAt: status === "published" ? now : null,
    createdAt: now,
    updatedAt: now,
  };

  posts.unshift(post);
  await writeBlogs(posts);
  return post;
}

export async function updateBlog(
  id: string,
  input: UpdateBlogInput
): Promise<BlogPost | undefined> {
  const posts = await readBlogs();
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return undefined;

  const current = posts[index];
  const now = new Date().toISOString();
  const title =
    input.title !== undefined ? input.title.trim() : current.title;
  const slugSource =
    input.slug !== undefined
      ? input.slug.trim() || title
      : current.slug;
  const slug = uniqueSlug(slugSource, posts, id);
  const status: BlogStatus =
    input.status !== undefined
      ? input.status === "published"
        ? "published"
        : "draft"
      : current.status;

  let publishedAt = current.publishedAt;
  if (status === "published" && !publishedAt) {
    publishedAt = now;
  }
  if (status === "draft") {
    publishedAt = current.publishedAt;
  }

  const updated: BlogPost = {
    ...current,
    title,
    slug,
    excerpt:
      input.excerpt !== undefined ? input.excerpt.trim() : current.excerpt,
    coverImage:
      input.coverImage !== undefined
        ? input.coverImage.trim()
        : current.coverImage,
    content:
      input.content !== undefined
        ? sanitizeBlogHtml(input.content)
        : current.content,
    author:
      input.author !== undefined
        ? input.author.trim() || "AL HADI Business Services"
        : current.author,
    category:
      input.category !== undefined
        ? input.category.trim()
        : current.category,
    tags: input.tags !== undefined ? normalizeTags(input.tags) : current.tags,
    status,
    publishedAt,
    updatedAt: now,
  };

  posts[index] = updated;
  await writeBlogs(posts);
  return updated;
}

export async function deleteBlog(id: string): Promise<boolean> {
  const posts = await readBlogs();
  const next = posts.filter((post) => post.id !== id);
  if (next.length === posts.length) return false;
  await writeBlogs(next);
  return true;
}
