"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-white w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-200 pb-10">
          {/* Logo Area */}
          <div className="w-full lg:w-1/3 relative">
            {/* <p className="font-['Nerko_One'] text-3xl sm:text-4xl text-blue-700">
              LOGO HERE
            </p> */}
            <Image src="/logo.png" alt="logo" fill className="object-cover" />
          </div>

          {/* Social + Text */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <p className="text-gray-700 max-w-md text-sm sm:text-base">
              Stay connected with us on social media for exclusive
              behind-the-scenes content, inspiring moments of indulgence, and
              the secrets that make our creations truly one-of-a-kind — you
              won’t want to miss it.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                { label: "Facebook" },
                { label: "Instagram" },
                { label: "TikTok" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-row gap-3 items-center"
                >
                  <span className="border border-blue-500 rounded-full size-6 sm:size-8"></span>
                  <p className="text-sm sm:text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <Link
              href="/products"
              className="font-['Nerko_One'] text-5xl sm:text-6xl md:text-7xl uppercase leading-[90%] font-bold text-blue-700"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="font-['Nerko_One'] text-5xl sm:text-6xl md:text-7xl uppercase leading-[90%] font-bold text-blue-700"
            >
              About
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-gray-600 text-xs sm:text-sm">
          <p>© 2025 ABC Icecream. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://saskasolutions.com"
              className="underline hover:text-blue-600 transition"
            >
              SASKA Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
