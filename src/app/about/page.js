"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import Banner from "../components/about/Banner";
import CTA from "../components/home/CTA";
import Intro from "../components/about/Intro";
import Story from "../components/about/Story";

const Page = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  // Animation variants for the About section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", repeat: 2, repeatType: "reverse" },
    },
  };

  return (
    <main>
      <Banner />
      <Intro />
      <Story />

      {/* Our About Section */}
      <section
        className="w-full py-20 bg-gradient-to-b from-pink-100 to-blue-100 flex flex-col items-center relative"
      >
        {/* Decorative Icons */}
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={iconVariants}
          className="absolute top-10 left-30 opacity-30"
        >
          <span className="text-9xl animate-bounce">🍦</span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={iconVariants}
          className="absolute bottom-10 right-30 opacity-30"
        >
          <span className="text-9xl animate-bounce">🍨</span>
        </motion.div>

        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 flex flex-col items-center"
        >
          <motion.h2
            variants={childVariants}
            className="font-['nerko_one'] text-4xl md:text-5xl text-blue-700 mb-6 text-center"
          >
            Welcome to Frosted Bloom – Where Freshness Meets Flavor
          </motion.h2>
          {/* Decorative Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full mb-6"></div>
          <motion.p
            variants={childVariants}
            className="font-['inter'] text-lg text-gray-700 text-center mb-6"
          >
            At Frosted Bloom, we believe that great ice cream starts with nature’s
            best — fresh, pure dairy straight from trusted local farms. Every
            scoop we serve is a celebration of authentic ingredients, slow-churned
            creaminess, and the simple joy of a treat made right. We take pride in
            crafting fresh dairy ice cream that’s free from artificial flavors and
            full of goodness. Our process is simple but intentional: real milk,
            real cream, real flavor — nothing less.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="font-['inter'] text-lg text-gray-700 text-center"
          >
            From timeless classics to seasonal inspirations, each batch is made in
            small quantities to ensure maximum freshness and flavor. Whether
            you're sharing a sundae, chasing a craving, or making memories with
            loved ones, Frosted Bloom brings a natural, heartfelt touch to every
            bite. We’re not just here to scoop ice cream. We’re here to bloom joy,
            spark nostalgia, and make every moment taste better. Naturally creamy.
            Wonderfully dreamy. That’s Frosted Bloom.
          </motion.p>
        </motion.div>
      </section>

      <CTA />
    </main>
  );
};

export default Page;