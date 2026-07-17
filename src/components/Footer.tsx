import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        mt-28
        md:mt-40

        border-t
        border-neutral-200

        bg-[#F7F6F3]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]

          px-5
          py-16

          md:px-6
          md:py-24
        "
      >
        {/* ========================= */}
        {/* TOP */}
        {/* ========================= */}

        <div
          className="
            grid
            gap-12

            md:grid-cols-2
            lg:grid-cols-[2fr_1fr_1fr_1fr]

            lg:gap-16
          "
        >
          {/* BRAND */}

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
                mt-5
                max-w-xl

                leading-8
                text-neutral-600
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

          {/* EXPLORE */}

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
                className="block transition hover:text-black"
              >
                Home
              </Link>

              <Link
                href="/category/decluttering"
                className="block transition hover:text-black"
              >
                Decluttering
              </Link>

              <Link
                href="/category/small-spaces"
                className="block transition hover:text-black"
              >
                Small Spaces
              </Link>

              <Link
                href="/category/storage-ideas"
                className="block transition hover:text-black"
              >
                Storage Ideas
              </Link>

              <Link
                href="/category/kitchen"
                className="block transition hover:text-black"
              >
                Kitchen
              </Link>
            </nav>
          </div>

          {/* COMPANY */}

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
                className="block transition hover:text-black"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-black"
              >
                Contact
              </Link>

              <Link
                href="/write-for-us"
                className="block transition hover:text-black"
              >
                Write For Us
              </Link>

              <Link
                href="/advertise"
                className="block transition hover:text-black"
              >
                Advertise
              </Link>
            </nav>
          </div>

          {/* LEGAL */}

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
                className="block transition hover:text-black"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block transition hover:text-black"
              >
                Terms of Service
              </Link>

              <Link
                href="/cookie-policy"
                className="block transition hover:text-black"
              >
                Cookie Policy
              </Link>

              <Link
                href="/affiliate-disclosure"
                className="block transition hover:text-black"
              >
                Affiliate Disclosure
              </Link>

              <Link
                href="/editorial-policy"
                className="block transition hover:text-black"
              >
                Editorial Policy
              </Link>

              <Link
                href="/disclaimer"
                className="block transition hover:text-black"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        {/* ========================= */}
        {/* AFFILIATE NOTICE */}
        {/* ========================= */}

        <div
          className="
            mt-14

            border-t
            border-neutral-200

            pt-8

            md:mt-20
            md:pt-10
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
            mt-10

            flex
            flex-col

            gap-4

            border-t
            border-neutral-200

            pt-8

            text-sm
            text-neutral-500

            md:mt-12
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} TinySorted. All rights
            reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-6
            "
          >
            <Link
              href="/contact"
              className="transition hover:text-black"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}