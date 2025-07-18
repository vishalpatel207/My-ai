"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const HeroSection: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<"meet" | "services">("meet");

  return (
    <section className="w-full flex flex-col items-center pt-8 pb-16 px-4 bg-white">
      <div className="flex items-center mb-4">
        <span className="flex items-center border border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
         Our Services
        </span>
      </div>

      <h1 className="font-medium text-center text-black mb-2 leading-tight text-3xl md:text-5xl lg:text-6xl">
        Crafting Next-Gen
        <br className="hidden md:block" />
      </h1>
      <h1 className="font-medium  text-center text-gray-600 mb-1 text-xl text-3xl md:text-5xl lg:text-6xl">
        AI Models
      </h1>
      <p className="text-base md:text-lg text-center text-gray-600 font-normal mb-6 max-w-2xl">
        Engineering Intelligent Solutions
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-md justify-center">
        <Button
          variant={activeBtn === "meet" ? "black" : "gray"}
          size="md"
          className="flex items-center gap-2 w-full sm:w-auto justify-center"
          onClick={() => setActiveBtn("meet")}
        >
          <Image
            src="/calender.svg"
            alt="Calendar Icon"
            width={20}
            height={20}
            className={activeBtn === "meet" ? "filter-none" : "invert"}
          />
          Schedule a meet
        </Button>
        <Button
          variant={activeBtn === "services" ? "black" : "gray"}
          size="md"
          className="flex items-center gap-2 w-full sm:w-auto justify-center"
          onClick={() => setActiveBtn("services")}
        >
          <Image
            src="/service.svg"
            alt="Service Icon"
            width={20}
            height={20}
            className={activeBtn === "services" ? "invert" : ""}
          />
          Discover Services
        </Button>
      </div>

      <div className="relative w-full max-w-5xl aspect-[16/9] mx-auto">
        <div className=" border-4 border-white overflow-hidden -lg w-full h-full">
          <Image
            src="/hero-1.jpg"
            alt="Team working together"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-40 sm:w-48 md:w-56 aspect-square flex items-center justify-center">
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 144 144" className="absolute w-full h-full">
      <defs>
        <path
          id="circlePath"
          d="M72,72 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
        />
      </defs>
      <circle cx="72" cy="72" r="72" fill="white" />
      <text
        fontSize="12"
        fontWeight="600"
        fill="black"
        letterSpacing="1"
      >
        <textPath xlinkHref="#circlePath" startOffset="0">
          Get in touch with Pixel Bloom Get in touch with Pixel Bloom
        </textPath>
      </text>
    </svg>

    {/* Inner black circle with arrow */}
    <span className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-34 md:h-34 bg-black rounded-full flex items-center justify-center">
      <Image
        src="/hero-arrow.svg"
        alt="Arrow"
        width={48}
        height={48}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-22 md:h-22"
      />
    </span>
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
