import { client } from "@/sanity/lib/client";

import {
searchArticlesQuery,
} from "@/sanity/lib/queries";

import SearchResults from "@/components/SearchResults";

interface Props {
searchParams: Promise<{
q?: string;
}>;
}

export default async function SearchPage({
searchParams,
}: Props) {
const { q } =
await searchParams;

const search =
q?.trim() || "";

const articles =
search.length > 0
? await client.fetch(
searchArticlesQuery,
{
search: `*${search}*`,
categorySlug:
search.toLowerCase(),
}
)
: [];

return ( <main className="bg-[#F7F6F3] min-h-screen"> <section
     className="
       max-w-6xl
       mx-auto
       px-6
       py-20
     "
   > <p
       className="
         uppercase
         tracking-[0.2em]
         text-xs
         text-neutral-500
         mb-4
       "
     >
Search </p>

```
    <h1
      className="
        text-5xl
        md:text-6xl
        font-light
        mb-10
      "
    >
      {search
        ? `Results for "${search}"`
        : "Search Articles"}
    </h1>

    <form
      action="/search"
      className="mb-10"
    >
      <input
        type="text"
        name="q"
        defaultValue={search}
        placeholder="Search articles..."
        className="
          w-full
          rounded-full
          border
          border-neutral-300
          bg-white
          px-6
          py-4
          outline-none
          focus:border-neutral-900
        "
      />
    </form>

    {search && (
      <div
        className="
          mb-8
          text-sm
          text-neutral-500
        "
      >
        {articles.length} article
        {articles.length !== 1
          ? "s"
          : ""}{" "}
        found
      </div>
    )}

    <SearchResults
      articles={articles}
    />
  </section>
</main>

);
}
