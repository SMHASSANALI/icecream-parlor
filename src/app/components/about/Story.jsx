"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Story = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.5 },
    }),
  };

  return (
    <main className="min-h-[100vh] bg-white flex items-center">
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row w-full min-h-screen"
      >
        <div className="p-[10px] md:p-[30px] h-fit lg:h-screen w-full lg:w-6/12 flex items-center justify-center">
          <div className="w-full md:w-10/12 h-[400px] relative">
            <motion.div
              initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              animate={{
                boxShadow: isInView
                  ? "0px 10px 20px rgba(0, 0, 0, 0.4)"
                  : "0px 0px 0px rgba(0, 0, 0, 0)",
              }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="w-full h-full"
            >
              <Image
                src="/assets/random/icecream_van.jpg"
                alt="Ice cream van"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="w-full h-[400px] bg-neutral-50 absolute top-0 z-50"
              initial={{ height: "400px" }}
              animate={{ height: isInView ? "0px" : "400px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="bg-sky-50 w-full lg:w-6/12 h-full min-h-[350px] lg:min-h-screen flex flex-col justify-center items-start p-[10px] md:p-[30px]">
          <motion.span
            className="text-blue-700 text-sm md:text-lg font-semibold font-['inter'] uppercase"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            Our Sweet Story
          </motion.span>
          <motion.p
            className="text-4xl md:text-8xl text-pink-600 font-['nerko_one'] md:leading-[70px] tracking-tighter pb-[20px]"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2.5}
          >
            From Dream to Delight
          </motion.p>
          <motion.p
            className="text-sm md:text-lg text-zinc-600 font-semibold max-w-lg tracking-tight"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
          >
            It all began with a dream and a waffle cone in 2010. Our founders,
            lifelong ice cream lovers, wanted to create a place where every
            scoop brought a smile. From humble beginnings in a small shop to a
            chain of three stores across the country, we’ve been crafting joy
            with every flavor. Our secret? Love, creativity, and the best
            ingredients!
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default Story;