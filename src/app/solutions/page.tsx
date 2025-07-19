import Image from "next/image";
import Card from "@/components/ui/Card";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const projects = [
  {
    title: "EfficientNetV2",
    subtitle: "Image Classification",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 ",
    image: "/card-1.jpg",
  },
  {
    title: "Jamba",
    subtitle: "Text Generation",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 ",
    image: "/card-2.svg",
  },
  {
    title: "HMS brain activity detection",
    subtitle: "Classification",
    description:
      "An Ensemble of Melspec + 2D-CNN and Squeezeformer Models for Accurate Harmful Brain Activity Detection using EEG Signals",
    image: "/services-card.jpg",
  },
  {
    title: "PaliGemma",
    subtitle: "Object Detection",
    description:
      "Keras PaliGemma 3B weights, pre-trained with 224*224 input images and 512 token input/output text sequences.",
    image: "/card-3.svg",
  },
  {
    title: "Llama 3",
    subtitle: "Community Models",
    description:
      "Llama 3 is a collection of pretrained and fine-tuned generative text models ranging in scale from 8 billion to 70 billion parameters",
    image: "/services-card-9.jpg",
  },
  {
    title: "DLSAT",
    subtitle: "Image-To-Image",
    description:
      "A powerful deep learning model for accurate image segmentation and robust object tracking.",
    image: "/card-4.svg",
  },
  {
    title: "Videoflow",
    subtitle: "Video Generation",
    description:
      "Map frames from the BAIR robot pushing dataset to the latent space and vice-versa.",
    image: "/services-card-10.jpg",
  },
  {
    title: "MusicGen",
    subtitle: "Audio Synthesis",
    description:
      "EfficientNet-Bx-style architecture with convolutional blocks. This Bx-style model has width_coefficient=1.0 ",
    image: "/services-card-11.jpg",
  },
];

export default function SolutionsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <ScrollFadeIn>
        <div className="flex flex-col items-center mb-10">
          <span className="flex items-center border border-gray-200 text-black text-sm font-medium px-4 py-1 rounded-full">
            <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            Our Services
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-2 mt-5 text-black font-medium">Crafting Innovative<br />Digital Solutions</h1>
        </div>
      </ScrollFadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((item, idx) => (
          <ScrollFadeIn key={idx} yOffset={30} delay={0.1 * idx}>
            <Card
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
          </ScrollFadeIn>
        ))}
      </div>
    </main>
  );
}