import { urlFor } from "@/sanity/lib/image";

import FeaturedSlider from "./FeaturedSlider";


interface Props {
  settings: any;
}



export default function FeaturedArticleGrid({
  settings,
}: Props) {


  const curated =
    settings?.curatedStories;



  if (
    !curated?.articles ||
    curated.articles.length === 0
  ) {
    return null;
  }




  const backgroundImage =
    curated.backgroundImage
      ? urlFor(
          curated.backgroundImage
        )
          .width(2400)
          .quality(90)
          .url()
      : null;





  return (

    <section
      className="
        relative

        overflow-hidden

        py-28

        md:py-36
      "
    >


      {/* BACKGROUND IMAGE */}


      {backgroundImage && (

        <div
          className="
            absolute

            inset-0

            bg-cover

            bg-center
          "

          style={{
            backgroundImage:
              `url(${backgroundImage})`,
          }}

        />

      )}





      {/* OVERLAY */}

      <div
        className="
          absolute

          inset-0

          bg-[#F7F6F3]/85

          backdrop-blur-sm
        "
      />






      {/* CONTENT */}

      <div
        className="
          relative

          z-10

          mx-auto

          max-w-[1400px]

          px-6
        "
      >



        {/* HEADER */}


        <div
          className="
            mx-auto

            mb-16

            max-w-3xl

            text-center
          "
        >

          <p
            className="
              mb-4

              text-xs

              uppercase

              tracking-[0.35em]

              text-[#8C6A52]
            "
          >
            Curated Stories
          </p>



          <h2
            className="
              text-4xl

              font-light

              tracking-tight

              text-neutral-900

              md:text-6xl
            "
          >
            {
              curated.headline ??
              "Curated Stories"
            }
          </h2>




          <p
            className="
              mx-auto

              mt-6

              max-w-xl

              text-base

              leading-8

              text-neutral-600
            "
          >
            {
              curated.subheadline ??
              "Thoughtful reads selected for you."
            }
          </p>


        </div>






        {/* SLIDER */}


        <FeaturedSlider

          articles={
            curated.articles
          }

        />




      </div>


    </section>

  );

}