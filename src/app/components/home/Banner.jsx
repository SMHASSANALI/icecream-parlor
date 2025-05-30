"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const rotateImg = useTransform(scrollYProgress, [0, 1], ["0deg", "35deg"]);
  const xImg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-1000%"]);
  
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-35deg"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      className="w-full px-4 h-[100dvh] md:h-[200dvh] flex flex-col md:flex-row justify-center items-center md:items-start overflow-hidden relative gap-[10px] md:gap-[30px]"
      ref={containerRef}
    >
      <div className="w-full md:w-6/12 h-full md:fixed left-4 top-0 flex flex-col justify-center items-center gap-[10px] md:gap-[30px]">
        <motion.span style={{ rotate, y, x, opacity }}>
          <h1 className="text-4xl md:text-9xl font-bold text-blue-700 font-['nerko_one'] text-center leading-[0.85]">
            Scoop Up Happiness with ABC IceCream
          </h1>
        </motion.span>
        <motion.span
          style={{ rotate, y: yText, x, opacity }}
          className="max-w-xl text-center"
        >
          <p className="text-base text-black">
            Indulge in creamy, dreamy flavors crafted with love. Visit us at one
            of our many locations and treat yourself to the ultimate ice cream
            experience!
          </p>
        </motion.span>
      </div>
      <div className="w-full md:w-6/12 md:h-full md:fixed right-4 top-0 flex flex-col justify-center items-center">
        <motion.span
          style={{ rotate: rotateImg, y: y, x: xImg, opacity }}
          className="w-full h-[40vh] md:h-[80dvh] relative"
        >
          <Image src={"/assets/random/flavours.jpg"} alt="" priority fill />
        </motion.span>
      </div>
    </div>
  );
};

export default Banner;
