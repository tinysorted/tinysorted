import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  article: any;
  active?: boolean;
}

export default function FeaturedCard({
  article,
  active = false,
}: Props) {
  if (!article) return null;

  const image =
    article.mainImage &&
    urlFor(article.mainImage)
      .width(1200)
      .height(1600)
      .quality(95)
      .url();

  return (
    <Link
      href={`/article/${article.slug.current}`}
      className="group block"
    >
      <article
        className={`
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-xl
          transition-all
          duration-500

          ${
            active
              ? "scale-100 opacity-100"
              : "scale-90 opacity-60 hover:opacity-80"
          }
        `}
      >
        {/* IMAGE */}

        <div className="relative aspect-[4/5] overflow-hidden">
          {image && (
            <img
              src={image}
              alt={article.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          )}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-8
            text-white
          "
        >
          {article.categories?.[0] && (
            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/70
              "
            >
              {article.categories[0].title}
            </p>
          )}

          <h3
            className="
              text-2xl
              font-light
              leading-tight
            "
          >
            {article.title}
          </h3>

          {active && article.excerpt && (
            <p
              className="
                mt-4
                line-clamp-3
                text-sm
                leading-7
                text-white/80
              "
            >
              {article.excerpt}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}