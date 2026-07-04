import Link from "next/link";
import { notFound } from "next/navigation";
import { formatBlogDate } from "@/lib/blogs";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/blogs-store";

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
    return { title: "Article not found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug, { publishedOnly: true });

  if (!post) notFound();

  const dateLabel = formatBlogDate(post.publishedAt ?? post.createdAt);

  return (
    <>
      <div className="page-wrapper overflow-hidden">
        <section
          className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/blog-detail-banner.jpg)",
          }}
        >
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
            <div className="d-flex flex-column gap-7 gap-xl-11">
              <div className="row gap-4 gap-lg-0">
                <div className="col-lg-4">
                  <div
                    className="d-flex flex-column gap-3"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <h2 className="fs-13 mb-0">Scroll to read</h2>
                    <p className="mb-0 text-opacity-70">
                      {dateLabel}
                      {post.author ? ` · ${post.author}` : ""}
                    </p>
                    {post.category ? (
                      <p className="mb-0 text-opacity-70">{post.category}</p>
                    ) : null}
                    <Link href="/blog" className="text-decoration-none">
                      ← Back to blog
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8">
                  {post.excerpt ? (
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      <p className="fs-5 mb-0">{post.excerpt}</p>
                    </div>
                  ) : null}
                </div>
              </div>

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
                    className="img-fluid"
                  />
                </div>
              ) : null}

              <div className="row justify-content-end">
                <div className="col-lg-8">
                  <div
                    className="blog-prose"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
