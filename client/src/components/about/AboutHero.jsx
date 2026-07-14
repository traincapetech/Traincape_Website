import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import aboutVideo from "../../assets/aboutus.mp4";
import aboutPoster from "../../assets/about-hero-bg.png";

export default function AboutHero({ heroData }) {
  if (!heroData) return null;

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-white border-b border-slate-100">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={aboutPoster}
          className="w-full h-full object-cover"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
        {/* White overlay for readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-[1]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-[1]"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/15 bg-white/80 backdrop-blur-sm text-xs text-blue-600 font-semibold tracking-wide uppercase shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Corporate Profile</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display max-w-4xl mx-auto leading-tight drop-shadow-sm"
        >
          {heroData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          {heroData.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="/services"
            className="btn-primary flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-lg shadow-blue-500/10"
          >
            <span>{heroData.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/courses"
            className="btn-outline flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-slate-500 bg-white/80 backdrop-blur-sm"
          >
            {heroData.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
