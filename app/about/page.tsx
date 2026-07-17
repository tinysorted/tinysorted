import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

export const metadata: Metadata = {
  title: "About TinySorted",
  description:
    "Learn more about TinySorted, our mission, editorial process, and our passion for helping people create calmer, more organized homes.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F7F6F3] min-h-screen">

      <PageContainer>

        <PageHero
          eyebrow="About"
          title="Thoughtful Living Starts with Better Spaces."
          description="TinySorted helps readers create beautiful, organized, and functional homes through practical ideas, carefully researched guides, and inspiring minimalist living."
        />

        <PageSection title="Our Mission">

          <p>
            We believe every home, regardless of its size,
            deserves to feel calm, functional, and inspiring.
          </p>

          <p>
            Our goal is to simplify everyday living by sharing
            practical organization strategies, space-saving
            solutions, storage ideas, and minimalist habits that
            genuinely improve daily life.
          </p>

        </PageSection>

        <PageSection title="What We Publish">

          <ul className="list-disc pl-6 space-y-3">
            <li>Home organization guides</li>
            <li>Small apartment living tips</li>
            <li>Kitchen organization</li>
            <li>Decluttering methods</li>
            <li>Minimalist lifestyle articles</li>
            <li>Storage product recommendations</li>
          </ul>

        </PageSection>

        <PageSection title="Editorial Philosophy">

          <p>
            Every article published on TinySorted is written to
            solve a real-life problem. We prioritize clarity,
            practicality, and long-term usefulness over trends.
          </p>

          <p>
            Whenever products are recommended, they are selected
            based on usefulness, functionality, and overall value
            for readers.
          </p>

        </PageSection>

        <PageSection title="Affiliate Transparency">

          <p>
            Some articles contain affiliate links. If you purchase
            through one of these links, TinySorted may earn a small
            commission at no additional cost to you.
          </p>

          <p>
            Affiliate partnerships never influence our editorial
            opinions.
          </p>

        </PageSection>

      </PageContainer>

    </main>
  );
}