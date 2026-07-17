import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/ReadingProgress";
import Script from "next/script";
import { PortableText } from "@portabletext/react";
import TableOfContents from "@/components/TableOfContents";
import { client } from "@/sanity/lib/client";
import {
  articleQuery,
  relatedArticlesQuery,
} from "@/sanity/lib/queries";
import NewsletterSection from "@/components/NewsletterSection";
import { urlFor } from "@/sanity/lib/image";
import {
  portableTextComponents,
} from "@/components/PortableTextComponents";
import AestheticVideo from "@/components/AestheticVideo";
import RelatedArticles from "@/components/RelatedArticles";
import ShareBar from "@/components/ShareBar";
import MobileTOC from "@/components/MobileTOC";
import ArticleFaq from "@/components/article/ArticleFaq";
import AuthorCard from "@/components/AuthorCard";
import { generateFaqSchema } from "@/lib/faqSchema";
import AffiliateProducts from "@/components/article/AffiliateProducts";



interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await client.fetch(`
    *[_type == "article"]{
      "slug": slug.current
    }
  `);

  return articles;
}

function calculateReadingTime(
  body: any[]
) {
  if (!body) return 1;

  const text = body
    .filter(
      (block) =>
        block._type === "block"
    )
    .map((block) =>
      block.children
        ?.map(
          (child: any) => child.text
        )
        .join(" ")
    )
    .join(" ");

  const words =
    text.split(/\s+/).length;

  return Math.max(
    1,
    Math.ceil(words / 200)
  );
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = await client.fetch(
    articleQuery,
    { slug }
  );

const faqSchema =
  article?.faqs?.items?.length
    ? generateFaqSchema(
        article.faqs.items
      )
    : null; 
  const faqJsonLd =
  article?.faqs?.length
    ? {
        "@context":
          "https://schema.org",

        "@type":
          "FAQPage",

        mainEntity:
          article.faqs.map(
            (faq: any) => ({
              "@type":
                "Question",

              name:
                faq.question,

              acceptedAnswer:
                {
                  "@type":
                    "Answer",

                  text:
                    faq.answer,
                },
            })
          ),
      }
    : null;
  if (!article) {
    notFound();
  }

  const categorySlugs =
    article.categories?.map(
      (category: any) =>
        category.slug?.current
    ) || [];

  const relatedArticles =
    await client.fetch(
      relatedArticlesQuery,
      {
        slug,
        categories: categorySlugs,
      }
    );

  const imageUrl = article.mainImage
    ? urlFor(article.mainImage)
        .width(1600)
        .url()
    : null;

  const readingTime =
    calculateReadingTime(
      article.body
    );

  const publishedDate =
    article.publishedAt
      ? new Date(
          article.publishedAt
        ).toLocaleDateString(
          "en-GB",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        )
      : null;

  return (
    <main className="bg-[#F7F6F3] min-h-screen">
     <ReadingProgress />
     <Script
  id="article-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context":
          "https://schema.org",

        "@type":
          "Article",

        headline:
          article.title,

        description:
          article.excerpt,

        datePublished:
          article.publishedAt,

        dateModified:
          article.publishedAt,

        articleSection:
          article
            .categories?.[0]
            ?.title ||
          "Home Organization",

        author: {
          "@type":
            "Person",

          name:
            article.author
              ?.name ||
            "Tinysorted",
        },

        publisher: {
          "@type":
            "Organization",

          name:
            "Tinysorted",
        },

        image: imageUrl
          ? [imageUrl]
          : [],

        mainEntityOfPage:
          {
            "@type":
              "WebPage",

            "@id":
              `https://tinysorted.com/article/${slug}`,
          },
      },

      {
        "@context":
          "https://schema.org",

        "@type":
          "BreadcrumbList",

        itemListElement: [
          {
            "@type":
              "ListItem",

            position: 1,

            name: "Home",

            item:
              "https://tinysorted.com",
          },

          {
            "@type":
              "ListItem",

            position: 2,

            name: "Article",

            item:
              "https://tinysorted.com/article",
          },

          {
            "@type":
              "ListItem",

            position: 3,

            name:
              article.title,

            item:
              `https://tinysorted.com/article/${slug}`,
          },
        ],
      },

      ...(article?.faqs
        ?.items?.length
        ? [
            {
              "@context":
                "https://schema.org",

              "@type":
                "FAQPage",

              mainEntity:
                article.faqs.items.map(
                  (
                    faq: any
                  ) => ({
                    "@type":
                      "Question",

                    name:
                      faq.question,

                    acceptedAnswer:
                      {
                        "@type":
                          "Answer",

                        text:
                          faq.answer,
                      },
                  })
                ),
            },
          ]
        : []),
    ]),
  }}
/>

      <article
        className="
           max-w-[1280px]
          mx-auto
          px-8
          py-20
        "
      >
        {/* Breadcrumb */}

        <nav className="mb-10 text-sm text-neutral-500">
          <Link
            href="/"
            className="hover:text-neutral-900"
          >
            Home
          </Link>

          <span className="mx-2">
            /
          </span>

          <span>
            Article
          </span>
        </nav>

        {/* Categories */}

        {article.categories?.length >
          0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {article.categories.map(
              (
                category: any
              ) => (
                <Link
                  key={
                    category._id
                  }
                  href={`/category/${category.slug.current}`}
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                    hover:text-neutral-900
                    transition
                  "
                >
                  {
                    category.title
                  }
                </Link>
              )
            )}
          </div>
        )}

        {/* Header */}

        <header className="max-w-4xl">
          <h1
            className="
              text-5xl
              md:text-7xl
              font-light
              leading-[1.05]
              tracking-[-0.03em]
              text-neutral-900
            "
          >
            {article.title}
          </h1>

          <p
            className="
              mt-4
              text-xl
              leading-9
              text-neutral-600
              max-w-3xl
            "
          >
            {article.excerpt}
          </p>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-6
              text-sm
              text-neutral-500
            "
          >
            {publishedDate && (
              <span>
                {publishedDate}
              </span>
            )}

            <span>
              {readingTime} min
              read
            </span>
          </div>
        </header>

       {/* Hero Image */}

{imageUrl && (
  <div
  className="
    overflow-hidden
    rounded-[36px]
    mt-10 mb-12
    max-w-[1240px]
    mx-auto
  "
>
          
  <img
  src={imageUrl}
  alt={
    article.mainImage?.alt ||
    article.title
  }
  className="
    w-full
    h-[420px]
    lg:h-[500px]
    object-cover
    object-center
  "
/>
          </div>
        )}

       <MobileTOC
  body={article.body}
/>

     {/* Content+TOC */}
  
 <div
  className="
    mt-20
    xl:grid
    xl:grid-cols-[280px_minmax(0,920px)_80px]
    gap-20
    items-start
    justify-center
  "
>
  
  <TableOfContents body={article.body} />


<div
  className="
    prose
    prose-neutral
    prose-lg
    max-w-none
  "
>
  <PortableText
    value={article.body}
    components={portableTextComponents}
  />
  
  {/* Video */}

        {article
          .aestheticVideo
          ?.asset?.url && (
          <AestheticVideo
            videoUrl={
              article
                .aestheticVideo
                .asset.url
            }
          />
        )}
</div>
<ShareBar
  title={article.title}
/>
</div>

{/* Author */}
{article.author && (
  <div className="max-w-2xl mx-auto mt-10">
    <AuthorCard author={article.author} />
  </div>
)}

{/* Affiliate Products */}

<div className="max-w-[920px] mx-auto mt-20">
  <AffiliateProducts
    products={article.recommendedProducts}
  />
</div>

{/* FAQ */}
{article.faqs?.items?.length > 3 && (
  <ArticleFaq
    faqs={article.faqs.items}
  />
)}

{/* Newsletter */}
<NewsletterSection />

{/* Related Articles */}
<div className="mt-24">
  <RelatedArticles
    articles={relatedArticles}
  />
</div>
      </article>
    </main>
  );
}
export async function generateMetadata({
params,
}: {
params: Promise<{
slug: string;
}>;
}) {
const { slug } =
await params;

const article =
await client.fetch(
articleQuery,
{ slug }
);

if (!article) {
return {};
}

return {
title:
article.title,


description:
  article.excerpt,

openGraph: {
  title:
    article.title,

  description:
    article.excerpt,

  images: [
    `/article/${slug}/opengraph-image`,
  ],
},

twitter: {
  card:
    "summary_large_image",

  title:
    article.title,

  description:
    article.excerpt,

  images: [
    `/article/${slug}/opengraph-image`,
  ],
},

};
}
