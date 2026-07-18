import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  article: any;
}

export default function HeroArticle({
  article,
}: Props) {
  if (!article) return null;

  const imageUrl = article?.mainImage
    ? urlFor(article.mainImage)
        .width(2200)
        .quality(100)
        .url()
    : null;

  return (
    <section
      className="
        mx-auto
        max-w-[1440px]

        px-6

        pt-8
        pb-16

        lg:pt-10
        lg:pb-20
      "
    >
      <Link
        href={`/article/${article.slug?.current}`}
        className="block"
      >
        <div
          className="
            grid

            items-center

            gap-10

            lg:grid-cols-[1.35fr_0.95fr]
            lg:gap-20
          "
        >
          {/* ====================================== */}
          {/* IMAGE */}
          {/* ====================================== */}

          <div
            className="
              overflow-hidden

              rounded-xl

              bg-neutral-200
            "
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={article.title}
                className="
                  h-[340px]

                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.02]

                  sm:h-[420px]

                  md:h-[520px]

                  lg:h-[660px]
                "
              />
            )}
          </div>

          {/* ====================================== */}
          {/* CONTENT */}
          {/* ====================================== */}

          <div
            className="
              flex
              h-full

              flex-col

              justify-center
            "
          >
            <p
              className="
                mb-5

                text-[11px]

                uppercase

                tracking-[0.30em]

                text-[#8C6A52]
              "
            >
              Featured Story
            </p>

            <h1
              className="
                max-w-[560px]

                text-[44px]

                font-light

                leading-[1.05]

                tracking-[-0.04em]

                text-neutral-900

                sm:text-[52px]

                lg:text-[74px]
              "
            >
              {article.title}
            </h1>

            <p
              className="
                mt-8

                max-w-[520px]

                text-[18px]

                leading-9

                text-neutral-600
              "
            >
              {article.excerpt}
            </p>

            {/* CTA */}

            <div className="mt-12">
              <span
                className="
                  inline-flex
                  items-center

                  gap-3

                  border-b

                  border-[#8C6A52]

                  pb-2

                  text-[13px]

                  font-medium

                  uppercase

                  tracking-[0.22em]

                  text-[#8C6A52]

                  transition-all

                  group-hover:gap-5
                "
              >
                Read Article

                <span
                  className="
                    text-lg
                    leading-none
                  "
                >
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}