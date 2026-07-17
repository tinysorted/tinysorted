import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | TinySorted",
  description:
    "Read the TinySorted disclaimer regarding informational content, affiliate partnerships, product recommendations, and limitation of liability.",
};

export default function DisclaimerPage() {
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
          Legal
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
          Disclaimer
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
              General Information
            </h2>

            <p>
              The information provided on TinySorted is published in good
              faith and for general informational and educational purposes
              only. While we strive to ensure that all content is accurate,
              complete, and up to date, we make no guarantees regarding the
              completeness, reliability, or accuracy of any information
              presented on this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Professional Advice
            </h2>

            <p>
              The articles published on TinySorted are intended to inspire
              and educate readers about home organization, small-space
              living, storage solutions, and lifestyle improvements. They
              should not be considered professional legal, financial,
              architectural, engineering, medical, or other specialized
              advice.
            </p>

            <p className="mt-4">
              Always consult an appropriately qualified professional before
              making decisions that may affect your personal circumstances.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Product Recommendations
            </h2>

            <p>
              TinySorted regularly publishes product recommendations based
              on editorial research, product specifications, user feedback,
              and independent evaluation. Product availability, pricing,
              specifications, and promotions may change without notice.
            </p>

            <p className="mt-4">
              We cannot guarantee that every product will be suitable for
              every reader or every living situation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Affiliate Relationships
            </h2>

            <p>
              Some pages on TinySorted contain affiliate links. If you click
              an affiliate link and make a purchase, we may earn a small
              commission at no additional cost to you.
            </p>

            <p className="mt-4">
              These commissions help support our editorial work and allow us
              to continue publishing free content. Our editorial opinions
              are never influenced by affiliate partnerships.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              External Websites
            </h2>

            <p>
              TinySorted may link to external websites operated by third
              parties. We do not control the content, accuracy, privacy
              practices, or availability of these websites and assume no
              responsibility for any information, products, or services
              offered by them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Limitation of Liability
            </h2>

            <p>
              Under no circumstances shall TinySorted, its owners,
              contributors, editors, or affiliates be liable for any direct,
              indirect, incidental, consequential, or special damages that
              may arise from the use of this website or reliance on any
              information provided herein.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Changes to This Disclaimer
            </h2>

            <p>
              We reserve the right to modify, update, or replace this
              Disclaimer at any time without prior notice. Continued use of
              the website constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-light text-neutral-900">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this Disclaimer, please
              contact us through our Contact page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}