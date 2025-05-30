"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Card = ({ product }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="flex items-center justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
          backgroundImage: `url(${product.image})`,
          backgroundColor: "#fff808",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-96 w-full rounded-xl shadow-lg cursor-pointer hover:scale-105"
      >
        <div
          style={{
            transform: "translateZ(200px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-5 grid place-content-center hover:backdrop-blur-lg transform transition duration-1000 backdrop-blur-xs bg-opacity-30 rounded-xl bg-white/10 shadow-2xl p-8"
        >
          <p
            style={{
              transform: "translateZ(100px)",
            }}
            className="text-center text-2xl font-bold"
          >
            {product.name}
          </p>
          <p
            style={{
              transform: "translateZ(100px)",
            }}
            className="text-center text-lg mt-2"
          >
            {product.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Card;
