"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function Nickname() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://github.com/clar1k"
      target="_blank"
      className="ml-2 cursor-pointer text-theme-secondary hover:underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? "clar1k" : "Serhii"}
    </a>
  );
}
