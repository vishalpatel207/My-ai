"use client";
import Image from "next/image";
import Button, { ContactUsButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const projects = [
  {
    title: "EfficientNetV2",
    subtitle: "Image Classification",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 and depth_coefficient=1.0.",
    image: "/dummy-icon.svg",
  },
  {
    title: "Jamba",
    subtitle: "Text Generation",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 and depth_coefficient=1.0.",
    image: "/card-2.svg",
  },
  {
    title: "PaliGemma",
    subtitle: "Object Detection",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 and depth_coefficient=1.0.",
    image: "/card-3.svg",
  },
  {
    title: "Orakul",
    subtitle: "Classification",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 and depth_coefficient=1.0.",
    image: "/card-4.svg",
  },
];

export default function CraftingInnovative() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto mb-26">
      <div className="mb-6">
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm text-black  transition">
          <Image src="/icon.svg" alt="Service Icon" width={24} height={24} />
          Our Services
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-black font-bold leading-tight">
          Crafting Innovative <br />Digital
          <span className="text-gray-400 font-normal"> Solutions</span>
        </h1>

        <ContactUsButton />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((item, idx) => (
          <Card
            key={idx}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            topRight={
              <div className="text-sm text-gray-600 flex items-center gap-1 cursor-pointer">
                View Project
                <Image
                  src="/export-icon.svg"
                  alt="Export icon"
                  width={18}
                  height={18}
                />
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
