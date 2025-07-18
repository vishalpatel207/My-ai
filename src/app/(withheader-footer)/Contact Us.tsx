"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 py-8 md:px-16 lg:px-32">
      {/* Top Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <span className="flex items-center border bg-white border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
          Contact US
        </span>
        <Button
          variant="black"
          size="md"
          className="flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Image src="/calender.svg" alt="Book a call" width={20} height={20} />
          Book a Consultation
        </Button>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Form Section */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black mb-4 leading-tight">
            Contact Us to Start <br />
            Your <span className="text-gray-500">Transformation</span>
          </h1>

          <div className="mt-6">
            <h2 className="text-xl font-medium mb-1">Let’s Get Started</h2>
            <p className="text-gray-500 text-sm mb-6">
              Provide us with some details and let’s begin <br />
              transforming your business together!
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="border border-gray-300 text-gray-800 rounded-lg px-4 py-3 focus:outline-none "
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="border border-gray-300 text-gray-800 rounded-lg px-4 py-3 focus:outline-none "
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                required
                className="border border-gray-300 text-gray-800 rounded-lg px-4 py-3 resize-none focus:outline-none "
              />
              <Button
                type="submit"
                variant="black"
                size="md"
                className="mt-2 font-medium flex items-center gap-2 w-fit"
              >
                <Image
                  src="/Rocket Launch.svg"
                  alt="Rocket"
                  width={24}
                  height={24}
                />
                Send a Message
              </Button>
            </form>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/contact-us.svg"
            alt="Team working together"
            width={540}
            height={532}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
