import type { Metadata } from "next";

import PageContainer from "@/components/static/PageContainer";
import PageHero from "@/components/static/PageHero";
import PageSection from "@/components/static/PageSection";

import {
  Mail,
  Briefcase,
  Newspaper,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact TinySorted",
  description:
    "Get in touch with TinySorted for partnerships, editorial inquiries, feedback, or general questions.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F7F6F3] min-h-screen">

      <PageContainer>

        <PageHero
          eyebrow="Contact"
          title="We'd Love to Hear From You."
          description="Whether you have a question, feedback, partnership proposal, or media inquiry, our team is happy to help."
        />

        {/* CONTACT CARDS */}

        <section
          className="
            grid
            gap-8
            md:grid-cols-2
            mb-24
          "
        >

          <div className="rounded-[28px] bg-white p-8 border border-neutral-200">

            <Mail
              className="mb-5"
              size={34}
            />

            <h2 className="text-2xl font-medium mb-3">
              General Questions
            </h2>

            <p className="text-neutral-600 leading-8">
              Need help or have a question about one of our
              articles?
            </p>

            <a
              href="mailto:hello@tinysorted.com"
              className="
                mt-6
                inline-block
                text-lg
                underline
              "
            >
              hello@tinysorted.com
            </a>

          </div>

          <div className="rounded-[28px] bg-white p-8 border border-neutral-200">

            <Briefcase
              className="mb-5"
              size={34}
            />

            <h2 className="text-2xl font-medium mb-3">
              Partnerships
            </h2>

            <p className="text-neutral-600 leading-8">
              Interested in collaborating with TinySorted?
            </p>

            <a
              href="mailto:partners@tinysorted.com"
              className="
                mt-6
                inline-block
                text-lg
                underline
              "
            >
              partners@tinysorted.com
            </a>

          </div>

          <div className="rounded-[28px] bg-white p-8 border border-neutral-200">

            <Newspaper
              className="mb-5"
              size={34}
            />

            <h2 className="text-2xl font-medium mb-3">
              Editorial
            </h2>

            <p className="text-neutral-600 leading-8">
              Questions about our articles, corrections,
              or editorial policies.
            </p>

            <a
              href="mailto:editor@tinysorted.com"
              className="
                mt-6
                inline-block
                text-lg
                underline
              "
            >
              editor@tinysorted.com
            </a>

          </div>

          <div className="rounded-[28px] bg-white p-8 border border-neutral-200">

            <MessageSquare
              className="mb-5"
              size={34}
            />

            <h2 className="text-2xl font-medium mb-3">
              Feedback
            </h2>

            <p className="text-neutral-600 leading-8">
              We'd love to know what you'd like to see
              next on TinySorted.
            </p>

            <a
              href="mailto:feedback@tinysorted.com"
              className="
                mt-6
                inline-block
                text-lg
                underline
              "
            >
              feedback@tinysorted.com
            </a>

          </div>

        </section>

        {/* FORM */}

        <PageSection title="Send Us a Message">

          <form className="space-y-6">

            <input
              placeholder="Your Name"
              className="
                w-full
                rounded-2xl
                border
                border-neutral-300
                bg-white
                px-6
                py-4
                outline-none
              "
            />

            <input
              placeholder="Email Address"
              type="email"
              className="
                w-full
                rounded-2xl
                border
                border-neutral-300
                bg-white
                px-6
                py-4
                outline-none
              "
            />

            <input
              placeholder="Subject"
              className="
                w-full
                rounded-2xl
                border
                border-neutral-300
                bg-white
                px-6
                py-4
                outline-none
              "
            />

            <textarea
              rows={8}
              placeholder="How can we help?"
              className="
                w-full
                rounded-2xl
                border
                border-neutral-300
                bg-white
                px-6
                py-5
                outline-none
              "
            />

            <button
              className="
                rounded-full
                bg-black
                px-8
                py-4
                text-white
                transition
                hover:bg-neutral-800
              "
            >
              Send Message
            </button>

          </form>

        </PageSection>

      </PageContainer>

    </main>
  );
}