"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import img1 from "../../../../public/assets/products/vanilla.jpg";
import img2 from "../../../../public/assets/random/cone_car.jpg";
import img3 from "../../../../public/assets/products/blood_orange.jpg";
import img4 from "../../../../public/assets/products/yougurt.jpg";
import img5 from "../../../../public/assets/products/amorino_chocolate.jpg";
import img6 from "../../../../public/assets/random/family.jpg";
import img7 from "../../../../public/assets/products/mint_chips.jpg";
import img8 from "../../../../public/assets/products/coffee.jpg";
import img9 from "../../../../public/assets/products/tiramisu.jpg";
import img10 from "../../../../public/assets/random/icecream_van.jpg";
import img11 from "../../../../public/assets/random/server.jpg";
import img12 from "../../../../public/assets/random/icecream_van2.jpg";
import Image from "next/image";
import Button from "../global/Button";

const Gallery = () => {
  const target = useRef(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.9], [0, windowHeight * 1.25]);
  const y2 = useTransform(scrollYProgress, [0, 0.9], [0, windowHeight * 0.9]);
  const y3 = useTransform(scrollYProgress, [0, 0.9], [0, windowHeight * 1.5]);

  return (
    <section className="my-[100px]">
      <h2 className="text-3xl text-center leading-0">
        Not just Ice Cream but <br />{" "}
        <span className="text-blue-700 font-['nerko_one'] uppercase text-8xl">
          Momments
        </span>{" "}
      </h2>
      <main
        ref={target}
        className="h-[200dvh] relative mx-auto w-full flex flex-col md:flex-row gap-[1vw] bg-white m-[30px] items-center justify-center overflow-hidden p-[1vw]"
      >
        <motion.div
          style={{ y: y1 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[25%]"
        >
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img10} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[20%]"
        >
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img6} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img11} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[30%]"
        >
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img7} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img12} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img8} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[40dvh] relative rounded-[0.5vw] overflow-hidden">
            <Image src={img9} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </main>
      <div className="h-[100dvh] m-4 relative">
        <Image
          src={"/assets/random/icecream_container.jpg"}
          alt=""
          fill
          className={"w-full h-full object-cover"}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-center pt-10">
        <Button text={"About Us"} />
      </div>
    </section>
  );
};

export default Gallery;
