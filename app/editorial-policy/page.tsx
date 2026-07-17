import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

export const metadata: Metadata = {
  title: "Editorial Policy | TinySorted",
  description:
    "Learn how TinySorted researches, writes, reviews, and updates every article we publish.",
};

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3]">

      <PageContainer>

        <PageHero
          eyebrow="Editorial"
          title="Editorial Policy"
          description="Everything we publish follows a clear editorial process designed to deliver practical, trustworthy, and easy-to-understand content."
        />

        <PageSection title="Our Editorial Mission">

          <p>
            TinySorted exists to help readers create homes that are
            cleaner, calmer, and more functional.
          </p>

          <p>
            Every article is written with one goal:
            provide practical advice that readers can actually apply
            in everyday life.
          </p>

        </PageSection>

        <PageSection title="How We Create Content">

          <p>
            Before publishing an article we conduct research from
            reputable sources, industry publications, product
            documentation, and real-world experience whenever
            possible.
          </p>

          <p>
            Our articles are written to explain concepts clearly,
            avoid unnecessary jargon, and focus on practical
            solutions.
          </p>

        </PageSection>

        <PageSection title="Fact Checking">

          <p>
            Accuracy matters.
          </p>

          <p>
            Whenever possible we verify facts using multiple trusted
            sources before publication.
          </p>

          <p>
            If an error is identified, we review it and update the
            article as quickly as possible.
          </p>

        </PageSection>

        <PageSection title="Product Recommendations">

          <p>
            TinySorted occasionally recommends products that help
            readers organize and improve their living spaces.
          </p>

          <p>
            Products are selected based on:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6">

            <li>Practical usefulness</li>

            <li>Build quality</li>

            <li>Reader value</li>

            <li>Overall reputation</li>

            <li>Suitability for small-space living</li>

          </ul>

        </PageSection>

        <PageSection title="Affiliate Relationships">

          <p>
            Some recommended products contain affiliate links.
          </p>

          <p>
            These relationships never influence our editorial
            decisions.
          </p>

          <p>
            Products are recommended because we believe they provide
            value—not because of commissions.
          </p>

        </PageSection>

        <PageSection title="Article Updates">

          <p>
            Home organization trends, product availability, and best
            practices change over time.
          </p>

          <p>
            We periodically review older articles to keep them
            accurate and relevant.
          </p>

        </PageSection>

        <PageSection title="Corrections">

          <p>
            Despite careful review, mistakes can occasionally happen.
          </p>

          <p>
            If you notice inaccurate information, please contact us.
            We appreciate constructive feedback and will investigate
            every report.
          </p>

        </PageSection>

        <PageSection title="Editorial Independence">

          <p>
            Our editorial team works independently from advertisers
            and affiliate partners.
          </p>

          <p>
            Brands cannot purchase favorable reviews or influence our
            recommendations.
          </p>

        </PageSection>

        <PageSection title="Contact the Editorial Team">

          <p>
            Questions about our editorial standards can be sent to:
          </p>

          <p className="mt-6 font-medium">
            editor@tinysorted.com
          </p>

        </PageSection>

      </PageContainer>

    </main>
  );
}