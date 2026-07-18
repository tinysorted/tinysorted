"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import FeaturedCard from "./FeaturedCard";
import FeaturedNavigation from "./FeaturedNavigation";


interface Props {
  articles: any[];
}



export default function FeaturedSlider({
  articles,
}: Props) {


  const [activeIndex, setActiveIndex] =
    useState(0);



  const total =
    articles?.length || 0;



  if (!total) return null;



  /*
  ========================================
  NAVIGATION
  ========================================
  */


  function next() {

    setActiveIndex(
      (prev) =>
        (prev + 1) % total
    );

  }



  function prev() {

    setActiveIndex(
      (prev) =>
        (prev - 1 + total) % total
    );

  }



  function select(index:number){

    setActiveIndex(index);

  }



  /*
  ========================================
  AUTOPLAY
  ========================================
  */


  useEffect(() => {

    const timer =
      setInterval(() => {

        next();

      },7000);



    return () =>
      clearInterval(timer);


  }, [total]);





  /*
  ========================================
  ARTICLE POSITION
  ========================================
  */


  const getArticle = (
    offset:number
  ) => {

    return articles[
      (activeIndex + offset + total)
      % total
    ];

  };



  const left =
    getArticle(-1);


  const center =
    getArticle(0);


  const right =
    getArticle(1);





  return (

    <div
      className="
        relative
        w-full
      "
    >


      {/* CARDS */}

      <div
        className="
          relative

          mx-auto

          flex

          h-[620px]

          max-w-[1200px]

          items-center

          justify-center

          gap-6

          overflow-hidden
        "
      >


        {/* LEFT */}

        <motion.div

          key={
            left._id
          }

          initial={{
            opacity:0,
            x:-80
          }}

          animate={{
            opacity:0.55,
            x:0
          }}

          transition={{
            duration:0.6
          }}

          className="
            hidden

            w-[260px]

            lg:block
          "
        >

          <FeaturedCard

            article={left}

          />

        </motion.div>





        {/* CENTER ACTIVE */}

        <AnimatePresence
          mode="wait"
        >

          <motion.div

            key={
              center._id
            }

            initial={{
              opacity:0,
              scale:0.92,
              y:20
            }}

            animate={{
              opacity:1,
              scale:1,
              y:0
            }}

            exit={{
              opacity:0,
              scale:0.92
            }}

            transition={{
              duration:0.6,
              ease:
                "easeOut"
            }}

            className="
              z-10

              w-[330px]

              md:w-[390px]

            "
          >

            <FeaturedCard

              article={center}

              active

            />

          </motion.div>


        </AnimatePresence>






        {/* RIGHT */}


        <motion.div

          key={
            right._id
          }

          initial={{
            opacity:0,
            x:80
          }}

          animate={{
            opacity:0.55,
            x:0
          }}

          transition={{
            duration:0.6
          }}

          className="
            hidden

            w-[260px]

            lg:block
          "

        >

          <FeaturedCard

            article={right}

          />

        </motion.div>



      </div>





      {/* NAVIGATION */}

      <FeaturedNavigation

        total={
          total
        }

        current={
          activeIndex
        }

        onPrev={
          prev
        }

        onNext={
          next
        }

        onSelect={
          select
        }

      />


    </div>

  );

}