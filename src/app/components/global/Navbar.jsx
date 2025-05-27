"use client";

import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full h-[4rem] flex flex-row justify-between">
      <div className="w-36 h-full flex items-center justify-start">
        <p className="font-['nerko_one'] text-2xl">LOGO HERE</p>
      </div>
      <div className="flex items-center justify-center">
        <Button text="Menu" />
      </div>
    </div>
  );
};

export default Navbar;
