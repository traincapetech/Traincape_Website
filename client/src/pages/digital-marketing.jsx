import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import banner from "../assets/digitalMarketingBanner.jpg"; 

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.replace(/\D/g, ""));
      const duration = 2000;
      const stepTime = 20;
      const increment = end / (duration / stepTime);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);

      return () => clearInterval(counter);
    }
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h3 className="text-3xl font-bold text-[#00AEEF]">
        {count}
        {target.includes("%") && "%"}
        {target.includes("+") && "+"}
      </h3>
      <p className="text-gray-700 text-sm mt-2">{label}</p>
    </motion.div>
  );
};

const DigitalMarketing = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden font-inter text-[#0A0A0A]">
      {/* 🌟 HERO SECTION */}
      <section
        className="relative text-white py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f]/95 via-[#0a223a]/85 to-black/90"></div>

        <motion.div
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-radial from-[#00AEEF]/5 to-transparent blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />

        {/* Hero Text */}
        <div className="relative z-10 max-w-2xl mb-10 md:mb-0">
          <motion.p
            className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#FFA500] cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate("/contact-us")}
          >
            Digital Marketing Solutions
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Elevate Your Brand with <br />
            <span className="text-[#00AEEF]">Performance-Driven Marketing</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-gray-200 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We combine creativity, strategy, and analytics to help brands
            capture attention, engage audiences, and grow revenue in the digital
            age.
          </motion.p>

          <motion.button
            className="mt-8 bg-[#FFA500] hover:bg-[#ff7b00] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/contact-us")}
          >
            Get Your Free Strategy Call 🚀
          </motion.button>
        </div>

        {/* Hero Lottie Animation */}
        <motion.div
          className="relative z-10 w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <DotLottieReact
            src="https://lottie.host/4208efc8-3f24-4b46-8829-cd60fa16f8ff/U4RA0RklY2.lottie"
            autoplay
            loop
            style={{ width: "90%", height: "auto" }}
          />
        </motion.div>
      </section>

      {/* 📈 METRICS STRIP */}
      <section className="bg-[#F4F9FF] py-10 px-6 md:px-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter target="12+" label="Years of Experience" />
          <Counter target="650+" label="Clients Served" />
          <Counter target="120%" label="Average ROI Growth" />
          <Counter target="80%" label="Client Retention" />
        </div>
      </section>

      {/* 💡 SERVICES */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#FFA500] mb-3">
            What We Do Best
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#0A0A0A]">
            Our Core Digital Marketing Services
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            From search engines to social media, we create cohesive marketing
            ecosystems that build trust, awareness, and long-term growth for
            your brand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🔍", title: "SEO Optimization", desc: "Boost organic visibility and authority with high-performing strategies." },
              { icon: "💬", title: "Social Media Marketing", desc: "Engage audiences and increase followers with viral content plans." },
              { icon: "📣", title: "Paid Ads (PPC)", desc: "Generate instant traffic through Google and Meta ad campaigns." },
              { icon: "✉️", title: "Email Campaigns", desc: "Automate personalized email sequences that convert leads to sales." },
              { icon: "🎥", title: "Content Marketing", desc: "Produce blogs, videos, and creatives designed to educate and inspire." },
              { icon: "🛍️", title: "E-Commerce Growth", desc: "Maximize conversions with CRO-driven marketing funnels." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-[#F4F9FF] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-left"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🔄 OUR PROCESS */}
      <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Our 6-Step Marketing Process
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Research & Discovery", desc: "Understand your business, goals, and competitors deeply." },
              { step: "02", title: "Strategy Planning", desc: "Develop a growth roadmap with measurable KPIs." },
              { step: "03", title: "Content Creation", desc: "Craft high-converting creative assets for campaigns." },
              { step: "04", title: "Execution", desc: "Launch and monitor campaigns across platforms." },
              { step: "05", title: "Optimization", desc: "Analyze data, A/B test, and refine strategies." },
              { step: "06", title: "Scaling", desc: "Scale what works and expand your reach." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#00AEEF] transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-[#00AEEF] text-xl font-bold mb-3">{item.step}</h3>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="bg-gradient-to-r from-[#0a223a] via-[#0A0A0A] to-[#0a223a] text-white py-24 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Amplify Your Digital Presence?
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s build a data-driven strategy that grows your brand and drives
          measurable ROI. Partner with experts who care about your success.
        </motion.p>
        <motion.button
          className="bg-[#FFA500] hover:bg-[#ff7b00] text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/contact-us")} // ✅ Navigates properly
        >
          Get Started Now 🚀
        </motion.button>
      </section>
    </div>
  );
};

export default DigitalMarketing;