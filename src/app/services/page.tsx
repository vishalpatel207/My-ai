import React from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";

const services = [
  {
    img: "/card1.svg",
    title: "NLP Toolkit",
    desc: "Our NLP models enhance communication and understanding between humans and machines.",
  },
  {
    img: "/robot.svg",
    title: "VisionAI",
    desc: "Our computer vision models interpret visual data to unlock new possibilities. Applications include: Object Detection",
  },
  {
    img: "/stone.svg",
    title: "Custom AI Solutions",
    desc: "We understand that each business has unique needs. Our custom AI solutions are tailored to solve specific challenges.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tagline */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2">
              <span className="flex items-center border border-gray-200 text-black text-sm font-medium px-4 py-1 rounded-full">
                <Image src="/icon.svg" alt="Logo" width={32} height={32} />
                Our Services
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 mb-4">
              Engineering Intelligent
              <br />
              <span className="text-gray-600 font-medium">Services</span>
            </h1>
       
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                image={service.img}
                title={service.title}
                subtitle="Build"
                description={service.desc}
                className={idx === 2 ? "sm:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
