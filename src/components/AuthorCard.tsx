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

export default function AuthorCard({
  author,
}: Props) {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-neutral-200
        bg-white
        p-10
      "
    >
      <div className="flex gap-8">

        {/* Photo */}

        {author.image?.asset?.url && (
          <Image
            src={author.image.asset.url}
            alt={author.name}
            width={120}
            height={120}
            unoptimized
            className="
              h-[120px]
              w-[120px]
              rounded-full
              object-cover
              shrink-0
            "
          />
        )}

        {/* Info */}

        <div className="flex-1">

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
              text-3xl
              font-light
            "
          >
            {author.name}
          </h3>

          {author.role && (
            <p
              className="
                mt-2
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
                leading-8
                text-neutral-700
              "
            >
              {author.bio}
            </p>
          )}

          <div className="mt-8">

            <Link
              href={`/author/${author.slug.current}`}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
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