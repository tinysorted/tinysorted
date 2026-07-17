import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";

import {
  authorQuery,
  authorsQuery,
  articlesByAuthorQuery,
} from "@/sanity/lib/queries";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const authors = await client.fetch(authorsQuery);

  return authors.map((author: any) => ({
    slug: author.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const author = await client.fetch(authorQuery, {
    slug,
  });

  if (!author) {
    return {};
  }

  return {
    title:
      author.seoTitle ??
      `${author.name} | TinySorted`,

    description:
      author.seoDescription ??
      author.bio,
  };
}

export default async function AuthorPage({
  params,
}: Props) {
  const { slug } = await params;

  const author = await client.fetch(authorQuery, {
    slug,
  });

  if (!author) {
    notFound();
  }

  const articles = await client.fetch(
    articlesByAuthorQuery,
    {
      slug,
    }
  );

  return (
    <main className="bg-[#F7F6F3]">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

          {/* Avatar */}

          <div>

            {author.image?.asset?.url && (

              <Image
                src={author.image.asset.url}
                alt={author.name}
                width={220}
                height={220}
                priority
                unoptimized
                className="
                  h-[220px]
                  w-[220px]
                  rounded-full
                  object-cover
                "
              />

            )}

          </div>

          {/* Info */}

          <div>

            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.25em]
                text-neutral-500
              "
            >
              Author
            </p>

            <h1
              className="
                text-6xl
                font-light
                tracking-tight
              "
            >
              {author.name}
            </h1>

            {author.role && (

              <p
                className="
                  mt-4
                  text-lg
                  text-neutral-600
                "
              >
                {author.role}
              </p>

            )}

            {author.bio && (

              <p
                className="
                  mt-8
                  max-w-3xl
                  leading-8
                  text-neutral-700
                "
              >
                {author.bio}
              </p>

            )}

            <div className="mt-10 flex flex-wrap gap-6">

              {author.website && (
                <Link
                  href={author.website}
                  target="_blank"
                  className="hover:underline"
                >
                  Website
                </Link>
              )}

              {author.linkedin && (
                <Link
                  href={author.linkedin}
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              )}

              {author.twitter && (
                <Link
                  href={author.twitter}
                  target="_blank"
                  className="hover:underline"
                >
                  X
                </Link>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* ARTICLES */}

      <section className="max-w-6xl mx-auto px-6 pb-32">

        <h2
          className="
            mb-12
            text-4xl
            font-light
          "
        >
          Articles by {author.name}
        </h2>

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {articles.map((article: any) => (

            <Link
              key={article._id}
              href={`/article/${article.slug.current}`}
            >

              <article className="group">

                {article.mainImage?.asset?.url && (

                  <Image
                    src={article.mainImage.asset.url}
                    alt={article.title}
                    width={800}
                    height={600}
                    unoptimized
                    className="
                      aspect-[4/3]
                      w-full
                      rounded-[24px]
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                )}

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-light
                    leading-snug
                  "
                >
                  {article.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-neutral-600
                  "
                >
                  {article.excerpt}
                </p>

              </article>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}