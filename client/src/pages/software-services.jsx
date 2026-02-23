import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  FaTabletAlt,
  FaBrain,
  FaCode,
  FaShieldAlt,
  FaSearch,
  FaHospital,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaChartLine,
  FaQuoteLeft,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import {
  MdOutlineSecurity,
  MdDeveloperMode,
  MdCloudQueue,
  MdSpeed,
  MdHealthAndSafety,
} from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { HiOutlineGlobeAlt } from "react-icons/hi";

/* ═══════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════ */
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return { count, ref };
};

/* ═══════════════════════════════════════════
   3D TILT CARD COMPONENT
   ═══════════════════════════════════════════ */
const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   STAT CARD — Extracts useCounter into its own component
   ═══════════════════════════════════════════ */
const StatCard = ({ stat }) => {
  const { count: c, ref } = useCounter(stat.value);
  return (
    <div
      ref={ref}
      className="bg-white/[0.04] rounded-2xl p-4 border border-white/5 hover:border-cyan-500/30 transition-colors"
    >
      <p className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
        {stat.value === 99.9 ? c.toFixed(1) : c}
        {stat.suffix}
      </p>
      <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
    </div>
  );
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
const SoftwareDevelopment = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => window.scrollTo(0, 0), []);

  // ── Testimonial carousel state ──
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CTO, MedConnect",
      text: "Traincape delivered a HIPAA-compliant telemedicine platform that handles 10k+ daily consultations flawlessly. Their engineering quality is world-class.",
    },
    {
      name: "Priya Patel",
      role: "Founder, RetailEdge",
      text: "Our custom CRM increased sales team productivity by 40%. The real-time analytics dashboard they built is simply outstanding.",
    },
    {
      name: "Marcus Wei",
      role: "VP Engineering, CloudFirst",
      text: "From architecture to deployment, their team delivered a SaaS platform that scaled from 100 to 50,000 users without any hiccups.",
    },
    {
      name: "Ananya Gupta",
      role: "Marketing Head, EduTech",
      text: "The SEO strategy they implemented took us from page 5 to page 1 on Google within 3 months. Their technical SEO is unmatched.",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, [testimonials.length]);

  // ── Core services data ──
  const services = [
    {
      icon: <AiOutlineDeploymentUnit size={28} />,
      title: "SaaS-Level CRM Development",
      desc: "Enterprise CRM platforms with real-time analytics, automated workflows, lead scoring, and multi-tenant architecture built for scale.",
      gradient: "from-cyan-500 to-blue-600",
      size: "lg",
    },
    {
      icon: <MdDeveloperMode size={28} />,
      title: "Custom Website Development",
      desc: "High-performance React & Next.js websites with blazing-fast load times, SSR/SSG, and pixel-perfect responsive design.",
      gradient: "from-violet-500 to-purple-600",
      size: "md",
    },
    {
      icon: <MdHealthAndSafety size={28} />,
      title: "Telemedicine & Healthcare Apps",
      desc: "HIPAA-compliant mobile platforms with video consultations, e-prescriptions, patient portals, and EHR integration.",
      gradient: "from-emerald-500 to-teal-600",
      size: "md",
    },
    {
      icon: <FaSearch size={28} />,
      title: "Full-Proof SEO Implementation",
      desc: "Technical SEO, schema markup, Core Web Vitals optimization, and content strategies that guarantee page-1 rankings.",
      gradient: "from-amber-500 to-orange-600",
      size: "lg",
    },
    {
      icon: <MdCloudQueue size={28} />,
      title: "Cloud & DevOps Infrastructure",
      desc: "AWS, Azure, GCP — CI/CD pipelines, Kubernetes orchestration, and infrastructure-as-code for zero-downtime deployments.",
      gradient: "from-sky-500 to-indigo-600",
      size: "sm",
    },
    {
      icon: <FaBrain size={28} />,
      title: "AI/ML Integration",
      desc: "Intelligent chatbots, recommendation engines, predictive analytics, and NLP solutions embedded into your products.",
      gradient: "from-fuchsia-500 to-pink-600",
      size: "sm",
    },
  ];

  // ── Stats data ──
  const stats = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Retention" },
    { value: 15, suffix: "+", label: "Countries Served" },
    { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  ];

  // ── Industries ──
  const industries = [
    {
      icon: <FaHospital size={32} />,
      name: "Healthcare & Telemedicine",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FaChartLine size={32} />,
      name: "Finance & Banking",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FaShoppingCart size={32} />,
      name: "E-Commerce & Retail",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FaGraduationCap size={32} />,
      name: "Education & EdTech",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <FaBuilding size={32} />,
      name: "Real Estate & PropTech",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: <HiOutlineGlobeAlt size={32} />,
      name: "SaaS & Startups",
      color: "from-fuchsia-500 to-pink-500",
    },
  ];

  // ── Process steps ──
  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "Deep-dive into your vision, market analysis, competitor research, and a bulletproof product roadmap.",
      icon: <FaSearch />,
    },
    {
      step: "02",
      title: "Architecture & Design",
      desc: "System architecture, database design, high-fidelity UI/UX prototypes, and interactive wireframes.",
      icon: <FaCode />,
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Sprint-based development with clean code, automated testing, and weekly demos for continuous feedback.",
      icon: <MdSpeed />,
    },
    {
      step: "04",
      title: "QA & Security Audit",
      desc: "Rigorous testing — unit, integration, performance, and penetration testing with OWASP compliance.",
      icon: <FaShieldAlt />,
    },
    {
      step: "05",
      title: "Launch & Scale",
      desc: "Seamless cloud deployment, monitoring setup, and auto-scaling infrastructure for growth.",
      icon: <MdCloudQueue />,
    },
    {
      step: "06",
      title: "Continuous Evolution",
      desc: "Ongoing optimization, feature additions, security patches, and 24/7 support partnership.",
      icon: <MdOutlineSecurity />,
    },
  ];

  // ── Animation variants ──
  const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full font-sans bg-[#030712] text-white overflow-x-hidden selection:bg-cyan-500/30">
      <Helmet>
        <title>
          IT Services — SaaS CRM, Telemedicine Apps, SEO & Web Development |
          Traincape Technology
        </title>
        <meta
          name="description"
          content="We build SaaS-level CRM, telemedicine mobile apps, high-performance websites, and implement full-proof SEO strategies. Enterprise software development by Traincape Technology."
        />
        <meta
          name="keywords"
          content="SaaS CRM Development, Telemedicine App, Mobile App Development, Full SEO, Custom Website, Software Services, Traincape Technology"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.traincapetech.in/services/software-services"
        />
      </Helmet>

      {/* ════════════════════════════════════════════════════════
          HERO SECTION — Animated Gradient Mesh + 3D Stats Card
          ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030712]" />
          <motion.div
            className="absolute top-[-40%] left-[-20%] w-[80%] h-[120%] rounded-full blur-[120px] opacity-30"
            style={{
              background: "radial-gradient(circle, #06b6d4, transparent)",
            }}
            animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-30%] right-[-20%] w-[70%] h-[100%] rounded-full blur-[120px] opacity-25"
            style={{
              background: "radial-gradient(circle, #8b5cf6, transparent)",
            }}
            animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[20%] right-[10%] w-[40%] h-[60%] rounded-full blur-[100px] opacity-20"
            style={{
              background: "radial-gradient(circle, #ec4899, transparent)",
            }}
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col lg:flex-row items-center gap-16 w-full">
          {/* Left: Text */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
                We Build Things That Matter
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6"
            >
              <span className="block text-white">We Craft</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Empires
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              SaaS-level CRMs. Telemedicine platforms. High-performance
              websites. Full-proof SEO. We don't just build software — we
              engineer
              <span className="text-cyan-400 font-semibold">
                {" "}
                competitive advantages
              </span>
              .
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => navigate("/contact-us")}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/25 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6,182,212,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project{" "}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                onClick={() => navigate("/our-services")}
                className="px-8 py-4 border border-white/20 rounded-xl font-semibold text-slate-300 hover:bg-white/5 hover:border-white/40 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Stats Card */}
          <motion.div
            className="flex-1 max-w-md w-full"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <TiltCard className="perspective-1000">
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Glow border */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/30 via-transparent to-violet-500/30 rounded-3xl -z-10 blur-sm" />

                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-sm">
                    ⚡
                  </span>
                  Impact Metrics
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <StatCard key={i} stat={stat} />
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[
                        "bg-cyan-500",
                        "bg-violet-500",
                        "bg-fuchsia-500",
                        "bg-emerald-500",
                      ].map((c, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full ${c} border-2 border-[#030712] flex items-center justify-center text-[10px] font-bold`}
                        >
                          {["R", "P", "M", "A"][i]}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">
                      Trusted by 200+ companies worldwide
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: heroOpacity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES — Bento Grid with Glassmorphism Cards
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3"
            >
              What We Build
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Solutions That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Dominate
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              From SaaS CRM platforms to HIPAA-compliant telemedicine apps — we
              deliver production-grade software with bulletproof SEO baked in.
            </motion.p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(220px,auto)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {services.map((s, i) => {
              const spanClass =
                s.size === "lg"
                  ? "lg:col-span-2"
                  : s.size === "md"
                    ? "lg:col-span-2"
                    : "";
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 overflow-hidden hover:border-white/20 transition-all duration-500 ${spanClass}`}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Bottom gradient line on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          INDUSTRIES WE SERVE — Scrolling Showcase
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3"
            >
              Industries We Transform
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Expertise Across{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Verticals
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-500 cursor-default"
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  {ind.icon}
                </div>
                <p className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                  {ind.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          DEVELOPMENT PROCESS — Vertical Timeline
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3"
            >
              Our Methodology
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Engineering{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-500 max-w-xl mx-auto text-lg"
            >
              A transparent, agile lifecycle from concept to scale.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-fuchsia-500 opacity-20" />

            {process.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex items-start mb-14 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={isLeft ? fadeLeft : fadeRight}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 border-4 border-[#030712] shadow-lg shadow-cyan-500/20"
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}
                  >
                    <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/15 transition-all duration-500 hover:bg-white/[0.04]">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                          {p.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 text-sm">
                          {p.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHY CHOOSE US — Feature Highlights
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-3"
            >
              Why Traincape
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Built Different,{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                By Design
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {[
              {
                icon: <FaCode size={22} />,
                title: "Clean Code Architecture",
                desc: "Microservices, SOLID principles, and test-driven development for maintainable, scalable codebases.",
                color: "cyan",
              },
              {
                icon: <MdSpeed size={22} />,
                title: "Performance Obsessed",
                desc: "Sub-second load times, optimized queries, CDN distribution, and lazy loading for peak performance.",
                color: "violet",
              },
              {
                icon: <FaShieldAlt size={22} />,
                title: "Security First",
                desc: "OWASP compliance, data encryption at rest and transit, regular penetration testing, and audit trails.",
                color: "emerald",
              },
              {
                icon: <FaSearch size={22} />,
                title: "SEO-Driven Development",
                desc: "Schema markup, SSR/SSG, Core Web Vitals optimization, and technical SEO built into every project.",
                color: "amber",
              },
              {
                icon: <FaTabletAlt size={22} />,
                title: "Mobile-First Thinking",
                desc: "Responsive design, PWA capabilities, and native mobile development for seamless cross-device experience.",
                color: "fuchsia",
              },
              {
                icon: <MdCloudQueue size={22} />,
                title: "Cloud-Native Deployment",
                desc: "Containerized microservices, Kubernetes, CI/CD pipelines, and infrastructure-as-code from day one.",
                color: "sky",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex items-start gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-${f.color}-500/10 flex items-center justify-center text-${f.color}-400 flex-shrink-0 group-hover:bg-${f.color}-500/20 transition-colors`}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TESTIMONIALS — Auto-play Carousel
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[100px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
            >
              Client Stories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black"
            >
              Voices of{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Trust
              </span>
            </motion.h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm"
              >
                <FaQuoteLeft className="text-3xl text-cyan-500/30 mx-auto mb-6" />
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div>
                  <p className="font-bold text-white text-lg">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-sm text-cyan-400">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-gradient-to-r from-cyan-400 to-violet-400" : "w-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA — Full-width Gradient with Floating Shapes
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-violet-600/10 to-fuchsia-600/10" />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-10 left-[10%] w-20 h-20 rounded-full border border-cyan-500/20"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-14 h-14 rounded-xl border border-violet-500/20"
          animate={{ y: [10, -10, 10], rotate: [0, -180, -360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-[5%] w-8 h-8 rounded-full bg-fuchsia-500/10"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Something Extraordinary?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Let's architect your next digital product — from CRM platforms and
            telemedicine apps to SEO-optimized web experiences.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-5"
          >
            <motion.button
              onClick={() => navigate("/contact-us")}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl font-bold text-lg shadow-2xl shadow-violet-500/25 overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(139,92,246,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Free Consultation{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              onClick={() => navigate("/our-services")}
              className="px-10 py-5 border border-white/20 rounded-2xl font-semibold text-slate-300 hover:bg-white/5 hover:border-white/40 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              View All Services
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
