import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | TinySorted",
  description:
    "Learn how TinySorted uses affiliate partnerships and how they support our editorial content.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="bg-[#F7F6F3] min-h-screen">

      <PageContainer>

        <PageHero
          eyebrow="Transparency"
          title="Affiliate Disclosure"
          description="Honesty and transparency are important to us. This page explains how affiliate partnerships work on TinySorted."
        />

        <PageSection title="Our Promise">

          <p>
            TinySorted exists to help readers create more organized,
            comfortable, and functional homes.
          </p>

          <p>
            In order to keep this website free, some articles may
            include affiliate links.
          </p>

        </PageSection>

        <PageSection title="What Are Affiliate Links?">

          <p>
            Affiliate links are special tracking links that allow us
            to receive a small commission when readers purchase
            products after clicking them.
          </p>

          <p>
            This commission is paid by the retailer, not by you.
          </p>

          <p>
            Your purchase price never increases because of an
            affiliate link.
          </p>

        </PageSection>

        <PageSection title="How We Choose Products">

          <p>
            Every recommendation is selected because we believe it
            provides value to our readers.
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3">

            <li>Practical everyday usefulness</li>

            <li>Quality and durability</li>

            <li>Positive customer reputation</li>

            <li>Good value for money</li>

            <li>Suitable for small-space living</li>

          </ul>

        </PageSection>

        <PageSection title="Editorial Independence">

          <p>
            Affiliate partnerships never determine what we publish.
          </p>

          <p>
            Brands cannot pay to receive positive reviews or product
            recommendations.
          </p>

          <p>
            Our editorial decisions remain completely independent.
          </p>

        </PageSection>

        <PageSection title="Retailers">

          <p>
            TinySorted may participate in affiliate programs offered
            by retailers including:
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3">

            <li>Amazon Associates</li>

            <li>Impact.com Partners</li>

            <li>CJ Affiliate</li>

            <li>ShareASale</li>

            <li>Other affiliate networks</li>

          </ul>

        </PageSection>

        <PageSection title="Questions">

          <p>
            If you have questions about our affiliate relationships,
            please contact:
          </p>

          <p className="mt-6 font-medium">
            hello@tinysorted.com
          </p>

        </PageSection>

      </PageContainer>

    </main>
  );
}