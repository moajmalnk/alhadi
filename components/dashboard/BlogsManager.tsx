"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ConfirmDialog from "@/components/ConfirmDialog";
import Toast from "@/components/Toast";
import {
  FilterBar,
  FilterSelect,
  SearchBar,
} from "@/components/filters";
import BlogEditor from "@/components/dashboard/BlogEditor";
import {
  BLOG_STATUS_LABELS,
  BLOG_STATUSES,
  BlogPost,
  BlogStatus,
  formatBlogDate,
  formatBlogDateTime,
  slugify,
} from "@/lib/blogs";

type ToastState = {
  message: string;
  type: "success" | "error";
};

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  author: string;
  category: string;
  tags: string;
  status: BlogStatus;
};

const EMPTY_FORM: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  coverImage: "",
  content: "",
  author: "AL HADI Business Services",
  category: "",
  tags: "",
  status: "draft",
};

function toForm(post: BlogPost): FormState {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    content: post.content,
    author: post.author,
    category: post.category,
    tags: post.tags.join(", "),
    status: post.status,
  };
}

function parseTags(value: string): string[] {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function statusBadgeStyle(status: BlogStatus): React.CSSProperties {
  if (status === "published") {
    return { backgroundColor: "#198754", color: "#fff" };
  }
  return { backgroundColor: "#7BB8D9", color: "#fff" };
}

export default function BlogsManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [toast, setToast] = useState<ToastState | null>(null);
  const [mode, setMode] = useState<"list" | "create" | "edit">("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [slugManual, setSlugManual] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [coverUploading, setCoverUploading] = useState(false);
  const [coverDragOver, setCoverDragOver] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback(
    (message: string, type: ToastState["type"] = "success") => {
      setToast({ message, type });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to load blogs");
      const data = (await res.json()) as { posts: BlogPost[] };
      setPosts(data.posts ?? []);
    } catch {
      showToast("Could not load blogs.", "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    setMounted(true);
    void refresh();
  }, [refresh]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return posts.filter((post) => {
      if (statusFilter !== "all" && post.status !== statusFilter) return false;
      if (!query) return true;
      const haystack = [
        post.title,
        post.slug,
        post.excerpt,
        post.author,
        post.category,
        post.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [posts, searchQuery, statusFilter]);

  const openCreate = () => {
    setMode("create");
    setEditingId(null);
    setForm(EMPTY_FORM);
    setSlugManual(false);
  };

  const openEdit = (post: BlogPost) => {
    setMode("edit");
    setEditingId(post.id);
    setForm(toForm(post));
    setSlugManual(true);
  };

  const backToList = () => {
    setMode("list");
    setEditingId(null);
    setForm(EMPTY_FORM);
    setSlugManual(false);
  };

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "title" && !slugManual) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  };

  const uploadImage = async (file: File): Promise<string> => {
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/blogs/upload", {
      method: "POST",
      body,
    });
    const data = (await res.json()) as { url?: string; error?: string };
    if (!res.ok || !data.url) {
      throw new Error(data.error || "Upload failed");
    }
    return data.url;
  };

  const processCoverFile = async (file: File | null | undefined) => {
    if (!file || coverUploading) return;

    if (!file.type.startsWith("image/")) {
      showToast(
        "Please use an image file (JPEG, PNG, WebP, or GIF).",
        "error"
      );
      return;
    }

    setCoverUploading(true);
    try {
      const url = await uploadImage(file);
      updateField("coverImage", url);
      showToast("Cover image uploaded.");
    } catch {
      showToast("Could not upload cover image.", "error");
    } finally {
      setCoverUploading(false);
    }
  };

  const handleCoverInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    void processCoverFile(file);
  };

  const handleCoverDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setCoverDragOver(false);
    const file = event.dataTransfer.files?.[0];
    void processCoverFile(file);
  };

  const handleCoverPaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const items = event.clipboardData?.items;
    if (items) {
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          event.preventDefault();
          event.stopPropagation();
          void processCoverFile(item.getAsFile());
          return;
        }
      }
    }

    const files = event.clipboardData?.files;
    if (files?.length) {
      const image = Array.from(files).find((file) =>
        file.type.startsWith("image/")
      );
      if (image) {
        event.preventDefault();
        event.stopPropagation();
        void processCoverFile(image);
      }
    }
  };

  const clearCoverImage = () => {
    updateField("coverImage", "");
  };

  useEffect(() => {
    if (mode !== "create" && mode !== "edit") return;

    const onPaste = (event: ClipboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target?.closest(
          "input, textarea, select, [contenteditable='true'], .ProseMirror"
        )
      ) {
        return;
      }

      const items = event.clipboardData?.items;
      if (items) {
        for (const item of items) {
          if (item.type.startsWith("image/")) {
            event.preventDefault();
            void processCoverFile(item.getAsFile());
            return;
          }
        }
      }

      const files = event.clipboardData?.files;
      if (files?.length) {
        const image = Array.from(files).find((file) =>
          file.type.startsWith("image/")
        );
        if (image) {
          event.preventDefault();
          void processCoverFile(image);
        }
      }
    };

    document.addEventListener("paste", onPaste);
    return () => document.removeEventListener("paste", onPaste);
    // processCoverFile closes over latest state each render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, coverUploading]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      showToast("Title is required.", "error");
      return;
    }

    setSaving(true);
    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim() || slugify(form.title),
      excerpt: form.excerpt.trim(),
      coverImage: form.coverImage.trim(),
      content: form.content,
      author: form.author.trim(),
      category: form.category.trim(),
      tags: parseTags(form.tags),
      status: form.status,
    };

    try {
      const isEdit = mode === "edit" && editingId;
      const res = await fetch(
        isEdit ? `/api/blogs/${editingId}` : "/api/blogs",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = (await res.json()) as { post?: BlogPost; error?: string };
      if (!res.ok || !data.post) {
        throw new Error(data.error || "Save failed");
      }
      showToast(isEdit ? "Blog updated." : "Blog created.");
      await refresh();
      backToList();
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : "Could not save blog.",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  const requestDelete = (post: BlogPost) => {
    setDeleteTarget(post);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`/api/blogs/${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error || "Delete failed");
      }
      showToast("Blog deleted.");
      setDeleteConfirmOpen(false);
      setDeleteTarget(null);
      if (editingId === deleteTarget.id) backToList();
      await refresh();
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : "Could not delete blog.",
        "error"
      );
    }
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" || statusFilter !== "all";

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };

  if (!mounted || loading) {
    return <div className="dash-panel dash-empty">Loading blogs…</div>;
  }

  if (mode === "create" || mode === "edit") {
    return (
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
          <div>
            <p className="dash-label mb-1">Blogs</p>
            <h1 className="dash-page-title text-dark">
              {mode === "create" ? "New blog post" : "Edit blog post"}
            </h1>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary align-self-start"
            onClick={backToList}
          >
            ← Back to list
          </button>
        </div>

        <form onSubmit={handleSave} className="dash-panel">
          <div className="dash-panel-body d-flex flex-column gap-3">
            <div className="row g-3">
              <div className="col-lg-8">
                <label className="form-label" htmlFor="blog-title">
                  Title
                </label>
                <input
                  id="blog-title"
                  className="form-control"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-4">
                <span className="form-label d-block">Status</span>
                <div
                  className="dash-radio-group"
                  role="radiogroup"
                  aria-label="Status"
                >
                  {BLOG_STATUSES.map((status) => (
                    <label
                      key={status}
                      className="dash-radio-option"
                      htmlFor={`blog-status-${status}`}
                    >
                      <input
                        id={`blog-status-${status}`}
                        type="radio"
                        name="blog-status"
                        value={status}
                        checked={form.status === status}
                        onChange={() => updateField("status", status)}
                      />
                      <span>{BLOG_STATUS_LABELS[status]}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="col-lg-8">
                <label className="form-label" htmlFor="blog-slug">
                  Slug
                </label>
                <input
                  id="blog-slug"
                  className="form-control"
                  value={form.slug}
                  onChange={(e) => {
                    setSlugManual(true);
                    updateField("slug", slugify(e.target.value));
                  }}
                  placeholder="auto-generated-from-title"
                />
              </div>
              <div className="col-lg-4">
                <label className="form-label" htmlFor="blog-author">
                  Author
                </label>
                <input
                  id="blog-author"
                  className="form-control"
                  value={form.author}
                  onChange={(e) => updateField("author", e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label" htmlFor="blog-category">
                  Category
                </label>
                <input
                  id="blog-category"
                  className="form-control"
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  placeholder="e.g. Business Setup"
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label" htmlFor="blog-tags">
                  Tags
                </label>
                <input
                  id="blog-tags"
                  className="form-control"
                  value={form.tags}
                  onChange={(e) => updateField("tags", e.target.value)}
                  placeholder="Comma-separated tags"
                />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="blog-excerpt">
                  Excerpt
                </label>
                <textarea
                  id="blog-excerpt"
                  className="form-control"
                  rows={2}
                  value={form.excerpt}
                  onChange={(e) => updateField("excerpt", e.target.value)}
                  placeholder="Short summary shown on the blog listing and detail banner"
                />
              </div>
              <div className="col-12">
                <span className="form-label d-block">Cover image</span>
                <div
                  className={`blog-cover-dropzone${
                    coverDragOver ? " is-dragover" : ""
                  }${form.coverImage ? " has-image" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label="Cover image dropzone. Drop, click, or paste an image."
                  onClick={() => {
                    if (!coverUploading) coverInputRef.current?.click();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      if (!coverUploading) coverInputRef.current?.click();
                    }
                  }}
                  onDragEnter={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setCoverDragOver(true);
                  }}
                  onDragOver={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setCoverDragOver(true);
                  }}
                  onDragLeave={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (
                      !event.currentTarget.contains(
                        event.relatedTarget as Node | null
                      )
                    ) {
                      setCoverDragOver(false);
                    }
                  }}
                  onDrop={handleCoverDrop}
                  onPaste={handleCoverPaste}
                >
                  {form.coverImage ? (
                    <>
                      <img
                        src={form.coverImage}
                        alt="Cover preview"
                        className="blog-cover-dropzone-preview"
                      />
                      <div className="blog-cover-dropzone-actions">
                        <button
                          type="button"
                          className="btn btn-sm btn-dark"
                          disabled={coverUploading}
                          onClick={(event) => {
                            event.stopPropagation();
                            coverInputRef.current?.click();
                          }}
                        >
                          Replace
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          disabled={coverUploading}
                          onClick={(event) => {
                            event.stopPropagation();
                            clearCoverImage();
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="blog-cover-dropzone-empty">
                      <span className="blog-cover-dropzone-title">
                        {coverUploading
                          ? "Uploading…"
                          : coverDragOver
                            ? "Drop image here"
                            : "Drag & drop cover image"}
                      </span>
                      <span className="blog-cover-dropzone-hint">
                        or click to browse · paste with Ctrl+V / ⌘V
                      </span>
                    </div>
                  )}
                  {coverUploading && form.coverImage ? (
                    <div className="blog-cover-dropzone-overlay">
                      Uploading…
                    </div>
                  ) : null}
                </div>
                <input
                  ref={coverInputRef}
                  id="blog-cover"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="d-none"
                  onChange={handleCoverInputChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Content</label>
                <BlogEditor
                  content={form.content}
                  onChange={(html) => updateField("content", html)}
                  onUploadImage={uploadImage}
                />
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 justify-content-end pt-2 border-top">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={backToList}
                disabled={saving}
              >
                Cancel
              </button>
              {mode === "edit" && editingId ? (
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    const post = posts.find((item) => item.id === editingId);
                    if (post) requestDelete(post);
                  }}
                  disabled={saving}
                >
                  Delete
                </button>
              ) : null}
              <button
                type="submit"
                className="btn btn-dark"
                disabled={saving}
              >
                {saving ? "Saving…" : "Save post"}
              </button>
            </div>
          </div>
        </form>

        <ConfirmDialog
          isOpen={deleteConfirmOpen}
          title="Delete blog post"
          message={`Delete “${deleteTarget?.title ?? "this post"}”? This cannot be undone.`}
          confirmLabel="Delete"
          variant="danger"
          onConfirm={() => void handleDeleteConfirm()}
          onCancel={() => {
            setDeleteConfirmOpen(false);
            setDeleteTarget(null);
          }}
        />

        <Toast
          message={toast?.message ?? ""}
          type={toast?.type}
          isVisible={toast !== null}
          onClose={hideToast}
        />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
        <div>
          <p className="dash-label mb-1">Content</p>
          <h1 className="dash-page-title text-dark">Blogs</h1>
          <p className="text-muted mb-0">
            Create and publish articles that appear on the public blog.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span
            className="badge"
            style={{ backgroundColor: "var(--bs-secondary)", color: "#fff" }}
          >
            {posts.length} total
          </span>
          <button type="button" className="btn btn-dark" onClick={openCreate}>
            New post
          </button>
        </div>
      </div>

      <FilterBar
        showClear={hasActiveFilters}
        onClear={clearFilters}
        end={
          <FilterSelect
            id="blog-status-filter"
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { value: "all", label: "All statuses" },
              ...BLOG_STATUSES.map((status) => ({
                value: status,
                label: BLOG_STATUS_LABELS[status],
              })),
            ]}
          />
        }
      >
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search title, category, tags…"
          id="blog-search"
        />
      </FilterBar>

      {filteredPosts.length === 0 ? (
        <div className="dash-panel dash-empty">
          {posts.length === 0
            ? "No blog posts yet. Create your first article."
            : "No posts match your filters."}
        </div>
      ) : (
        <div className="dash-panel">
          <div className="dash-lead-grid">
            {filteredPosts.map((post) => (
              <div key={post.id} className="dash-lead-card">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt=""
                    className="blog-card-thumb"
                  />
                ) : (
                  <div className="blog-card-thumb blog-card-thumb-empty">
                    No image
                  </div>
                )}
                <div className="dash-lead-card-top">
                  <span className="dash-lead-card-name">{post.title}</span>
                  <span
                    className="badge flex-shrink-0"
                    style={statusBadgeStyle(post.status)}
                  >
                    {BLOG_STATUS_LABELS[post.status]}
                  </span>
                </div>
                <div className="dash-lead-card-meta">
                  {post.category || "Uncategorized"}
                  {" · "}
                  {formatBlogDate(post.publishedAt ?? post.createdAt)}
                </div>
                <div className="dash-lead-card-meta">
                  Updated {formatBlogDateTime(post.updatedAt)}
                </div>
                <div className="d-flex gap-2 mt-1">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => openEdit(post)}
                  >
                    Edit
                  </button>
                  {post.status === "published" ? (
                    <a
                      href={`/blog/${post.slug}`}
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  ) : null}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => requestDelete(post)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        title="Delete blog post"
        message={`Delete “${deleteTarget?.title ?? "this post"}”? This cannot be undone.`}
        confirmLabel="Delete"
        variant="danger"
        onConfirm={() => void handleDeleteConfirm()}
        onCancel={() => {
          setDeleteConfirmOpen(false);
          setDeleteTarget(null);
        }}
      />

      <Toast
        message={toast?.message ?? ""}
        type={toast?.type}
        isVisible={toast !== null}
        onClose={hideToast}
      />
    </div>
  );
}
