import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import ProductEmbed from "@/components/article/ProductEmbed";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const portableTextComponents = {
  block: {
    h2: ({ children }: any) => {
      const text = Array.isArray(children)
        ? children.join("")
        : children?.toString() || "";

      const id = slugify(text);

      return (
        <h2
          id={id}
          className="
            scroll-mt-32
            mt-16
            mb-6

            text-4xl
            font-light
            leading-tight

            text-neutral-900
          "
        >
          {children}
        </h2>
      );
    },

    h3: ({ children }: any) => {
      const text = Array.isArray(children)
        ? children.join("")
        : children?.toString() || "";

      const id = slugify(text);

      return (
        <h3
          id={id}
          className="
            scroll-mt-32
            mt-12
            mb-4

            text-2xl
            font-medium

            text-neutral-900
          "
        >
          {children}
        </h3>
      );
    },

    normal: ({ children }: any) => (
      <p
        className="
          mb-6
          text-lg
          leading-9
          text-neutral-800
        "
      >
        {children}
      </p>
    ),
  },

  types: {
    image: ({ value }: any) => {
      if (!value?.asset) {
        return null;
      }

      return (
        <figure
          className="
            my-14

            max-w-[550px]
            mx-auto
          "
        >
          <Image
            src={urlFor(value)
              .width(700)
              .quality(90)
              .url()}
            alt={value.alt || ""}
            width={700}
            height={470}
            loading="lazy"
            className="
              w-full
              h-auto

              rounded-[20px]

              object-cover

              shadow-sm
            "
          />

          {value?.alt && (
            <figcaption
              className="
                mt-3

                text-center
                text-sm

                text-neutral-500
              "
            >
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
      productEmbed: ({
value,
}: any) => {
if (!value?.product) {
return null;
}

return ( <ProductEmbed
   product={value.product}
 />
);

    },
  },

  marks: {
    link: ({
      children,
      value,
    }: any) => {
      const href =
        value?.href || "#";

      return (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            underline
            underline-offset-4

            hover:text-neutral-700
          "
        >
          {children}
        </Link>
      );
    },
  },
};