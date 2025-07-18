"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Solution", href: "/solutions" },
  { name: "About Us", href: "/aboutus" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const NavButton = ({
    name,
    idx,
    href,
  }: {
    name: string;
    idx: number;
    href: string;
  }) => (
    <button
      type="button"
      onClick={() => {
        setActiveIndex(idx);
        setMenuOpen(false);
        if (href !== "#") {
          router.push(href);
        }
      }}
      className={`font-sans cursor-pointer font-medium text-[20px] leading-[24px] relative transition-colors duration-200 px-1 py-2 focus:outline-none w-full md:w-auto text-left md:text-center
        ${activeIndex === idx
          ? "text-black after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-black after:rounded-full after:content-['']"
          : "text-black hover:text-gray-700"
        }
      `}
      aria-current={activeIndex === idx ? "page" : undefined}
    >
      {name}
    </button>
  );

  return (
    <nav className="w-full flex justify-center mt-4">
      <div className="flex items-center border border-gray-200 rounded-full px-6 py-2 bg-white -sm w-full max-w-4xl">
        <div className="flex items-center mr-8">
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
          <span className="font-semibold text-[24px] text-black ml-2">
            Pixel Bloom
          </span>
        </div>
        <ul className="hidden lg:flex space-x-8 flex-1">
          {NAV_LINKS.map((link, idx) => (
            <li key={link.name}>
              <NavButton name={link.name} idx={idx} href={link.href} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="ml-auto lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden" // Removed any custom or non-Tailwind blur classes for maximum background visibility
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-white -lg transform transition-transform duration-300 lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-[24px] text-black ml-2">
              Pixel Bloom
            </span>
            <button
              type="button"
              className="ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-6">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.name}>
                <NavButton name={link.name} idx={idx} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
