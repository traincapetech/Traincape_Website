import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import AIImage from "../assets/aii.jpeg"; // <-- New import

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_pjwgjas";
    const templateId = "template_eueffas";
    const publicId = "GmJ24jEVf6swWXgb0";

    const { name, email, subject, message, phoneNumber, location } = payoload;
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: "Parichay singh Rana",
      message: `Name - ${name}\nEmail - ${email}\nCountry Name - ${location}\nWhatsapp-Number - ${phoneNumber}\nService Required - ${subject}\nMessage - ${message}`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (res) => alert("Email sent successfully!", res),
      (err) => console.log(err)
    );

    setPayoload({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      location: "",
    });
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
                      <h4 className="md:text-3xl text-lg font-bold text-cyan-200">Office Address</h4>
                      <p className="text-sm md:text-lg text-cyan-100">India, USA, Nigeria</p>
                    </div>
                    <div>
                      <h4 className="md:text-2xl text-lg font-bold text-cyan-200">Phone & Email</h4>
                      <p className="text-sm md:text-base flex items-center gap-2 text-cyan-100">
                        <FaWhatsapp />
                        <Link to="https://wa.me/+916280281505" target="_blank">+91 6280281505</Link>
                      </p>
                      <p className="text-sm md:text-base flex items-center gap-2 text-cyan-100">
                        <IoMailOutline />
                        <Link to="mailto:sales@traincapetech.info" target="_blank">
                          sales@traincapetech.info
                        </Link>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-2xl font-bold text-cyan-200">Our Address</h4>
                      <p className="text-sm md:text-base text-cyan-100">
                        Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali, <br />
                        Colony, Dashrath Puri, New Delhi, Delhi, 110045
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-2xl font-bold text-cyan-200">Timings</h4>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Form</h2>

              <motion.form
                className="space-y-4 md:space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "Your Name" },
                  { label: "Email", name: "email", type: "email", placeholder: "Your Email" },
                  { label: "Country Name", name: "location", type: "text", placeholder: "Your Country" },
                  { label: "Whatsapp Number", name: "phoneNumber", type: "number", placeholder: "Your Whatsapp Number" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <label htmlFor={field.name} className="block text-white/80">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={payoload[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </motion.div>
                ))}

                {/* Select Service */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <label htmlFor="subject" className="block text-white/80">Select Service</label>
                  <select
                    name="subject"
                    value={payoload.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="CompTIA">CompTIA</option>
                    <option value="Certiport">Certiport</option>
                    <option value="PECB">PECB</option>
                    <option value="Partner">Partner</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <label htmlFor="message" className="block text-white/80">Your Message</label>
                  <textarea
                    name="message"
                    value={payoload.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition"
                >
                  Send Message
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