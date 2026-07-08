import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building2,
  Calendar,
  Layers,
  FileText,
  Upload,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Trash2,
  HelpCircle,
  Eye,
  Check,
  AlertCircle,
  RefreshCw
} from "lucide-react";
import { submitRequirement } from "../utils/submitRequirement";

// Steps definition
const STEPS = [
  { id: 1, name: "Contact Info", desc: "How we can reach you" },
  { id: 2, name: "Business Details", desc: "About your company" },
  { id: 3, name: "Service", desc: "Select service interested in" },
  { id: 4, name: "Project Specs", desc: "Define website/domain/hosting" },
  { id: 5, name: "Assets & Style", desc: "Branding and logo needs" },
  { id: 6, name: "Features", desc: "Select required features" },
  { id: 7, name: "Timeline & Budget", desc: "Estimated cost & timing" },
  { id: 8, name: "Uploads", desc: "Share project briefs/docs" },
  { id: 9, name: "Review", desc: "Submit requirement" },
];

const SERVICES = [
  { name: "Website Development", icon: "🌐", desc: "Custom business websites and web portals" },
  { name: "E-commerce Website", icon: "🛒", desc: "Online store, shopping cart, and payment gateway" },
  { name: "Mobile App Development", icon: "📱", desc: "iOS, Android, or cross-platform applications" },
  { name: "CRM Software", icon: "👥", desc: "Customer relationship and database management" },
  { name: "ERP Software", icon: "🏢", desc: "Enterprise resource planning and business flows" },
  { name: "LMS Platform", icon: "🎓", desc: "Learning management and online training systems" },
  { name: "Custom Software", icon: "⚙️", desc: "Tailored software solutions for unique workflows" },
  { name: "UI/UX Design", icon: "🎨", desc: "Prototyping, visual designs, and user research" },
  { name: "Digital Marketing", icon: "📈", desc: "SEO, PPC campaigns, and branding strategies" },
  { name: "SEO", icon: "🔍", desc: "Search engine optimization and content audits" },
  { name: "Graphic Design", icon: "✏️", desc: "Logos, brand packages, and layout prints" },
  { name: "Domain & Hosting", icon: "☁️", desc: "Server provisioning, emails, and domain setup" },
  { name: "Website Maintenance", icon: "🛠️", desc: "Security updates, content edits, and support plans" },
  { name: "Other", icon: "💡", desc: "Special requirements or combined packages" }
];

const DESIGN_STYLES = [
  "Modern & Clean",
  "Minimalist",
  "Corporate & Professional",
  "Luxury & Elegant",
  "Colorful & Playful",
  "Dark Theme",
  "Creative & Artistic",
  "Let your team decide",
  "Other"
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "United Arab Emirates",
  "Saudi Arabia",
  "Other"
];

const INITIAL_STATE = {
  // Step 1: Contact Info
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  
  // Step 2: Business Details
  companyName: "",
  businessDescription: "",
  businessAge: "",
  employeesCount: "",

  // Step 3: Service Selection
  serviceInterestedIn: "",

  // Step 4: Project Specs
  mainPurpose: [], // Multi-select array
  websiteExists: "", // Yes / No
  existingWebsiteUrl: "",
  domainOwned: "", // Yes / No / Need Help
  hostingOwned: "", // Yes / No / Need Help

  // Step 5: Assets & Style
  hasLogo: "", // Yes / No / Need Logo Design
  hasBrandColors: "", // Yes / No / Need suggestions
  referenceWebsites: "",
  preferredDesignStyle: "",

  // Step 6: Features Grid
  featuresNeeded: [], // Multi-select array
  mobileAppNeeded: "", // Yes / No / Maybe

  // Step 7: Timeline & Budget
  budgetRange: "",
  timelineOption: "",
  contentReady: "", // Yes / No / Partially
  pointOfContactName: "",
  approverName: "",
};

export default function ClientRequirementWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("traincape_requirement_wizard_draft");
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);

  // Auto-save draft on form change
  useEffect(() => {
    localStorage.setItem("traincape_requirement_wizard_draft", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field, item) => {
    setFormData((prev) => {
      const list = prev[field] || [];
      const updated = list.includes(item)
        ? list.filter((x) => x !== item)
        : [...list, item];
      return { ...prev, [field]: updated };
    });
  };

  // Clear draft
  const handleClearDraft = () => {
    if (window.confirm("Are you sure you want to clear your current progress?")) {
      setFormData(INITIAL_STATE);
      setFiles([]);
      setCurrentStep(1);
      localStorage.removeItem("traincape_requirement_wizard_draft");
      toast.success("Draft cleared successfully!");
    }
  };

  // Step validation
  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) return "Full Name is required.";
        if (!formData.email.trim()) return "Email address is required.";
        if (!/\S+@\S+\.\S+/.test(formData.email)) return "Please enter a valid email.";
        if (!formData.phone.trim()) return "Phone number is required.";
        if (!formData.country) return "Please select your country.";
        if (!formData.city.trim()) return "City is required.";
        break;
      case 2:
        if (!formData.companyName.trim()) return "Company Name is required.";
        if (!formData.businessDescription.trim()) return "Please describe what your business does.";
        if (!formData.businessAge) return "Please select the age of your business.";
        if (!formData.employeesCount) return "Please select employee count range.";
        break;
      case 3:
        if (!formData.serviceInterestedIn) return "Please select a service interested in.";
        break;
      case 4:
        if (formData.mainPurpose.length === 0) return "Please select at least one purpose for this project.";
        if (!formData.websiteExists) return "Please select if you have an existing website.";
        if (formData.websiteExists === "Yes" && !formData.existingWebsiteUrl.trim()) {
          return "Please enter your existing website URL.";
        }
        if (!formData.domainOwned) return "Please indicate domain ownership.";
        if (!formData.hostingOwned) return "Please indicate hosting ownership.";
        break;
      case 5:
        if (!formData.hasLogo) return "Please specify logo availability.";
        if (!formData.hasBrandColors) return "Please specify brand colors availability.";
        if (!formData.preferredDesignStyle) return "Please select preferred design style.";
        break;
      case 6:
        if (formData.featuresNeeded.length === 0) return "Please select at least one required feature.";
        if (!formData.mobileAppNeeded) return "Please select if you need a Mobile App companion.";
        break;
      case 7:
        if (!formData.budgetRange) return "Please select your estimated budget range.";
        if (!formData.timelineOption) return "Please select your timeline requirements.";
        if (!formData.contentReady) return "Please specify if project content is ready.";
        if (!formData.pointOfContactName.trim()) return "Please specify a Point of Contact.";
        if (!formData.approverName.trim()) return "Please specify the Approver / Decision Maker.";
        break;
      case 8:
        // Document upload is optional, but if files exist we validate them.
        break;
      default:
        break;
    }
    return null;
  };

  const handleNext = () => {
    const errorMsg = validateStep();
    if (errorMsg) {
      toast.error(errorMsg, {
        style: {
          background: "#1e293b",
          color: "#fff",
          border: "1px solid #dc2626"
        }
      });
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Document Upload handling
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Check total limit
    if (files.length + selectedFiles.length > 5) {
      toast.error("You can upload a maximum of 5 attachments.");
      return;
    }

    const validFiles = [];
    const maxSizeBytes = 10 * 1024 * 1024; // 10MB

    selectedFiles.forEach((file) => {
      if (file.size > maxSizeBytes) {
        toast.error(`File "${file.name}" exceeds the 10MB size limit.`);
      } else {
        validFiles.push(file);
      }
    });

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
      toast.success(`${validFiles.length} file(s) attached.`);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    toast.success("Attachment removed.");
  };

  // Submit trigger
  const handleSubmit = async () => {
    setLoading(true);
    
    // Map dropdown to budget amount/currency
    let budgetAmount = 0;
    const selectedBudget = formData.budgetRange;
    if (selectedBudget === "Less than ₹50k") budgetAmount = 50000;
    else if (selectedBudget === "₹50k-1L") budgetAmount = 100000;
    else if (selectedBudget === "₹1L-3L") budgetAmount = 300000;
    else if (selectedBudget === "₹3L-5L") budgetAmount = 500000;
    else if (selectedBudget === "₹5L+") budgetAmount = 500001;

    // Compile project spec answers into standard CRM schema format (allAnswers)
    const allAnswers = [
      { question: "What business does", answer: formData.businessDescription },
      { question: "Age of business", answer: formData.businessAge },
      { question: "Main purpose", answer: formData.mainPurpose },
      { question: "Website exists?", answer: formData.websiteExists },
      { question: "Existing Website URL", answer: formData.existingWebsiteUrl },
      { question: "Domain owned?", answer: formData.domainOwned },
      { question: "Hosting owned?", answer: formData.hostingOwned },
      { question: "Has logo?", answer: formData.hasLogo },
      { question: "Has brand colors?", answer: formData.hasBrandColors },
      { question: "Reference websites", answer: formData.referenceWebsites },
      { question: "Preferred design style", answer: formData.preferredDesignStyle },
      { question: "Features needed", answer: formData.featuresNeeded },
      { question: "Mobile App needed?", answer: formData.mobileAppNeeded },
      { question: "Content Ready?", answer: formData.contentReady },
      { question: "Point of contact name", answer: formData.pointOfContactName },
      { question: "Approver name", answer: formData.approverName },
      { question: "Raw Selected Budget", answer: selectedBudget }
    ];

    const payload = {
      customerDetails: {
        name: formData.name,
        email: formData.email.toLowerCase(),
        phone: formData.phone,
        country: formData.country,
        address: formData.city // map city to address field
      },
      companyDetails: {
        name: formData.companyName,
        size: formData.employeesCount,
        industry: formData.businessDescription.substring(0, 100) // snippet or industry info
      },
      businessInformation: {
        businessAge: formData.businessAge,
        businessDescription: formData.businessDescription,
        city: formData.city
      },
      selectedService: formData.serviceInterestedIn,
      allAnswers: allAnswers,
      budget: {
        amount: budgetAmount,
        currency: "INR"
      },
      timeline: formData.timelineOption,
      source: "Website",
      priority: "Medium"
    };

    try {
      const response = await submitRequirement(payload, files);
      if (response.success) {
        setSuccessData(response.data);
        localStorage.removeItem("traincape_requirement_wizard_draft");
        setFormData(INITIAL_STATE);
        setFiles([]);
        toast.success("Project inquiry submitted successfully!", { icon: "🎉" });
      } else {
        throw new Error(response.message || "Failed to submit project inquiry");
      }
    } catch (err) {
      toast.error(err.message || "Failed to connect to backend CRM server.");
    } finally {
      setLoading(false);
    }
  };

  const currentStepInfo = STEPS.find((s) => s.id === currentStep);

  // Success view
  if (successData) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full bg-slate-900/60 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-indigo-500" />
          <div className="w-20 h-20 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-teal-500/20">
            <CheckCircle2 className="w-10 h-10 text-teal-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Project Ingested Successfully!
          </h2>
          
          <p className="text-slate-300 text-lg mb-8">
            Thank you, <strong className="text-white">{successData.customerDetails?.name}</strong>. Your project requirement has been sent directly to our Sales & Engineering teams.
          </p>

          <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 mb-8 max-w-sm mx-auto">
            <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1">Requirement Ticket Number</span>
            <span className="text-2xl font-mono font-bold text-teal-300 tracking-wider bg-teal-950/40 px-4 py-2 rounded-lg border border-teal-950">
              {successData.requirementNumber}
            </span>
          </div>

          <p className="text-slate-400 text-sm mb-10 leading-relaxed">
            A confirmation email has been dispatched to <strong className="text-slate-200">{successData.customerDetails?.email}</strong>. Our business development managers will analyze your specifications and reach out in 24 hours.
          </p>

          <button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-xl font-bold transition duration-300 shadow-lg shadow-teal-500/15"
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-10">
          <span className="px-4 py-1.5 bg-slate-900 border border-slate-800 text-teal-400 rounded-full text-xs font-semibold uppercase tracking-wider">
            Requirement Wizard
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-3 tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Let's Architect Your Next Project
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Fill out this step-by-step questionnaire. It takes 5 minutes, compiles directly into our CRM task-boards, and helps us quote you accurately.
          </p>
        </div>

        {/* Floating Controls (Draft indicators) */}
        <div className="flex justify-between items-center bg-slate-900/60 backdrop-blur border border-slate-800/80 rounded-2xl p-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-xs sm:text-sm">Progress Auto-Saved in Browser</span>
          </div>
          <button
            onClick={handleClearDraft}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-slate-950 hover:bg-red-950/40 border border-slate-800 hover:border-red-900/40 text-slate-400 hover:text-red-400 rounded-lg transition"
            title="Reset wizard answers"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear Progress
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex justify-between min-w-[700px] px-2 relative">
            {/* Connecting bar */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-800 -z-10" />
            <div 
              className="absolute top-4 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-indigo-500 transition-all duration-500 -z-10"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />

            {STEPS.map((step) => {
              const isCompleted = step.id < currentStep;
              const isActive = step.id === currentStep;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    // Prevent skip forward without validation
                    if (step.id <= currentStep) {
                      setCurrentStep(step.id);
                    }
                  }}
                  disabled={step.id > currentStep}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none disabled:cursor-not-allowed"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border transition duration-300 ${
                      isCompleted
                        ? "bg-teal-500 border-teal-400 text-slate-950"
                        : isActive
                        ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30"
                        : "bg-slate-950 border-slate-800 text-slate-500 group-hover:border-slate-700"
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3px]" /> : step.id}
                  </div>
                  <span
                    className={`text-[10px] mt-2.5 font-bold uppercase tracking-wider transition ${
                      isActive ? "text-indigo-400" : isCompleted ? "text-teal-400" : "text-slate-500"
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Card Body */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          
          {/* Header detail */}
          <div className="mb-8 border-b border-slate-800/60 pb-6">
            <span className="text-teal-400 font-mono text-xs uppercase tracking-wider">
              Step {currentStep} of {STEPS.length} — {currentStepInfo.name}
            </span>
            <h2 className="text-2xl font-bold mt-1 text-white">
              {currentStepInfo.desc}
            </h2>
          </div>

          {/* Form Step Contents with Slide Animation */}
          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Contact Info */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Saurav Sen"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="saurav@company.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Contact Number (with Country Code) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200 appearance-none cursor-pointer"
                        >
                          <option value="">Select country...</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        City / Region <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="New Delhi, Delhi"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Business Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Company / Entity Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Traincape Tech Pvt Ltd"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        What does your business do? (Industry & Offerings) <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleChange}
                        rows="4"
                        placeholder="We are a B2B logistics firm providing tech-enabled supply chain logistics and warehouse warehousing across India..."
                        className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition duration-200 resize-y"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-2">
                          Age of Business <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="businessAge"
                          value={formData.businessAge}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer"
                        >
                          <option value="">Select age...</option>
                          <option value="Startup (< 1 year)">Startup (&lt; 1 year)</option>
                          <option value="1-3 years">1 - 3 years</option>
                          <option value="3-5 years">3 - 5 years</option>
                          <option value="5+ years">5+ years</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-2">
                          Employees Count <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="employeesCount"
                          value={formData.employeesCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer"
                        >
                          <option value="">Select count...</option>
                          <option value="1-10">1 - 10 employees</option>
                          <option value="11-50">11 - 50 employees</option>
                          <option value="51-200">51 - 200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Service Selection */}
                {currentStep === 3 && (
                  <div>
                    <label className="block text-slate-300 text-sm font-semibold mb-4 text-center">
                      Select the primary service you are interested in <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {SERVICES.map((srv) => {
                        const isSelected = formData.serviceInterestedIn === srv.name;
                        return (
                          <button
                            key={srv.name}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, serviceInterestedIn: srv.name }))
                            }
                            className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
                              isSelected
                                ? "bg-indigo-950/40 border-indigo-500/70 shadow-lg shadow-indigo-500/10 text-white"
                                : "bg-slate-950 border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{srv.icon}</span>
                              <div>
                                <h4 className="font-bold text-base leading-tight">
                                  {srv.name}
                                </h4>
                                <p className="text-xs text-slate-400 mt-1 leading-snug">
                                  {srv.desc}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: Project Specs */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    {/* Main Purpose (Multi-select Checkboxes) */}
                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-3">
                        What is the main purpose of this project? (Select all that apply) <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          "Lead Generation",
                          "Brand Awareness",
                          "Sell Products (E-commerce)",
                          "Improve Efficiency (CRM/ERP)",
                          "Educational/LMS",
                          "Customer Support",
                          "Workflow Automation",
                          "Other"
                        ].map((purpose) => {
                          const isChecked = formData.mainPurpose.includes(purpose);
                          return (
                            <button
                              key={purpose}
                              type="button"
                              onClick={() => handleCheckboxChange("mainPurpose", purpose)}
                              className={`p-3 rounded-xl border flex items-center justify-between text-sm transition ${
                                isChecked
                                  ? "bg-teal-950/20 border-teal-500 text-teal-300"
                                  : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              <span>{purpose}</span>
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center ${
                                  isChecked ? "bg-teal-500 border-teal-400 text-slate-950" : "border-slate-700"
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3 stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Existing Website? */}
                    <div className="border-t border-slate-850 pt-6">
                      <label className="block text-slate-300 text-sm font-semibold mb-3">
                        Do you have an existing website? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                websiteExists: opt,
                                existingWebsiteUrl: opt === "No" ? "" : prev.existingWebsiteUrl
                              }))
                            }
                            className={`px-6 py-3 rounded-xl border font-semibold text-sm transition ${
                              formData.websiteExists === opt
                                ? "bg-indigo-950/40 border-indigo-500 text-indigo-300"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {/* Conditional input: Existing Website URL */}
                      {formData.websiteExists === "Yes" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4"
                        >
                          <label className="block text-slate-400 text-xs font-semibold mb-2">
                            Website URL
                          </label>
                          <input
                            type="url"
                            name="existingWebsiteUrl"
                            value={formData.existingWebsiteUrl}
                            onChange={handleChange}
                            placeholder="https://example.com"
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:outline-none focus:border-teal-500 transition duration-200"
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Domain & Hosting Ownership */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-850 pt-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-3">
                          Domain Owned? <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Yes", "No", "Need Help"].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, domainOwned: opt }))}
                              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition ${
                                formData.domainOwned === opt
                                  ? "bg-teal-950/20 border-teal-500 text-teal-300"
                                  : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-3">
                          Hosting Owned? <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Yes", "No", "Need Help"].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, hostingOwned: opt }))}
                              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition ${
                                formData.hostingOwned === opt
                                  ? "bg-teal-950/20 border-teal-500 text-teal-300"
                                  : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Assets & Style */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-3">
                          Do you have a Logo? <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="hasLogo"
                          value={formData.hasLogo}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer text-sm"
                        >
                          <option value="">Select option...</option>
                          <option value="Yes">Yes, we have our logo file</option>
                          <option value="No">No, but we will provide it later</option>
                          <option value="Need Logo Design">No, we need Logo Design services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-3">
                          Do you have Brand Colors? <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="hasBrandColors"
                          value={formData.hasBrandColors}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer text-sm"
                        >
                          <option value="">Select option...</option>
                          <option value="Yes">Yes, we have defined colors/guidelines</option>
                          <option value="No">No, but we know what colors we like</option>
                          <option value="Need suggestions">No, we need creative color suggestions</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Preferred Design Style <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredDesignStyle"
                        value={formData.preferredDesignStyle}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer text-sm"
                      >
                        <option value="">Select design style...</option>
                        {DESIGN_STYLES.map((style) => (
                          <option key={style} value={style}>
                            {style}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">
                        Reference / Competitor Websites (URLs or Names)
                      </label>
                      <textarea
                        name="referenceWebsites"
                        value={formData.referenceWebsites}
                        onChange={handleChange}
                        rows="3"
                        placeholder="https://example1.com, https://competitor2.com. We like the clean interface and product galleries on these sites..."
                        className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:outline-none focus:border-teal-500 transition duration-200 resize-y text-sm"
                      />
                    </div>
                  </div>
                )}

                {/* Step 6: Features Grid */}
                {currentStep === 6 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-3">
                        Which features are required for your project? (Select all that apply) <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          "Contact Form",
                          "WhatsApp Live Chat",
                          "Login / User Authentication",
                          "User Registration",
                          "Online Payments Gateway",
                          "Booking / Scheduling System",
                          "Live Chat / Support desk",
                          "Push Notifications",
                          "Admin Dashboard / CMS",
                          "Blog/News section",
                          "Search function",
                          "Multilingual support",
                          "Social Media Feeds",
                          "E-mail Newsletters",
                          "Reports & Analytics"
                        ].map((feature) => {
                          const isChecked = formData.featuresNeeded.includes(feature);
                          return (
                            <button
                              key={feature}
                              type="button"
                              onClick={() => handleCheckboxChange("featuresNeeded", feature)}
                              className={`p-3 rounded-xl border flex items-center justify-between text-left text-xs transition duration-200 ${
                                isChecked
                                  ? "bg-teal-950/20 border-teal-500 text-teal-300"
                                  : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              <span className="leading-snug pr-2">{feature}</span>
                              <div
                                className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                                  isChecked ? "bg-teal-500 border-teal-400 text-slate-950" : "border-slate-800"
                                }`}
                              >
                                {isChecked && <Check className="w-2.5 h-2.5 stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="border-t border-slate-850 pt-6">
                      <label className="block text-slate-300 text-sm font-semibold mb-3">
                        Is a Mobile Companion App needed? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No", "Maybe"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, mobileAppNeeded: opt }))}
                            className={`px-6 py-3 rounded-xl border font-semibold text-sm transition ${
                              formData.mobileAppNeeded === opt
                                ? "bg-indigo-950/40 border-indigo-500 text-indigo-300"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 7: Timeline & Budget */}
                {currentStep === 7 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-3">
                          Estimated Budget <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer text-sm"
                        >
                          <option value="">Select budget range...</option>
                          <option value="Less than ₹50k">Less than ₹50k</option>
                          <option value="₹50k-1L">₹50k - ₹1L</option>
                          <option value="₹1L-3L">₹1L - ₹3L</option>
                          <option value="₹3L-5L">₹3L - ₹5L</option>
                          <option value="₹5L+">₹5L+</option>
                          <option value="Let's Discuss">Let's Discuss</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-3">
                          Estimated Timeline <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="timelineOption"
                          value={formData.timelineOption}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500 transition duration-200 cursor-pointer text-sm"
                        >
                          <option value="">Select timeline...</option>
                          <option value="Urgent">Urgent (ASAP)</option>
                          <option value="2 Weeks">2 Weeks</option>
                          <option value="1 Month">1 Month</option>
                          <option value="2 Months">2 Months</option>
                          <option value="Flexible">Flexible / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-3">
                        Is project content (texts, images, brochures) ready? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No", "Partially"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, contentReady: opt }))}
                            className={`px-6 py-3.5 rounded-xl border font-semibold text-sm transition ${
                              formData.contentReady === opt
                                ? "bg-teal-950/20 border-teal-500 text-teal-300"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-850 pt-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-2">
                          Point of Contact Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="pointOfContactName"
                          value={formData.pointOfContactName}
                          onChange={handleChange}
                          placeholder="e.g. Saurav (Technical lead)"
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:outline-none focus:border-teal-500 transition duration-200 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-semibold mb-2">
                          Approver / Decision Maker Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="approverName"
                          value={formData.approverName}
                          onChange={handleChange}
                          placeholder="e.g. Parichay (Managing Director)"
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:outline-none focus:border-teal-500 transition duration-200 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 8: Document Upload */}
                {currentStep === 8 && (
                  <div className="space-y-6">
                    <label className="block text-slate-300 text-sm font-semibold text-center mb-2">
                      Upload project requirements documents, mockups, or briefs (Max 5 files, 10MB each)
                    </label>

                    {/* Drag and Drop Zone */}
                    <div className="relative border-2 border-dashed border-slate-800 hover:border-teal-500/50 rounded-2xl p-8 text-center bg-slate-950/50 hover:bg-slate-950 transition duration-300 cursor-pointer">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.ppt,.pptx,image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                      <p className="font-bold text-slate-300 text-sm">
                        Click to select or drag & drop files here
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Accepted files: PDF, Word, Excel, PowerPoint, ZIP, or Images (Max 10MB each)
                      </p>
                    </div>

                    {/* Attached files preview */}
                    {files.length > 0 && (
                      <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 space-y-3">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Attached Documents ({files.length})
                        </h4>
                        <div className="divide-y divide-slate-850">
                          {files.map((file, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2 text-sm">
                              <div className="flex items-center gap-3 overflow-hidden">
                                <FileText className="w-4 h-4 text-teal-400 flex-shrink-0" />
                                <span className="text-white truncate font-medium max-w-[250px] sm:max-w-[400px]">
                                  {file.name}
                                </span>
                                <span className="text-xs text-slate-500">
                                  ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile(idx)}
                                className="text-red-400 hover:text-red-500 p-1 hover:bg-red-950/20 rounded transition"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 9: Review & Submit */}
                {currentStep === 9 && (
                  <div className="space-y-8">
                    <div className="bg-amber-950/20 border border-amber-900/30 rounded-xl p-4 flex gap-3 text-amber-300 text-xs sm:text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-400" />
                      <div>
                        <p className="font-bold text-amber-200">Review specifications before submitting</p>
                        <p className="text-amber-400/80 mt-0.5">Please ensure all numbers, emails, and service descriptions are accurate. Submissions will ingest directly into CRM client lists.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      {/* Contact & Business summary */}
                      <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-5 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                          <h4 className="font-bold text-teal-400 uppercase tracking-wider text-xs">
                            Contact & Entity details
                          </h4>
                          <button
                            onClick={() => setCurrentStep(1)}
                            className="text-xs text-indigo-400 hover:underline flex items-center"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="space-y-2">
                          <p><span className="text-slate-500">Client Name:</span> <strong className="text-white">{formData.name}</strong></p>
                          <p><span className="text-slate-500">Email:</span> <span className="text-white font-mono">{formData.email}</span></p>
                          <p><span className="text-slate-500">Phone:</span> <span className="text-white font-mono">{formData.phone}</span></p>
                          <p><span className="text-slate-500">Country/City:</span> <span className="text-white">{formData.city}, {formData.country}</span></p>
                          <p className="border-t border-slate-850 pt-2"><span className="text-slate-500">Company:</span> <strong className="text-white">{formData.companyName}</strong></p>
                          <p><span className="text-slate-500">Employees:</span> <span className="text-white">{formData.employeesCount}</span></p>
                          <p><span className="text-slate-500">Age:</span> <span className="text-white">{formData.businessAge}</span></p>
                        </div>
                      </div>

                      {/* Project service and specifications */}
                      <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-5 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                          <h4 className="font-bold text-teal-400 uppercase tracking-wider text-xs">
                            Project specs summary
                          </h4>
                          <button
                            onClick={() => setCurrentStep(3)}
                            className="text-xs text-indigo-400 hover:underline flex items-center"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="space-y-2">
                          <p><span className="text-slate-500">Selected Service:</span> <strong className="text-indigo-400">{formData.serviceInterestedIn}</strong></p>
                          <p><span className="text-slate-500">Budget Range:</span> <strong className="text-teal-400">{formData.budgetRange}</strong></p>
                          <p><span className="text-slate-500">Timeline:</span> <span className="text-white font-medium">{formData.timelineOption}</span></p>
                          <p><span className="text-slate-500">Website Owned?:</span> <span className="text-white">{formData.websiteExists === "Yes" ? formData.existingWebsiteUrl : "No existing site"}</span></p>
                          <p><span className="text-slate-500">Domain Owned?:</span> <span className="text-white">{formData.domainOwned}</span></p>
                          <p><span className="text-slate-500">Hosting Owned?:</span> <span className="text-white">{formData.hostingOwned}</span></p>
                        </div>
                      </div>

                      {/* Details & Features list */}
                      <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-5 md:col-span-2 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                          <h4 className="font-bold text-teal-400 uppercase tracking-wider text-xs">
                            Functional Requirements
                          </h4>
                          <button
                            onClick={() => setCurrentStep(6)}
                            className="text-xs text-indigo-400 hover:underline flex items-center"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-slate-500 block text-xs mb-1">Company Offerings Description:</span>
                            <p className="text-slate-300 text-xs italic bg-slate-950 p-3 rounded-lg border border-slate-850">
                              {formData.businessDescription}
                            </p>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-xs mb-1">Selected Features:</span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {formData.featuresNeeded.map((f) => (
                                <span key={f} className="text-[10px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-1 rounded">
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-850 pt-3 text-xs">
                            <p><span className="text-slate-500">Design style:</span> <span className="text-white">{formData.preferredDesignStyle}</span></p>
                            <p><span className="text-slate-500">Logo needs:</span> <span className="text-white">{formData.hasLogo}</span></p>
                            <p><span className="text-slate-500">Brand colors:</span> <span className="text-white">{formData.hasBrandColors}</span></p>
                            <p><span className="text-slate-500">Reference websites:</span> <span className="text-white truncate block max-w-xs">{formData.referenceWebsites || "None specified"}</span></p>
                          </div>
                        </div>
                      </div>

                      {/* Attachments preview summary */}
                      <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-5 md:col-span-2 flex justify-between items-center text-xs">
                        <div>
                          <span className="text-slate-500">Attached Documents:</span>
                          <span className="text-white font-semibold ml-2">
                            {files.length > 0 ? `${files.length} document(s)` : "No attachments attached"}
                          </span>
                        </div>
                        <button
                          onClick={() => setCurrentStep(8)}
                          className="text-indigo-400 hover:underline"
                        >
                          Modify
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-10 border-t border-slate-800/60 pt-6">
            <button
              onClick={handleBack}
              disabled={currentStep === 1 || loading}
              className={`flex items-center gap-1.5 px-5 py-3 border border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition ${
                currentStep === 1 || loading ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            {currentStep < STEPS.length ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-xl text-sm font-bold transition shadow-lg shadow-teal-500/10"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-xl text-sm font-bold transition shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Submitting Requirement...
                  </>
                ) : (
                  <>
                    Submit Requirement
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
