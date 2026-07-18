import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  articles: any[];
  settings?: any;
}

export default function FeaturedArticleGrid({
  articles,
  settings,
}: Props) {
  if (!articles?.length) return null;

  const curated = settings?.curatedStories;

  return (
    <section
      className="
        relative
        overflow-hidden

        py-20
        md:py-28
      "
    >
      {/* ====================================== */}
      {/* BACKGROUND */}
      {/* ====================================== */}

      <div className="absolute inset-0">
        {curated?.backgroundImage ? (
          <img
            src={urlFor(curated.backgroundImage)
              .width(2600)
              .height(1500)
              .fit("crop")
              .quality(100)
              .url()}
            alt={
              curated.backgroundImage.alt ??
              "Curated Stories Background"
            }
            className="
              absolute
              inset-0

              h-full
              w-full

              object-cover
              object-center

              scale-[1.01]
            "
          />
        ) : (
          <div className="absolute inset-0 bg-[#4d3b2b]" />
        )}

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-[#3d2e22]/45
            via-[#4d3b2b]/40
            to-[#4d3b2b]/55
          "
        />

        {/* Soft Light */}

        <div
          className="
            absolute
            inset-0

            bg-white/5
          "
        />
      </div>

      {/* ====================================== */}
      {/* CONTENT */}
      {/* ====================================== */}

      <div
        className="
          relative

          mx-auto
          max-w-[1280px]

          px-5
          md:px-6
        "
      >
        {/* Header */}

        <div
          className="
            mb-14

            flex
            flex-col

            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                mb-4

                text-xs

                uppercase

                tracking-[0.22em]

                text-white/70
              "
            >
              Journal
            </p>

            <h2
              className="
                text-4xl
                font-light

                leading-none

                text-white

                md:text-6xl
              "
            >
              {curated?.headline ??
                "Curated Stories"}
            </h2>

            <p
              className="
                mt-6

                max-w-xl

                text-lg

                leading-8

                text-white/85
              "
            >
              {curated?.subheadline ??
                "Thoughtful reads to inspire a calmer, simpler, and beautifully organized home."}
            </p>
          </div>

          </div>

        {/* ====================================== */}
        {/* CARDS */}
        {/* ====================================== */}

        <div
          className="
            grid

            gap-6

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {articles.slice(0, 4).map((article) => (
            <Link
              key={article._id}
              href={`/article/${article.slug.current}`}
              className="group"
            >
              <article
                className="
                  overflow-hidden

                  rounded-[26px]

                  bg-[#F8F5EF]

                  shadow-[0_25px_60px_rgba(0,0,0,0.12)]

                  transition-all
                  duration-500

                  group-hover:-translate-y-2
                  group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]
                "
              >
                {/* IMAGE */}

                <div className="overflow-hidden">
                  <img
                    src={urlFor(article.mainImage)
                      .width(900)
                      .height(1100)
                      .quality(100)
                      .url()}
                    alt={article.title}
                    className="
                      h-[300px]
                      md:h-[330px]

                      w-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="p-7">
                  <p
                    className="
                      text-[11px]

                      uppercase

                      tracking-[0.18em]

                      text-[#8E6C52]
                    "
                  >
                    {article.categories?.[0]?.title ??
                      "Home"}
                  </p>

                  <h3
                    className="
                      mt-4

                      text-[30px]

                      font-light

                      leading-tight

                      text-neutral-900
                    "
                  >
                    {article.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      line-clamp-3

                      leading-7

                      text-neutral-600
                    "
                  >
                    {article.excerpt}
                  </p>

                  <div
                    className="
                      mt-8

                      text-sm

                      text-neutral-500
                    "
                  >
                    {new Date(
                      article.publishedAt
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}