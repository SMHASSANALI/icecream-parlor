"use client";

import Image from "next/image";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Intro = () => {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"],
  });

  const fastY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const images = [
    {
      src: "/assets/random/stripeswomen.jpg",
      alt: "Woman in striped shirt",
      width: 200,
      height: 300,
      top: "10%",
      left: "10%",
      zIndex: 1, 
      yTransform: fastY,
    },
    {
      src: "/assets/random/icecream_container.jpg",
      alt: "Ice cream container",
      width: 250,
      height: 250,
      top: "60%",
      left: "5%",
      zIndex: 10, 
      yTransform: slowY, 
    },
    {
      src: "/assets/random/cone_car.jpg",
      alt: "Ice cream cone car",
      width: 300,
      height: 200,
      top: "20%",
      left: "60%",
      zIndex: 1, 
      yTransform: slowY, 
    },
    {
      src: "/assets/products/strawberry.jpg",
      alt: "Strawberry ice cream",
      width: 220,
      height: 280,
      top: "50%",
      left: "70%",
      zIndex: 15, 
      yTransform: fastY, 
    },
    {
      src: "/assets/random/women_bun.jpg",
      alt: "Woman with bun",
      width: 180,
      height: 270,
      top: "30%",
      left: "30%",
      zIndex: 0, 
      yTransform: fastY, 
    },
    {
      src: "/assets/products/hazelnut_chocolate.jpg",
      alt: "Hazelnut chocolate ice cream",
      width: 200,
      height: 300,
      top: "70%",
      left: "40%",
      zIndex: 12,
      yTransform: slowY, 
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={introRef}
      className="w-full bg-gradient-to-r from-pink-300 to-blue-300 h-[300dvh] relative z-5"
    >
      <div className="h-screen sticky top-0 flex flex-col justify-center items-center">
        <motion.h1
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={textVariants}
          className="font-['nerko_one'] text-7xl md:text-9xl text-center text-white"
        >
          We’re the Scoop Dreamers!
        </motion.h1>
      </div>

      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{
            y: image.yTransform, 
            zIndex: image.zIndex,
            top: image.top,
            left: image.left,
            position: "absolute",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={introInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover rounded-lg shadow-md"
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Intro;