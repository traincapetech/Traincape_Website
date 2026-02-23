import React from "react";
import { motion } from "framer-motion";

const WebsiteCounter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 0.6, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="inline-block hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
    >
      <a
        href="https://www.coolseotools.com/website-visitor-counter"
        target="_blank"
        rel="noopener noreferrer"
        title="Web Counter"
        className="block"
      >
        <img
          src="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr"
          title="Web Counter"
          alt="AtoZSEOTools Web Counter"
          className="h-5 w-auto"
        />
      </a>
    </motion.div>
  );
};

export default WebsiteCounter;
