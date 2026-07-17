import type { MetadataRoute } from "next";

import { client } from "@/sanity/lib/client";

import {
articlesQuery,
categoriesQuery,
} from "@/sanity/lib/queries";

const siteUrl =
process.env.NEXT_PUBLIC_SITE_URL ||
"https://tinysorted.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const articles =
await client.fetch(
articlesQuery
);

const categories =
await client.fetch(
categoriesQuery
);

const articleUrls =
articles.map(
(article: any) => ({
url: `${siteUrl}/article/${article.slug.current}`,


    lastModified:
      article.publishedAt,

    changeFrequency:
      "weekly" as const,

    priority: 0.8,
  })
);


const categoryUrls =
categories.map(
(category: any) => ({
url: `${siteUrl}/category/${category.slug.current}`,


    lastModified:
      new Date(),

    changeFrequency:
      "weekly" as const,

    priority: 0.7,
  })
);


return [
{
url: siteUrl,


  lastModified:
    new Date(),

  changeFrequency:
    "daily",

  priority: 1,
},

...categoryUrls,

...articleUrls,


];
}
