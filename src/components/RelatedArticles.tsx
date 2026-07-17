import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

interface Props {
articles: any[];
}

function calculateReadingTime(
body: any[]
) {
if (!body) return 1;

const text = body
.filter(
(block) =>
block._type === "block"
)
.map((block) =>
block.children
?.map(
(child: any) => child.text
)
.join(" ")
)
.join(" ");

const words =
text.split(/\s+/).length;

return Math.max(
1,
Math.ceil(words / 200)
);
}

export default function RelatedArticles({
articles,
}: Props) {
if (!articles?.length) {
return null;
}

return ( <section> <div className="mb-12"> <p
       className="
         uppercase
         tracking-[0.25em]
         text-xs
         text-neutral-500
         mb-3
       "
     >
Continue Reading </p>


    <h2
      className="
        text-4xl
        md:text-5xl
        font-light
        tracking-[-0.03em]
      "
    >
      Related Articles
    </h2>
  </div>

  <div className="space-y-8">
    {articles.map(
      (article: any) => {
        const imageUrl =
          article.mainImage
            ? urlFor(
                article.mainImage
              )
                .width(800)
                .url()
            : null;

        const readingTime =
          calculateReadingTime(
            article.body
          );

        return (
          <Link
            key={article._id}
            href={`/article/${article.slug.current}`}
            className="
              group
              block
            "
          >
            <article
              className="
                grid
                md:grid-cols-[280px_1fr]
                gap-8

                rounded-[32px]

                border
                border-neutral-200

                bg-white

                overflow-hidden

                transition-all
                duration-300

                hover:shadow-lg
              "
            >
              {imageUrl && (
                <div
                  className="
                    overflow-hidden
                  "
                >
                  <img
                    src={imageUrl}
                    alt={
                      article.title
                    }
                    className="
                      w-full
                      h-full
                      min-h-[220px]

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />
                </div>
              )}

              <div
                className="
                  p-8
                  flex
                  flex-col
                  justify-center
                "
              >
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-light
                    leading-tight

                    group-hover:text-neutral-700
                    transition
                  "
                >
                  {article.title}
                </h3>

                {article.excerpt && (
                  <p
                    className="
                      mt-4
                      text-neutral-600
                      leading-7
                      line-clamp-2
                    "
                  >
                    {
                      article.excerpt
                    }
                  </p>
                )}

                <div
                  className="
                    mt-6

                    flex
                    gap-4

                    text-sm
                    text-neutral-500
                  "
                >
                  <span>
                    {
                      readingTime
                    }{" "}
                    min read
                  </span>

                  {article.publishedAt && (
                    <span>
                      {new Date(
                        article.publishedAt
                      ).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month:
                            "long",
                          year:
                            "numeric",
                        }
                      )}
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Link>
        );
      }
    )}
  </div>
</section>

);
}
