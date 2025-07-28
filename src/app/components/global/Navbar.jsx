"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    closed: {
      y: -50,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <nav className="w-full h-16 sm:h-20 md:h-24 flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 relative z-[9999]">
      <div className="flex items-center justify-start">
        {/* <p className="font-['Nerko_One',_cursive] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700">
          LOGO HERE
        </p> */}
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </div>

      <div className="flex items-center justify-center">
        <Button
          text="Menu"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        />
      </div>

      {/* AnimatePresence handles mounting/unmounting with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="nav-menu"
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-16 sm:top-20 md:top-24 right-0 bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] mx-4 sm:mx-6 z-[99]"
            role="menu"
          >
            <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/products", label: "Products" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  role="menuitem"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-['Nerko_One',_cursive] text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-600 hover:bg-gradient-to-r from-pink-200 to-blue-200 hover:text-white rounded-lg px-3 sm:px-4 py-2 transition-all duration-300 w-full block"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
