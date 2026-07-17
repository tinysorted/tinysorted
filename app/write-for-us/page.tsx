import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write For Us | TinySorted",
  description:
    "Interested in contributing to TinySorted? Learn our editorial standards, submission guidelines, and how to become a contributor.",
};

export default function WriteForUsPage() {
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
          Contributors
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
          Write For Us
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
              Become a TinySorted Contributor
            </h2>

            <p>
              TinySorted welcomes experienced writers, home organization
              enthusiasts, interior designers, productivity experts, and
              minimalist lifestyle advocates who are passionate about helping
              people create better living spaces.
            </p>

            <p className="mt-4">
              We publish practical, well-researched, evergreen content that
              helps readers organize their homes, maximize small spaces, and
              live more intentionally.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Topics We Accept
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Home organization</li>
              <li>Small-space living</li>
              <li>Storage ideas</li>
              <li>Kitchen organization</li>
              <li>Minimalist lifestyle</li>
              <li>Apartment living</li>
              <li>Decluttering guides</li>
              <li>Productivity at home</li>
              <li>Furniture recommendations</li>
              <li>Storage product reviews</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Editorial Guidelines
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Original content only.</li>
              <li>No AI-generated spam or rewritten articles.</li>
              <li>Minimum 1,200 words.</li>
              <li>Well structured using headings.</li>
              <li>Factually accurate and properly researched.</li>
              <li>Written in clear, natural English.</li>
              <li>No excessive promotional language.</li>
              <li>Include practical examples whenever possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              What We Don't Accept
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Duplicate content.</li>
              <li>Plagiarized material.</li>
              <li>Articles written solely for backlinks.</li>
              <li>Casino, cryptocurrency, gambling, or adult content.</li>
              <li>Purely promotional articles.</li>
              <li>Keyword stuffing.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Submission Process
            </h2>

            <ol className="list-decimal space-y-3 pl-6">
              <li>Send us your topic idea or completed article.</li>
              <li>Our editorial team reviews every submission.</li>
              <li>
                We may suggest revisions before publication.
              </li>
              <li>
                Approved articles are scheduled for publication.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Author Benefits
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Author profile on TinySorted.</li>
              <li>Professional writing portfolio.</li>
              <li>Exposure to a growing audience.</li>
              <li>Opportunity for future collaborations.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h2 className="text-3xl font-light text-neutral-900">
              Ready to Pitch?
            </h2>

            <p className="mt-4">
              We'd love to hear from you. Send your article idea,
              writing samples, or completed draft to:
            </p>

            <p className="mt-6 text-xl font-medium text-neutral-900">
              editor@tinysorted.com
            </p>

            <p className="mt-6 text-neutral-600">
              Please include:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Your full name</li>
              <li>Short author bio</li>
              <li>Portfolio or website (optional)</li>
              <li>Article title</li>
              <li>Google Docs link or Word document</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}