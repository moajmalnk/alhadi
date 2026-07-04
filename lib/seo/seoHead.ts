import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";

export type SeoHeadInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  /** Root layout only: sets default title + `%s | Brand` template. */
  isRoot?: boolean;
};

function truncateDescription(text: string, max = 160): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

export function seoHead({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors,
  isRoot = false,
}: SeoHeadInput): Metadata {
  const url = absoluteUrl(path);
  const desc = truncateDescription(description);
  const imageUrl = absoluteUrl(image || siteConfig.defaultOgImage);
  const authorList = authors?.length ? authors : [siteConfig.legalName];

  const images = [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          title,
          description: desc,
          url,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          images,
          publishedTime,
          modifiedTime,
          authors: authorList,
        }
      : {
          type: "website",
          title,
          description: desc,
          url,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          images,
        };

  return {
    metadataBase: new URL(siteConfig.url),
    title: isRoot
      ? {
          default: title,
          template: siteConfig.titleTemplate,
        }
      : title,
    description: desc,
    keywords: keywords?.length ? keywords : undefined,
    authors: authorList.map((name) => ({ name })),
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [imageUrl],
    },
    icons: {
      icon: {
        url: siteConfig.faviconPath,
        type: "image/jpeg",
      },
    },
  };
}
