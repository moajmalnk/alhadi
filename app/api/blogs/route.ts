import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { BlogStatus, CreateBlogInput } from "@/lib/blogs";
import {
  createBlog,
  getAllBlogs,
  getPublishedBlogs,
} from "@/lib/blogs-store";

export const runtime = "nodejs";

function parseStatus(value: string | null): BlogStatus | "all" {
  if (value === "draft" || value === "published") return value;
  return "all";
}

export async function GET(request: NextRequest) {
  const status = parseStatus(request.nextUrl.searchParams.get("status"));

  if (status === "published") {
    const posts = await getPublishedBlogs();
    return NextResponse.json({ posts });
  }

  if (status === "draft") {
    const authed = await isAuthenticated();
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const posts = (await getAllBlogs()).filter((post) => post.status === "draft");
    return NextResponse.json({ posts });
  }

  // Full list (including drafts) requires auth
  const authed = await isAuthenticated();
  if (!authed) {
    const posts = await getPublishedBlogs();
    return NextResponse.json({ posts });
  }

  const posts = await getAllBlogs();
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: CreateBlogInput;
  try {
    body = (await request.json()) as CreateBlogInput;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.title?.trim()) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const post = await createBlog({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt ?? "",
    coverImage: body.coverImage ?? "",
    content: body.content ?? "",
    author: body.author ?? "",
    category: body.category ?? "",
    tags: body.tags,
    status: body.status === "published" ? "published" : "draft",
  });

  return NextResponse.json({ post }, { status: 201 });
}
