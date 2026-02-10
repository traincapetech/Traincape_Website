import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import AIImage from "../assets/aii.jpeg"; // <-- New import

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { submitLead } from "../utils/submitLead";
const ContactUs = () => {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = String(payoload.name || "").trim();
    const email = String(payoload.email || "").trim();
    const subject = String(payoload.subject || "").trim();
    const message = String(payoload.message || "").trim();

    if (name.length < 2) return toast.error("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email.");
    if (!subject) return toast.error("Please select a service.");
    if (message.length < 10) return toast.error("Please enter a message (min 10 characters).");

    setIsSubmitting(true);
    try {
      const data = await submitLead({
        ...payoload,
        name,
        email,
        subject,
        message,
      });
      toast.success(data?.message || "Message sent!");
      setPayoload({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
        location: "",
      });
    } catch (err) {
      toast.error(err?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setPayoload({ ...payoload, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-cyan-800 via-teal-700 to-blue-800 py-12">
      <Helmet>
        <title> Contact Us || Traincape Technology </title>
        <meta
          name="description"
          content="Contact us for any questions or inquiries about our services or to book a demo."
        />
        <meta
          name="keywords"
          content="Contact Us, Traincape Technology, Contact Us, Traincape Technology, Contact Us, Traincape Technology"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://traincapetech.in/contact-us" />
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Image Section */}
          <motion.div
            className="group w-full h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full">
              <img
                src={AIImage}
                alt="Contact Us Background"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="absolute top-0 w-full lg:p-11 md:p-5 p-2 z-10">
                <div className="bg-transparent rounded-lg md:p-6 block border-4 border-transparent animate-borderGlow">
                  <div className="md:space-y-4 space-y-2">
                    <div>
                      <h4 className="md:text-3xl text-lg font-bold text-cyan-200">
                        Office Address
                      </h4>
                      <p className="text-sm md:text-lg text-cyan-100">
                        India
                      </p>
                    </div>
                    <div>
                      <h4 className="md:text-2xl text-lg font-bold text-cyan-200">
                        Phone & Email
                      </h4>
                      <p className="text-sm md:text-base flex items-center gap-2 text-cyan-100">
                        <FaWhatsapp />
                        <Link to="https://wa.me/+916280281505" target="_blank">
                          +91 6280281505
                        </Link>
                      </p>
                      <p className="text-sm md:text-base flex items-center gap-2 text-cyan-100">
                        <IoMailOutline />
                        <Link
                          to="mailto:sales@traincapetech.in"
                          target="_blank"
                        >
                          sales@traincapetech.in
                        </Link>
                      </p>
                    </div>
                    {/* <div>
                      <h4 className="text-lg md:text-2xl font-bold text-cyan-200">
                        Our Address
                      </h4>
                      <p className="text-sm md:text-base text-cyan-100">
                        Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali,{" "}
                        <br />
                        Colony, Dashrath Puri, New Delhi, Delhi, 110045
                      </p>
                    </div> */}
                    <div>
                      <h4 className="text-lg md:text-2xl font-bold text-cyan-200">
                        Timings
                      </h4>
                      <p className="text-sm md:text-base text-cyan-100">
                        11:00 AM - 07:00 PM IST <br />
                        Monday to Saturday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Form
              </h2>

              <motion.form
                className="space-y-4 md:space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                onSubmit={handleSubmit}
                autoComplete="on"
              >
                {[
                  {
                    label: "Full Name",
                    name: "name",
                    type: "text",
                    placeholder: "Your Name",
                    autoComplete: "name",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "Your Email",
                    autoComplete: "email",
                  },
                  {
                    label: "Country Name",
                    name: "location",
                    type: "text",
                    placeholder: "Your Country",
                    autoComplete: "country-name",
                  },
                  {
                    label: "Whatsapp Number",
                    name: "phoneNumber",
                    type: "tel",
                    placeholder: "Your Whatsapp Number",
                    autoComplete: "tel",
                    inputMode: "tel",
                  },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <label htmlFor={field.name} className="block text-white/80">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={payoload[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </motion.div>
                ))}

                {/* Select Service */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label htmlFor="subject" className="block text-white/80">
                    Select Service
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={payoload.subject}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="" disabled className="bg-gray-800 text-white">
                      Select Service
                    </option>
                    <option value="Cloud Computing" className="bg-gray-800 text-white">Cloud Computing</option>
                    <option value="Cyber Security" className="bg-gray-800 text-white">Cyber Security</option>
                    <option value="Project Management" className="bg-gray-800 text-white">
                      Project Management
                    </option>
                    <option value="Partner" className="bg-gray-800 text-white">Partner</option>
                    <option value="Website Development" className="bg-gray-800 text-white">Website Development</option>
                    <option value="Mobile App Development" className="bg-gray-800 text-white">Mobile App Development</option>
                    <option value="CRM" className="bg-gray-800 text-white">CRM</option>
                    <option value="Others(Please Specify)" className="bg-gray-800 text-white">Others(Please Specify)</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label htmlFor="message" className="block text-white/80">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={payoload.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
