import React, { useEffect, useState } from "react";
import "../css/internshipModule.css";
import Purpose from "../assets/purpose.jpg";
import learning from "../assets/learning.jpg";
import support from "../assets/support.jpg";
import progress from "../assets/progress.jpg";
import career from "../pages/Career/Career.module.css";
import hand from '../assets/hand.jpg';
import toast from "react-hot-toast";
import axios from "axios";
import API_BASE_URL from "../config/api";

import { submitLead } from "../utils/submitLead";

export default function Internship() {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    resumeLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [interns, setInterns] = useState([]);
  const [loadingInterns, setLoadingInterns] = useState(true);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const baseUrl = API_BASE_URL || "http://localhost:3001";
        const { data } = await axios.get(`${baseUrl}/interns`);
        if (data.success) {
          setInterns(data.interns);
        }
      } catch (err) {
        console.error("Failed to fetch interns", err);
      } finally {
        setLoadingInterns(false);
      }
    };
    fetchInterns();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = String(payoload.name || "").trim();
    const email = String(payoload.email || "").trim();
    const role = String(payoload.subject || "").trim();
    const phoneNumber = String(payoload.phoneNumber || "").trim();
    const resumeLink = String(payoload.resumeLink || "").trim();
    const message = String(payoload.message || "").trim();

    if (name.length < 2) return toast.error("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email.");
    if (!phoneNumber) return toast.error("Please enter your WhatsApp number.");
    if (!role) return toast.error("Please select a role.");
    if (message.length < 10) return toast.error("Please enter a message (min 10 characters).");

    setIsSubmitting(true);
    try {
      const data = await submitLead({
        name,
        email,
        phoneNumber,
        location: "",
        subject: `Internship Application — ${role}`,
        message: [
          message,
          "",
          resumeLink ? `Resume Link: ${resumeLink}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      });

      toast.success(data?.message || "Message sent!");
      setPayoload({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
        resumeLink: "",
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



  return (
    <>

      <div className="relative w-full">
        <div className="internship-banner"></div>
        <div className="banner-text">
          <h1>Kickstart Your Career with Our Internship Program!</h1>
          <h3>Gain hands-on experience, learn from industry experts, and work on real projects that make an impact. Join us and take the first step toward a successful career!</h3>
          <h5>Unlock opportunities, develop new skills, grow your professional network.</h5>
        </div>
      </div>

      <div className="bg-slate-50 border-t border-slate-200">
        <div className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#102842] mb-6">Our Brilliant Interns</h1>
            <h2 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              #TraincapeInterns play vital roles across our diverse teams, including software development, product management, user experience, and more. Join us in shaping the future of technology for everyone.
            </h2>
          </div>

          {loadingInterns ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#102842]"></div>
            </div>
          ) : interns.length === 0 ? (
            <div className="text-center text-gray-500 py-10">No interns found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {interns.map((intern) => (
                <div key={intern._id} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(16,40,66,0.15)] transition-all duration-300 group hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
                  <div className="h-64 overflow-hidden relative bg-slate-100">
                    <img
                      src={`${API_BASE_URL || 'http://localhost:3001'}/interns/${intern._id}/photo`}
                      alt={intern.fullName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Traincape+Intern"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative bg-white">
                    {/* Decorative element */}
                    <div className="absolute -top-6 right-6 bg-[#102842] text-white p-2.5 rounded-xl shadow-lg transform rotate-3 hidden group-hover:block transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{intern.fullName}</h3>
                    <div className="space-y-3 mt-auto">
                      {/* Institution — only shown when college is available */}
                      {intern.college && (
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Institution</p>
                            <p className="text-sm font-medium text-gray-700">{intern.college}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Education</p>
                          <p className="text-sm font-medium text-gray-700">{intern.degree}</p>
                        </div>
                      </div>
                      {/* Location — only shown when location is available */}
                      {intern.location && (
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                            <p className="text-sm font-medium text-gray-700">{intern.location}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tech Stack</p>
                          <p className="text-sm font-bold text-[#102842] leading-tight">{intern.techStack}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="join-us">
        <h1>Why Traincape Technology</h1>
        <div className="join-us-box">
          <img src={Purpose} alt="" />
          <div className="join-us-text">
            <h2>Driven by Purpose</h2>
            <h3>We empower our team members to achieve impactful results that enhance society and demonstrate that anything can be accomplished.</h3>
          </div>
        </div>
        <div className="join-us-box">
          <div className="join-us-text">
            <h2>Fostering Lifelong Learning</h2>
            <h3>We provide our associates with resources to learn from Traincape's experience, empowering them to deliver innovative solutions and stay ahead of industry shifts.</h3>
          </div>
          <img src={learning} alt="" />
        </div>
        <div className="join-us-box">
          <img src={support} alt="" />
          <div className="join-us-text">
            <h2>Support</h2>
            <h3>We support everyone in realizing their full potential through upskilling and reskilling initiatives.</h3>
          </div>
        </div>
        <div className="join-us-box">
          <div className="join-us-text">
            <h2>Progress</h2>
            <h3>We invest in our employees' development, inspiring them to pursue continuous improvement.</h3>
          </div>
          <img src={progress} alt="" />
        </div>
      </div>

      <div className={career.contact}>
        <div className={career.officeMail}>
          <h1>Want To Join Us</h1>
          <p>We're Ready To Connect You!</p>
          <input
            type="text"
            name="name"
            value={payoload.name}
            className={career.inputbox}
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={payoload.email}
            className={career.inputbox}
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="phoneNumber"
            value={payoload.phoneNumber}
            className={career.inputbox}
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="resumeLink"
            value={payoload.resumeLink}
            className={career.inputbox}
            placeholder="Paste Your Google Drive Resume Link"
            required
            onChange={handleChange}
          />
          <select
            name="subject"
            value={payoload.subject}
            className={career.select}
            required
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="App-development">App development</option>
            <option value="Website-Development">Website Development</option>
            <option value="Salesforce-Developer">Salesforce Developer</option>
            <option value="Sales">Sales</option>
            <option value="Lead-Generation">Lead Generation</option>
          </select>
          <textarea
            name="message"
            className={career.textarea}
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={handleChange}
            value={payoload.message}
          ></textarea>
          <button className={career.contactBtn} onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        <div className={career.contactImg}>
          <img src={hand} alt="Career" />
        </div>
      </div>
    </>
  );
}