"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(-15); // Initial top: -5% of 300px ≈ -15px
  const divSize = 180;

  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const newX = Math.max(0, Math.min(mouseX - divSize / 2, rect.width - divSize));
    const newY = Math.max(0, Math.min(mouseY - divSize / 2, rect.height - divSize));

    x.set(newX);
    y.set(newY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(-15); // Reset to -5% ≈ -15px
  };

  return (
    <section className="flex justify-center items-center min-h-screen py-[60px] w-full px-4">
      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col p-2 gap-2 bg-white rounded-2xl w-full md:w-12/12 relative overflow-hidden z-10 shadow-lg"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="absolute size-[180px] bg-gradient-to-tr from-pink-200 to-violet-200 rounded-full blur-2xl z-10"
          style={{ x, y }}
          initial={{ x: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div className="flex flex-col md:flex-row gap-2 min-h-[300px] relative z-50">
          {/* Left Section: Product Variety */}
          <div className="w-full md:w-3/12 bg-blue-200/50 p-[20px] hover:bg-gradient-to-b from-pink-300 to-blue-300 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300">
            <div className="h-full w-full flex flex-col justify-between">
              <h2 className="font-['nerko_one'] text-2xl md:text-4xl tracking-tighter">
                A Scoop for Everyone
              </h2>
              <p className="font-['inter'] text-base md:text-xl leading-none">
                Classic flavors, seasonal twists, and vegan delights await!
              </p>
            </div>
          </div>
          {/* Right Section: Product Highlights */}
          <div className="w-full md:w-9/12 bg-blue-200/50 p-[20px] hover:rounded-xl rounded-3xl transition-all duration-200">
            <div className="h-full w-full flex flex-col justify-between">
              <h2 className="font-['nerko_one'] text-2xl md:text-4xl tracking-tighter">
                Crafted with Love
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <h3 className="font-['nerko_one'] text-3xl md:text-5xl tracking-tighter leading-none">
                  Frosted Bloom
                </h3>
                <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-end">
                  <div className="h-[150px] w-full md:max-w-[130px] bg-white shadow-lg rounded-lg p-2 flex flex-col justify-between">
                    <p className="font-['inter'] text-lg font-semibold">Flavors</p>
                    <p>10+</p>
                  </div>
                  <div className="h-[150px] w-full md:max-w-[130px] bg-white shadow-lg rounded-lg p-2 flex flex-col justify-between">
                    <p className="font-['inter'] text-lg font-semibold">Locations</p>
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 min-h-[300px] relative z-50">
          {/* Left Section: Featured Treat */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full md:w-9/12 bg-blue-200/50 p-[20px] hover:rounded-xl rounded-3xl transition-all duration-200 flex flex-row gap-[30px]"
          >
            <div className="h-full flex flex-col justify-between w-8/12">
              <h2 className="font-['nerko_one'] text-2xl md:text-4xl tracking-tighter">
                Treat Yourself
              </h2>
              <p className="font-['inter'] text-base md:text-xl leading-none">
                <span className="font-['nerko_one'] text-3xl md:text-5xl tracking-tighter leading-none">
                  Try Our Berry Bliss Sundae!
                </span>
              </p>
            </div>
            <div className="h-full w-4/12 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 10 : 0,
                  x: isHovered ? -10 : 0,
                  y: isHovered ? -10 : 0,
                  boxShadow: isHovered
                    ? "0px 10px 30px rgba(0, 0, 0, 0.3)"
                    : "0px 0px 0px rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
              >
                <Image
                  src="/assets/random/duo_cone.jpg"
                  alt="Ice Cream Cone"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </div>
          </div>
          {/* Right Section: Product Image */}
          <div className="w-full md:w-3/12 bg-blue-200/50 overflow-hidden hover:rounded-xl rounded-3xl transition-all duration-200">
            <motion.div whileHover={{ scale: 1.1 }} className="w-full h-full">
              <Image
                src="/assets/products/strawberry.jpg"
                alt="Frosted Bloom Strawberry Ice Cream"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;