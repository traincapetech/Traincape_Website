"use client"

import { useEffect, useState } from "react"
import { FaArrowRight, FaSquareWhatsapp } from "react-icons/fa6"
import { Link, useNavigate, NavLink } from "react-router-dom"
import { BsCheck2Circle } from "react-icons/bs"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import SEOHead from "../components/SEOHead"

// Banner images
import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-2.jpg"
import img3 from "../assets/img-3.jpg"
import img4 from "../assets/img4.jpg"

// Service cards
import card1 from "../assets/card1.jpeg"
import card2 from "../assets/card2.jpeg"
import card3 from "../assets/card3.jpeg"
import card4 from "../assets/card4.jpeg"
import card5 from "../assets/card5.jpeg"
import card6 from "../assets/card6.jpeg"

// Logos
import comptia from "../assets/comptia-2.webp"
import comptiaA from "../assets/CompTIA_A+.png"
import comptiaCySA from "../assets/CompTIA_CySA+.png"
import comptiaNetwork from "../assets/CompTIA_Network+.png"
import comptiaSecurity from "../assets/CompTIA_Security+.png"
import pecb from "../assets/PECB1.png"
import pecbAI from "../assets/PECB_AIP.jpeg"
import pecbAIMR from "../assets/AI_Risk_Management.jpeg"
import pecbNetwork from "../assets/PECB_IEC_27033_Network_Security.jpeg"
import pecbComputerForensics from "../assets/PECB_Computer_Forensics.jpeg"
import certiport from "../assets/certiportlogo.png"
import pearson from "../assets/pearsonlogo.png"
import etraind from "../assets/etrainlogo.png"

// Partner logos
import Logo1 from "../assets/SBS.png"
import Logo2 from "../assets/ThreatMatrix.png"
import Logo3 from "../assets/Digitalearn.webp"
import Logo4 from "../assets/Gruslabs.svg"
import Logo5 from "../assets/MSA.png"
import Logo6 from "../assets/spectre.webp"

// Other images

import team from "../assets/team.jpeg"
import mircro from "../assets/microsoft-kartikey.png"
import PECB from "../assets/PECB1.png"
import AWS from "../assets/aws-kartikey.png"
import Cisco from "../assets/Cisco/CiscoIcon.png"

// Video URL
const trainingVideo = "https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4";



const serviceCards = [
  { 
    title: "Cloud Services", 
    description: "Cloud services provide computing resources...", 
    image: card1,
    route: "/services/cloud-services"
  },
  { 
    title: "UI Design", 
    description: "UI design involves designing and developing...", 
    image: card2,
    route: "/our-services"
  },
  { 
    title: "Digital Marketing", 
    description: "Digital marketing uses online strategies...", 
    image: card3,
    route: "/services/digital-marketing"
  },
  { 
    title: "Web Development", 
    description: "Web development involves creating and maintaining...", 
    image: card4,
    route: "/services/web-development"
  },
  { 
    title: "Software Services", 
    description: "Software services include custom software development...", 
    image: card5,
    route: "/services/software-services"
  },
  {
    title: "Software Development",
    description: "Software development is the process of designing, creating...",
    image: card6,
    route: "/services/software-services"
  },
]

const images = [img1, img2, img3, img4]

const Home = () => {
  const courseData = [
    {
      image: comptia,
      title: "COMPTIA" ,
      description: "Industry-standard IT certifications across multiple levels and specializations",
      price: "$300",
      url: "/comptia",
    },
    {
      image: comptiaA,
      title: "COMPTIA A+" ,
      description: "Industry-standard IT certifications across multiple levels and specializations",
      price: "$300",
      url: "/comptia/specialist/a-plus",
    },
    {
      image: comptiaNetwork,
      title: "CompTIA Network+" ,
      description: "Industry-standard IT certifications across multiple levels and specializations",
      price: "$300",
      url: "/comptia/specialist/network-plus",
    },
    {
      image: comptiaSecurity,
      title: "COMPTIA Security+" ,
      description: "Industry-standard IT certifications across multiple levels and specializations",
      price: "$300",
      url: "/comptia/specialist/security-plus",
    },
    {
      image: comptiaCySA,
      title: "CompTIA CySA+" ,
      description: "Industry-standard IT certifications across multiple levels and specializations",
      price: "$300",
      url:"/comptia/professional/cysa-plus",
    },
    { 
      image: PECB, 
      title: "PECB", 
      description: "Excel in compliance and IT security with internationally recognized certifications", 
      price: "$400", 
      url: "/PECB" 
    },
    { 
      image: pecbAI, 
      title: "Artificial Intelligence Professional", 
      description: "Master AI technologies, machine learning, and AI implementation strategies for business applications", 
      price: "$400", 
      url: "/pecb/artificial-intelligence/ai-professional" 
    },
    { 
      image: pecbAIMR, 
      title: "AI Risk Management Professional", 
      description: "Learn to identify, assess, and manage risks associated with artificial intelligence systems", 
      price: "$400", 
      url: "/pecb/artificial-intelligence/ai-risk-management" 
    },
    { 
      image: pecbNetwork, 
      title: "IEC_27033_Network_Security", 
      description: "Master network security principles and best practices for protecting digital assets", 
      price: "$400", 
      url: "/pecb/cybersecurity/network-security" 
    },
    { 
      image: pecbComputerForensics, 
      title: "Computer_Forensics_Professional", 
      description: "Learn digital forensics techniques for investigating cybercrimes and security incidents", 
      price: "$400", 
      url: "/pecb/cybersecurity/computer-forensics" 
    },


  ]

  // State declarations
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Hooks
  const navigate = useNavigate()
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Constants
  const bgColors = ["bg-[#E0E7FF]", "bg-[#E0F2FE]", "bg-[#FEF3C7]", "bg-[#FDE68A]", "bg-[#FCE7F3]", "bg-[#DCFCE7]"]

  // Removed unused image rotation effect

  // Removed unused bannerText object

  const partners = [
    { logo: Logo1, name: "SBS", url: "https://sbs-mea.com/" },
    { logo: Logo2, name: "ThreatMatrix", url: "https://threatmatrix.co.uk/" },
    { logo: Logo3, name: "Digitalearn", url: "https://digitalearnsolution.com/" },
    { logo: Logo4, name: "Gruslabs", url: "https://www.gruslabs.com/" },
    { logo: Logo5, name: "MSA Software", url: "https://msasoftware.in/" },
    { logo: Logo6, name: "Spectre", url: "https://spectreme.ai/" },
  ]

  return (
    <div className="bg-white">
      <SEOHead
        title="Traincape Technology | IT Training & Certifications"
        description="Traincape Technology offers training for the best IT certifications to boost your career with CompTIA, PMI, Cisco, Salesforce, & many more certifications."
        canonical="https://www.traincapetech.in/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Traincape Technology - IT Training & Certification",
          "description": "Expert-led online courses for AWS, CompTIA, Microsoft, Cisco and other IT certifications",
          "url": "https://www.traincapetech.in/",
          "mainEntity": {
            "@type": "Organization",
            "name": "Traincape Technology",
            "url": "https://www.traincapetech.in",
            "logo": "https://www.traincapetech.in/android-chrome-512x512.png",
            "description": "Premier IT Training and Certification provider"
          }
        }}
      />

      {/* Video Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={trainingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 text-center z-10">
          <div className="max-w-6xl mx-auto w-full">
             {/* h1 for SEO  */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-8 font-bold text-white leading-tight drop-shadow-lg">
              Elevate Your Career with Expert IT Training
            </h1>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              <Typewriter
                options={{
                  strings: [
                    "Want a Suggestion?",
                    "Cloud Computing",
                    "Cyber Security",
                    "Project Management",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  pauseFor: 2000,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor"
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Want a Suggestion?</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('<span class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-delayed">Cloud Computing</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('<span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">Cyber Security</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('<span class="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient-delayed">Project Management</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact-us"
                className="inline-block px-6 py-3 bg-white text-[#152B54] font-semibold rounded-lg shadow hover:bg-opacity-90 transition"
                aria-label="Get a suggestion"
              >
                Want a Suggestion?
              </Link>
            </div>
            <div className="mt-6">
              <div className="flex justify-center space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Section */}
      <motion.div
        className="py-20 bg-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-center font-extrabold text-4xl md:text-5xl text-[#1F3C88] mb-12 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Trusted Vendors & Providers
        </motion.h2>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-stretch justify-center text-center border-y border-gray-200 bg-white rounded-3xl shadow-xl p-0 md:p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { logo: comptia, name: "CompTIA", url: "https://www.comptia.org/" },
              { logo: pecb, name: "PECB", url: "https://pecb.com/" },
              // { logo: certiport, name: "Certiport", url: "https://certiport.pearsonvue.com/" },
              // { logo: pearson, name: "Pearson", url: "https://www.pearson.com/" },
              // { logo: etraind, name: "etrainIndia", url: "https://www.etrainindia.com/" },
            ].map((vendor, index, arr) => (
              <motion.div
                key={index}
                className="flex-1 px-4 py-8 relative bg-white flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {vendor.url ? (
                  <a
                    href={vendor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    title={`Visit ${vendor.name} official website`}
                  >
                    <img
                      src={vendor.logo || "/placeholder.svg"}
                      alt={vendor.name}
                      className="object-contain max-h-16 max-w-[80%] mx-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "https://via.placeholder.com/150x50?text=Logo"
                      }}
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{vendor.name}</h3>
                  </a>
                ) : (
                  <>
                    <img
                      src={vendor.logo || "/placeholder.svg"}
                      alt={vendor.name}
                      className="object-contain max-h-16 max-w-[80%] mx-auto mb-4"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "https://via.placeholder.com/150x50?text=Logo"
                      }}
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{vendor.name}</h3>
                  </>
                )}
                {index < arr.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-gray-300"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Job-Ready Courses Carousel Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center font-extrabold text-4xl md:text-5xl text-[#1F3C88] mb-10 tracking-tight">
          Our Popular Courses
        </h2>
        <div className="relative overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {courseData
                .concat(courseData)
                .concat(courseData)
                .concat(courseData)
                .map((course, idx) => (
                  <div key={idx} className={`course-card ${bgColors[idx % bgColors.length]}`}>
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-28 w-28 object-contain rounded-xl mb-4 bg-white"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{course.title}</h3>
                    <p className="text-gray-700 text-center mb-4 text-base">{course.description}</p>
                    <Link
                      to={course.url}
                      className="mt-auto inline-block bg-[#1F3C88] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#15306b] transition"
                    >
                      Course Details
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          
          .marquee-content {
            display: flex;
            gap: 2rem;
            animation: marquee 40s linear infinite;
            width: max-content;
          }
          
          .course-card {
            min-width: 280px;
            max-width: 340px;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
          }
          
          @media (min-width: 768px) {
            .course-card {
              min-width: 340px;
            }
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* About Us Section */}
      <section className="py-16 mt-20 bg-gradient-to-b from-[#E0F2FE] to-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-medium mb-3">
              ABOUT US
            </span>
            <h2 className="text-3xl font-bold text-[#1E293B] sm:text-4xl mb-4">
            Empowering Your Business with Expert IT Certificate Programs
            </h2>
            <div className="h-1 w-20 bg-[#152B54] mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center pl-20">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#152B54] rounded-xl opacity-20 transform rotate-3 blur-sm"></div>
              <img
                src={team || "/placeholder.svg"}  
                // alt for SEO 
                alt="Team of Traincape Technology providing IT Training and Certifications"
                className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Our Mission</h3>
              <p className="text-[#334155] mb-6 leading-relaxed">
                We empower businesses with cutting-edge technology solutions and comprehensive training programs.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "End-to-End IT Technical Management",
                  "Strategic Technology Partnership",
                  "Responsive & Supportive Team",
                  "Tailored Digital Growth Solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2" />
                    <p className="text-[#334155]">{item}</p>
                  </div>
                ))}
              </div>
              <NavLink to="/about-us">
                <button className="bg-[#152B54] text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center group">
                  <span>Learn More About Us</span>
                  <FaArrowRight className="ml-2 group-hover:ml-4 transition-all" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Professional Styling */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-semibold mb-3 tracking-wide">
              OUR SERVICES
            </span>
            <h2 className="text-3xl font-extrabold text-[#152B54] sm:text-4xl mb-4 tracking-tight">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-[#1E2A47] max-w-3xl mx-auto text-lg leading-relaxed hover:text-blue-700 transition-colors duration-300 cursor-default">
              We provide top-notch IT services to help businesses grow and thrive in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="bg-[#E6F0FF] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#152B54] mb-3">{service.title}</h3>
                  <p className="text-[#2C3A67] mb-6 line-clamp-3 hover:text-blue-600 transition-colors duration-300 cursor-default">
                    {service.description}
                  </p>
                  <button
                    onClick={() => navigate(service.route)}
                    className="text-[#152B54] font-semibold hover:text-blue-700 flex items-center transition-colors duration-300 group cursor-pointer"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 group-hover:ml-3 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/our-services")}
              className="bg-[#152B54] text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Video Call-to-Action Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0c1d3d] to-[#152B54] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#152B54] text-sm font-medium mb-4">
                IT SOLUTIONS 2025
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["TRUST OUR BEST IT SOLUTIONS FOR YOUR BUSINESS"],
                  }}
                />
              </h2>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Transform your business with our comprehensive IT solutions and expert guidance.
              </p>
              <div 
                className="bg-white/10 rounded-xl p-4 backdrop-blur-sm flex items-center mb-8 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                onClick={() => {
                  // Trigger the WhatsApp popup by simulating a click on the floating WhatsApp icon
                  const whatsappIcon = document.querySelector('.whatsapp-icon');
                  if (whatsappIcon) {
                    whatsappIcon.click();
                  }
                }}
              >
                <div className="mr-3">
                  <FaSquareWhatsapp className="text-green-400 text-4xl" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">24 HOURS SERVICE AVAILABLE</p>
                  <h4 className="text-white font-bold">
                    Chat With Us: Select Your Region
                  </h4>
                </div>
              </div>
              <button
                onClick={() => navigate("/contact-us")}
                className="inline-block px-8 py-4 bg-white text-[#152B54] font-bold rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Contact Us Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {!videoLoaded ? (
                  <div
                    className="w-full aspect-video bg-gray-800 flex items-center justify-center cursor-pointer"
                    onClick={() => setVideoLoaded(true)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://img.youtube.com/vi/cZjkxmzo1Xg/maxresdefault.jpg)`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    title="Traincape Technology Introduction Video"
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/cZjkxmzo1Xg?autoplay=1&controls=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-100 via-sky-200 to-blue-300 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-3 tracking-wide">
              OUR NETWORK
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4 tracking-tight">
              Our Trusted Partners
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Empowering partnerships through teamwork and shared vision to drive innovation and lasting success.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
            {partners.map((partner, index) => {
              const bgColors = [
                "bg-gray-800",
                "bg-blue-700",
                "bg-green-700",
                "bg-yellow-600",
                "bg-red-700",
                "bg-teal-700",
              ]
              const bgColor = bgColors[index % bgColors.length]
              return (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bgColor} rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-400 transform hover:scale-105 flex flex-col items-center justify-center h-36 cursor-pointer`}
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name || "Partner Logo"}
                    className="max-h-16 max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300 mb-3"
                  />
                  <p className="text-white font-semibold text-sm text-center truncate max-w-full">
                    {partner.name || partner.url.replace(/(https?:\/\/)?(www\.)?/i, "").split("/")[0]}
                  </p>
                </a>
              )
            })}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigate("/contact-us")}
              className="partner-btn bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors duration-500 flex items-center shadow-md"
            >
              <span>Become a Partner</span>
              <FaArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => navigate("/partner-page")}
              className="partner-btn bg-gray-100 text-teal-700 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold hover:bg-teal-100 hover:text-teal-800 transition-colors duration-500"
            >
              View All Partners
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#152B54] text-sm font-semibold uppercase tracking-wide mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Why Students Choose Traincape Technology
            </h2>
            <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto mb-12">
              Join thousands of high-achieving students who have transformed their careers through our expert-led
              training programs and real-world opportunities.
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                count: 100000,
                label: "Sales",
                bg: "bg-blue-100",
                text: "text-blue-700",
              },
              {
                count: 500,
                label: "Certification Courses",
                bg: "bg-green-100",
                text: "text-green-700",
              },
              {
                count: 8000,
                label: "Users",
                bg: "bg-purple-100",
                text: "text-purple-700",
              },
              {
                count: 300000,
                label: "Hours",
                bg: "bg-yellow-100",
                text: "text-yellow-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl shadow-lg transition duration-300 ease-out transform hover:scale-105 hover:shadow-2xl cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } ${item.bg}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className={`text-4xl font-bold block mb-2 ${item.text}`}>
                  {inView ? <CountUp start={0} end={item.count} duration={2} separator="," /> : "0"}+
                </span>
                <p className={`text-base font-semibold ${item.text}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0a2239] to-[#183b70] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Ready to Transform Your Technology Experience?
          </h2>
          <p className="text-blue-300 mb-10 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Contact our team of experts today to discover how we can help your business grow with innovative technology
            solutions.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-block px-12 py-4 bg-[#1e90ff] hover:bg-[#0f67d1] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            aria-label="Get started today"
          >
            Get Started Today
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home