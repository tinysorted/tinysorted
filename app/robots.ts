import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://tinysorted.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/studio/",
          "/admin/",
          "/_next/",
        ],
      },
    ],

    sitemap: [
  `${baseUrl}/sitemap.xml`,
  `${baseUrl}/rss.xml`,
],
    host: baseUrl,
  };
}