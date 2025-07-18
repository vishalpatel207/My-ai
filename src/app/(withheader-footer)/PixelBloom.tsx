import React from "react";
import Button from "@/components/ui/Button";

const PixelBloomSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 bg-white relative">
      <div className="max-w-3xl w-full text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-medium text-black mb-2 leading-tight">
          At Pixel Bloom,
        </h2>
        <p className="text-base md:text-lg font-medium text-gray-800 mb-1 leading-snug">
          we are dedicated to pushing the
          <span className="text-gray-500 leading-snug">
            {" "}
            boundaries of artificial intelligence.
          </span>
        </p>
        <p className="text-base md:text-lg font-normal text-black mb-4 leading-snug">
          Our mission is to develop that
          <span className="text-gray-500 font-normal leading-snug">
            {" "}
            cutting-edge AI models transform in
          </span>
          <br className="hidden md:block" />
          dustries, enhance human capabilities, and drive innovation.
        </p>
        <Button variant="gray" size="lg" className="w-full md:w-auto">
          Our Industries
        </Button>

      </div>

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mb-20 lg:mb-32">
        <div className="grid gap-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 items-end">
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-2xl p-6 h-[364px] flex flex-col justify-center bg-[#D7FF5F]">
              <h2 className="text-4xl font-bold mb-2">80%</h2>
              <p className="text-base text-black">
                Our AI solutions are designed to cater to a wide range of industries
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-6 h-[120px] flex flex-col justify-center bg-gray-600">
              <p className="text-white text-lg">
                Developing Advanced AI Capabilities
              </p>
            </div>
          </div>
          <div className="bg-[url('/Manufacture.jpg')] bg-cover rounded-2xl h-[364px] flex items-start p-4">
            <p className="text-white text-lg">Manufacture</p>
          </div>

          <div className="bg-[#181818] h-[228px] rounded-2xl flex flex-col justify-center relative overflow-hidden p-8 col-span-1 lg:col-span-1">
            <h3 className="text-white text-4xl mb-6">Industries We Serve</h3>
            <Button variant="gray" size="lg" className="w-full md:w-auto">
              Get In Touch
            </Button>
          </div>
          <div className="bg-[url('/Healthcare.jpg')] bg-cover rounded-2xl h-[364px] flex items-start justify-end p-4">
            <p className="text-black text-lg text-right">HealthCare</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[url('/Finance.jpg')] bg-cover rounded-2xl h-[364px] flex items-start justify-end p-4">
              <p className="text-white text-lg text-right">Finance</p>
            </div>            <div className="rounded-2xl px-3 py-9 bg-[#FF4B0E]">
              <p className="text-lg text-white text-center">Building the Future <br /> of AI</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-310 border-b-2 border-gray-300 mt-4"></div> */}
    </section>
  );
};

export default PixelBloomSection;
