import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  articles: any[];
}

export default function ArticleGrid({ articles }: Props) {
  if (!articles?.length) return null;

  return (
    <div
      className="
        grid
        gap-10
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {articles.map((article) => (
        <Link
          key={article._id}
          href={`/article/${article.slug?.current}`}
          className="group"
        >
          <article className="flex flex-col h-full">

            {/* IMAGE FIX (ANTI PECAH) */}
            {article.mainImage?.asset && (
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[28px]">
                <Image
                  src={urlFor(article.mainImage)
                    .width(1200)
                    .height(900)
                    .fit("crop")
                    .url()}
                  alt={article.title}
                  fill
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-[1.05]
                  "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="flex flex-col flex-1">
              <h3
                className="
                  mt-6
                  text-2xl
                  font-light
                  leading-snug
                  line-clamp-2
                "
              >
                {article.title}
              </h3>

              <p
                className="
                  mt-3
                  text-neutral-600
                  leading-7
                  line-clamp-3
                "
              >
                {article.excerpt}
              </p>
            </div>

          </article>
        </Link>
      ))}
    </div>
  );
}