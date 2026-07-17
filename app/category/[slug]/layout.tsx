import type { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { categoryQuery } from "@/sanity/lib/queries";

interface Props {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://tinysorted.com";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const category = await client.fetch(
    categoryQuery,
    { slug }
  );

  if (!category) {
    return {
      title: "Category Not Found | Tinysorted",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const categoryUrl = `${siteUrl}/category/${slug}`;

  return {
    title: `${category.title}`,

    description:
      category.description ||
      `Browse articles about ${category.title} on Tinysorted.`,

    alternates: {
      canonical: categoryUrl,
    },

    openGraph: {
      title: category.title,

      description:
        category.description ||
        `Browse articles about ${category.title} on Tinysorted.`,

      url: categoryUrl,

      siteName: "Tinysorted",

      type: "website",

      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: category.title,

      description:
        category.description ||
        `Browse articles about ${category.title} on Tinysorted.`,

      images: [
        `${siteUrl}/og-image.jpg`,
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CategoryLayout({
  children,
}: Props) {
  return <>{children}</>;
}