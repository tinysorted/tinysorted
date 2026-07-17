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
        max-w-[1280px]
        mx-auto
        px-6
        py-32
      "
    >
      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-8
          mb-20
        "
      >
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-neutral-500
              mb-4
            "
          >
            Explore
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
              leading-tight
              text-neutral-900
            "
          >
            Browse by topic.
          </h2>
        </div>

        <p
          className="
            max-w-md
            text-neutral-600
            leading-8
          "
        >
          Discover practical ideas for
          decluttering, organizing and
          creating beautiful small spaces.
        </p>
      </div>

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-px
          bg-neutral-200
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
                bg-[#F7F6F3]
                p-10
                min-h-[260px]
                transition-all
                duration-300
                hover:bg-white
              "
            >
              <div
                className="
                  flex
                  flex-col
                  justify-between
                  h-full
                "
              >
                <div>
                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-light
                      text-neutral-900
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      text-neutral-600
                      leading-8
                    "
                  >
                    {category.description ||
                      "Explore articles, inspiration and practical solutions for everyday organization."}
                  </p>
                </div>

                <div
                  className="
                    mt-10
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                    group-hover:text-neutral-900
                    transition-colors
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