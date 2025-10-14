import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@mui/material";

import cloud from "../assets/Cloud-services.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";

import CloudImg from "../assets/cloud.jpg";
import DigitalImg from "../assets/digital.jpg";
import webImg from "../assets/web.png";
import Saas from "../assets/saas.jpg";

/* ---------------------- DATA ---------------------- */
const servicesData = [
  {
    title: "Cloud Services",
    description:
      "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure. These services offer benefits such as cost optimization, scalability, accessibility, reliability, and innovation.",
    image: cloud,
    banner: CloudImg,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers. Techniques include SEO, PPC, social media, content marketing, and leveraging offline media.",
    image: Digital,
    banner: DigitalImg,
  },
  {
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites and web applications. It includes frontend development, backend development, and full-stack development.",
    image: Web,
    banner: webImg,
  },
  {
    title: "Software Services and Development",
    description:
      "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
    image: Software,
    banner: Saas,
  },
];

/* ---------------------- COMPONENT ---------------------- */
const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const firstCardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lgUp, setLgUp] = useState(window.innerWidth >= 1024);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setLgUp(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // -------------------- INDIVIDUAL CARD TRANSFORMS --------------------
  const y0 = useTransform(scrollYProgress, [0 * 0.125, 0 * 0.125 + 0.175], [200, -150]);
  const opacity0 = useTransform(scrollYProgress, [0, 0.02, 0.08, 0.175], [1, 1, 1, 0.1]);
  const scale0 = useTransform(scrollYProgress, [0, 0.03, 0.175], [0.92, 1, 0.9]);

  const y1 = useTransform(scrollYProgress, [0.125, 0.125 + 0.175], [200, -150]);
  const opacity1 = useTransform(scrollYProgress, [0.125, 0.145, 0.205, 0.3], [0, 1, 1, 0.1]);
  const scale1 = useTransform(scrollYProgress, [0.125, 0.155, 0.3], [0.92, 1, 0.9]);

  const y2 = useTransform(scrollYProgress, [0.25, 0.25 + 0.175], [200, -150]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.27, 0.33, 0.425], [0, 1, 1, 0.1]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.28, 0.425], [0.92, 1, 0.9]);

  const y3 = useTransform(scrollYProgress, [0.375, 0.375 + 0.175], [200, -150]);
  const opacity3 = useTransform(scrollYProgress, [0.375, 0.395, 0.455, 0.55], [0, 1, 1, 0.1]);
  const scale3 = useTransform(scrollYProgress, [0.375, 0.405, 0.55], [0.92, 1, 0.9]);

  const cardTransforms = [
    { y: y0, opacity: opacity0, scale: scale0 },
    { y: y1, opacity: opacity1, scale: scale1 },
    { y: y2, opacity: opacity2, scale: scale2 },
    { y: y3, opacity: opacity3, scale: scale3 },
  ];

  // -------------------- ACTIVE CARD TRACKING --------------------
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const segment = 1 / (servicesData.length + 2);
    const newIndex = Math.min(servicesData.length - 1, Math.floor(v / segment));
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (service) => {
    const slug = service.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service-detail/${slug}`);
  };

  const handleExploreClick = () => {
    firstCardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Services - IT Certifications</title>
        <meta
          name="description"
          content="Empowering businesses with cutting-edge technology solutions."
        />
        <link rel="canonical" href="https://traincapetech.in/our-services" />
      </Helmet>

      <div className="bg-gray-50">
        {/* HERO SECTION */}
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            className="h-full w-full object-cover"
            src="https://videos.pexels.com/video-files/9667569/9667569-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Our IT Services
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl drop-shadow-md">
              Empowering businesses with cutting-edge technology solutions for
              sustainable growth and innovation.
            </p>
            <div className="w-full flex items-center justify-center gap-10 mt-6">
              <Button
                onClick={handleExploreClick}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",
                  fontSize: "1.1rem",
                  padding: "7px 20px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    borderColor: "#f1f1f1",
                  },
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div ref={containerRef} className="py-16 bg-gray-50">
          <div className="flex flex-col lg:flex-row justify-between px-6 md:px-20">
            {/* LEFT TEXT */}
            <div className="lg:w-1/2 flex flex-col justify-center mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-[#152B54] mb-6">
                End-to-End Digital Services to Design, Build, & Support Business
              </h2>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                We offer custom and full-cycle web design services that include
                intuitive interface design, feature-rich development, and
                ongoing support. Whether you want to start a new venture or
                scale your existing one globally, our web designing company in
                India creates a complete digital ecosystem for your business. It
                begins on web and can extend to mobile apps for seamless
                performance & lasting impact.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="lg:w-1/2 flex flex-col items-center relative">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;
                const { y, opacity, scale } = cardTransforms[index] || {};

                return (
                  <motion.div
                    key={index}
                    ref={index === 0 ? firstCardRef : null}
                    style={{
                      y: lgUp && y ? y : 0,
                      opacity: lgUp && opacity ? opacity : 1,
                      scale: lgUp && scale ? scale : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`
                      w-full lg:w-[85%] min-h-[420px] rounded-3xl p-6 md:p-12 shadow-xl mb-6
                      ${isActive && lgUp ? "bg-[#040f25] text-white scale-105 shadow-2xl" : "bg-white text-gray-700 border border-gray-200"}
                      ${lgUp && !isActive ? "pointer-events-none" : "pointer-events-auto"}
                    `}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-12 h-12 object-contain"
                      />
                      <h3 className={`text-2xl font-bold ${isActive && lgUp ? "text-white" : "text-[#152B54]"}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className={`mb-6 leading-relaxed ${isActive && lgUp ? "text-gray-200" : "text-gray-600"}`}>
                      {service.description.slice(0, 220)}...
                    </p>
                    <button
                      className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                        isActive && lgUp
                          ? "bg-white text-[#152B54] hover:bg-gray-100"
                          : "bg-[#152B54] text-white hover:bg-blue-900"
                      }`}
                      onClick={() => handleClick(service)}
                    >
                      Learn More →
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
