import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  description?: string;
  slug?: {
    current: string;
  };
}

interface Props {
  categories: Category[];
}

export default function CategorySection({
  categories,
}: Props) {
  if (!categories?.length) return null;

  return (
    <section
      className="
        mx-auto
        max-w-[1280px]

        px-5
        py-14

        md:px-6
        md:py-20

        lg:py-28
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-6
          mb-10

          md:flex-row
          md:items-end
          md:justify-between
          md:gap-8
          md:mb-20
        "
      >
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
            Explore
          </p>

          <h2
            className="
              text-3xl
              font-light
              leading-tight
              tracking-[-0.03em]

              text-neutral-900

              sm:text-4xl
              md:text-6xl
            "
          >
            Browse by topic.
          </h2>
        </div>

        <p
          className="
            max-w-md

            text-base
            leading-7

            text-neutral-600

            md:leading-8
          "
        >
          Discover practical ideas for
          decluttering, organizing and
          creating beautiful small spaces.
        </p>
      </div>

      {/* Categories */}

      <div
        className="
          grid

          gap-px

          bg-neutral-200

          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/category/${category.slug?.current}`}
            className="group"
          >
            <article
              className="
                flex
                h-full

                bg-[#F7F6F3]

                p-6
                min-h-[190px]

                transition-all
                duration-300

                hover:bg-white

                md:min-h-[260px]
                md:p-10
              "
            >
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-between
                "
              >
                <div>
                  <h3
                    className="
                      text-2xl
                      font-light
                      leading-tight

                      text-neutral-900

                      md:text-3xl
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-[15px]
                      leading-7

                      text-neutral-600

                      md:mt-6
                      md:text-base
                      md:leading-8
                    "
                  >
                    {category.description ||
                      "Explore articles, inspiration and practical solutions for everyday organization."}
                  </p>
                </div>

                <div
                  className="
                    mt-6

                    text-xs
                    uppercase
                    tracking-[0.2em]

                    text-neutral-500

                    transition-colors

                    group-hover:text-neutral-900

                    md:mt-10
                    md:text-sm
                  "
                >
                  Explore →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}