"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FaqItem[];
}

export default function ArticleFaq({
  faqs,
}: Props) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  if (!faqs?.length) {
    return null;
  }

  return (
    <section
      className="
        mt-24
        mb-24
      "
    >
      <div
        className="
          max-w-[820px]
          mx-auto
        "
      >
        <div
          className="
            text-center
            mb-12
          "
        >
          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-neutral-500
              mb-4
            "
          >
            FAQ
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-light
              tracking-[-0.04em]
            "
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div
          className="
            space-y-4
          "
        >
          {faqs.map(
            (faq, index) => {
              const isOpen =
                openIndex === index;

              return (
                <div
                  key={index}
                  className="
                    border
                    border-neutral-200
                    rounded-[20px]
                    bg-white
                    overflow-hidden
                  "
                >
                  <button
                    onClick={() =>
                      setOpenIndex(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between

                      px-6
                      py-5

                      text-left
                    "
                  >
                    <span
                      className="
                        text-lg
                        font-medium
                        pr-6
                      "
                    >
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`
                        shrink-0
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                      size={20}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="
                        px-6
                        pb-6

                        text-neutral-600
                        leading-8
                      "
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}