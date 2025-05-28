"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../global/Button";
import duoCone from "../../../../public/assets/random/duo_cone.jpg";
import family from "../../../../public/assets/random/family.jpg";
import flavours from "../../../../public/assets/random/flavours.jpg";
import kid from "../../../../public/assets/random/kid.jpg";
import messyKid from "../../../../public/assets/random/messy_kid.jpg";
import stripesWomen from "../../../../public/assets/random/stripeswomen.jpg";
import womenBun from "../../../../public/assets/random/women_bun.jpg";

const CTA = () => {
  const [images, setImages] = useState([]);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  // Animation variants for images
  const imageVariants = {
    hidden: { scale: 0, opacity: 0, rotate: 0, },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 0.5, bounce: 0.4 },
      rotate: Math.random() * 60 - 30, 
      transitionEnd: {
        rotate: 0,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
  };

  const urls = [
    kid.src,
    messyKid.src,
    stripesWomen.src,
    womenBun.src,
    duoCone.src,
    family.src,
    flavours.src,
  ];

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      // Bound position within window
      const newX = Math.min(
        Math.max(clientX - 100, 0), // Center 200px image
        window.innerWidth - 100
      );
      const newY = Math.min(
        Math.max(clientY - 100, 0),
        window.innerHeight - 100
      );

      // Calculate distance from last position
      const distance = Math.sqrt(
        Math.pow(newX - lastPosition.x, 2) + Math.pow(newY - lastPosition.y, 2)
      );

      // Spawn new image every ~100px
      if (distance > 100) {
        const id = Date.now(); // Unique ID for each image
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        setImages((prev) => [
          ...prev,
          { id, x: newX, y: newY, url: randomUrl },
        ]);
        setLastPosition({ x: newX, y: newY });

        if (images.length >= 10) {
          setImages((prev) => prev.slice(1));
        }
        setTimeout(() => {
          setImages((prev) => prev.filter((img) => img.id !== id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastPosition]);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-pink-300 to-blue-300 text-white overflow-hidden">
      {/* Image Trail */}
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="absolute w-[200px] h-[200px]"
          style={{
            top: `${image.y}px`,
            left: `${image.x}px`,
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            border: "2px solid white",
            borderRadius: "10px",
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      ))}

      {/* Text Content */}
      <h2 className="max-w-5xl text-6xl md:text-9xl font-['nerko_one'] uppercase leading-[80%] text-center pb-6 z-50 pointer-events-none">
        Don't miss out on new flavors and exclusive offers!
      </h2>
      <p className="text-lg md:text-xl pb-4 z-50">Follow us on Instagram</p>
      <Button
        text="Follow Us"
        className="bg-white text-blue-600 hover:bg-gray-100 transition-colors z-50"
      />
    </div>
  );
};

export default CTA;
