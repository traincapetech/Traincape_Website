import React, { useState } from "react";
import toast from "react-hot-toast";
import { submitLead } from "../../utils/submitLead";
import { Send, Award } from "lucide-react";

export default function ApplicationSection() {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    resumeLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email.");
    if (!phoneNumber) return toast.error("Please enter your WhatsApp number.");
    if (!role) return toast.error("Please select a role.");
    if (message.length < 10)
      return toast.error("Please enter a message (min 10 characters).");

    setIsSubmitting(true);
    try {
      const data = await submitLead({
        name,
        email,
        phoneNumber,
        location: "",
        subject: `Internship Application — ${role}`,
        message: [message, "", resumeLink ? `Resume Link: ${resumeLink}` : ""]
          .filter(Boolean)
          .join("\n"),
      });

      toast.success(data?.message || "Application submitted successfully!");
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

  return (
    <section id="internship-form-section" className="py-24 px-6 relative bg-white border-b border-slate-200/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Onboarding Portal
          </div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 font-display">
            Apply For Internship
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            Fill out the application below. Our recruitment operations team will review your application and resume link within 48 business hours.
          </p>
        </div>

        {/* Centered Glassmorphic Form Card */}
        <div className="bg-[#f8fafc]/70 border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.01)] backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
              <input
                type="text"
                name="name"
                value={payoload.name}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                name="email"
                value={payoload.email}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">WhatsApp Number</label>
              <input
                type="number"
                name="phoneNumber"
                value={payoload.phoneNumber}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Include country code"
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Role Applied For</label>
              <select
                name="subject"
                value={payoload.subject}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select Target Role</option>
                <option value="App-development">Mobile App Development</option>
                <option value="Website-Development">Website Development (React/Fullstack)</option>
                <option value="Salesforce-Developer">Salesforce Developer</option>
                <option value="Sales">Business Development (Sales)</option>
                <option value="Lead-Generation">Lead Generation & Analytics</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Resume Link (Google Drive / Dropbox)</label>
              <input
                type="text"
                name="resumeLink"
                value={payoload.resumeLink}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Paste Google Drive resume link"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Application Message / Cover Note</label>
              <textarea
                name="message"
                value={payoload.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Tell us about yourself, your educational background, and why you want to intern at Traincape..."
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Submitting Application..." : "Submit Application"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
