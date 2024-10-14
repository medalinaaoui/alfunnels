"use client";

import React from "react";
import { useTheme } from "next-themes";

const HeroBg = () => {
  const { theme } = useTheme();

  const DarkBg = () => {
    return (
      <div className="absolute top-0 z-[-2] h-screen w-screen  bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    );
  };
  const LightBg = () => {
    return (
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    );
  };

  return <>{theme === "dark" ? <DarkBg /> : <LightBg />}</>;
};

export default HeroBg;
