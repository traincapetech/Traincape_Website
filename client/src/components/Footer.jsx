import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Star,
  Globe,
  Award,
  Briefcase,
  Headphones,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../pages/AboutUs/data.js";
import { BsWhatsapp } from "react-icons/bs";
import WebsiteCounter from "./WebsiteCounter";
import logo from "../assets/TT.png";

export default function Footer() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations?.[language]?.footer || {};

  // Track expanded sections on mobile
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionKey) => {
    setOpenSection(openSection === sectionKey ? null : sectionKey);
  };

  const handleNavigation = (path) => {
    if (path.startsWith("#") || path.includes("#")) {
      const [route, anchor] = path.split("#");
      navigate(route);
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  // Structured content mapping with multilingual support and correct path routes
  const footerLinks = {
    company: {
      title: t.company || "Company",
      links: [
        { label: t.aboutUs || "About Us", path: "/about-us" },
        { label: t.ourStory || "Our Story", path: "/about-us#our-story" },
        { label: t.career || "Careers", path: "/Career-details" },
        { label: t.contactUs || "Contact Us", path: "/contact-us" },
        { label: t.resources || "Blogs", path: "/Our-Blogs" },
        { label: t.news || "News", path: "/Our-Blogs" },
      ],
    },
    services: {
      title: t.services || "Services",
      links: [
        { label: "Custom Software Development", path: "/services/custom-software-development" },
        { label: "CRM Development", path: "/services/crm-development" },
        { label: "Website Development", path: "/services/web-development" },
        { label: "Mobile App Development", path: "/services/mobile-app-development" },
        { label: "UI/UX Design System", path: "/services/ui-ux-design" },
        { label: "Cloud Services & DevOps", path: "/services/cloud-services" },
        { label: "AI Solutions & RAG", path: "/services/ai-solutions" },
        { label: "Maintenance & Support SLA", path: "/services/maintenance-support" },
      ],
    },
    products: {
      title: t.products || "Products",
      links: [
        { label: "CRM", path: "/products/crm" },
        { label: "HRMS", path: "/products/hrms" },
        { label: "Payroll", path: "/products/payroll" },
        { label: "Attendance", path: "/services/software-services?product=attendance" },
        { label: "Inventory", path: "/services/software-services?product=inventory" },
        { label: "Employee Portal", path: "/services/software-services?product=employee" },
        { label: "Email Campaign", path: "/services/software-services?product=email" },
      ],
    },
    industries: {
      title: t.industries || "Industries",
      links: [
        { label: "Healthcare", path: "/our-services?industry=healthcare" },
        { label: "Education", path: "/our-services?industry=education" },
        { label: "Manufacturing", path: "/our-services?industry=manufacturing" },
        { label: "Retail", path: "/our-services?industry=retail" },
        { label: "Logistics", path: "/our-services?industry=logistics" },
        { label: "Finance", path: "/our-services?industry=finance" },
        { label: "Real Estate", path: "/our-services?industry=realestate" },
        { label: "Startups", path: "/our-services?industry=startups" },
      ],
    },
    resources: {
      title: t.resources || "Resources",
      links: [
        { label: t.faq || "FAQ", path: "/frequently-asked-questions" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Portfolio", path: "/portfolio" },
        { label: t.policy || "Privacy Policy", path: "/Our-Policies" },
        { label: "Terms & Conditions", path: "/Terms-and-Conditions" },
        { label: "Sitemap", path: "/sitemap" },
      ],
    },
    technologies: {
      title: t.technologies || "Technologies",
      links: [
        { label: "React", path: "/our-services?tech=react" },
        { label: "Node.js", path: "/our-services?tech=node" },
        { label: "MongoDB", path: "/our-services?tech=mongodb" },
        { label: "Next.js", path: "/our-services?tech=nextjs" },
        { label: "React Native", path: "/our-services?tech=reactnative" },
        { label: "Firebase", path: "/our-services?tech=firebase" },
        { label: "AWS", path: "/our-services?tech=aws" },
        { label: "Docker", path: "/our-services?tech=docker" },
        { label: "TypeScript", path: "/our-services?tech=typescript" },
        { label: "Tailwind CSS", path: "/our-services?tech=tailwind" },
      ],
    },
  };

  const trustStats = [
    {
      icon: Star,
      value: "4.9+",
      label: t.googleRating || "Google Rating",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Globe,
      value: "10+",
      label: t.countriesServed || "Countries Served",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Briefcase,
      value: "150+",
      label: t.projectsDelivered || "Projects Delivered",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: t.support || "Dedicated Support",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Award,
      value: "5+",
      label: t.yearsExperience || "Years Experience",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
  ];

  return (
    <footer
      className="bg-[#09090b] text-slate-300 font-sans border-t border-slate-800/80 relative overflow-hidden"
      role="contentinfo"
      aria-label="Enterprise Footer"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      {/* Visual background ambient glows */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Top premium gradient bar */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-10 relative z-10">
        {/* Top Info section: Brand + Office Map visual card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/60 items-start">
          {/* Brand Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <Link to="/" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
                <img
                  src={logo}
                  alt="Traincape Technology Logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              {t.aboutDesc ||
                "Traincape Technology delivers smart, enterprise-level digital solutions—from custom software architectures to mobile apps. We empower organizations and professionals to lead in the digital era."}
            </p>

            {/* Social Links with magnet-style hover & WhatsApp Direct */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100083755432171",
                  Icon: Facebook,
                  label: "Facebook",
                  color: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/40",
                },
                {
                  href: "https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg==",
                  Icon: Instagram,
                  label: "Instagram",
                  color: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/40",
                },
                {
                  href: "https://in.linkedin.com/company/traincape-technology",
                  Icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/40",
                },
              ].map(({ href, Icon, label, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className={`bg-slate-900/60 border border-slate-800 p-3 rounded-full transition-all duration-300 shadow-md ${color} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}

              <a
                href="https://wa.me/+441253928501"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-emerald-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <BsWhatsapp className="h-4 w-4" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Contact Details & Google Maps Glassmorphic Widget */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-100 uppercase tracking-widest">
                {t.contactUs || "Contact Details"}
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">UK Support</span>
                    <a href="tel:+441253928501" className="hover:text-blue-400 transition-colors duration-200">
                      +44 1253 928501
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Enterprise Email</span>
                    <a href="mailto:sales@traincapetech.in" className="hover:text-blue-400 transition-colors duration-200 break-all">
                      sales@traincapetech.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">{t.workingHours || "Working Hours"}</span>
                    <span>{t.workingTime || "Mon - Sat: 11AM - 7PM"}</span>
                    <span className="text-rose-400/80 font-medium text-xs mt-0.5">{t.sundayClosed || "Sunday Closed"}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Glassmorphic Card */}
            <div className="relative group">
              <a
                href="https://maps.google.com/?q=Traincape+Technology+Khandolia+Plaza+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden shadow-2xl p-4 transition-all duration-500 hover:border-blue-500/40 hover:shadow-blue-500/5 group-hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-500 animate-bounce" />
                    <span className="text-xs font-semibold text-slate-200 tracking-wide uppercase">New Delhi Head Office</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                
                {/* Visual Map graphic with stylized lines */}
                <div className="h-24 bg-[#0a0f24] rounded-lg mt-3 relative overflow-hidden border border-slate-800/80 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#3b82f6" strokeWidth="1" />
                    <line x1="0" y1="60" x2="300" y2="60" stroke="#3b82f6" strokeWidth="1" />
                    <line x1="0" y1="80" x2="300" y2="80" stroke="#3b82f6" strokeWidth="1" />
                    <line x1="40" y1="0" x2="40" y2="100" stroke="#3b82f6" strokeWidth="1" />
                    <line x1="120" y1="0" x2="120" y2="100" stroke="#3b82f6" strokeWidth="1" />
                    <line x1="200" y1="0" x2="200" y2="100" stroke="#3b82f6" strokeWidth="1" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-rose-500 rounded-full relative border border-white"></div>
                  </div>
                  <span className="absolute bottom-2 text-[10px] text-slate-500 bg-[#09090b] px-2 py-0.5 rounded border border-slate-800">
                    Khandolia Plaza, Vaishali Colony
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 pt-3 leading-snug">
                  {t.address || "Khandolia Plaza, 118C, Dabri - Palam Rd, Vaishali Colony, Dashrath Puri, New Delhi, 110045"}
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Navigation grid: 6 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 py-16 border-b border-slate-800/60">
          {Object.entries(footerLinks).map(([key, section]) => {
            return (
              <div key={key} className="space-y-4 border-b border-slate-850 md:border-b-0 pb-4 md:pb-0">
                {/* Column header - Accordion switch for Mobile, flat label for Desktop */}
                <button
                  onClick={() => toggleSection(key)}
                  className="flex items-center justify-between w-full md:cursor-default text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1 md:p-0"
                  aria-expanded={openSection === key}
                  aria-controls={`footer-section-${key}`}
                >
                  <h3 className="font-bold text-xs text-slate-100 uppercase tracking-widest">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-300 md:hidden ${
                      openSection === key ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Link list container */}
                <div
                  id={`footer-section-${key}`}
                  className={`md:block transition-all duration-300 overflow-hidden ${
                    openSection === key ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 md:max-h-[500px] opacity-0 md:opacity-100"
                  }`}
                >
                  <nav aria-label={`${section.title} Navigation`}>
                    <ul className="space-y-2.5 text-sm">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          {link.path.startsWith("/") ? (
                            <Link
                              to={link.path}
                              onClick={(e) => {
                                // Force scroll and close menu
                                if (link.path.includes("#")) {
                                  e.preventDefault();
                                  handleNavigation(link.path);
                                }
                              }}
                              className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group/link relative py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-blue-500/50 mr-1.5 transform group-hover/link:translate-x-0.5 group-hover/link:text-blue-400 transition-all duration-200 flex-shrink-0" />
                              <span className="relative">
                                {link.label}
                                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-blue-500 group-hover/link:w-full transition-all duration-300"></span>
                              </span>
                            </Link>
                          ) : (
                            <a
                              href={link.path}
                              className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group/link relative py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-blue-500/50 mr-1.5 transform group-hover/link:translate-x-0.5 group-hover/link:text-blue-400 transition-all duration-200 flex-shrink-0" />
                              <span className="relative">
                                {link.label}
                                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-blue-500 group-hover/link:w-full transition-all duration-300"></span>
                              </span>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Trust Stats banner (Horizontal Stats panel) */}
        <div className="py-12 border-b border-slate-800/60">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {trustStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
                >
                  <div className={`${stat.bg} ${stat.color} p-2.5 rounded-lg`}>
                    <StatIcon className="h-5 w-5" />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-slate-100 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
            <p className="font-light">
              {t.copyRight || `Copyright © ${new Date().getFullYear()} `}
              <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Traincape Technology
              </span>
              . {t.allRightsReserved || "All rights reserved."}
            </p>
            <span className="hidden md:inline text-slate-800">|</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/40 border border-slate-800/60 px-3 py-1 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
              <span>ISO 9001 & ISO 27001 Certified Partner</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <WebsiteCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
