import React from "react";
import { motion } from "framer-motion";

const HomeBanner = ({ text }) => {
  return (
    <div className="w-full min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 to-[#112240]/80 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        
        {/* Abstract geometric shapes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-blue-500/20 rounded-lg rotate-12"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-indigo-400/20 rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-blue-300/20 rounded-full"
        ></motion.div>
      </div>
      
      {/* Left side - Text */}
      <div className="text-white md:w-1/2 z-10 mb-8 md:mb-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="md:text-5xl text-4xl font-bold mb-6 tracking-tight text-shadow-sm leading-tight text-center md:text-left">
            {text.title}
          </h1>
        </motion.div>
        
        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 justify-center md:justify-start">
          {[text.type1, text.type2, text.type3, text.type4].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
              className="relative"
            >
              <span className="inline-block font-medium text-base md:text-lg px-4 py-2 rounded-lg 
                bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md
                border border-white/10 shadow-md">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Add CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 text-center md:text-left"
        >
          <a 
            href={text.ctaLink || "/contact-us"} 
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg
              font-bold hover:shadow-lg hover:from-blue-600 hover:to-indigo-700
              transition-all duration-300 transform hover:-translate-y-1"
          >
            {text.ctaText || "Get Started"} →
          </a>
        </motion.div>
      </div>

      {/* Right side - Abstract design element */}
      <div className="md:w-1/2 z-10 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md"
        >
          {/* Main abstract design */}
          <div className="relative h-64 md:h-80">
            {/* Glowing orb */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.9, 0.7] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-500/30 backdrop-blur-xl z-10"
            ></motion.div>
            
            {/* Floating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full border border-blue-300/20 z-0"
            ></motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full border border-indigo-300/20 z-0"
            ></motion.div>
            
            {/* Tech-inspired dots */}
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5
                }}
                className="absolute w-2 h-2 rounded-full bg-blue-400/70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></motion.div>
            ))}
            
            {/* Central content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <div className="font-mono text-white/90 text-sm md:text-base font-bold whitespace-nowrap">
                  TRAINCAPE <span className="text-blue-300">TECHNOLOGY</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Supplementary decorative elements */}
          <div className="hidden md:block absolute -bottom-6 -right-10 w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent rotate-12"></div>
          <div className="hidden md:block absolute -top-6 -left-10 w-16 h-16 rounded-full border border-indigo-300/20"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;