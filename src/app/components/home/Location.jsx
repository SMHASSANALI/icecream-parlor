"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Button from "../global/Button";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

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
    <div ref={mapRef} className="px-4 my-[120px] h-screen relative">
      <motion.div
        style={{ y: textY }}
        className="absolute top-0 right-4 max-w-sm flex flex-col items-center justify-center p-4 text-black"
      >
        <p className="text-center text-sm font-light pb-4 mix-blend-exclusion z-10">
          Visit your nearest store to get your favorite ice cream!
        </p>
        <Button text="Find a Store" />
      </motion.div>
      <motion.div
        style={{ y: textY }}
        className="absolute bottom-8 left-24 max-w-sm flex flex-col items-center justify-center p-4 text-black"
      >
        <p className="text-9xl text-blue-700 font-['nerko_one'] -tracking-tighter leading-0 flex flex-row items-center">
          3{" "}
          <span className="text-lg text-black font-['inter'] font-medium tracking-tight">
            Stores Across <br /> the Country
          </span>{" "}
        </p>
      </motion.div>
      <motion.div style={{ y: img1Y }} className="absolute top-24 left-24 z-10">
        <Image
          src="/assets/random/cone_car.jpg"
          alt="map"
          width={200}
          height={400}
        />
      </motion.div>
      <motion.div
        style={{ y: img2Y }}
        className="absolute bottom-0 right-24 z-10"
      >
        <Image
          src="/assets/random/duo_cone.jpg"
          alt="map"
          width={200}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default Location;
