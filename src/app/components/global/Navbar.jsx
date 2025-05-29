"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: { y: -50, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "bounce", duration: 0.3, damping: 20, stiffness: 300 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  };

  return (
    <div className="w-full h-[4rem] flex flex-row justify-between relative">
      <div className="w-36 h-full flex items-center justify-start">
        <p className="font-['nerko_one'] text-2xl">LOGO HERE</p>
      </div>
      <div className="flex items-center justify-center">
        <Button text="Menu" onClick={toggleMenu} aria-expanded={isMenuOpen} />
      </div>
      <motion.div
        ref={menuRef}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`absolute top-[4rem] right-0 bg-white rounded-lg shadow-lg p-8 w-80 `}
        role="menu"
      >
        <ul className="flex flex-col gap-6">
          <motion.li
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-['nerko_one'] text-4xl text-pink-600 hover:bg-gradient-to-r from-pink-200 to-blue-200 hover:text-white rounded-lg px-4 py-2 transition-all duration-300 w-full"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
          >
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="font-['nerko_one'] text-4xl text-pink-600 hover:bg-gradient-to-r from-pink-200 to-blue-200 hover:text-white rounded-lg px-4 py-2 transition-all duration-300 w-full"
            >
              About
            </Link>
          </motion.li>
          <motion.li
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
          >
            <Link
              href="/products"
              onClick={() => setIsMenuOpen(false)}
              className="font-['nerko_one'] text-4xl text-pink-600 hover:bg-gradient-to-r from-pink-200 to-blue-200 hover:text-white rounded-lg px-4 py-2 transition-all duration-300 w-full"
            >
              Products
            </Link>
          </motion.li>
          <motion.li
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
          >
            <Link
              href="/locations"
              onClick={() => setIsMenuOpen(false)}
              className="font-['nerko_one'] text-4xl text-pink-600 hover:bg-gradient-to-r from-pink-200 to-blue-200 hover:text-white rounded-lg px-4 py-2 transition-all duration-300 w-full"
            >
              Locations
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;