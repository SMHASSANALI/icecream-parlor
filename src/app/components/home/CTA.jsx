"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../global/Button";
import duoCone from "../../../../public/assets/random/duo_cone.jpg";
import family from "../../../../public/assets/random/family.jpg";
import kid from "../../../../public/assets/random/kid.jpg";
import messyKid from "../../../../public/assets/random/messy_kid.jpg";
import stripesWomen from "../../../../public/assets/random/stripeswomen.jpg";
import womenBun from "../../../../public/assets/random/women_bun.jpg";

const CTA = () => {
  const [images, setImages] = useState([]);
  const isMounted = useRef(true);
  const currentIndex = useRef(0); // Track current index (0 to 5)
  const lastPosition = useRef({ x: 0, y: 0 }); // Track last mouse position

  const urls = [
    { src: kid.src, alt: "Child with ice cream" },
    { src: messyKid.src, alt: "Child with messy ice cream" },
    { src: stripesWomen.src, alt: "Woman in striped shirt" },
    { src: womenBun.src, alt: "Woman with bun" },
    { src: duoCone.src, alt: "Two ice cream cones" },
    { src: family.src, alt: "Family with ice cream" },
  ];

  // Animation variants for images
  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 0.5, bounce: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    isMounted.current = true;

    const handleMouseMove = (event) => {
      if (!isMounted.current) return;

      const { clientX, clientY } = event;
      const imageSize = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 120 : 160;
      const newX = Math.min(Math.max(clientX - imageSize / 2, 0), window.innerWidth - imageSize);
      const newY = Math.min(Math.max(clientY - imageSize / 2, 0), window.innerHeight - imageSize);

      const distance = Math.sqrt(
        Math.pow(newX - lastPosition.current.x, 2) + Math.pow(newY - lastPosition.current.y, 2)
      );

      if (distance > 100) {
        const id = Date.now() + Math.random();
        const index = currentIndex.current;
        currentIndex.current = (currentIndex.current + 1) % urls.length; 
        const randomRotation = Math.random() * 60 - 30; 
        
        setImages((prev) => [
          ...prev,
          {
            id,
            x: newX,
            y: newY,
            src: urls[index].src,
            alt: urls[index].alt,
            rotation: randomRotation,
          },
        ]);

        lastPosition.current = { x: newX, y: newY };

        // Remove image after 1 second
        setTimeout(() => {
          if (isMounted.current) {
            setImages((prev) => prev.filter((img) => img.id !== id));
          }
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      isMounted.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-pink-300 to-blue-300 text-white overflow-hidden py-8 sm:py-12 md:py-16">
      {/* Image Trail */}
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="absolute w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px]"
          style={{
            top: `${image.y}px`,
            left: `${image.x}px`,
            rotate: image.rotation,
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-hidden="true"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 160px"
            style={{ objectFit: "cover", borderRadius: "10px", border: "2px solid white" }}
            onError={() => {
              setImages((prev) => prev.filter((img) => img.id !== image.id));
            }}
          />
        </motion.div>
      ))}

      {/* Text Content */}
      <h2 className="max-w-[90%] sm:max-w-4xl md:max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Nerko_One',_cursive] uppercase leading-tight sm:leading-snug text-center pb-4 sm:pb-6 md:pb-8 z-50 pointer-events-none">
        Don't miss out on new flavors and exclusive offers!
      </h2>
      <p className="text-base sm:text-lg md:text-xl pb-3 sm:pb-4 md:pb-5 z-50">
        Follow us on Instagram
      </p>
      <Button
        text="Follow Us"
        className="bg-white text-blue-600 hover:bg-gray-100 transition-colors z-50"
        aria-label="Follow us on Instagram"
      />
    </div>
  );
};

export default CTA;