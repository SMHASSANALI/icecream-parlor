"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className="relative h-screen md:h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+80vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-80vh)] h-[80vh]">
          <div className="bg-white h-screen md:h-[80vh] border flex flex-col justify-start px-[10px] md:px-[30px] py-[20px] md:py-[40px]">
            <div className="flex flex-row justify-between items-start h-[60vh] border-b pb-10">
              <div className="w-4/12">
                <p className="font-['nerko_one'] border w-64 h-40 text-2xl text-blue-700">
                  LOGO HERE
                </p>
              </div>
              <div className="w-4/12 flex flex-col h-full">
                <p className="max-w-xs">
                  Stay connected with us on social media for exclusive
                  behind-the-scenes content, inspiring moments of indulgence,
                  and the secrets that make our creations truly one-of-a-kind —
                  you won’t want to miss it."
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-row gap-4 items-center">
                    <span className="border border-blue size-8"></span>
                    <p>Facebook</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <span className="border border-blue size-8"></span>
                    <p>Instagram</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <span className="border border-blue size-8"></span>
                    <p>TikTok</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-4/12">
                <p className="font-['nerko_one'] text-8xl uppercase leading-[80%] font-bold text-blue-700">
                  Products
                </p>
                <p className="font-['nerko_one'] text-8xl uppercase leading-[80%] font-bold text-blue-700">
                  About
                </p>
                <p className="font-['nerko_one'] text-8xl uppercase leading-[80%] font-bold text-blue-700">
                  Location
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center mt-auto text-gray-600 text-sm">
              <div>
                <p>© 2025 ABC Icecream. All rights reserved.</p>
              </div>
              <div>
                <p>
                  Designed & Developed by{" "}
                  <a href="https://saskasolutions.com">SASKA Solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
