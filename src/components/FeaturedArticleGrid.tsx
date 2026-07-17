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
    <section className="max-w-[1280px] mx-auto px-6 py-24">

      <div className="mb-14">
        <p
          className="
            uppercase
            tracking-[0.2em]
            text-xs
            text-neutral-500
            mb-3
          "
        >
          Curated Stories
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-light
            text-neutral-900
          "
        >
          Thoughtful ideas for calmer living.
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">

        {/* Featured */}

        <Link
          href={`/article/${featured.slug?.current}`}
          className="lg:col-span-7"
        >
          <article>
            <div
              className="
                overflow-hidden
                rounded-[32px]
              "
            >
              <img
                src={urlFor(featured.mainImage)
                  .width(1600)
                  .url()}
                alt={featured.title}
                className="
                  w-full
                  h-[640px]
                  object-cover
                  transition
                  duration-500
                  hover:scale-[1.02]
                "
              />
            </div>

            <h3
              className="
                mt-8
                text-3xl
                md:text-4xl
                font-light
                leading-tight
              "
            >
              {featured.title}
            </h3>

            <p
              className="
                mt-4
                text-neutral-600
                leading-8
              "
            >
              {featured.excerpt}
            </p>
          </article>
        </Link>

        {/* Sidebar */}

        <div className="lg:col-span-5 flex flex-col gap-8">
          {sidebar.map((article) => (
            <Link
              key={article._id}
              href={`/article/${article.slug?.current}`}
            >
              <article
                className="
                  flex
                  gap-5
                  items-center
                "
              >
                <img
                  src={urlFor(article.mainImage)
                    .width(800)
                    .url()}
                  alt={article.title}
                  className="
                    w-[140px]
                    h-[140px]
                    rounded-[24px]
                    object-cover
                    flex-shrink-0
                  "
                />

                <div>
                  <h3
                    className="
                      text-xl
                      leading-snug
                      font-medium
                    "
                  >
                    {article.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
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