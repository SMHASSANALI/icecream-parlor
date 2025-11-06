"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Button from "../global/Button";
import { useScroll, useTransform, motion } from "framer-motion";

const Location = () => {
  const mapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const img1Y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={mapRef} className="px-4 min-h-screen relative bg-[#F9E3CF]">
      <Image
        src="/logo.png"
        alt="map"
        width={100}
        height={100}
        className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] h-fit w-fit"
      />
      <motion.div
        style={{ y: textY }}
        className="absolute top-0 right-4 max-w-sm flex flex-col items-center justify-center p-4 text-black z-50"
      >
        <p className="text-center text-sm font-light pb-4">
          Visit your nearest store to get your favorite ice cream!
        </p>
        <Button text="Find a Store" />
      </motion.div>
      <motion.div
        style={{ y: textY }}
        className="absolute bottom-38 left-24 max-w-sm flex flex-col items-center justify-center p-4 text-black z-50"
      >
        <p className="text-9xl text-blue-700 font-['nerko_one'] -tracking-tighter leading-0 flex flex-row items-center">
          3{" "}
          <span className="text-lg text-black font-['inter'] font-medium tracking-tight">
            Stores Across <br /> the Country
          </span>{" "}
        </p>
      </motion.div>
      <motion.div
        style={{ y: img1Y }}
        className="absolute top-24 left-4 md:left-24 z-10 w-[120px] rounded-lg overflow-hidden h-[200px] md:w-[200px] md:h-[350px]"
      >
        <Image
          src="/assets/random/cone_car.jpg"
          alt="map"
          fill
          className="mix-blend-exclusion"
        />
      </motion.div>
      <motion.div
        style={{ y: img2Y }}
        className="absolute bottom-24 right-4 md:right-24 z-10 w-[120px] rounded-lg overflow-hidden h-[200px] md:w-[200px] md:h-[350px]"
      >
        <Image
          src="/assets/random/duo_cone.jpg"
          alt="map"
          fill
          className="mix-blend-exclusion"
        />
      </motion.div>
    </div>
  );
};

export default Location;
