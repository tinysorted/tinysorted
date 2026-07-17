"use client";

import Image from "next/image";
import Link from "next/link";

interface Author {
  _id: string;

  name: string;

  role?: string;

  bio?: string;

  slug: {
    current: string;
  };

  image?: {
    asset?: {
      url?: string;
    };
  };

  twitter?: string;
  linkedin?: string;
  website?: string;
}

interface Props {
  author: Author;
}

export default function AuthorCard({ author }: Props) {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-neutral-200
        bg-white
        p-6
        md:p-10
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-6
          text-center

          md:flex-row
          md:items-start
          md:gap-8
          md:text-left
        "
      >
        {/* Photo */}

        {author.image?.asset?.url && (
          <Image
            src={author.image.asset.url}
            alt={author.name}
            width={120}
            height={120}
            unoptimized
            className="
              h-28
              w-28
              shrink-0
              rounded-full
              object-cover

              md:h-[120px]
              md:w-[120px]
            "
          />
        )}

        {/* Info */}

        <div className="min-w-0 flex-1">
          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-neutral-500
            "
          >
            About the author
          </p>

          <h3
            className="
              mt-3
              text-2xl
              font-light
              leading-tight

              md:text-3xl
            "
          >
            {author.name}
          </h3>

          {author.role && (
            <p
              className="
                mt-2
                text-sm
                text-neutral-500

                md:text-base
              "
            >
              {author.role}
            </p>
          )}

          {author.bio && (
            <p
              className="
                mt-5
                text-[15px]
                leading-7
                text-neutral-700

                md:mt-6
                md:text-base
                md:leading-8
              "
            >
              {author.bio}
            </p>
          )}

          <div
            className="
              mt-8
              flex
              justify-center

              md:justify-start
            "
          >
            <Link
              href={`/author/${author.slug.current}`}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                transition-colors
                hover:text-black
                hover:underline
              "
            >
              View full profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}