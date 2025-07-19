"use client";
import Image from "next/image";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { BookCallButton, ContactUsButton } from "@/components/ui/Button";

export default function AboutUs() {
  const values = [
    {
      icon: "/innovation-1.svg",
      title: "Innovation",
      subtitle: "Innovative Design Solution",
      description:
        "We are passionate about pushing the boundaries of technology and exploring new frontiers in AI.",
    },
    {
      icon: "/excellence.svg",
      title: "Excellence",
      subtitle: "Innovative Design Solution",
      description:
        "We strive for the highest standards in everything we do, from model development to customer service.",
    },
    {
      icon: "/collaboration.svg",
      title: "Collaboration",
      subtitle: "Innovative Design Solution",
      description:
        "We believe that the best results come from working together, both within our team and with our clients.",
    },
    {
      icon: "/integrity.svg",
      title: "Integrity",
      subtitle: "Innovative Design Solution",
      description:
        "We are committed to ethical practices and transparency in all our operations.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ScrollFadeIn>
        <section className="text-center space-y-4">
          <span className="inline-flex items-center border border-gray-200  text-black text-sm font-medium px-4 py-3 rounded-full">
            <Image
              src="/icon.svg"
              alt="Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            About Us
          </span>

          <h1 className="text-3xl sm:text-4xl font-medium text-gray-700">
            Welcome to{" "}
            <span className="inline-flex items-center gap-2 text-black text-5xl font-semibold">
              <Image src="/Logo.svg" alt="Logo" width={48} height={48} />
              Pixel Bloom
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-3xl mx-auto px-2">
            <span className="text-black text-xl font-normal">
              We believe in the transformative
            </span>{" "}
            power of artificial intelligence.{" "}
            <span className=" text-black font-normal">
              As a premier AI model agency, our mission is to cultivate and
              nurture innovative AI solutions
            </span>{" "}
            that drive progress, creativity, and efficiency across various
            industries.
          </p>
        </section>
      </ScrollFadeIn>

      {/* Who We Are */}
      <ScrollFadeIn>
        <section className="mt-16">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center border border-gray-200  text-black text-sm font-medium px-4 py-3 rounded-full">
              <Image
                src="/icon.svg"
                alt="Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              Who We Are
            </span>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-800">
              Get to <span className="text-gray-500">Know Us</span>
            </h2>
            <BookCallButton />
          </div>

          {/* Team Image */}
          <div className="rounded-2xl overflow-hidden -lg mb-10">
            <Image
              src="/about-us.jpg"
              alt="Team working together"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Company Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto text-center px-4">
            Pixel Bloom was founded by a group of visionary technologists and
            creative minds who saw the incredible potential of AI to revolutionize
            the way we live and work. Our team is a vibrant mix of data
            scientists, engineers, and AI enthusiasts, all dedicated to pushing
            the boundaries of &apos;s possible with artificial intelligence.
          </p>
        </section>
      </ScrollFadeIn>

      {/* Our Values */}
      <ScrollFadeIn>
        <section className="mt-20 border-t border-gray-200 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
            <span className="inline-flex items-center border border-gray-200  text-black text-sm font-medium px-4 py-3 rounded-full">
              <Image
                src="/icon.svg"
                alt="Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              Our Values
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center sm:text-left text-black">
              The Team Behind Your <br />
              <span className="text-gray-400 font-medium">Digital Success</span>
            </h2>
            <BookCallButton />
          </div>

          <div className="divide-y divide-gray-200">
            {values.map(({ icon, title, subtitle, description }, idx) => (
              <ScrollFadeIn key={title} yOffset={30} delay={0.1 * idx}>
                <div className="flex flex-col sm:flex-row py-6 gap-4">
                  <div className="flex items-center w-full sm:w-1/3">
                    <Image
                      src={icon}
                      alt={title}
                      width={32}
                      height={32}
                      className="mr-3"
                    />
                    <span className="font-medium text-2xl text-gray-600">
                      {title}
                    </span>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <div className="text-base text-gray-400 mb-1">{subtitle}</div>
                    <div className="text-xl text-black font-medium">
                      {description}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Our Team */}
      <ScrollFadeIn>
        <section className="container mb-34">
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center border border-gray-200  text-black text-sm font-medium px-4 py-3 rounded-full">
                <Image
                  src="/icon.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Our Team
              </span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl text-black leading-tight">
                The Team Behind Your <br />
                <span className="text-gray-600">Digital Success</span>
              </h1>
              <div className="flex justify-end">
                <BookCallButton />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Row 1: 4 photos */}
            <div className="flex flex-col items-center">
              <Image
                src="/user-1.png"
                alt="Team Member 1"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/user-2.svg"
                alt="Team Member 2"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/user-3.svg"
                alt="Team Member 3"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/user-4.svg"
                alt="Team Member 4"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Row 2: 3 photos, centered on large screens */}
            <div className="flex flex-col items-center lg:col-start-2">
              <Image
                src="/user-5.svg"
                alt="Team Member 5"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/user-6.svg"
                alt="Team Member 6"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/user-7.svg"
                alt="Team Member 7"
                height={160}
                width={160}
                className="rounded-full object-cover w-40 h-40"
              />
              <div className="items-center pt-3 ">
                <h3 className="font-medium text-black text-xl">PaliGemma</h3>
                <div className="inline-flex items-center gap-1">
                  <span className="text-base text-gray-600 font-medium">
                    Object Detection
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/linkdin-icon.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <section className="container mb-34">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center border border-gray-200  text-black text-sm font-medium px-4 py-3 rounded-full">
                <Image
                  src="/icon.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Connect Us
              </span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
              <h2>
                Tell Your Idea and <br /> Make It
                <span className="text-gray-600">True with Us</span>
              </h2>
              <div className="flex justify-end">
                <ContactUsButton />
              </div>
            </div>
          </div>
          <div className="bg-gray-950 rounded-4xl flex items-center justify-center p-6 mt-10">
            <div className="w-full max-w-6xl rounded-3xl p-8 mx-auto relative">
              <form className="space-y-6 max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Name"
                  className="
            w-full
            rounded-3xl
            bg-gray-900
            text-gray-200
            placeholder-gray-400
            border border-gray-600
            
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-gray-500
          "
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="
            w-full
           
            text-gray-200
            placeholder-gray-400
            border border-gray-600
             rounded-3xl
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-gray-500
          "
                />
                <textarea
                  rows={5}
                  placeholder="Share us your idea..."
                  className="
            w-full
         
            text-gray-200
            placeholder-gray-400
            border border-gray-600
             rounded-3xl
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-gray-500
          "
                />
                <button
                  type="submit"
                  className="
            block
            w-full
            bg-white
            text-black
            font-medium
            rounded-full
            py-3
            
          "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
}
