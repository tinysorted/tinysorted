import type { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { articleQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = await client.fetch(
    articleQuery,
    { slug }
  );

  if (!article) {
    return {
      title:
        "Article Not Found | Tinysorted",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const imageUrl = article.mainImage
    ? urlFor(article.mainImage)
        .width(1200)
        .height(630)
        .url()
    : "https://tinysorted.com/og-image.jpg";

  const url = `https://tinysorted.com/article/${slug}`;

  return {
    title: article.title,

    description:
      article.excerpt ||
      "Sustainable small-space living and organization inspiration.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: article.title,

      description:
        article.excerpt ||
        "Sustainable small-space living and organization inspiration.",

      url,

      siteName: "Tinysorted",

      type: "article",

      publishedTime:
        article.publishedAt,

      modifiedTime:
        article.publishedAt,

      section:
        article.categories?.[0]
          ?.title ||
        "Home Organization",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title: article.title,

      description:
        article.excerpt ||
        "Sustainable small-space living and organization inspiration.",

      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-image-preview":
          "large",

        "max-video-preview":
          -1,

        "max-snippet":
          -1,
      },
    },
  };
}

export default function ArticleLayout({
  children,
}: Props) {
  return <>{children}</>;
}