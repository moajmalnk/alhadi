"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BlogPost, formatBlogDate } from "@/lib/blogs";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/blogs?status=published");
        if (!res.ok) throw new Error("Failed to load posts");
        const data = (await res.json()) as { posts: BlogPost[] };
        if (!cancelled) {
          setPosts(data.posts ?? []);
          setError(null);
        }
      } catch {
        if (!cancelled) setError("Could not load articles. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredPosts = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter((post) => {
      const haystack = [
        post.title,
        post.excerpt,
        post.category,
        post.author,
        post.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query, posts]);

  return (
    <>
      <div className="page-wrapper overflow-hidden">
        <section
          className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/blog-hero.png)",
          }}
        >
          <div className="container">
            <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
              <div className="row align-items-center">
                <div className="col-xl-4">
                  <div
                    className="d-flex align-items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <p className="mb-0 text-white fs-5 text-opacity-70">
                      Expert insights on UAE business setup, visas, tax
                      compliance, and corporate services from{" "}
                      <span className="text-primary">
                        AL HADI Business Services
                      </span>
                      .
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
                <h1 className="mb-0 fs-16 text-white lh-1">Blog</h1>
                <span className="p-1 ps-7 bg-primary rounded-pill">
                  <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                    <iconify-icon
                      icon="lucide:arrow-up-right"
                      className="fs-8 text-dark"
                    ></iconify-icon>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-section py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="row mb-7 mb-xl-10 align-items-end gy-5">
              <div className="col-lg-7 col-xl-6">
                <div
                  className="d-flex flex-column gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h2 className="mb-0">Insights &amp; Resources</h2>
                  <p className="fs-5 mb-0 text-opacity-70">
                    Stay informed with the latest updates on UAE business
                    regulations, company formation, visa services, corporate tax,
                    and expert guidance from AL HADI Business Services in Dubai.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 ms-xl-auto">
                <div
                  className="d-flex align-items-center gap-3 p-1 ps-6 border border-dark rounded-pill"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <input
                    type="search"
                    className="form-control border-0 bg-transparent shadow-none py-2 px-0 blog-search-input"
                    id="blogSearch"
                    placeholder="Search articles..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search blog articles"
                  />
                  {query ? (
                    <button
                      type="button"
                      className="bg-dark text-white round-52 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 border-0"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                    >
                      <iconify-icon
                        icon="lucide:x"
                        className="fs-6"
                      ></iconify-icon>
                    </button>
                  ) : (
                    <span className="bg-primary round-52 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                      <iconify-icon
                        icon="lucide:search"
                        className="fs-6 text-white"
                      ></iconify-icon>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {loading ? (
              <p className="fs-5 text-opacity-70 mb-0">Loading articles…</p>
            ) : error ? (
              <p className="fs-5 text-opacity-70 mb-0">{error}</p>
            ) : filteredPosts.length > 0 ? (
              <div className="row">
                {filteredPosts.map((post) => (
                  <div className="col-lg-6 mb-7" key={post.id}>
                    <div className="resources d-flex flex-column gap-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="resources-img resources-img-blog position-relative overflow-hidden d-block"
                      >
                        <img
                          src={
                            post.coverImage ||
                            "/assets/images/resources/resources-1.jpg"
                          }
                          alt={post.title}
                          className="img-fluid"
                        />
                      </Link>
                      <div className="resources-details">
                        <p className="mb-0">
                          {formatBlogDate(
                            post.publishedAt ?? post.createdAt
                          )}
                        </p>
                        <h4 className="mb-0">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-decoration-none text-dark"
                          >
                            {post.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex flex-column align-items-start gap-4 py-5">
                <h3 className="mb-0">
                  {posts.length === 0
                    ? "No articles yet"
                    : "No articles found"}
                </h3>
                <p className="fs-5 mb-0 text-opacity-70">
                  {posts.length === 0
                    ? "Published articles from the dashboard will appear here."
                    : `We couldn't find any insights matching “${query}”. Try a different keyword or clear your search.`}
                </p>
                {query ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setQuery("")}
                  >
                    <span className="btn-text">Clear search</span>
                    <iconify-icon
                      icon="lucide:arrow-up-right"
                      className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                    ></iconify-icon>
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        .blog-search-input:focus {
          box-shadow: none !important;
          outline: none;
        }
        .blog-search-input::-webkit-search-cancel-button {
          -webkit-appearance: none;
          appearance: none;
        }
      `}</style>
    </>
  );
}
