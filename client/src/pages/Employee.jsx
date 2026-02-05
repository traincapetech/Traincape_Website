import React, { useState, useEffect } from "react";
// import employeeStyles from "../css/Employee.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Team member images
import madan from "../assets/madan.jpeg";
import rajeshImage from "../assets/rajesh.png";
import prachiyeImage from "../assets/ParichaySir.jpeg";
import shivamImage from "../assets/shivam.jpeg";
import EshitaImage from "../assets/Eshita.jpeg";
import sauravImage from "../assets/Saurav.jpeg";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { submitLead } from "../utils/submitLead";

const Employee = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    link: "",
    message: "",
    phoneNumber: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const boardMembers = [
    {
      name: "Madan Mohan Tiwari",
      title: "International Sales EXECUTIVE & Team Leader",
      image: madan,
      alt: "Madan Mohan Tiwari, International Sales Eexcutive & Team Leader at Traincape Technology",
      linkdin: "https://www.linkedin.com/in/madan-mohan-tiwari-3a8532317",
    },
    {
      name: "Rajesh",
      title: "Graphic Designer",
      image: rajeshImage,
      alt: "Rajesh, Graphic Designer at Traincape Technology",
      linkdin: "https://www.linkedin.com/in/rajesh-bhusal-32592023a",
    },
    {
      name: "Eshita Tadiyal",
      title: "Lead Generation EXECUTIVE",
      image: EshitaImage,
      alt: "Eshita Tadiyal, Lead Generation Executive at Traincape Technology",
      linkdin: "https://www.linkedin.com/in/eshita-tadiyal-51369a24b/",
    },
    {
      name: "Saurav Kumar",
      title: "Developer",
      image: sauravImage,
      alt: "Saurav Kumar, Developer at Traincape Technology",
      linkdin: "https://www.linkedin.com/in/saurav-kumar-31223b260",
    },
  ];

  const leadershipTeam = [
    {
      name: "Parichay Singh Rana",
      title: "Founder & CEO",
      image: prachiyeImage,
      alt: "Parichay Singh Rana, Founder & CEO of Traincape Technology",
      linkdin: "https://www.linkedin.com/in/parichay-singh-rana/",
    },
    {
      name: "Shivam",
      title: "Manager",
      image: shivamImage,
      alt: "Shivam, Manager at Traincape Technology",
      linkdin: "https://www.linkedin.com/in/shivam-singh-1a82b1325/",
    },
  ];

  const handleMouseEnter = (index) => setHoveredMember(index);
  const handleMouseLeave = () => setHoveredMember(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const phoneNumber = String(payload.phoneNumber || "").trim();
    const location = String(payload.location || "").trim();
    const link = String(payload.link || "").trim();
    const message = String(payload.message || "").trim();

    if (name.length < 2) return toast.error("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email.");
    if (!location) return toast.error("Please enter your country.");
    if (!phoneNumber) return toast.error("Please enter your WhatsApp number.");
    if (message.length < 10) return toast.error("Please enter a message (min 10 characters).");

    setIsSubmitting(true);
    try {
      const data = await submitLead({
        name,
        email,
        phoneNumber,
        location,
        subject: "Join Our Team",
        message: [
          message,
          "",
          link ? `Resume Link: ${link}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      });

      toast.success(data?.message || "Message sent!");
      setPayload({
        name: "",
        email: "",
        phoneNumber: "",
        link: "",
        message: "",
        location: "",
      });
    } catch (err) {
      toast.error(err?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

  };

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      {/* SEO Content for this Page  */}
            <Helmet>
              <title>
              Meet our Team at Traincape Technology
              </title>
              <meta
                name="description"
                content="Meet the team at Traincape Technology, their roles, and responsibilities. The people who drive innovation and are integral to the company's progress. "
              />
              <link
                rel="canonical"
                href="https://traincapetech.in/Employee"
              />
            </Helmet> 
            

      <div className="min-h-screen p-8">
        {/* Leadership Section */}
        <section className="text-center mb-16">
          <h1 className="lg:text-6xl text-3xl font-bold text-[#152B54] mb-4 relative mx-auto">
            <span className="absolute lg:-bottom-6 -bottom-3 left-1/2 transform -translate-x-1/2 lg:w-96 w-40 h-1 bg-[#152B54]"></span>
            Our Leadership Team
          </h1>
          <p className="lg:text-xl text-base text-gray-600 mt-8 mb-10">
            Discover the leaders who turn big ideas into bold actions, inspiring
            our team and shaping the future of our industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 xl:mx-72">
            {leadershipTeam.map((member, index) => (
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                key={index}
              >
                <a
                  href={member.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-52 h-52 object-cover rounded-full mx-auto mb-4 border-4 border-purple-200"
                  />
                </a>
                <h5 className="text-xl font-semibold text-[#80669d]">
                  {member.name}
                </h5>
                <p className="text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional sections... */}
        <section className="text-center mb-16">
          <h1 className="lg:text-6xl text-3xl font-bold text-[#152B54] mb-4 relative mx-auto">
            <span className="absolute lg:-bottom-4 -bottom-3 left-1/2 transform -translate-x-1/2 lg:w-96 w-40 h-1 bg-[#152B54]"></span>
            Our Team Members
          </h1>
          <p className="lg:text-xl text-base text-gray-600 mb-10">
            Meet the dedicated team driving our mission forward with expertise,
            innovation, and a commitment to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 xl:mx-52">
            {boardMembers.map((member, index) => (
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden p-4 text-center"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={member.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-52 h-52 object-cover rounded-full mx-auto mb-4"
                    style={{
                      transform:
                        hoveredMember === index
                          ? "translateY(-10px)"
                          : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
                <h5 className="text-xl font-semibold text-blue-900">
                  {member.name}
                </h5>
                <p className="text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          {/* Top animated gradient bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 animate-beam"></div>

          <h1 className="text-3xl font-semibold text-blue-900 mb-4">
            Want to Join Us?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're Ready to Connect With You
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name and Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={payload.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                placeholder="Your Name"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={payload.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
            </div>

            {/* Location and Phone Number Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="location"
                value={payload.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                placeholder="Country Name"
                aria-label="Country Name"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={payload.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                placeholder="WhatsApp Number"
                aria-label="WhatsApp Number"
                required
              />
            </div>

            {/* Resume Drive Link */}
            <div className="mb-6">
              <input
                type="url"
                name="link"
                value={payload.link}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                placeholder="Resume Drive Link"
                aria-label="Resume Drive Link"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <textarea
                name="message"
                value={payload.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                rows="5"
                placeholder="Your Message"
                aria-label="Your Message"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#152B54] text-white font-semibold rounded-md hover:bg-blue-900 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Bottom animated gradient bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-indigo-500 animate-beam"></div>
        </section>
      </div>
    </>
  );
};

export default Employee;