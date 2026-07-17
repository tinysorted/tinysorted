"use client";

import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  title: string;
  affiliateUrl: string;

  brand?: string;
  recommendation?: string;

  price?: string;

  rating?: number;
  reviewCount?: number;

  image?: {
    asset?: any;
  };
}

interface Props {
  product: Product;
}

export default function ProductEmbed({ product }: Props) {
  if (!product) return null;

  return (
    <aside
      className="
        my-12
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200
        bg-white
        shadow-sm
      "
    >
      <div
        className="
          grid

          md:grid-cols-[260px_1fr]
        "
      >
        {/* IMAGE */}

        <div className="relative">
          {product.image?.asset ? (
            <Image
              src={urlFor(product.image)
                .width(700)
                .quality(90)
                .url()}
              alt={product.title}
              width={700}
              height={700}
              className="
                h-[220px]
                w-full
                object-cover

                md:h-full
                md:min-h-[320px]
              "
            />
          ) : (
            <div
              className="
                h-[220px]
                w-full
                bg-neutral-100

                md:h-full
                md:min-h-[320px]
              "
            />
          )}
        </div>

        {/* CONTENT */}

        <div
          className="
            flex
            flex-col
            justify-center

            p-6

            md:p-10
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-500
            "
          >
            Recommended Product
          </p>

          <h3
            className="
              mt-3

              text-2xl
              font-light
              leading-tight
              text-neutral-900

              md:text-4xl
            "
          >
            {product.title}
          </h3>

          {product.brand && (
            <p
              className="
                mt-3

                text-xs
                uppercase
                tracking-[0.18em]

                text-neutral-500

                md:text-sm
              "
            >
              {product.brand}
            </p>
          )}

          {product.recommendation && (
            <p
              className="
                mt-6

                text-[15px]
                leading-7

                text-neutral-700

                md:mt-8
                md:text-lg
                md:leading-8
              "
            >
              {product.recommendation}
            </p>
          )}

          {(product.rating || product.price) && (
            <div
              className="
                mt-8

                flex
                flex-wrap
                items-center
                gap-5
              "
            >
              {product.rating && (
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Star
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span
                    className="
                      text-base

                      md:text-lg
                    "
                  >
                    {product.rating}
                  </span>
                </div>
              )}

              {product.price && (
                <span
                  className="
                    text-xl
                    font-semibold
                    text-neutral-900

                    md:text-2xl
                  "
                >
                  {product.price}
                </span>
              )}
            </div>
          )}

          <div className="mt-8 md:mt-10">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="
                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold

                text-neutral-900

                transition-all
                duration-300

                hover:gap-3
              "
            >
              View Product

              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}