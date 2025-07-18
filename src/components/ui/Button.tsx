// All 'black' variant buttons use the same size and style by default.
// To change the effect or size of all black buttons, update the 'black' entry in variantStyles and the default size below.

import React, { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "black" | "white" | "gray" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const baseStyles =
  "rounded-full font-medium transition-colors duration-200 focus:outline-none flex items-center justify-center";

const variantStyles: Record<string, string> = {
  black: "bg-black text-white hover:bg-gray-900 border border-transparent",
  white: "bg-white text-black border border-gray-200 hover:bg-gray-100",
  gray: "bg-gray-100 text-black border border-gray-200 hover:bg-gray-200",
  outline: "bg-transparent text-black border border-gray-400 hover:bg-gray-100",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-sm",
  lg: "px-8 py-5 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "black",
      size,
      className = "",
      type = "button",
      ...props
    },
    ref
  ) => {
    // If variant is black and no size is provided, default to 'lg' for all black buttons
    const effectiveSize = size || (variant === "black" ? "lg" : "md");
    return (
      <button
        ref={ref}
        type={type}
        className={[
          baseStyles,
          variantStyles[variant],
          sizeStyles[effectiveSize],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// BookCallButton: Consistent 'Book a call' button for all pages

export function BookCallButton(props: ButtonProps) {
  return (
    <Button
      variant="black"
      size="md"
      className={["w-full sm:w-auto justify-center  flex items-center gap-2", props.className].filter(Boolean).join(" ")}
      {...props}
    >
      <img src="/call-booking.svg" alt="Call Icon" width={20} height={20} className="inline-block" />
      Book a call
    </Button>
  );
}

// ContactUsButton: Consistent 'Contact Us' button for all pages
export function ContactUsButton(props: ButtonProps) {
  return (
    <Button
      variant="black"
      size="md"
      className={["w-full sm:w-auto justify-center flex items-center gap-2", props.className].filter(Boolean).join(" ")}
      {...props}
    >
      <img src="/calender.svg" alt="Email Icon" width={20} height={20} className="inline-block" />
      Contact Us
    </Button>
  );
}

export default Button;
