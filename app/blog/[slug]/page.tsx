import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { formatBlogDate } from "@/lib/blogs";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/blogs-store";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo/jsonLd";
import { seoHead } from "@/lib/seo/seoHead";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogs();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug, { publishedOnly: true });
  if (!post) {
    return seoHead({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const published = post.publishedAt ?? post.createdAt;

  return seoHead({
    title: post.title,
    description: post.excerpt || post.title,
    path: `/blog/${post.slug}`,
    keywords: post.tags?.length
      ? post.tags
      : [post.category, "UAE business", "Dubai"].filter(
          (keyword): keyword is string => Boolean(keyword),
        ),
    image: post.coverImage || undefined,
    type: "article",
    publishedTime: published,
    modifiedTime: post.updatedAt || published,
    authors: post.author ? [post.author] : undefined,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug, { publishedOnly: true });

  if (!post) notFound();

  const dateLabel = formatBlogDate(post.publishedAt ?? post.createdAt);

  return (
    <>
      <JsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <div className="page-wrapper overflow-hidden">
        <section
          className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/blog-detail-banner.jpg)",
            height: "calc(100vh - 112px)",
            minHeight: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <style>{`
            @media (max-width: 991.98px) {
              .banner-inner-section {
                height: calc(100dvh - 64px) !important;
              }
            }
          `}</style>
          <div className="container">
            <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div
                    className="d-flex align-items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <p className="mb-0 text-white fs-5 text-opacity-70">
                      {post.excerpt || (
                        <>
                          Insights from{" "}
                          <span className="text-primary">
                            AL HADI Business Services
                          </span>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="d-flex align-items-end gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h1 className="mb-0 fs-15 text-white lh-1">{post.title}</h1>
                <Link
                  href="/blog"
                  className="p-1 ps-7 bg-primary rounded-pill"
                >
                  <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                    <iconify-icon
                      icon="lucide:arrow-up-right"
                      className="fs-8 text-dark"
                    ></iconify-icon>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-detail py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-7">
              <div
                className="d-flex flex-wrap align-items-center gap-3 gap-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <p className="mb-0 text-opacity-70">
                  {dateLabel}
                  {post.author ? ` · ${post.author}` : ""}
                  {post.category ? ` · ${post.category}` : ""}
                </p>
                <Link href="/blog" className="text-decoration-none">
                  ← Back to blog
                </Link>
              </div>

              {post.excerpt ? (
                <p
                  className="fs-5 mb-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {post.excerpt}
                </p>
              ) : null}

              {post.coverImage ? (
                <div
                  className="blog-detail-img"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="img-fluid w-100"
                  />
                </div>
              ) : null}

              <div
                className="blog-prose"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
