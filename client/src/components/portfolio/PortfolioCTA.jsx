import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background ambient glowing shapes */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display"
        >
          Have a Project in Mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Partner with our team of expert developers, product designers, and solution architects to construct custom, secure, and highly scalable software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/contact-us"
            className="btn-primary flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/frequently-asked-questions"
            className="btn-secondary flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>Read FAQs</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
