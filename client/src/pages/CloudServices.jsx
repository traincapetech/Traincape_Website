import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Rocket } from "lucide-react";
import banner from "../assets/cloud_banner.jpeg";
import C from "../assets/CC.jpeg";
import { useNavigate } from "react-router-dom";

const CloudServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


const navigate = useNavigate();


  return (
    <div className="w-full overflow-hidden font-sans text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative text-white py-28 px-6 md:px-16 flex flex-col justify-center items-start"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/60 via-[#002952]/50 to-[#001F3F]/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <motion.p
            className="text-sm md:text-base font-semibold uppercase tracking-wide text-[#FFA500]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cloud Services
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering Your Business with{" "}
            <span className="text-[#FFA500]">Cloud Innovation</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-3xl text-gray-200 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the flexibility, scalability, and efficiency of modern
            cloud technology with our expert cloud solutions.
          </motion.p>

          <motion.button
            className="mt-8 bg-[#FFA500] hover:bg-[#ff9100] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
             onClick={() => navigate("/contact-us")}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#F8FBFF] py-16 px-6 md:px-16 text-center md:text-left">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#ff6600] mb-3 text-center md:text-left">
            Best Cloud Service Provider
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-center md:text-left">
            Cloud-Ready Solutions for Every Business
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            We provide robust, secure, and scalable cloud services designed to
            meet the needs of modern enterprises. Our team ensures seamless
            cloud transformation to help your business grow efficiently.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 bg-white px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Scalability",
              desc: "Effortlessly scale your business operations with our dynamic and flexible cloud infrastructure.",
              icon: <Cloud className="h-10 w-10 text-blue-600" />,
            },
            {
              title: "Security",
              desc: "Enjoy enterprise-grade security, data encryption, and compliance with top global standards.",
              icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
            },
            {
              title: "Performance",
              desc: "Boost your productivity with fast, reliable, and high-performing cloud infrastructure.",
              icon: <Rocket className="h-10 w-10 text-blue-600" />,
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

  

      {/* IMAGE SECTION */}
      <section className="py-12 bg-blue-100/50 px-6 md:px-16 mb-10 w-full mt-10 overflow-hidden">
        <div className="max-w-6xl flex flex-col md:flex-row mx-auto gap-10">
          <div
            className="w-[400px] h-[300px] md:h-[600px] rounded-2xl"
            style={{
              backgroundImage: `url(${C})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <motion.div className="flex-1 font-bold">
            <motion.h2
              className="text-2xl md:text-4xl font-bold leading-snug mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Cloud-Ready Solutions for Every Business
            </motion.h2>

            <motion.p
              className="text-gray-600 max-w-3xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We provide robust, secure, and scalable cloud services designed to
              meet the needs of modern enterprises. Our team ensures seamless
              cloud transformation to help your business grow efficiently.
            </motion.p>

            {/* --- Additional content starts here --- */}
            <motion.div
              className="mt-8 space-y-6 text-gray-600 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>
                Whether you’re migrating existing infrastructure or building new
                cloud-native applications, our experts guide you through every
                step. From planning and deployment to optimization and security
                — we help you leverage the full potential of cloud technology.
              </p>

              <p>
                Our partnerships with leading cloud providers ensure high
                availability and performance across all your environments. With
                built-in compliance, monitoring, and support, we empower
                businesses to scale faster and innovate with confidence.
              </p>

              <ul className="list-disc list-inside text-gray-700">
                <li>End-to-end cloud migration and management</li>
                <li>Multi-cloud and hybrid cloud strategies</li>
                <li>AI-driven performance optimization</li>
                <li>24/7 monitoring and support</li>
              </ul>

              <p className="font-semibold text-gray-800">
                Unlock agility, reduce costs, and future-proof your digital
                ecosystem — all with our tailored cloud-ready solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>


             {/* CTA SECTION */}
      <section className="bg-blue-200 text-black py-16 text-center px-6 mt-16 rounded-3xl mx-6 md:mx-16 outline-indigo-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Business to the Cloud?
        </h2>
        <p className="text-black/50 mb-8 max-w-2xl mx-auto text-xl">
          Partner with us for seamless migration, integration, and cloud management solutions.
        </p>
        <motion.button
          className="bg-blue-900 hover:bg-blue-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md text-white  "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </motion.button>
      </section> 
      </section>
    </div>
  );
};

export default CloudServices;