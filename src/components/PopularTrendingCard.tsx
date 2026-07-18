import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  article: any;
}

export default function PopularTrendingCard({
  article,
}: Props) {
  if (!article) return null;

  return (
    <Link
      href={`/article/${article.slug.current}`}
      className="
        group
        block
        w-full
      "
    >
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden

          rounded-[28px]

          bg-[#F8F5EF]

          shadow-[0_20px_50px_rgba(0,0,0,0.12)]

          transition-all
          duration-500

          group-hover:-translate-y-2

          group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
        "
      >

        {/* ====================================== */}
        {/* IMAGE */}
        {/* ====================================== */}

        {article.mainImage?.asset && (
          <div
            className="
              relative

              aspect-[4/5]

              overflow-hidden
            "
          >
            <Image
              src={urlFor(article.mainImage)
                .width(900)
                .height(1100)
                .quality(100)
                .url()}
              alt={
                article.mainImage.alt ??
                article.title ??
                "Article image"
              }
              fill
              sizes="
                (max-width:768px) 100vw,
                380px
              "
              className="
                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
              "
            />
          </div>
        )}


        {/* ====================================== */}
        {/* CONTENT */}
        {/* ====================================== */}

        <div
          className="
            flex
            flex-1
            flex-col

            p-7
          "
        >

          {/* CATEGORY */}

          <p
            className="
              text-[11px]

              uppercase

              tracking-[0.22em]

              text-[#8C6A52]
            "
          >
            {article.categories?.[0]?.title ??
              "Home"}
          </p>


          {/* TITLE */}

          <h3
            className="
              mt-4

              line-clamp-2

              text-[26px]

              font-light

              leading-tight

              text-neutral-900
            "
          >
            {article.title}
          </h3>


          {/* EXCERPT */}

          <p
            className="
              mt-4

              line-clamp-3

              text-[15px]

              leading-7

              text-neutral-600
            "
          >
            {article.excerpt ??
              "Read the full story."}
          </p>


          {/* DATE */}

          <div
            className="
              mt-auto

              pt-8

              text-sm

              text-neutral-500
            "
          >
            {article.publishedAt &&
              new Date(
                article.publishedAt
              ).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
          </div>

        </div>

      </article>
    </Link>
  );
}