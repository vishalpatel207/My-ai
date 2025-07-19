import Image from "next/image";
import Card from "@/components/ui/Card";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { ContactUsButton } from "@/components/ui/Button";

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
    img: "stone.svg",
    title: "Custom AI Solutions",
    desc: "We understand that each business has unique needs. Our custom AI solutions are tailored to solve specific challenges.",
  },
];

const EngineeringIntelligent = () => {
  return (
    <section className="w-full bg-white py-4 px-2  sm:px-4 mb-26">
      <ScrollFadeIn>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <span className="flex items-center border border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
            <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            Our Services
          </span>
        </div>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <h1 className="font-medium text-black leading-tight mb-2 text-3xl md:text-5xl lg:text-6xl">Engineering Intelligent</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-500">Services</h2>
          <ContactUsButton />
        </div>
      </ScrollFadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ScrollFadeIn key={idx} yOffset={30} delay={0.1 * idx}>
            <Card
              image={service.img}
              title={service.title}
              subtitle="Build"
              description={service.desc}
            />
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
};

export default EngineeringIntelligent;
