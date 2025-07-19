"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ScrollFadeInProps {
  children: React.ReactNode;
  yOffset?: number; // How much to slide up/down
  duration?: number;
  delay?: number;
  className?: string;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  yOffset = 40,
  duration = 0.6,
  delay = 0,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0, transition: { duration, delay } });
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, duration, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn; 