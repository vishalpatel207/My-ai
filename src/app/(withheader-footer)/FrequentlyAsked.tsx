"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "What is Pixel Bloom",
    answer:
      "Our AI models can enhance your business operations by automating tasks.",
  },
  {
    question: "How can I benefit from Pixel Bloom’s services?",
    answer:
      "Our AI models can enhance your business operations by automating tasks, improving accuracy, and providing data-driven insights.",
  },
  {
    question: "How do I get started with Pixel Bloom?",
    answer:
      "You can get started by contacting us through our website or scheduling a consultation to discuss your needs.",
  },
  {
    question: "What types of AI models do you offer?",
    answer:
      "We offer models for image recognition, natural language processing, predictive analytics, and custom AI solutions based on your specific requirements.",
  },
  {
    question: "Are your AI models customizable?",
    answer:
      "Yes, we tailor our AI models to meet your specific business objectives and operational needs.",
  },
  {
    question: "How is data privacy handled?",
    answer:
      "We implement strict data privacy measures including encryption, secure storage, and compliance with industry standards like GDPR.",
  },
];

const FrequentlyAsked = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-12 sm:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <span className="flex items-center border bg-white border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
            <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            FAQ
          </span>
        </div>

        <h1 className="font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-2">
          Frequently Asked
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <h2 className="font-medium text-gray-600 text-4xl sm:text-5xl">
            Questions
          </h2>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 mb-2">
              Still have a question in mind?
            </span>
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-auto items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col cursor-pointer"
              >
                <div
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => handleToggle(idx)}
                >
                  <span className="font-medium text-xl sm:text-xl text-black">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="#000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {isOpen && (
                  <div className="mt-3 text-gray-600 text-base sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="w-full border-t border-gray-200 mt-16" />
    </section>
  );
};

export default FrequentlyAsked;
