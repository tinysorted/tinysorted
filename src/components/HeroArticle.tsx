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
        .width(1600)
        .quality(90)
        .url()
    : null;

  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-5
        pt-8
        pb-10

        md:px-6
        md:pt-10
        md:pb-14
      "
    >
      <Link href={`/article/${article.slug?.current}`}>
        <div
          className="
            grid
            gap-8
            items-center

            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* IMAGE */}

          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-neutral-200

              md:rounded-[32px]
            "
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={article.title}
                className="
                  h-[260px]
                  w-full
                  object-cover

                  sm:h-[320px]
                  md:h-[420px]
                  lg:h-[500px]
                "
              />
            )}
          </div>

          {/* CONTENT */}

          <div>
            <p
              className="
                mb-3

                text-[11px]
                uppercase
                tracking-[0.25em]

                text-neutral-500

                md:mb-4
                md:text-xs
              "
            >
              Featured Story
            </p>

            <h1
              className="
                text-3xl
                font-light
                leading-tight
                tracking-[-0.03em]

                text-neutral-900

                sm:text-4xl
                lg:text-6xl
              "
            >
              {article.title}
            </h1>

            <p
              className="
                mt-5

                text-base
                leading-7

                text-neutral-600

                md:mt-6
                md:text-lg
                md:leading-8
              "
            >
              {article.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}