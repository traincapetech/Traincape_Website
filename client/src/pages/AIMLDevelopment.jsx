import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import banner from "../assets/saas.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdAutoAwesome,
  MdDataUsage,
  MdInsights,
  MdTrendingUp,
} from "react-icons/md";
import { IoSparkles } from "react-icons/io5";

const AIMLDevelopment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PRIMARY_COLOR = "#00AEEF";
  const SECONDARY_COLOR = "#FFA500";

  const services = [
    {
      icon: <FaBrain size={40} color="#FF6F61" />,
      title: "Machine Learning Solutions",
      desc: "Develop and deploy ML models for predictive analytics, recommendation systems, and automated decision-making.",
    },
    {
      icon: <FaRobot size={40} color="#9C27B0" />,
      title: "Deep Learning & Neural Networks",
      desc: "Build advanced neural networks for image recognition, natural language processing, and computer vision.",
    },
    {
      icon: <MdAutoAwesome size={40} color="#FFA500" />,
      title: "Natural Language Processing",
      desc: "Create intelligent chatbots, sentiment analysis tools, and language translation systems.",
    },
    {
      icon: <MdDataUsage size={40} color="#00AEEF" />,
      title: "Computer Vision",
      desc: "Develop image and video analysis systems for object detection, facial recognition, and medical imaging.",
    },
    {
      icon: <FaChartLine size={40} color="#4CAF50" />,
      title: "Predictive Analytics",
      desc: "Leverage historical data to forecast trends, optimize operations, and make data-driven decisions.",
    },
    {
      icon: <IoSparkles size={40} color="#FF5722" />,
      title: "AI-Powered Automation",
      desc: "Streamline business processes with intelligent automation and robotic process automation (RPA).",
    },
  ];

  const technologies = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Deep Learning" },
    { name: "Scikit-learn", category: "ML Framework" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "NLTK", category: "NLP" },
    { name: "Keras", category: "Neural Networks" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Hugging Face", category: "Transformers" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Collection & Preparation",
      desc: "Gather, clean, and preprocess data to ensure quality inputs for model training.",
    },
    {
      step: "02",
      title: "Model Selection & Design",
      desc: "Choose the right algorithms and design neural network architectures tailored to your needs.",
    },
    {
      step: "03",
      title: "Training & Optimization",
      desc: "Train models with hyperparameter tuning and validation to achieve optimal performance.",
    },
    {
      step: "04",
      title: "Testing & Validation",
      desc: "Rigorous testing on unseen data to ensure model accuracy and reliability.",
    },
    {
      step: "05",
      title: "Deployment & Integration",
      desc: "Deploy models to production environments with scalable infrastructure and APIs.",
    },
    {
      step: "06",
      title: "Monitoring & Improvement",
      desc: "Continuous monitoring, retraining, and fine-tuning to maintain model performance.",
    },
  ];

  const useCases = [
    {
      icon: <MdTrendingUp />,
      title: "Financial Services",
      desc: "Fraud detection, algorithmic trading, credit scoring, and risk management.",
    },
    {
      icon: <MdInsights />,
      title: "Healthcare",
      desc: "Medical imaging analysis, drug discovery, patient diagnosis, and personalized treatment.",
    },
    {
      icon: <FaShieldAlt />,
      title: "E-Commerce",
      desc: "Product recommendations, price optimization, inventory management, and customer insights.",
    },
    {
      icon: <FaDatabase />,
      title: "Manufacturing",
      desc: "Predictive maintenance, quality control, supply chain optimization, and defect detection.",
    },
  ];

  return (
    <div className="w-full font-sans text-[#0A0A0A] overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="relative text-white py-32 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-[70vh]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f]/95 via-[#0a223a]/85 to-black/95"></div>

        <motion.div
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-radial from-[#FF6F61]/5 to-transparent blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />

        <div className="relative z-10 max-w-2xl mb-10 md:mb-0">
          <motion.p
            className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#FFA500]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI & ML Development
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Business with{" "}
            <span className="text-[#FFA500]">Intelligent AI Solutions</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-gray-200 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leverage cutting-edge artificial intelligence and machine learning
            technologies to drive innovation, optimize operations, and unlock
            new possibilities for your business.
          </motion.p>

          <motion.button
            className="mt-8 bg-[#FFA500] hover:bg-[#ff7b00] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/contact-us")}
          >
            Get Started with AI 🚀
          </motion.button>
        </div>

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

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#FFA500] mb-3">
            Our Expertise
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#0A0A0A]">
            Comprehensive AI & ML Solutions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            From machine learning models to deep neural networks, we deliver
            intelligent solutions that solve complex business challenges and
            drive growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-[#F4F9FF] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-left border border-gray-100"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="bg-[#F4F9FF] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#00AEEF] mb-3">
            Technologies We Use
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#0A0A0A]">
            Cutting-Edge AI Frameworks & Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <p className="text-lg font-semibold text-gray-800">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#FFA500] mb-3">
            Our Methodology
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            End-to-End AI Development Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#00AEEF] transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-[#00AEEF] text-xl font-bold mb-3">
                  {item.step}
                </h3>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#00AEEF] mb-3">
            Industries We Serve
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#0A0A0A]">
            AI Solutions Across Industries
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-[#F4F9FF] to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border-l-4 border-l-[#00AEEF]"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl text-[#FFA500] mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-gradient-to-br from-[#001F3F] via-[#002952] to-[#001F3F] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#FFA500] mb-3 text-center">
            Why Choose Our AI Solutions
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
            Unlock the Power of Artificial Intelligence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaBrain className="text-[#FF6F61]" /> Intelligent Automation
              </h3>
              <p className="text-gray-200">
                Reduce manual workload and human errors with intelligent
                automation that handles repetitive tasks efficiently.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MdTrendingUp className="text-[#FFA500]" /> Data-Driven
                Insights
              </h3>
              <p className="text-gray-200">
                Extract valuable insights from large datasets to make informed
                decisions and predict future trends.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaShieldAlt className="text-[#00AEEF]" /> Scalable
                Infrastructure
              </h3>
              <p className="text-gray-200">
                Deploy AI solutions on cloud-based infrastructure that scales
                with your business needs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <IoSparkles className="text-[#FF5722]" /> Custom Solutions
              </h3>
              <p className="text-gray-200">
                Tailored AI applications designed specifically for your business
                challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#0a223a] via-[#0A0A0A] to-[#0a223a] text-white py-24 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Transform Your Business with AI?
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let's discuss how artificial intelligence and machine learning can
          revolutionize your operations, enhance customer experiences, and drive
          unprecedented growth.
        </motion.p>
        <motion.button
          className="bg-[#FFA500] hover:bg-[#ff7b00] text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/contact-us")}
        >
          Schedule Your AI Consultation 🚀
        </motion.button>
      </section>
    </div>
  );
};

export default AIMLDevelopment;

