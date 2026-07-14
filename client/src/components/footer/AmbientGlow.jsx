import React from "react";
import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1]">
      {/* Top Left Glow - Brand Cyan/Teal */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1.05, 1],
          x: [0, 15, -10, 5, 0],
          y: [0, -10, 15, -5, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/10 blur-[130px]"
      />

      {/* Bottom Right Glow - Brand Blue/Indigo */}
      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 0.95, 1],
          x: [0, -20, 10, -5, 0],
          y: [0, 15, -10, 8, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-15%] w-[65vw] h-[65vw] rounded-full bg-blue-900/10 blur-[140px]"
      />
    </div>
  );
}
