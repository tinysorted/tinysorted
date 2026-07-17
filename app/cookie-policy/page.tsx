import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

export const metadata: Metadata = {
  title: "Cookie Policy | TinySorted",
  description:
    "Learn how TinySorted uses cookies and similar technologies to improve your browsing experience.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3]">

      <PageContainer>

        <PageHero
          eyebrow="Legal"
          title="Cookie Policy"
          description="This Cookie Policy explains how TinySorted uses cookies and similar technologies."
        />

        <PageSection title="What Are Cookies?">

          <p>
            Cookies are small text files stored on your device when
            you visit a website.
          </p>

          <p>
            They help websites remember preferences, improve
            performance, and understand how visitors interact with
            content.
          </p>

        </PageSection>

        <PageSection title="Why We Use Cookies">

          <p>
            TinySorted uses cookies for several purposes:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3">

            <li>Improve website performance.</li>

            <li>Remember user preferences.</li>

            <li>Measure website traffic.</li>

            <li>Understand visitor behavior.</li>

            <li>Support advertising and affiliate programs.</li>

          </ul>

        </PageSection>

        <PageSection title="Types of Cookies We Use">

          <h3 className="mb-4 text-2xl font-medium">
            Essential Cookies
          </h3>

          <p>
            Required for the website to function properly.
          </p>

          <h3 className="mt-10 mb-4 text-2xl font-medium">
            Analytics Cookies
          </h3>

          <p>
            Help us understand how visitors use TinySorted so we can
            improve the experience.
          </p>

          <h3 className="mt-10 mb-4 text-2xl font-medium">
            Advertising Cookies
          </h3>

          <p>
            May be used by advertising partners to provide more
            relevant advertisements.
          </p>

        </PageSection>

        <PageSection title="Third-Party Cookies">

          <p>
            TinySorted may use services provided by trusted third
            parties including:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3">

            <li>Google Analytics</li>

            <li>Google AdSense</li>

            <li>Amazon Associates</li>

            <li>Impact.com</li>

            <li>Pinterest</li>

            <li>Microsoft Clarity</li>

            <li>Meta Pixel (if enabled)</li>

          </ul>

        </PageSection>

        <PageSection title="Managing Cookies">

          <p>
            Most browsers allow you to control or disable cookies
            through browser settings.
          </p>

          <p>
            Please note that disabling cookies may affect some
            functionality of the website.
          </p>

        </PageSection>

        <PageSection title="Consent">

          <p>
            By continuing to use TinySorted, you consent to our use
            of cookies as described in this policy.
          </p>

          <p>
            If required by applicable law, a cookie consent banner
            will be displayed before non-essential cookies are
            activated.
          </p>

        </PageSection>

        <PageSection title="Updates">

          <p>
            This Cookie Policy may be updated periodically to reflect
            changes in technology, legal requirements, or website
            functionality.
          </p>

        </PageSection>

        <PageSection title="Contact">

          <p>
            Questions regarding this Cookie Policy can be sent to:
          </p>

          <p className="mt-6 font-medium">
            privacy@tinysorted.com
          </p>

        </PageSection>

      </PageContainer>

    </main>
  );
}