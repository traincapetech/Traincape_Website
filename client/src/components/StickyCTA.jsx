import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowRight } from "lucide-react";

export default function StickyCTA({
  primaryLabel = "Request Consultation",
  primaryLink = "/contact-us",
  whatsappNumber = "919911910793", // default India office
  whatsappPrefill = "Hi Traincape Team, I'm interested in discussing a project.",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const encodedPrefill = encodeURIComponent(whatsappPrefill);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedPrefill}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-5 pt-3.5 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-2xl flex gap-3 items-center transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Link
        to={primaryLink}
        className="flex-grow flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-5 rounded-xl text-sm transition-all shadow-md shadow-blue-500/10 active:scale-98"
      >
        <span>{primaryLabel}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-xl flex items-center justify-center transition-all shadow-md shadow-emerald-500/10 active:scale-98"
      >
        <BsWhatsapp className="w-5 h-5" />
      </a>
    </div>
  );
}
