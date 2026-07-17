import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | TinySorted",
  description:
    "Read the Terms & Conditions governing your use of TinySorted.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3]">

      <PageContainer>

        <PageHero
          eyebrow="Legal"
          title="Terms & Conditions"
          description="These Terms & Conditions govern your access to and use of TinySorted."
        />

        <PageSection title="Acceptance of Terms">

          <p>
            By accessing TinySorted, you agree to comply with these
            Terms & Conditions.
          </p>

          <p>
            If you do not agree with any part of these terms, please
            discontinue using this website.
          </p>

        </PageSection>

        <PageSection title="Use of Our Website">

          <p>
            You agree to use TinySorted only for lawful purposes.
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3">

            <li>Do not misuse the website.</li>

            <li>Do not attempt unauthorized access.</li>

            <li>Do not copy content without permission.</li>

            <li>Do not distribute harmful software.</li>

          </ul>

        </PageSection>

        <PageSection title="Intellectual Property">

          <p>
            Unless otherwise stated, all articles, graphics,
            branding, and original content published on TinySorted
            are protected by copyright.
          </p>

          <p>
            Reproduction or redistribution without written
            permission is prohibited.
          </p>

        </PageSection>

        <PageSection title="Content Accuracy">

          <p>
            We strive to publish accurate and up-to-date
            information.
          </p>

          <p>
            However, TinySorted cannot guarantee that every article
            is completely free from errors or omissions.
          </p>

        </PageSection>

        <PageSection title="External Links">

          <p>
            TinySorted may contain links to external websites.
          </p>

          <p>
            We are not responsible for the content, policies,
            or practices of third-party websites.
          </p>

        </PageSection>

        <PageSection title="Affiliate Relationships">

          <p>
            Some articles contain affiliate links.
          </p>

          <p>
            Purchases made through these links may generate a small
            commission that supports TinySorted.
          </p>

        </PageSection>

        <PageSection title="Disclaimer">

          <p>
            The information published on TinySorted is intended for
            educational and informational purposes only.
          </p>

          <p>
            Readers should exercise their own judgment before making
            purchasing or organizational decisions.
          </p>

        </PageSection>

        <PageSection title="Limitation of Liability">

          <p>
            TinySorted shall not be liable for any direct, indirect,
            incidental, or consequential damages resulting from the
            use of this website.
          </p>

        </PageSection>

        <PageSection title="Changes to These Terms">

          <p>
            We reserve the right to modify these Terms &
            Conditions at any time.
          </p>

          <p>
            Updated versions will always appear on this page.
          </p>

        </PageSection>

        <PageSection title="Contact">

          <p>
            Questions regarding these Terms & Conditions may be sent
            to:
          </p>

          <p className="mt-6 font-medium">
            legal@tinysorted.com
          </p>

        </PageSection>

      </PageContainer>

    </main>
  );
}