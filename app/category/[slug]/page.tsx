import Link from "next/link";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";

import {
  categoryQuery,
  categoriesQuery,
  articlesByCategoryQuery,
} from "@/sanity/lib/queries";

import { urlFor } from "@/sanity/lib/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories =
    await client.fetch(categoriesQuery);

  return categories.map(
    (category: any) => ({
      slug: category.slug.current,
    })
  );
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const category = await client.fetch(
    categoryQuery,
    { slug }
  );
   
  
  if (!category) {
    notFound();
  }

  const articles = await client.fetch(
    articlesByCategoryQuery,
    { slug }
  );

  return (
    <main className="bg-[#F7F6F3] min-h-screen">

      {/* Breadcrumb */}

      <section className="max-w-[1280px] mx-auto px-6 pt-12">
        <nav className="text-sm text-neutral-500">
          <Link
            href="/"
            className="hover:text-neutral-900"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span>{category.title}</span>
        </nav>
      </section>

      {/* Header */}

      <section
        className="
          max-w-[1280px]
          mx-auto
          px-6
          pt-10
          pb-16
        "
      >
        <p
          className="
            uppercase
            tracking-[0.2em]
            text-xs
            text-neutral-500
            mb-4
          "
        >
          Category
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-light
            tracking-[-0.03em]
            leading-tight
            mb-6
          "
        >
          {category.title}
        </h1>

        {category.description && (
          <p
            className="
              max-w-3xl
              text-lg
              leading-8
              text-neutral-600
            "
          >
            {category.description}
          </p>
        )}
      </section>

      {/* Articles */}

      <section
        className="
          max-w-[1280px]
          mx-auto
          px-6
          pb-28
        "
      >
        {articles.length === 0 ? (
          <div className="py-20">
            <h2 className="text-2xl font-light">
              No articles yet.
            </h2>

            <p className="mt-3 text-neutral-600">
              New content will appear here soon.
            </p>
          </div>
        ) : (
          <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-8
  "
>
            {articles.map(
              (article: any) => (
                <Link
                  key={article._id}
                  href={`/article/${article.slug.current}`}
                >
                  <article>
                    {article.mainImage && (
                      <img
                        src={urlFor(
                          article.mainImage
                        )
                          .width(1400)
                          .url()}
                        alt={
                          article.title
                        }
                       className="
w-full
aspect-[4/3]
object-cover
rounded-[28px]
transition
duration-500
hover:scale-[1.03]
"
                      />
                    )}

                    <h2
                      className="
                        mt-6
                        text-xl
                        font-light
                        leading-snug
                      "
                    >
                      {article.title}
                    </h2>

                    <p
                      className="
                        mt-3
                        text-neutral-600
                        leading-7
                      "
                    >
                      {article.excerpt}
                    </p>
                  </article>
                </Link>
              )
            )}
          </div>
        )}
      </section>

    </main>
  );
}