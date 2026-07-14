import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import servicesBg from "../../assets/services-hero-bg.png";

export default function ServiceHero({ service }) {
  if (!service) return null;

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-white border-b border-slate-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={servicesBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* White overlay for readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-[1]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-[1]"></div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/15 bg-white/80 backdrop-blur-sm text-xs text-blue-600 font-semibold tracking-wide uppercase shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>B2B IT Solutions Suite</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display max-w-4xl mx-auto leading-tight drop-shadow-sm"
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          {service.shortDescription}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed"
        >
          {service.longDescription}
        </motion.p>
      </div>
    </section>
  );
}
