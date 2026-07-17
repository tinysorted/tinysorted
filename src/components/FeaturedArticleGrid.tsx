import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  articles: any[];
}

export default function FeaturedArticleGrid({
  articles,
}: Props) {
  if (!articles?.length) return null;

  const featured = articles[0];
  const sidebar = articles.slice(1, 4);

  return (
    <section
      className="
        mx-auto
        max-w-[1280px]

        px-5
        py-14

        md:px-6
        md:py-20

        lg:py-24
      "
    >
      {/* Heading */}

      <div
        className="
          mb-8

          md:mb-14
        "
      >
        <p
          className="
            mb-3

            text-[11px]
            uppercase
            tracking-[0.2em]

            text-neutral-500

            md:text-xs
          "
        >
          Curated Stories
        </p>

        <h2
          className="
            text-3xl
            font-light
            leading-tight
            tracking-[-0.03em]

            text-neutral-900

            sm:text-4xl
            md:text-5xl
          "
        >
          Thoughtful ideas for calmer living.
        </h2>
      </div>

      {/* Content */}

      <div
        className="
          grid

          gap-8

          lg:grid-cols-12
        "
      >
        {/* Featured */}

        <Link
          href={`/article/${featured.slug?.current}`}
          className="lg:col-span-7"
        >
          <article>
            <div
              className="
                overflow-hidden
                rounded-[28px]

                md:rounded-[32px]
              "
            >
              <img
                src={urlFor(featured.mainImage)
                  .width(1600)
                  .url()}
                alt={featured.title}
                className="
                  w-full

                  h-[260px]

                  object-cover

                  transition
                  duration-500

                  hover:scale-[1.02]

                  sm:h-[340px]
                  md:h-[420px]
                  lg:h-[640px]
                "
              />
            </div>

            <h3
              className="
                mt-5

                text-2xl
                font-light
                leading-tight

                text-neutral-900

                sm:text-3xl
                md:mt-8
                md:text-4xl
              "
            >
              {featured.title}
            </h3>

            <p
              className="
                mt-3

                text-base
                leading-7

                text-neutral-600

                md:mt-4
                md:leading-8
              "
            >
              {featured.excerpt}
            </p>
          </article>
        </Link>

        {/* Sidebar */}

        <div
          className="
            flex
            flex-col

            gap-6

            lg:col-span-5
            md:gap-8
          "
        >
          {sidebar.map((article) => (
            <Link
              key={article._id}
              href={`/article/${article.slug?.current}`}
            >
              <article
                className="
                  flex
                  items-center

                  gap-4

                  md:gap-5
                "
              >
                <img
                  src={urlFor(article.mainImage)
                    .width(800)
                    .url()}
                  alt={article.title}
                  className="
                    h-[110px]
                    w-[110px]

                    flex-shrink-0

                    rounded-[20px]

                    object-cover

                    sm:h-[120px]
                    sm:w-[120px]

                    md:h-[140px]
                    md:w-[140px]
                    md:rounded-[24px]
                  "
                />

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-lg
                      font-medium
                      leading-snug

                      text-neutral-900

                      md:text-xl
                    "
                  >
                    {article.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-6

                      text-neutral-600

                      line-clamp-2
                    "
                  >
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}