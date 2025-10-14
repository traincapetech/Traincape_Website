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
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";

import CloudImg from "../assets/cloud.jpg";
import UiUx from "../assets/uiux.jpg";
import DigitalImg from "../assets/digital.jpg";
import Saas from "../assets/saas.jpg";
import SoftwareImg from "../assets/software.jpeg";
import webImg from "../assets/web.png";


// import cloudService from "./CloudServices"; // unused - service route loads CloudServices lazily


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
  {
  title: "Software Services and Development",
  slug: "software-services", // <-- this must match your ServiceDetail route
  description:
    "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
  image: Software,
  banner: Saas,
}

 
];

/* ---------------------- COMPONENT ---------------------- */
const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const firstCardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // -------------------- INDIVIDUAL HOOKS --------------------
  // Call useTransform for each card separately (fixed order)
  const y0 = useTransform(
    scrollYProgress,
    [0 * 0.125, 0 * 0.125 + 0.175],
    [200, -150]
  );
  const opacity0 = useTransform(
    scrollYProgress,
    [0, 0.02, 0.08, 0.175],
    [1, 1, 1, 0.1]
  );
  const scale0 = useTransform(
    scrollYProgress,
    [0, 0.03, 0.175],
    [0.92, 1, 0.9]
  );

  const y1 = useTransform(scrollYProgress, [0.125, 0.125 + 0.175], [200, -150]);
  const opacity1 = useTransform(
    scrollYProgress,
    [0.125, 0.145, 0.205, 0.3],
    [0, 1, 1, 0.1]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0.125, 0.155, 0.3],
    [0.92, 1, 0.9]
  );

  const y2 = useTransform(scrollYProgress, [0.25, 0.25 + 0.175], [200, -150]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.27, 0.33, 0.425],
    [0, 1, 1, 0.1]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0.25, 0.28, 0.425],
    [0.92, 1, 0.9]
  );

  const y3 = useTransform(scrollYProgress, [0.375, 0.375 + 0.175], [200, -150]);
  const opacity3 = useTransform(
    scrollYProgress,
    [0.375, 0.395, 0.455, 0.55],
    [0, 1, 1, 0.1]
  );
  const scale3 = useTransform(
    scrollYProgress,
    [0.375, 0.405, 0.55],
    [0.92, 1, 0.9]
  );

  const y4 = useTransform(scrollYProgress, [0.5, 0.5 + 0.175], [200, -150]);
  const opacity4 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.58, 0.675],
    [0, 1, 1, 0.1]
  );
  const scale4 = useTransform(
    scrollYProgress,
    [0.5, 0.53, 0.675],
    [0.92, 1, 0.9]
  );

  const y5 = useTransform(scrollYProgress, [0.625, 0.625 + 0.175], [200, -150]);
  const opacity5 = useTransform(
    scrollYProgress,
    [0.625, 0.645, 0.705, 0.8],
    [0, 1, 1, 0.1]
  );
  const scale5 = useTransform(
    scrollYProgress,
    [0.625, 0.655, 0.8],
    [0.92, 1, 0.9]
  );

  const cardTransforms = [
    { y: y0, opacity: opacity0, scale: scale0 },
    { y: y1, opacity: opacity1, scale: scale1 },
    { y: y2, opacity: opacity2, scale: scale2 },
    { y: y3, opacity: opacity3, scale: scale3 },
    { y: y4, opacity: opacity4, scale: scale4 },
    { y: y5, opacity: opacity5, scale: scale5 },
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
  navigate(`/service-detail/${slug}`); // ✅ must be ${slug}
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
          ></video>
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
              {/* <Button
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
                Learn More
              </Button> */}
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div ref={containerRef} className="min-h-[800vh] py-16 bg-gray-50">
          <div className="sticky top-0 h-screen flex flex-col lg:flex-row justify-between px-6 md:px-20">
            {/* LEFT */}
            <div className="lg:w-1/2 flex flex-col justify-center">
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

            {/* RIGHT */}
            <div className="lg:w-1/2 relative flex items-center justify-center mt-20 lg:mt-0">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;
                const { y, opacity, scale } = cardTransforms[index];

                return (
                  <motion.div
                    key={index}
                    ref={index === 0 ? firstCardRef : null}
                    style={{ y, opacity, scale }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`absolute w-[85%] min-h-[420px] rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-500 ${
                      isActive
                        ? "bg-[#040f25] text-white scale-105 shadow-2xl"
                        : "bg-white text-gray-700 border border-gray-200"
                    } ${
                      isActive ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-12 h-12 object-contain"
                      />
                      <h3
                        className={`text-2xl font-bold ${
                          isActive ? "text-white" : "text-[#152B54]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className={`mb-8 leading-relaxed ${
                        isActive ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {service.description.slice(0, 220)}...
                    </p>
                    <button
                      className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                        isActive
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