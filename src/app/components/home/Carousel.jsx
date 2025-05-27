"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Button from "../global/Button";

const IceCreamCarousel = () => {
  const flavors = [
    { name: "Amorino Chocolate", image: "/assets/products/amorino_chocolate.jpg" },
    { name: "Blood Orange", image: "/assets/products/blood_orange.jpg" },
    { name: "Coffee", image: "/assets/products/coffee.jpg" },
    { name: "Hazelnut Chocolate", image: "/assets/products/hazelnut_chocolate.jpg" },
    { name: "Mango", image: "/assets/products/mango.jpg" },
    { name: "Mascarpone Fig", image: "/assets/products/mascarpone_fig.jpg" },
    { name: "Mint & Chocolate Chips", image: "/assets/products/mint_chips.jpg" },
    { name: "Pistachio", image: "/assets/products/pistachio.jpg" },
    { name: "Sicilian Mandarin", image: "/assets/products/sicilian_mandarin.jpg" },
    { name: "Strawberry", image: "/assets/products/strawberry.jpg" },
    { name: "Tiramisu", image: "/assets/products/tiramisu.jpg" },
    { name: "Vanilla", image: "/assets/products/vanilla.jpg" },
    { name: "Yougurt", image: "/assets/products/yougurt.jpg" },
  ];

  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: titleRef, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div className="relative w-full pb-12 overflow-hidden bg-gradient-to-br from-[#fdf6f6] via-[#f4f0fa] to-[#f1f5fd]">
      {/* Pastel blurs */}
      <div className="absolute top-[5rem] left-[10%] w-[300px] h-[300px] bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute top-[15rem] right-[5%] w-[250px] h-[250px] bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse-slower z-0" />

      {/* Parallax Title */}
      <motion.h1
        ref={titleRef}
        style={{ y: titleY }}
        className="text-[10rem] md:text-[16rem] xl:text-[20rem] uppercase font-['nerko_one'] text-center text-blue-700 z-0 relative pointer-events-none leading-[0.75] tracking-tighter"
      >
        Best Picks
      </motion.h1>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="z-20 relative"
      >
        {flavors.map((flavor, idx) => {
          const cardRef = useRef(null);
          const { scrollYProgress: flavorScroll } = useScroll({
            target: cardRef,
            offset: ["start end", "end start"],
          });
          const flavorY = useTransform(flavorScroll, [0, 1], [30, -10]);

          return (
            <SwiperSlide key={idx}>
              <div className="relative w-[300px] mx-auto group" ref={cardRef}>
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                />

                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-black/0" />

                <motion.div
                  style={{ y: flavorY }}
                  className="absolute bottom-4 left-4 z-10"
                >
                  <h2 className="text-xl text-white font-semibold tracking-wide">
                    {flavor.name}
                  </h2>
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="w-full py-[60px] flex items-center justify-center">
        <Button text="Our Products" />
      </div>
    </div>
  );
};

export default IceCreamCarousel;
