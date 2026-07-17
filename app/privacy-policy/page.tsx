import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

export const metadata: Metadata = {
  title: "Privacy Policy | TinySorted",
  description:
    "Learn how TinySorted collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F7F6F3] min-h-screen">

      <PageContainer>

        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="Your privacy matters to us. This page explains what information we collect and how we use it."
        />

        <PageSection title="Introduction">

          <p>
            TinySorted ("we", "our", or "us") respects your privacy.
            This Privacy Policy explains how information is collected,
            used, and protected whenever you visit our website.
          </p>

          <p>
            By using this website, you agree to the practices described
            in this Privacy Policy.
          </p>

        </PageSection>

        <PageSection title="Information We Collect">

          <p>
            We may collect information that you voluntarily provide,
            including:
          </p>

          <ul className="list-disc pl-6 space-y-3 mt-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Messages submitted through contact forms</li>
          </ul>

          <p className="mt-8">
            We also automatically collect anonymous technical
            information including:
          </p>

          <ul className="list-disc pl-6 space-y-3 mt-6">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
          </ul>

        </PageSection>

        <PageSection title="Cookies">

          <p>
            TinySorted uses cookies to improve website performance,
            remember preferences, and analyze visitor behavior.
          </p>

          <p>
            You may disable cookies in your browser settings, although
            some features of the website may no longer function
            properly.
          </p>

        </PageSection>

        <PageSection title="Analytics">

          <p>
            We may use services such as Google Analytics to understand
            how visitors use our website. These services may collect
            anonymous usage data through cookies.
          </p>

        </PageSection>

        <PageSection title="Advertising">

          <p>
            TinySorted may display advertisements through advertising
            partners such as Google AdSense.
          </p>

          <p>
            These partners may use cookies to serve personalized ads
            based on your previous visits to this and other websites.
          </p>

        </PageSection>

        <PageSection title="Affiliate Links">

          <p>
            Some articles may contain affiliate links.
          </p>

          <p>
            If you purchase products through these links, TinySorted
            may receive a small commission at no additional cost to
            you.
          </p>

          <p>
            Affiliate partnerships never influence our editorial
            opinions or recommendations.
          </p>

        </PageSection>

        <PageSection title="Third-Party Services">

          <p>
            Our website may link to third-party websites including
            retailers, social media platforms, and external services.
          </p>

          <p>
            We are not responsible for the privacy practices of those
            websites.
          </p>

        </PageSection>

        <PageSection title="Your Rights">

          <p>
            Depending on your location, you may have the right to:
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3">
            <li>Request access to your data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal data</li>
            <li>Withdraw consent</li>
          </ul>

        </PageSection>

        <PageSection title="Data Security">

          <p>
            We take reasonable measures to protect your personal
            information from unauthorized access, disclosure, or
            misuse.
          </p>

        </PageSection>

        <PageSection title="Children's Privacy">

          <p>
            TinySorted is not intended for children under the age of
            13, and we do not knowingly collect personal information
            from children.
          </p>

        </PageSection>

        <PageSection title="Changes to This Policy">

          <p>
            We may update this Privacy Policy from time to time.
            Changes will be posted on this page with an updated
            effective date.
          </p>

        </PageSection>

        <PageSection title="Contact">

          <p>
            If you have questions regarding this Privacy Policy,
            please contact us at:
          </p>

          <p className="mt-6 font-medium">
            hello@tinysorted.com
          </p>

        </PageSection>

      </PageContainer>

    </main>
  );
}