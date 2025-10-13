import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/servicesBanner.webp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
    const navigate = useNavigate(); // ✅ you forgot this line

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION (UNCHANGED) */}
      <section
        className="relative text-white py-28 px-6 md:px-16 flex flex-col justify-center items-start"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/90 via-[#002952]/80 to-[#001F3F]/90"></div>

        <div className="relative z-10 max-w-5xl">
          <motion.p
            className="text-sm md:text-base font-semibold uppercase tracking-wide text-[#FFA500]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Website Development
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Vision, Our Expertise
            <br className="hidden md:block" />
            Transforming Ideas Into{" "}
            <span className="text-[#FFA500]">Stunning Web Realities</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-3xl text-gray-200 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the magic of your vision coming to life as we expertly
            shape your ideas into powerful digital visuals with our custom web
            development services.
          </motion.p>

          <motion.button
            className="mt-8 bg-[#FFA500] hover:bg-[#ff9100] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={() => navigate("/contact-us")}
          >
            Let’s Get Started
          </motion.button>
        </div>
      </section>

      {/* FIRST INFO SECTION (UNCHANGED) */}
      <section className="bg-[#F8FBFF] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#ff6600] mb-3">
            Best Web Development Company in India
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6">
            Global-Ready Web Development Solutions for Every Industry
          </h2>

          <p className="text-gray-600 max-w-3xl">
            Invoidea, an emerging and trusted website development company in
            India, offers scalable and modern digital solutions that empower
            businesses across all sectors.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Development",
                desc: "We create intuitive user interfaces with responsive and interactive designs.",
                icon: "💻",
              },
              {
                title: "Backend Development",
                desc: "Our developers use dynamic and secure technologies to power your web solutions.",
                icon: "🛠️",
              },
              {
                title: "Full Stack Development",
                desc: "Combines the frontend and backend to deliver complete end-to-end solutions.",
                icon: "⚙️",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ NEW SECTION ADDED BELOW */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#ff6600] mb-3">
            Website Development Services in India
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6">
            Our Custom Web Development Services
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            Bringing unique ideas to life can be challenging, especially when you aim to disrupt the industry with innovation. 
            We develop personalized websites that perfectly reflect your goals and reach your targeted audience across the world.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Application",
                desc: "End-to-end web development solutions to turn your vision into a fully functional website.",
                icon: "🌐",
              },
              {
                title: "E-commerce Website Development",
                desc: "Fast, secure, and conversation-driven online stores to boost conversions and sales.",
                icon: "🛒",
              },
              {
                title: "Custom Website Development",
                desc: "Build powerful, purpose-driven websites from scratch tailored to your brand.",
                icon: "🧩",
              },
              {
                title: "Multi-vendor Website Development",
                desc: "Launch your own marketplace where multiple vendors can sell products globally.",
                icon: "🏪",
              },
              {
                title: "CMS Development",
                desc: "Create content-rich, easily manageable, and highly scalable CMS platforms.",
                icon: "📝",
              },
              {
                title: "CRM Development",
                desc: "Build robust platforms to manage customer data, interactions, and retention.",
                icon: "📊",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-[#F8FBFF] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;