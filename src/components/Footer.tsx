import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        mt-40
        border-t
        border-neutral-200
        bg-[#F7F6F3]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-6
          py-24
        "
      >
        {/* ========================= */}
        {/* TOP */}
        {/* ========================= */}

        <div
          className="
            grid
            gap-16

            md:grid-cols-2
            lg:grid-cols-[2fr_1fr_1fr_1fr]
          "
        >
          {/* ================================= */}
          {/* BRAND */}
          {/* ================================= */}

          <div>
            <Link href="/">
              <h2
                className="
                  text-2xl
                  font-light
                  uppercase
                  tracking-[0.32em]
                  text-neutral-900
                  transition
                  hover:opacity-70
                "
              >
                Tinysorted
              </h2>
            </Link>

            <p
              className="
                mt-6
                max-w-xl
                text-neutral-600
                leading-8
              "
            >
              TinySorted helps people organize small spaces,
              simplify everyday living, and discover practical
              home solutions through thoughtfully researched
              articles and carefully selected product
              recommendations.
            </p>

            <p
              className="
                mt-6
                text-sm
                text-neutral-500
              "
            >
              Practical ideas for better living.
            </p>
          </div>

          {/* ================================= */}
          {/* EXPLORE */}
          {/* ================================= */}

          <div>
            <h3
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.24em]
                text-neutral-500
              "
            >
              Explore
            </h3>

            <nav className="space-y-4">
              <Link
                href="/"
                className="block hover:text-black transition"
              >
                Home
              </Link>

              <Link
                href="/category/decluttering"
                className="block hover:text-black transition"
              >
                Decluttering
              </Link>

              <Link
                href="/category/small-spaces"
                className="block hover:text-black transition"
              >
                Small Spaces
              </Link>

              <Link
                href="/category/storage-ideas"
                className="block hover:text-black transition"
              >
                Storage Ideas
              </Link>

              <Link
                href="/category/kitchen"
                className="block hover:text-black transition"
              >
                Kitchen
              </Link>
            </nav>
          </div>

          {/* ================================= */}
          {/* COMPANY */}
          {/* ================================= */}

          <div>
            <h3
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.24em]
                text-neutral-500
              "
            >
              Company
            </h3>

            <nav className="space-y-4">
              <Link
                href="/about"
                className="block hover:text-black transition"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block hover:text-black transition"
              >
                Contact
              </Link>

              <Link
                href="/write-for-us"
                className="block hover:text-black transition"
              >
                Write For Us
              </Link>

              <Link
                href="/advertise"
                className="block hover:text-black transition"
              >
                Advertise
              </Link>
            </nav>
          </div>

          {/* ================================= */}
          {/* LEGAL */}
          {/* ================================= */}

          <div>
            <h3
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.24em]
                text-neutral-500
              "
            >
              Legal
            </h3>

            <nav className="space-y-4">
              <Link
                href="/privacy-policy"
                className="block hover:text-black transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block hover:text-black transition"
              >
                Terms of Service
              </Link>

              <Link
                href="/affiliate-disclosure"
                className="block hover:text-black transition"
              >
                Affiliate Disclosure
              </Link>

              <Link
                href="/disclaimer"
                className="block hover:text-black transition"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        {/* ========================= */}
        {/* MIDDLE */}
        {/* ========================= */}

        <div
          className="
            mt-20
            border-t
            border-neutral-200
            pt-10
          "
        >
          <p
            className="
              max-w-4xl
              text-sm
              leading-7
              text-neutral-500
            "
          >
            TinySorted participates in various affiliate marketing
            programs. This means we may earn commissions from
            qualifying purchases made through links on this site,
            at no additional cost to you. Our recommendations are
            based on independent research and editorial judgment.
          </p>
        </div>

        {/* ========================= */}
        {/* BOTTOM */}
        {/* ========================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4

            border-t
            border-neutral-200
            pt-8

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              text-sm
              text-neutral-500
            "
          >
            © {new Date().getFullYear()} TinySorted. All rights
            reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-6

              text-sm
              text-neutral-500
            "
          >
            <Link
              href="/sitemap.xml"
              className="hover:text-black transition"
            >
              Sitemap
            </Link>

            <Link
              href="/rss.xml"
              className="hover:text-black transition"
            >
              RSS
            </Link>

            <Link
              href="/contact"
              className="hover:text-black transition"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}