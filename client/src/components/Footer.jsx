import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  ChevronRight, // Added for the link bullet
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../pages/AboutUs/data.js";

export default function Footer() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Safe access for translations
  const t = translations?.[language]?.footer || {};

  const handleNavigation = (path) => {
    navigate(path);
  };
  
  // Dynamic current year calculation
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-slate-950 text-white font-sans"> 
      
      {/* Top section: Contact Info (3 columns on MD+) */}
      {/* Adjusted max-w to achieve ~80% width and centered with mx-auto */}
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12 pt-10 pb-8 border-b border-blue-700/30"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Us */}
          <div className="flex items-start p-4 bg-slate-900 rounded-lg shadow-xl border border-transparent hover:border-blue-700 transition-all duration-500 group">
            <div className="bg-blue-700/30 p-3 rounded-full shadow-lg group-hover:bg-blue-700/50 transition-all duration-300">
              <Phone className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-4">
              <h3 className="font-extrabold text-sm md:text-lg mb-2 text-blue-50 tracking-wide">{t.contactUs}</h3>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2 group/item">
                  <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <a
                    href="mailto:sales@traincapetech.in"
                    className="text-xs md:text-sm hover:text-blue-300 transition-colors duration-300 truncate"
                    rel="noopener noreferrer"
                  >
                    sales@traincapetech.in
                  </a>
                </div>
                <div className="flex items-center gap-2 group/item">
                  <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://wa.me/+441253928501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm hover:text-blue-300 transition-colors duration-300"
                  >
                    +44 1253 928501
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start p-4 bg-slate-900 rounded-lg shadow-xl border border-transparent hover:border-blue-700 transition-all duration-500 group">
            <div className="bg-blue-700/30 p-3 rounded-full shadow-lg group-hover:bg-blue-700/50 transition-all duration-300">
              <Clock className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-4">
              <h3 className="font-extrabold text-sm md:text-lg mb-2 text-blue-50 tracking-wide">{t.workingHours}</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-snug">
                {t.workingTime}
              </p>
              <p className="text-blue-400 font-semibold text-xs md:text-sm mt-1">{t.sundayClosed}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Middle section: Detailed Info (2 columns on MD, 4 on LG) */}
      {/* Adjusted max-w to achieve ~80% width and centered with mx-auto */}
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12 pt-8 pb-10"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg pb-3 text-blue-400 border-b-2 border-blue-700/60 inline-block">
              {t.aboutUs}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.aboutDesc}</p>
          </div>

          {/* Social Media Icons */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg pb-3 text-blue-400 border-b-2 border-blue-700/50 inline-block">{t.socialMediaLinks}</h3>
            <div className="flex gap-4 pt-2">
              {[
                { href: "https://www.facebook.com/profile.php?id=100083755432171", Icon: Facebook, color: "hover:bg-blue-600" },
                { href: "https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg==", Icon: Instagram, color: "hover:bg-pink-600" },
                { href: "https://in.linkedin.com/company/traincape-technology", Icon: Linkedin, color: "hover:bg-blue-700" },
              ].map(({ href, Icon, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-slate-800 ${color} p-3 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-blue-700/50`}
                >
                  <Icon className="h-5 w-5 text-white" />
                  <span className="sr-only">Social Icon</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links and Explore */}
          <div className="grid grid-cols-2 gap-8">
            <FooterLinks title={t.links} links={[
              { label: t.faq, path: "/frequently-asked-questions" },
              { label: t.contactUs, path: "/contact-us" },
              { label: "Certifications", path: "/certifications" },
              { label: "Training", path: "/training" },
              { label: t.policy, path: "/Our-Policies" },
              { label: t.career, path: "/Career-details" },
              // { label: t.employee, path: "/Employee" },
              { label: t.certificate, path: "/CertificateLookup" }

            ]} handleNavigation={handleNavigation} />

            <FooterLinks title={t.explore} links={[
              { label: t.whatWeDo, path: "/about-us" },
              { label: t.resources, path: "/Our-Blogs" },
              { label: t.internship, path: "/Internship" },
              { label: t.partners, path: "/partner-page" },
              { label: t.gallery, path: "/Gallery" }
            ]} handleNavigation={handleNavigation} />
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-900 mx-auto px-4 text-center py-4">
        <p className="text-slate-500 text-xs font-light">
          {t.copyRight} © {currentYear} <span className="text-blue-400 font-medium">Traincape Technology</span>. {t.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}

// Reusable Footer Links Component
function FooterLinks({ title, links, handleNavigation }) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg pb-3 text-blue-400 border-b-2 border-blue-700/50 inline-block">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-2 text-sm">
        {links.map(({ label, path }, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(path)}
            className="text-slate-400 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
          >
            <ChevronRight className="w-4 h-4 text-blue-500 mr-2 transform group-hover:translate-x-0.5 transition-transform duration-200 flex-shrink-0" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}