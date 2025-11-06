"use client";

import React, { useRef } from "react";
import Picture1 from "../../../../public/assets/random/cone_car.jpg";
import Picture2 from "../../../../public/assets/random/kid.jpg";
import Picture3 from "../../../../public/assets/random/icecream_container.jpg";
import Picture4 from "../../../../public/assets/products/strawberry.jpg";
import Picture5 from "../../../../public/assets/random/colorfull_cones.jpg";
import Picture6 from "../../../../public/assets/products/hazelnut_chocolate.jpg";
import Picture7 from "../../../../public/assets/products/sicilian_mandarin.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4times = useTransform(scrollYProgress, [0, 0.8], [1, 4]);
  const scale6times = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8times = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale7times = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale9times = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10times = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const pictureArray = [
    {
      src: Picture1,
      topValue: "0%",
      leftValue: "0%",
      scaleValue: scale4times,
      widthPercentage: "25vw",
      heightPercentage: "25vh",
    },
    {
      src: Picture2,
      topValue: "30%",
      leftValue: "-25%",
      scaleValue: scale9times,
      widthPercentage: "30vw",
      heightPercentage: "30vh",
    },
    {
      src: Picture3,
      topValue: "29%",
      leftValue: "4%",
      scaleValue: scale6times,
      widthPercentage: "25vw",
      heightPercentage: "28vh",
    },
    {
      src: Picture4,
      topValue: "-32%",
      leftValue: "30%",
      scaleValue: scale8times,
      widthPercentage: "25vw",
      heightPercentage: "35vh",
    },
    {
      src: Picture5,
      topValue: "-30%",
      leftValue: "1.5%",
      scaleValue: scale6times,
      widthPercentage: "28.5vw",
      heightPercentage: "30vh",
    },
    {
      src: Picture6,
      topValue: "13%",
      leftValue: "28%",
      scaleValue: scale10times,
      widthPercentage: "20vw",
      heightPercentage: "50vh",
    },
    {
      src: Picture7,
      topValue: "-12%",
      leftValue: "-27%",
      scaleValue: scale7times,
      widthPercentage: "25vw",
      heightPercentage: "50vh",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-[10vh] space-y-[10vh] overflow-clip">
      <h1 className="text-blue-700 text-4xl md:text-8xl lg:text-9xl max-w-5xl md:mx-auto text-center uppercase font-['nerko_one'] md:leading-[6.8rem] tracking-[0.02rem]">
        Welcome to Frosted Bloom <br/> Where Freshness Meets Flavor
      </h1>
      <div ref={containerRef} className="h-[300vh] relative w-full">
        <div className="w-full h-[100vh] sticky top-0 overflow-clip">
          {pictureArray.map(
            (
              {
                src,
                topValue,
                leftValue,
                scaleValue,
                widthPercentage,
                heightPercentage,
              },
              index
            ) => {
              return (
                <motion.div
                  key={index}
                  style={{
                    scale: scaleValue,
                  }}
                  className="w-[100%] h-[100%] absolute flex items-center justify-center"
                >
                  <div
                    className="relative"
                    style={{
                      width: widthPercentage,
                      height: heightPercentage,
                      top: topValue,
                      left: leftValue,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Banner image ${index + 1}`}
                      fill
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
