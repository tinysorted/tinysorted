import { client } from "@/sanity/lib/client";

import {
featuredArticleQuery,
latestArticlesQuery,
declutteringArticlesQuery,
smallSpacesArticlesQuery,
kitchenArticlesQuery,
categoriesQuery,
} from "@/sanity/lib/queries";

import HeroArticle from "@/components/HeroArticle";
import FeaturedArticleGrid from "@/components/FeaturedArticleGrid";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySection from "@/components/CategorySection";

export default async function HomePage() {
const featured = await client.fetch(
featuredArticleQuery
);

const latestArticles = await client.fetch(
latestArticlesQuery
);

const declutteringArticles =
await client.fetch(
declutteringArticlesQuery
);

const smallSpacesArticles =
await client.fetch(
smallSpacesArticlesQuery
);

const kitchenArticles =
await client.fetch(
kitchenArticlesQuery
);

const categories = await client.fetch(
categoriesQuery
);

return ( <main className="bg-[#F7F6F3]">


  {/* Hero */}
  <HeroArticle article={featured} />

  {/* Editorial Featured */}
  <FeaturedArticleGrid
    articles={latestArticles.slice(0, 4)}
  />

  {/* Browse Topics */}
  <CategorySection
    categories={categories}
  />

  {/* Latest Articles */}
  <section
    className="
      max-w-[1280px]
      mx-auto
      px-6
      py-24
      border-t
      border-black/5
    "
  >
    <div className="mb-14">
      <p
        className="
          uppercase
          tracking-[0.2em]
          text-xs
          text-neutral-500
          mb-3
        "
      >
        Latest Articles
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-light
        "
      >
        Explore more inspiration.
      </h2>
    </div>

    <ArticleGrid
      articles={latestArticles.slice(4)}
    />
  </section>

  {/* Decluttering */}
  <section
    className="
      max-w-[1280px]
      mx-auto
      px-6
      py-24
      border-t
      border-black/5
    "
  >
    <div className="mb-14">
      <p
        className="
          uppercase
          tracking-[0.2em]
          text-xs
          text-neutral-500
          mb-3
        "
      >
        Organization
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-light
        "
      >
        Decluttering Guides
      </h2>
    </div>

    <ArticleGrid
      articles={declutteringArticles}
    />
  </section>

  {/* Small Spaces */}
  <section
    className="
      max-w-[1280px]
      mx-auto
      px-6
      py-24
      border-t
      border-black/5
    "
  >
    <div className="mb-14">
      <p
        className="
          uppercase
          tracking-[0.2em]
          text-xs
          text-neutral-500
          mb-3
        "
      >
        Living Better
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-light
        "
      >
        Small Space Living
      </h2>
    </div>

    <ArticleGrid
      articles={smallSpacesArticles}
    />
  </section>

  {/* Kitchen */}
  <section
    className="
      max-w-[1280px]
      mx-auto
      px-6
      py-24
      border-t
      border-black/5
    "
  >
    <div className="mb-14">
      <p
        className="
          uppercase
          tracking-[0.2em]
          text-xs
          text-neutral-500
          mb-3
        "
      >
        Home
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-light
        "
      >
        Kitchen Organization
      </h2>
    </div>

    <ArticleGrid
      articles={kitchenArticles}
    />
  </section>

</main>

);
}
