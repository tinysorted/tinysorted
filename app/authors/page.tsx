import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { authorsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";

export const metadata: Metadata = {
  title: "Our Authors | TinySorted",
  description:
    "Meet the writers behind TinySorted.",
};

export default async function AuthorsPage() {

  const authors = await client.fetch(authorsQuery);

  return (
    <main className="min-h-screen bg-[#F7F6F3]">

      <PageContainer>

        <PageHero
          eyebrow="Team"
          title="Meet Our Authors"
          description="TinySorted is built by writers passionate about organization, home improvement, and practical living."
        />

        <section
          className="
            grid
            gap-10

            md:grid-cols-2
            xl:grid-cols-3

            pb-24
          "
        >
          {authors.map((author: any) => (

            <Link
              key={author._id}
              href={`/authors/${author._id}`}
              className="
                group

                overflow-hidden

                rounded-[30px]

                border
                border-neutral-200

                bg-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div className="relative">

                {author.image?.asset ? (

                  <Image
                    src={urlFor(author.image)
                      .width(900)
                      .quality(90)
                      .url()}
                    alt={author.name}
                    width={900}
                    height={900}
                    className="
                      h-[320px]
                      w-full
                      object-cover
                    "
                  />

                ) : (

                  <div className="h-[320px] bg-neutral-100" />

                )}

              </div>

              <div className="p-7">

                <h2
                  className="
                    text-2xl
                    font-light
                    text-neutral-900
                  "
                >
                  {author.name}
                </h2>

                {author.role && (

                  <p
                    className="
                      mt-2

                      uppercase

                      tracking-[0.18em]

                      text-xs

                      text-neutral-500
                    "
                  >
                    {author.role}
                  </p>

                )}

                {author.bio && (

                  <p
                    className="
                      mt-6

                      line-clamp-4

                      leading-8

                      text-neutral-600
                    "
                  >
                    {author.bio}
                  </p>

                )}

                <div
                  className="
                    mt-8

                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-sm
                      text-neutral-500
                    "
                  >
                    {author.articleCount} Articles
                  </span>

                  <span
                    className="
                      font-medium

                      group-hover:translate-x-1

                      transition
                    "
                  >
                    View Profile →
                  </span>

                </div>

              </div>

            </Link>

          ))}
        </section>

      </PageContainer>

    </main>
  );
}