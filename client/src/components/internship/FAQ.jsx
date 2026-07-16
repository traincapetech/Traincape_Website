import React, { useState } from "react";
import { faqs } from "../../data/internship/internshipData";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Support FAQ
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Have questions about tracks, certificates, or remote options? Explore our common inquiries.
          </p>
        </div>

        <div className="space-y-4 text-left max-w-3xl mx-auto pt-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:text-blue-600 focus:outline-none transition-colors"
                >
                  <span className="text-sm md:text-base leading-tight pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-slate-50">
                    {faq.answer}
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
