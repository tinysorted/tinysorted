"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    alert(`Subscribed: ${email}`);

    setEmail("");
  };

  return (
    <section
      className="
        mt-24
        mb-24
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto

          rounded-[32px]

          border
          border-neutral-200

          bg-white

          px-8
          py-12

          md:px-12
          md:py-14

          text-center
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
          Newsletter
        </p>

        <h2
          className="
            text-3xl
            md:text-5xl

            font-light

            tracking-[-0.04em]

            max-w-3xl
            mx-auto
          "
        >
          Get the latest insights delivered
          directly to your inbox.
        </h2>

        <p
          className="
            mt-5

            text-neutral-600

            max-w-xl
            mx-auto

            leading-7
          "
        >
          Join readers who receive new articles,
          organization tips, technology insights,
          and productivity ideas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            mt-8

            max-w-xl
            mx-auto

            flex
            flex-col

            md:flex-row

            gap-3
          "
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email address"
            className="
              flex-1

              h-14

              rounded-full

              border
              border-neutral-200

              px-6

              outline-none

              focus:border-neutral-900
            "
          />

          <button
            type="submit"
            className="
              h-14

              px-8

              rounded-full

              bg-neutral-900
              text-white

              hover:opacity-90

              transition
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}