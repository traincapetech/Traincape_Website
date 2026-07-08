import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProductFAQs({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200/50">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-550 text-sm">
            Everything you need to know about our product specs, clouds, and licensing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-800 font-bold text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-blue-600" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-650 text-xs md:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
