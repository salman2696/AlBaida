import React from "react";
import { Parallax } from "react-parallax";

const HeroSection = ({ heroImage, title, subtitle, descripton }) => {
  return (
    <Parallax
    blur={1}
      bgImage={heroImage}
      bgImageAlt="Hero background"
      strength={100}
      bgClassName="object-cover"
    >
      <div className="relative flex items-center justify-center h-[80vh]">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for better text visibility */}
        <div className="relative z-10 text-white p-4 max-w-7xl mx-auto">
          <h1 className="mb-4">
            <span className="text-5xl md:text-7xl font-extrabold block">
              {title}
            </span>
            <span className="text-2xl md:text-4xl font-thin block">
              {subtitle}
            </span>
          </h1>
          <p className="text-base md:text-2xl ">{descripton}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default HeroSection;
