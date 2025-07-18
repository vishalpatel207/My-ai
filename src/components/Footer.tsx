import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-12 pb-6 px-4 md:px-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">          <Image src="/fotter-logo.svg" alt="Logo" width={24} height={24} />
            </span>
            <span className="font-medium text-2xl	">Pixel Bloom</span>
          </div>
          <p className="text-xl text-neutral-400 font-normal">
            Pixel Bloom is your premier AI model agency, delivering cutting-edge solutions tailored to your business needs. Elevate your operations with our innovative AI technology.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3 flex-wrap">
            {[
              { label: "Twitter", icon: "/Twitter.svg" },
              { label: "Facebook", icon: "/Facebook.svg" },
              { label: "Instagram", icon: "/Instagram.svg" },
              { label: "Linkedin", icon: "/Linkedin.svg" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                aria-label={item.label}
                className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 hover:bg-neutral-800 transition"
              >
                <Image src={item.icon} alt={`${item.label} Logo`} width={24} height={24} />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <div className="bg-neutral-800 rounded-xl px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-medium text-sm mb-1">Subscribe to our newsletter for updates:</div>
            <p className="text-xs text-neutral-400">
              Stay informed with the latest AI advancements and updates from Pixel Bloom.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative">
            <div className="relative w-full sm:w-64">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="rounded-full px-4 pr-10 py-2 bg-neutral-900 text-neutral-200 border border-neutral-700 focus:outline-none w-full text-sm"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">
                <button
                  type="submit"
                  className="rounded-full bg-gray-800 hover:bg-neutral-600 px-5 py-2 text-sm font-medium text-white transition w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </span>
            </div>


          </form>

        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-2 text-center">
        <div>© 2024 Pixel Bloom Pvt. Ltd. All rights reserved.</div>
        <div className="flex gap-3 flex-wrap justify-center">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
