import { NextRequest, NextResponse } from "next/server";
import { getBlogBySlug } from "@/lib/blogs-store";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  const { slug } = await context.params;
  const post = await getBlogBySlug(slug, { publishedOnly: true });

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ post });
}
