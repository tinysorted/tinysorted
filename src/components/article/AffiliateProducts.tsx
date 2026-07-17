"use client";

import { useRef } from "react";
import Image from "next/image";
import {
ChevronLeft,
ChevronRight,
ExternalLink,
Star,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

interface Product {
_id: string;
title: string;
affiliateUrl: string;
price?: string;

brand?: string;
recommendation?: string;
rating?: number;

image?: {
asset?: any;
};
}

interface Props {
products: Product[];
}

export default function AffiliateProducts({
products,
}: Props) {
const scrollRef =
useRef<HTMLDivElement>(null);

if (!products?.length) {
return null;
}

const scrollLeft = () => {
scrollRef.current?.scrollBy({
left: -400,
behavior: "smooth",
});
};

const scrollRight = () => {
scrollRef.current?.scrollBy({
left: 400,
behavior: "smooth",
});
};

return ( <section className="py-20">
{/* Header */} <div className="mb-12"> <p
       className="
         mb-3
         text-xs
         uppercase
         tracking-[0.25em]
         text-neutral-500
       "
     >
Recommended Products </p>


    <div
      className="
        flex
        items-center
        justify-between
        gap-6
      "
    >
      <h2
        className="
          text-3xl
          md:text-4xl
          font-light
          tracking-[-0.03em]
          text-neutral-900
        "
      >
        Products We Recommend
      </h2>

      <div
        className="
          hidden
          md:flex
          items-center
          gap-3
        "
      >
        <button
          onClick={scrollLeft}
          className="
            h-12
            w-12
            rounded-full
            border
            border-neutral-300
            bg-white
            flex
            items-center
            justify-center
            transition-all

            hover:border-neutral-900
            hover:shadow-sm
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={scrollRight}
          className="
            h-12
            w-12
            rounded-full
            border
            border-neutral-300
            bg-white
            flex
            items-center
            justify-center
            transition-all

            hover:border-neutral-900
            hover:shadow-sm
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </div>

  {/* Carousel */}
  <div
    ref={scrollRef}
    className="
      flex
      gap-6
      overflow-x-auto
      scroll-smooth
      pb-3

      [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
    "
  >
    {products.map((product) => (
      <a
        key={product._id}
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="
          group
          shrink-0

          w-[280px]

          overflow-hidden
          rounded-[28px]

          border
          border-neutral-200

          bg-white

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative">
          {product.image?.asset ? (
            <Image
              src={urlFor(product.image)
                .width(700)
                .quality(90)
                .url()}
              alt={product.title}
              width={700}
              height={500}
              loading="lazy"
              className="
                h-[180px]
                w-full
                object-cover

                transition-transform
                duration-500

                group-hover:scale-105
              "
            />
          ) : (
            <div
              className="
                h-[180px]
                w-full
                bg-neutral-100
              "
            />
          )}

          <div
            className="
              absolute
              left-4
              top-4

              rounded-full
              bg-white/95

              px-3
              py-1

              text-[11px]
              font-medium
              uppercase
              tracking-wider
            "
          >
            Editor's Pick
          </div>
        </div>

        {/* Content */}
        <div className="p-5">

          {product.brand && (
            <p
              className="
                mb-2

                text-[11px]
                uppercase
                tracking-[0.18em]

                text-neutral-500
              "
            >
              {product.brand}
            </p>
          )}

          <h3
            className="
              mb-3

              line-clamp-2

              text-lg
              font-medium
              leading-snug

              text-neutral-900
            "
          >
            {product.title}
          </h3>

          {product.recommendation && (
  <p
    className="
      mb-4
      text-sm
      leading-6
      text-neutral-600
      line-clamp-3
    "
  >
    {product.recommendation}
  </p>
)}

          {product.rating && (
            <div
              className="
                mb-4
                flex
                items-center
                gap-1

                text-sm
                text-neutral-600
              "
            >
              <Star
                size={14}
                fill="currentColor"
                className="text-amber-500"
              />

              <span>
                {product.rating}
              </span>
            </div>
          )}

          {product.price && (
            <p
              className="
                mb-5

                text-2xl
                font-semibold

                text-neutral-900
              "
            >
              {product.price}
            </p>
          )}

          <div
            className="
              inline-flex
              items-center
              gap-2

              text-sm
              font-medium

              text-neutral-600

              transition

              group-hover:text-neutral-900
            "
          >
            See Details

            <ExternalLink
              size={15}
            />
          </div>
        </div>
      </a>
    ))}
  </div>

  {/* Disclaimer */}
  <p
    className="
      mt-6
      text-xs
      leading-relaxed
      text-neutral-500
    "
  >
    Editorially selected products. 
    We may earn a commission from purchases made through affiliate links, 
    at no additional cost to you.
  </p>
</section>

);
}
