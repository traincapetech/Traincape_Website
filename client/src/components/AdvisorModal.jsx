import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { submitLead } from "../utils/submitLead";

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export default function AdvisorModal({ isOpen, onClose, prefillCourse = "" }) {
  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      country: "",
      whatsapp: "",
      course: prefillCourse || "",
    }),
    [prefillCourse]
  );

  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setForm((prev) => ({ ...prev, course: prefillCourse || prev.course }));
  }, [isOpen, prefillCourse]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const country = form.country.trim();
    const whatsapp = form.whatsapp.trim();
    const course = form.course.trim();

    if (name.length < 2) return toast.error("Please enter your name.");
    if (!isValidEmail(email)) return toast.error("Please enter a valid email.");
    if (!country) return toast.error("Please enter your country.");
    if (!whatsapp || whatsapp.replace(/[^\d]/g, "").length < 6)
      return toast.error("Please enter a valid WhatsApp number.");
    if (!course) return toast.error("Please enter the course/program.");

    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const lead = {
      name,
      email,
      phoneNumber: whatsapp,
      location: country,
      subject: `Advisor Request — ${course}`,
      message: `Advisor request for: ${course}\nCountry: ${country}\nWhatsApp: ${whatsapp}\nPage: ${pageUrl}`,
    };

    setSubmitting(true);
    try {
      await submitLead(lead);
      toast.success("Thanks! Our team will contact you shortly.");
      setForm(initial);
      onClose?.();
    } catch (err) {
      toast.error(err?.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Talk to Advisor"
      onMouseDown={(e) => {
        // close if clicking backdrop
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 font-display">Consult Tech Architect</h2>
              <p className="mt-1 text-sm text-gray-600">
                Speak directly with a technology consultant to map your technical requirements or select the right upskilling track.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onClose?.()}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-700 hover:bg-gray-50"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="advisor-name" className="text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                id="advisor-name"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your full name"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="advisor-email" className="text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                id="advisor-email"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="name@example.com"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="advisor-country" className="text-sm font-semibold text-gray-800">
                Country
              </label>
              <input
                id="advisor-country"
                autoComplete="country-name"
                value={form.country}
                onChange={update("country")}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="e.g., India"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="advisor-whatsapp" className="text-sm font-semibold text-gray-800">
                WhatsApp Number
              </label>
              <input
                id="advisor-whatsapp"
                autoComplete="tel"
                inputMode="tel"
                value={form.whatsapp}
                onChange={update("whatsapp")}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="+91 90000 00000"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="advisor-course" className="text-sm font-semibold text-gray-800">
                Course / Program
              </label>
              <input
                id="advisor-course"
                value={form.course}
                onChange={update("course")}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="e.g., ISO 27001 Lead Implementer / AWS Foundations"
              />
            </div>

            <div className="md:col-span-2 flex flex-col-reverse md:flex-row items-stretch md:items-center gap-3 mt-2">
              <button
                type="button"
                onClick={() => onClose?.()}
                className="w-full md:w-auto px-5 py-3 rounded-xl font-bold bg-white border border-gray-200 text-gray-900 hover:shadow-md transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="w-full md:flex-1 px-6 py-3 rounded-xl font-bold bg-blue-700 hover:bg-blue-800 text-white transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Request Architecture Consultation"}
              </button>
            </div>

            <div className="md:col-span-2 text-center mt-2">
              <p className="text-xs text-slate-400 font-medium">
                🔒 Your details are secure. We guarantee a response within 4 business hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

