"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    name: "Bessie Cooper",
    role: "CEO, Bright Visions Inc",
    text: "Pixel Bloom’s AI models have transformed our business operations. The accuracy and efficiency of their image recognition system have significantly reduced our processing time. We highly recommend their services!",
    avatar: "/b-card1.svg",
    icon: "/card-icon.svg",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Owner, Innovate Corp.",
    text: "Working with Pixel Bloom has been a game-changer for us. Their natural language processing models have enabled us to better understand and respond to customer queries, enhancing our overall customer service experience.",
    avatar: "/b-card-2.svg",
    icon: "/card-icon.svg",
  },
  {
    name: "David Lee",
    role: "CFO, Financial Horizons",
    text: "The predictive analytics model from Pixel Bloom has provided us with invaluable insights, helping us make data-driven decisions that have boosted our sales and optimized our inventory management.",
    avatar: "/b-card-3.svg",
    icon: "/cart-icon-2.svg",
  },
  {
    name: "Emily Thompson",
    role: "CTO, Tech Innovators Ltd.",
    text: "Pixel Bloom’s custom AI solution was exactly what we needed. Their team was professional, responsive, and delivered a model that exceeded our expectations. Our workflow has never been smoother.",
    avatar: "/b-card-4.svg",
    icon: "/cart-icon-3.svg",
  },
];

const SatisfiedClients = () => {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4 bg-white">
          <span className="flex items-center border bg-white border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
            <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            Testimonials
          </span>
            
        </div>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h1 className="font-medium text-black text-4xl sm:text-5xl md:text-6xl leading-tight">
            Voices of Success from <br />
            Our{" "}
            <span className="text-gray-500 font-medium">Satisfied Clients</span>
          </h1>

          {/* Right Corner Button */}
          <Button
            variant="black"
            size="md"
            className="flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Image
              src="/calender.svg"
              alt="Book a call"
              width={20}
              height={20}
            />
            Contact Us
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-end gap-4 bg-white"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={125}
                  height={165}
                  className="rounded-2xl object-cover w-[125px] h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between rounded-3xl border border-gray-200 p-6 flex-1 w-full">
                <p className="text-gray-600 text-base mb-4">{item.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-black text-sm font-medium">
                      {item.name}
                    </h3>
                    <span className="text-gray-500 text-sm">{item.role}</span>
                  </div>
                  <Image src={item.icon} alt="icon" width={24} height={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-gray-300 mt-16" />
    </section>
  );
};

export default SatisfiedClients;
