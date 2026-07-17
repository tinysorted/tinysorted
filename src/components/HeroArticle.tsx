import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  article: any;
}

export default function HeroArticle({
  article,
}: Props) {
  if (!article) return null;

  const imageUrl =
    article?.mainImage
      ? urlFor(article.mainImage)
          .width(1600)
          .url()
      : null;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-14">
      <Link
        href={`/article/${article.slug?.current}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="overflow-hidden rounded-[32px] bg-neutral-200">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-[500px] object-cover"
              />
            )}
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-4">
              Featured Story
            </p>

            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-neutral-900">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {article.excerpt}
            </p>
          </div>

        </div>
      </Link>
    </section>
  );
}