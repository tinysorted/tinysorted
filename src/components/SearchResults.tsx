import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Props {
articles: any[];
}

export default function SearchResults({
articles,
}: Props) {
if (!articles?.length) {
return ( <div className="py-20 text-center text-neutral-500">
No articles found. </div>
);
}

return ( <div className="grid md:grid-cols-2 gap-10">
{articles.map((article) => (
<Link
key={article._id}
href={`/article/${article.slug.current}`}
> <article>


        {article.mainImage && (
          <img
            src={urlFor(article.mainImage)
              .width(1200)
              .url()}
            alt={article.title}
            className="
              w-full
              h-[320px]
              rounded-[28px]
              object-cover
            "
          />
        )}

        <h2
          className="
            mt-5
            text-2xl
            font-light
            leading-snug
          "
        >
          {article.title}
        </h2>

        <p
          className="
            mt-3
            text-neutral-600
            leading-7
          "
        >
          {article.excerpt}
        </p>

      </article>
    </Link>
  ))}
</div>

);
}
