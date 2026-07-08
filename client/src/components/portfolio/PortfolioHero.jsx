import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function PortfolioHero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#09090b] border-b border-slate-800/80">
      {/* Background ambient glowing shapes */}
      <div className="absolute top-[-10%]; left-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Decorative premium tech background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-xs text-blue-400 font-semibold tracking-wide uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          Our Engineering Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-display max-w-4xl mx-auto leading-tight"
        >
          Pioneering Digital Architecture &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Enterprise Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Explore our portfolio of premium web applications, bespoke CRM software, and cloud architectures built for scalability, performance, and long-term trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onExploreClick}
            className="btn-primary flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Explore Case Studies"
          >
            <span>Explore Case Studies</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="/contact-us"
            className="btn-outline flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-slate-500"
            aria-label="Book a free consulting session"
          >
            <span>Book Consultation</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
        </motion.div>
      </div>

      {/* Subtle floating portfolio mockup previews in the bottom background */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none"></div>
    </section>
  );
}
