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

export default function ProductEmbed({
  product,
}: Props) {
  if (!product) return null;

  return (
    <aside
      className="
        my-14
        overflow-hidden
        rounded-[32px]
        border
        border-neutral-200
        bg-white
        shadow-sm
      "
    >
      <div
        className="
          grid
          gap-8

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
                h-full
                min-h-[250px]
                w-full
                object-cover
              "
            />
          ) : (
            <div className="h-full min-h-[250px] bg-neutral-100" />
          )}
        </div>

        {/* CONTENT */}

        <div
          className="
            flex
            flex-col
            justify-center

            p-10
          "
        >
          <span
            className="
              mb-4

              text-xs
              uppercase
              tracking-[0.25em]

              text-white
            "
          >
            Recommended Product
          </span>

          <h3
            className="
              text-4xl
              font-light
              leading-tight
              text-neutral-900
            "
          >
            {product.title}
          </h3>

          {product.brand && (
            <p
              className="
                mt-3
                text-sm
                uppercase
                tracking-widest
                text-neutral-500
              "
            >
              {product.brand}
            </p>
          )}

          {product.recommendation && (
            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-neutral-700
              "
            >
              {product.recommendation}
            </p>
          )}

          <div
            className="
              mt-8
              flex
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

                <span className="text-lg">
                  {product.rating}
                </span>
              </div>
            )}

            {product.price && (
              <span
                className="
                  text-2xl
                  font-semibold
                "
              >
                {product.price}
              </span>
            )}
          </div>

          {/* BUTTON */}

          
         <div className="mt-10">
  <a
    href={product.affiliateUrl}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="
      inline-flex
      items-center
      gap-2

      text-base
      font-semibold

      text-neutral-900

      transition-all
      duration-300

      hover:text-black
      hover:gap-3
    "
  >
    View Product

    <ExternalLink size={18} />
  </a>

          </div>
        </div>
      </div>
    </aside>
  );
}