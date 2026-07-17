import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise | TinySorted",
  description:
    "Partner with TinySorted through sponsored content, product features, affiliate partnerships, and long-term brand collaborations.",
};

export default function AdvertisePage() {
  return (
    <main className="bg-[#F7F6F3] min-h-screen">
      <section className="mx-auto max-w-[900px] px-6 py-20">
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.25em]
            text-neutral-500
          "
        >
          Partnerships
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-light
            tracking-[-0.03em]
            text-neutral-900
          "
        >
          Advertise With Us
        </h1>

        <p className="mt-6 text-neutral-500">
          Last updated: June 2026
        </p>

        <div
          className="
            mt-14
            space-y-10
            text-lg
            leading-9
            text-neutral-700
          "
        >
          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Partner With TinySorted
            </h2>

            <p>
              TinySorted works with brands that share our passion for home
              organization, small-space living, minimalist lifestyles, and
              practical everyday solutions.
            </p>

            <p className="mt-4">
              Every collaboration is carefully reviewed to ensure it provides
              genuine value for our readers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Partnership Opportunities
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Sponsored articles</li>
              <li>Product reviews</li>
              <li>Affiliate partnerships</li>
              <li>Brand collaborations</li>
              <li>Newsletter sponsorships</li>
              <li>Long-term content partnerships</li>
              <li>Seasonal campaigns</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Our Editorial Standards
            </h2>

            <p>
              Sponsored partnerships never influence our editorial integrity.
              Any sponsored content will always be clearly disclosed, and we
              only feature products or services that are relevant to our
              audience.
            </p>

            <p className="mt-4">
              Maintaining reader trust is our highest priority.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Ideal Partners
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Home organization brands</li>
              <li>Furniture companies</li>
              <li>Kitchen storage products</li>
              <li>Cleaning products</li>
              <li>Smart home devices</li>
              <li>Minimalist lifestyle brands</li>
              <li>Interior design services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              What We Don't Accept
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Gambling or betting services</li>
              <li>Adult products</li>
              <li>Misleading financial products</li>
              <li>Low-quality link placements</li>
              <li>Spam outreach</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h2 className="text-3xl font-light text-neutral-900">
              Contact Our Partnership Team
            </h2>

            <p className="mt-4">
              Interested in working with TinySorted? We'd love to hear your
              ideas.
            </p>

            <p className="mt-6 text-xl font-medium text-neutral-900">
              partnerships@tinysorted.com
            </p>

            <p className="mt-6 text-neutral-600">
              Please include:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Company name</li>
              <li>Website</li>
              <li>Campaign objective</li>
              <li>Budget (optional)</li>
              <li>Timeline</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}