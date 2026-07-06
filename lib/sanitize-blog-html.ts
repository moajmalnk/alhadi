const ALLOWED_TAGS = new Set([
  "p",
  "br",
  "h1",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "blockquote",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "a",
  "img",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "colgroup",
  "col",
  "span",
  "div",
  "hr",
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "target", "rel", "title"]),
  img: new Set(["src", "alt", "title", "width", "height"]),
  td: new Set(["colspan", "rowspan", "style"]),
  th: new Set(["colspan", "rowspan", "style"]),
  col: new Set(["style", "span"]),
  span: new Set(["style"]),
  p: new Set(["style"]),
  h1: new Set(["style"]),
  h2: new Set(["style"]),
  h3: new Set(["style"]),
  h4: new Set(["style"]),
  div: new Set(["style"]),
  table: new Set(["style"]),
};

const SAFE_STYLE_PROPS = new Set([
  "text-align",
  "color",
  "background-color",
  "width",
  "min-width",
]);

function sanitizeStyle(value: string): string {
  return value
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const colon = part.indexOf(":");
      if (colon === -1) return null;
      const prop = part.slice(0, colon).trim().toLowerCase();
      const val = part.slice(colon + 1).trim();
      if (!SAFE_STYLE_PROPS.has(prop)) return null;
      if (/expression|url\s*\(|javascript:/i.test(val)) return null;
      return `${prop}: ${val}`;
    })
    .filter(Boolean)
    .join("; ");
}

function sanitizeHref(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^(https?:|mailto:|\/|#)/i.test(trimmed)) return trimmed;
  return null;
}

function sanitizeSrc(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^(https?:|\/|data:image\/)/i.test(trimmed)) return trimmed;
  return null;
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Lightweight allowlist sanitizer for TipTap HTML. */
export function sanitizeBlogHtml(html: string): string {
  if (!html || typeof html !== "string") return "";

  // Strip script/style tags and their contents entirely.
  let input = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const tagRe = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)\/?>/g;

  return input.replace(tagRe, (match, tagName: string, attrsRaw: string) => {
    const tag = tagName.toLowerCase();
    const isClosing = match.startsWith("</");
    const isSelfClosing = match.endsWith("/>") || tag === "br" || tag === "hr" || tag === "img";

    if (!ALLOWED_TAGS.has(tag)) return "";

    if (isClosing) return `</${tag}>`;

    const allowed = ALLOWED_ATTRS[tag];
    const attrs: string[] = [];

    if (allowed) {
      const attrRe =
        /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
      let attrMatch: RegExpExecArray | null;
      while ((attrMatch = attrRe.exec(attrsRaw)) !== null) {
        const name = attrMatch[1].toLowerCase();
        if (!allowed.has(name)) continue;
        let value = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";

        if (name === "href") {
          const safe = sanitizeHref(value);
          if (!safe) continue;
          value = safe;
          if (value.startsWith("http")) {
            attrs.push('target="_blank"', 'rel="noopener noreferrer"');
          }
        } else if (name === "src") {
          const safe = sanitizeSrc(value);
          if (!safe) continue;
          value = safe;
        } else if (name === "style") {
          const safe = sanitizeStyle(value);
          if (!safe) continue;
          value = safe;
        } else if (name === "target" || name === "rel") {
          continue;
        }

        attrs.push(`${name}="${escapeAttr(value)}"`);
      }
    }

    const attrStr = attrs.length ? ` ${attrs.join(" ")}` : "";
    if (isSelfClosing && (tag === "br" || tag === "hr" || tag === "img")) {
      return `<${tag}${attrStr} />`;
    }
    return `<${tag}${attrStr}>`;
  });
}
