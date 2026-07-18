"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import PopularTrendingCard from "./PopularTrendingCard";

interface Props {
  settings: any;
}

export default function PopularTrendingSection({
  settings,
}: Props) {
  const section = settings?.popularTrending;

  const scrollRef =
    useRef<HTMLDivElement>(null);

  if (
    !section ||
    !section.articles?.length
  ) {
    return null;
  }

  // ======================================
  // SCROLL
  // ======================================

  const CARD_WIDTH = 404;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
  };


  return (
    <section
      className="
        relative

        overflow-hidden

        py-24

        md:py-32
      "
    >

      {/* ====================================== */}
      {/* BACKGROUND */}
      {/* ====================================== */}

      <div className="absolute inset-0">

        {section.backgroundImage ? (
          <img
            src={urlFor(section.backgroundImage)
              .width(2600)
              .height(1500)
              .quality(100)
              .fit("crop")
              .url()}
            alt={
              section.backgroundImage.alt ??
              "Popular Trending Background"
            }
            className="
              absolute
              inset-0

              h-full
              w-full

              object-cover
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0

              bg-[#46372c]
            "
          />
        )}


        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b

            from-black/45

            via-black/35

            to-black/55
          "
        />


        {/* WARM OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-[#4B3A2F]/20
          "
        />

      </div>


      {/* ====================================== */}
      {/* CONTENT */}
      {/* ====================================== */}

      <div
        className="
          relative

          mx-auto

          max-w-[1450px]

          px-6

          lg:px-10
        "
      >
              {/* ====================================== */}
        {/* HEADER */}
        {/* ====================================== */}

        <div
          className="
            max-w-3xl

            text-left
          "
        >
          <p
            className="
              mb-4

              text-xs

              uppercase

              tracking-[0.28em]

              text-white/70
            "
          >
            Featured Collection
          </p>


          <h2
            className="
              text-4xl

              font-light

              tracking-tight

              text-white

              md:text-6xl
            "
          >
            {section.headline}
          </h2>


          <p
            className="
              mt-6

              max-w-2xl

              text-base

              leading-8

              text-white/80

              md:text-lg
            "
          >
            {section.subheadline}
          </p>
        </div>


        {/* ====================================== */}
        {/* SPACE BEFORE CARDS */}
        {/* ====================================== */}

        <div
          className="
            mt-16
          "
        >
                {/* ====================================== */}
        {/* CAROUSEL */}
        {/* ====================================== */}

        <div
          ref={scrollRef}
          className="
            flex

            snap-x
            snap-mandatory

            gap-6

            overflow-x-auto

            scroll-smooth

            pb-6

            pr-6

            [-ms-overflow-style:none]

            [scrollbar-width:none]

            [&::-webkit-scrollbar]:hidden
          "
        >
          {section.articles.map(
            (article: any) => (
              <div
                key={article._id}
                className="
                  w-[320px]

                  shrink-0

                  snap-start

                  sm:w-[350px]

                  lg:w-[380px]
                "
              >
                <PopularTrendingCard
                  article={article}
                />
              </div>
            )
          )}
        </div>


        
                {/* ====================================== */}
        {/* NAVIGATION */}
        {/* ====================================== */}

        <div
          className="
            mt-8

            flex

            justify-end

            gap-4
          "
        >
          <button
            onClick={scrollLeft}
            aria-label="Previous article"
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-white/25

              bg-white/10

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-white

              hover:text-black

              active:scale-95
            "
          >
            <ChevronLeft
              size={18}
            />
          </button>


          <button
            onClick={scrollRight}
            aria-label="Next article"
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-white/25

              bg-white/10

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-white

              hover:text-black

              active:scale-95
            "
          >
            <ChevronRight
              size={18}
            />
          </button>
        </div>

       </div>
      </div>
    </section>
  );
}