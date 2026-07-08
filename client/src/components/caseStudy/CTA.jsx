import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTA({ client }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-6 max-w-4xl mx-auto pt-10 shadow-sm">
      <h3 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 font-display">
        Need a Solution for Your Organization?
      </h3>
      <p className="text-slate-605 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
        Let's discuss how we can partner with your team to design and build custom CRM, ERP, mobile apps, or headless storefront systems optimized for your workflow.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/contact-us"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded font-semibold text-xs md:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-lg hover:shadow-blue-900/10"
        >
          <span>Discuss Project with Us</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="https://wa.me/919911910793"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white border border-slate-250 text-slate-700 hover:text-slate-900 px-4 py-2.5 rounded text-xs md:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-emerald-500" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
