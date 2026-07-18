interface Props {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect?: (index: number) => void;
}

export default function FeaturedNavigation({
  total,
  current,
  onPrev,
  onNext,
  onSelect,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-8
      "
    >

      {/* INDICATOR */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        {Array.from({
          length: total,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() =>
              onSelect?.(index)
            }
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-[6px]
              rounded-full
              transition-all
              duration-500

              ${
                current === index
                  ? `
                    w-10
                    bg-[#8C6A52]
                  `
                  : `
                    w-2
                    bg-black/20
                  `
              }
            `}
          />
        ))}
      </div>



      {/* ARROWS */}

      <div
        className="
          flex
          items-center
          gap-6
        "
      >

        <button
          onClick={onPrev}
          aria-label="Previous article"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            border
            border-black/10

            text-xl

            transition-all
            duration-300

            hover:bg-black
            hover:text-white
          "
        >
          ←
        </button>



        <button
          onClick={onNext}
          aria-label="Next article"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            border
            border-black/10

            text-xl

            transition-all
            duration-300

            hover:bg-black
            hover:text-white
          "
        >
          →
        </button>

      </div>

    </div>
  );
}