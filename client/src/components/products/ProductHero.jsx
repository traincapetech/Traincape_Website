import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

export default function ProductHero({ product }) {
  if (!product) return null;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-white border-b border-slate-100">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column (6 cols) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-500/5 text-xs text-blue-600 font-semibold tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Enterprise Software Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5.5xl font-extrabold tracking-tight text-slate-900 font-display leading-tight"
          >
            {product.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600">
              {product.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed"
          >
            {product.shortDescription || product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="/contact-us"
              className="btn-primary flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Schedule Free Demo</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/919911910793"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              <Play className="w-4 h-4 text-slate-500" />
              <span>Talk to Sales</span>
            </a>
          </motion.div>
        </div>

        {/* Right dashboard mockup preview column (6 cols) */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl aspect-video"
          >
            <img
              src={product.dashboardPreview || product.heroImage}
              alt={`${product.name} Dashboard Mockup`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-slate-50/10 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 bg-white/90 border border-slate-200 rounded px-2.5 py-1 text-[10px] text-slate-500 font-semibold uppercase tracking-wider shadow-lg">
              Live workspace View
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
