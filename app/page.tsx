import { client } from "@/sanity/lib/client";

import {
  featuredArticleQuery,
  latestArticlesQuery,
  categoriesQuery,
  homepageSettingsQuery,
} from "@/sanity/lib/queries";

import HeroArticle from "@/components/HeroArticle";
import FeaturedArticleGrid from "@/components/FeaturedArticleGrid";
import PopularTrendingSection from "@/components/PopularTrendingSection";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySection from "@/components/CategorySection";

export default async function HomePage() {
  const featured = await client.fetch(
    featuredArticleQuery
  );

  const latestArticles = await client.fetch(
    latestArticlesQuery
  );

  const categories = await client.fetch(
    categoriesQuery
  );

  const homepageSettings = await client.fetch(
    homepageSettingsQuery
  );

  return (
    <main className="bg-[#F7F6F3]">
      {/* ====================================== */}
      {/* HERO */}
      {/* ====================================== */}

      <HeroArticle
        article={featured}
      />

      {/* ====================================== */}
      {/* CURATED STORIES */}
      {/* ====================================== */}

      <FeaturedArticleGrid
        articles={latestArticles.slice(
          0,
          4
        )}
        settings={
          homepageSettings ?? {}
        }
      />

      {/* ====================================== */}
      {/* BROWSE TOPICS */}
      {/* ====================================== */}

      <CategorySection
        categories={categories}
      />

      {/* ====================================== */}
      {/* POPULAR & TRENDING */}
      {/* ====================================== */}

      <PopularTrendingSection
        settings={
          homepageSettings ?? {}
        }
      />

      {/* ====================================== */}
      {/* LATEST ARTICLES */}
      {/* ====================================== */}

      <section
        className="
          mx-auto
          max-w-[1280px]

          border-t
          border-black/5

          px-6

          py-24
        "
      >
        <div className="mb-14">
          <p
            className="
              mb-3

              text-xs

              uppercase

              tracking-[0.2em]

              text-neutral-500
            "
          >
            {
              homepageSettings
                ?.latestArticles
                ?.headline ??
                "Latest Articles"
            }
          </p>

          <h2
            className="
              text-4xl

              font-light

              md:text-5xl
            "
          >
            {
              homepageSettings
                ?.latestArticles
                ?.subheadline ??
                "Fresh inspiration and practical ideas."
            }
          </h2>
        </div>

        <ArticleGrid
          articles={latestArticles}
        />
      </section>
    </main>
  );
}