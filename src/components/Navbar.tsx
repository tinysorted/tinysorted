import Link from "next/link";
import { Search } from "lucide-react";

import { client } from "@/sanity/lib/client";
import { navbarCategoriesQuery } from "@/sanity/lib/queries";

export default async function Navbar() {
  const categories =
    await client.fetch(
      navbarCategoriesQuery
    );

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-neutral-200/60
        bg-[#F7F6F3]/90
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1280px]
          items-center
          justify-between
          px-6
          py-5
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            text-xl
            font-light
            tracking-[0.25em]
            uppercase
            text-neutral-900
          "
        >
          tinysorted
        </Link>

        {/* Navigation */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            text-neutral-600
          "
        >
          <Link
            href="/"
            className="
              hover:text-neutral-900
              transition
            "
          >
            Home
          </Link>

          {categories.map(
            (category: any) => (
              <Link
                key={category._id}
                href={`/category/${category.slug.current}`}
                className="
                  hover:text-neutral-900
                  transition
                "
              >
                {category.title}
              </Link>
            )
          )}
        </nav>

        {/* Search */}

        <Link
          href="/search"
          aria-label="Search"
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            border
            border-neutral-200
            hover:bg-white
            transition
          "
        >
          <Search size={18} />
        </Link>
      </div>
    </header>
  );
}