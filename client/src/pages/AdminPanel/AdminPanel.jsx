import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateAssignment from "./CreateAssignment/CreateAssignment";
import ViewAssignments from "./ViewAssignment/ViewAssignments";
import Sidebar from "./AdminSidebar";
import CertificateForm from "./ClientProfiles/CertificateForm";
import VoucherManagement from "./VoucherManagement/VoucherManagement";
import Dashboard from "./Dashboard";
// import PECBBrochures from "../../components/PECBBrochures";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import {
  Shield,
  GraduationCap,
  ChevronRight,
  ArrowLeft,
  KeyRound,
  ShieldCheck,
  ChevronLeft,
  User,
  Mail,
  Lock,
  UserPlus
} from "lucide-react";
import CourseAnalytics from "./CourseAnalytics/CourseAnalytics";
import EmployeeManagement from "./EmployeeManagement/EmployeeManagement";
import Results from "./Results";

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState("roleSelection");
  const [role, setRole] = useState("");
  const [securityKey, setSecurityKey] = useState("");
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isKeyVisible, setIsKeyVisible] = useState(false);

  // Consultant Auth State
  const [consultantEmail, setConsultantEmail] = useState("");
  const [consultantPassword, setConsultantPassword] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [consultantConfirmPassword, setConsultantConfirmPassword] = useState("");
  const [isConsultantSignup, setIsConsultantSignup] = useState(false);
  const [consultantLoading, setConsultantLoading] = useState(false);


  const adminKey = "admin123"; // Security key for Admin (legacy)
  const instructorKey = "instructor456"; // Security key for Instructor (legacy)
  const courses = ["comptia", "AWS", "PECB", "microsoft", "Cisco"]; // Added Cisco to available courses

  const reduxRole = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    // If logged-in user is Admin, skip key flow and set role automatically
    if (reduxRole === 'Admin') {
      setRole('Admin');
      setSelectedOption('dashboard');
    }
  }, [reduxRole]);

  // Handle Role Selection (Admin or Instructor)
  const handleRoleSelection = (role) => {
    setRole(role);
    if (role === "Instructor") {
      setSelectedOption("courseSelection"); // For Instructor, show course selection first
    } else if (role === "Consultant") {
      setSelectedOption("consultantAuth");
    } else {
      setSelectedOption("keyEntry"); // For Admin, show key entry immediately
    }
  };

  // Handle Security Key Submission
  const handleKeySubmission = () => {
    if (
      (role === "Admin" && securityKey === adminKey) ||
      (role === "Instructor" && securityKey === instructorKey)
    ) {
      if (role === "Instructor" && selectedCourse) {
        setSelectedOption("dashboard"); // Show dashboard after successful authentication
      } else if (role === "Admin") {
        setSelectedOption("dashboard"); // Admin can access dashboard directly
      }
    } else {
      setError("Invalid security key. Please try again.");
    }
  };

  // Handle Consultant Auth
  const handleConsultantAuth = async (e) => {
    e.preventDefault();
    setConsultantLoading(true);

    try {
      if (isConsultantSignup) {
        // Signup Logic
        if (consultantPassword !== consultantConfirmPassword) {
          toast.error('Passwords do not match!');
          setConsultantLoading(false);
          return;
        }
        if (consultantPassword.length < 6) {
          toast.error('Password must be at least 6 characters');
          setConsultantLoading(false);
          return;
        }

        const { data } = await axios.post('http://localhost:8080/consultant/register', {
          name: consultantName,
          email: consultantEmail,
          password: consultantPassword
        });

        localStorage.setItem('consultantToken', data.token);
        localStorage.setItem('consultantName', data.name);
        toast.success(`Welcome, ${data.name}! Account created.`);
      } else {
        // Login Logic
        const { data } = await axios.post('http://localhost:8080/consultant/login', {
          email: consultantEmail,
          password: consultantPassword
        });

        localStorage.setItem('consultantToken', data.token);
        localStorage.setItem('consultantName', data.name);
        toast.success(`Welcome back, ${data.name}!`);
      }

      navigate('/consultant');

    } catch (err) {
      toast.error(err.response?.data?.message || 'Authentication failed. Please check credentials.');
    } finally {
      setConsultantLoading(false);
    }
  };

  // Handle Course Selection (Only for Instructor)
  const handleCourseSelection = (event) => {
    const selected = event.target.value;
    setSelectedCourse(selected);
  };

  // Render Content Based on Role and Selected Option
  const renderContent = () => {
    if (role === "Instructor" && !selectedCourse) {
      return <p>Please select a course to proceed.</p>;
    }

    switch (selectedOption) {
      case "createAssignment":
        return <CreateAssignment role={role} selectedCourse={selectedCourse} />;
      case "viewAssignments":
        return <ViewAssignments role={role} selectedCourse={selectedCourse} />;
      case "courseAnalytics":
        return <CourseAnalytics role={role} selectedCourse={selectedCourse} />;
      case "employeeManagement":
        return <EmployeeManagement role={role} selectedCourse={selectedCourse} />;
      case "clientProfiles":
        return <CertificateForm />;
      case "voucherManagement":
        return <VoucherManagement />;
      // case "pecbBrochures":
      //   return <PECBBrochures />;
      case "results":
        return <Results />;
      case "dashboard":
        return <Dashboard role={role} selectedCourse={selectedCourse} onSelectOption={setSelectedOption} />;
      default:
        return <Dashboard role={role} selectedCourse={selectedCourse} onSelectOption={setSelectedOption} />;
    }
  };

  // Initial Role Selection View
  if (selectedOption === "roleSelection" && reduxRole !== 'Admin') {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2">
            Choose Your Role
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Select how you want to join the platform
          </p>
          <div className="space-y-4">
            <button
              onClick={() => handleRoleSelection("Admin")}
              className="group w-full p-5 rounded-xl border transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center text-left border-blue-200 dark:border-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 "
            >
              <div className="flex-shrink-0 p-3 rounded-full mr-4 transition-colors duration-300 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400  group-hover:bg-blue-600 group-hover:text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg"> Admin </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Full access to manage users, content, and settings
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-2 text-muted-foreground transition-transform duration-300 group-hover:transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleRoleSelection("Instructor")}
              className="group w-full p-5 rounded-xl border transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center text-left border-green-200 dark:border-green-900 hover:ring-2 hover:ring-offset-2 hover:ring-green-500 "
            >
              <div className="flex-shrink-0 p-3 rounded-full mr-4 transition-colors duration-300 bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400  group-hover:bg-green-600 group-hover:text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg"> Instructor </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Create and manage courses, assignments, and student progress
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-2 text-muted-foreground transition-transform duration-300 group-hover:transform group-hover:translate-x-1" />
            </button>

            {/* Consultant Role Card */}
            <button
              onClick={() => handleRoleSelection("Consultant")}
              className="group w-full p-5 rounded-xl border transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center text-left border-purple-200 dark:border-purple-900 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 "
            >
              <div className="flex-shrink-0 p-3 rounded-full mr-4 transition-colors duration-300 bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400  group-hover:bg-purple-600 group-hover:text-white">
                <User className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg"> Consultant </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Access consultant dashboard to manage client chats
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-2 text-muted-foreground transition-transform duration-300 group-hover:transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Security Key Entry View
  if (selectedOption === "keyEntry") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 text-white p-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setSecurityKey("");
                  setSelectedOption("roleSelection");
                }}
                className="hover:bg-blue-600/30 p-2 rounded-full transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div>
                <h2 className="text-2xl font-bold flex items-center space-x-2">
                  <ShieldCheck className="h-7 w-7" />
                  <span>Security Key</span>
                </h2>
                <p className="text-sm text-blue-100 mt-1">
                  Enter key for {role} access
                </p>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="p-6 space-y-6">
            <div className="relative">
              <input
                type={isKeyVisible ? "text" : "password"}
                value={securityKey}
                onChange={(e) => {
                  setSecurityKey(e.target.value);
                  setError("");
                }}
                placeholder="Enter security key"
                className="w-full p-3 border-2 border-blue-200 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition-all duration-300
                         pr-10 text-gray-700"
              />
              <button
                onClick={() => setIsKeyVisible(!isKeyVisible)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                         text-gray-500 hover:text-blue-500 transition-colors"
              >
                {isKeyVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleKeySubmission}
              className="w-full bg-blue-500 text-white py-3 rounded-lg 
                       hover:bg-blue-600 transition-colors duration-300 
                       flex items-center justify-center space-x-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <KeyRound className="h-5 w-5" />
              <span>Verify Security Key</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Course Selection for Instructor
  if (selectedOption === "courseSelection") {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-green-50">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl overflow-hidden border border-green-100">
          <div className="p-6 text-center bg-green-500 text-white">
            <h2 className="text-2xl font-bold">Select a Course</h2>
            <p className="text-sm opacity-80 mt-2">Choose a course to continue your learning journey</p>
          </div>
          <div className="p-6 space-y-4">
            <select
              value={selectedCourse}
              onChange={handleCourseSelection}
              className="w-full py-3 px-4 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            >
              <option value="" className="text-gray-400">Select a course...</option>
              {courses.map((course, index) => (
                <option key={index} value={course} className="text-gray-700">
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className="p-6 flex justify-between border-t border-green-100 bg-green-50">
            <button
              onClick={() => setSelectedOption("roleSelection")}
              className="p-2 rounded-full hover:bg-green-100 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-green-600" />
            </button>
            <button
              onClick={() => setSelectedOption("keyEntry")}
              disabled={!selectedCourse}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${selectedCourse
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-green-300 text-green-100 cursor-not-allowed'
                }`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Consultant Authentication (Login/Signup)
  if (selectedOption === "consultantAuth") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-purple-100 relative">
          <button
            onClick={() => setSelectedOption("roleSelection")}
            className="absolute top-4 left-4 p-2 rounded-full hover:bg-white/20 text-white z-10"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <div className="bg-purple-600 p-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              {isConsultantSignup ? <UserPlus size={32} /> : <User size={32} />}
            </div>
            <h2 className="text-2xl font-bold mb-1">
              {isConsultantSignup ? "Join as Consultant" : "Consultant Portal"}
            </h2>
            <p className="text-purple-100 text-sm">
              {isConsultantSignup ? "Create your expert account" : "Secure access for authorized experts"}
            </p>
          </div>

          <div className="p-8">
            <form onSubmit={handleConsultantAuth} className="space-y-4">
              {isConsultantSignup && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      value={consultantName}
                      onChange={(e) => setConsultantName(e.target.value)}
                      placeholder="John Doe"
                      required={isConsultantSignup}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all outline-none text-gray-700"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={consultantEmail}
                    onChange={(e) => setConsultantEmail(e.target.value)}
                    placeholder="your.email@traincape.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all outline-none text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    value={consultantPassword}
                    onChange={(e) => setConsultantPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all outline-none text-gray-700"
                  />
                </div>
              </div>

              {isConsultantSignup && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      value={consultantConfirmPassword}
                      onChange={(e) => setConsultantConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      required={isConsultantSignup}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all outline-none text-gray-700"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={consultantLoading}
                className={`w-full py-3 rounded-lg text-white font-medium shadow-lg shadow-purple-200 transition-all
                                ${consultantLoading
                    ? 'bg-purple-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 hover:shadow-xl active:scale-[0.98]'}`}
              >
                {consultantLoading
                  ? 'Processing...'
                  : (isConsultantSignup ? 'Create Consultant Account' : 'Sign In to Dashboard')
                }
              </button>
            </form>

            <div className="mt-5 text-center text-sm text-gray-500">
              {isConsultantSignup ? "Already have an account? " : "Don't have an account? "}
              <button
                onClick={() => setIsConsultantSignup(!isConsultantSignup)}
                className="text-purple-600 hover:text-purple-700 font-medium focus:outline-none"
              >
                {isConsultantSignup ? "Sign In" : "Create one"}
              </button>
            </div>

            <div className="mt-4 text-center text-xs text-gray-400">
              Protected by Traincape Security • v1.0.0
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar
        selectedOption={selectedOption}
        role={role}
        onSelectOption={setSelectedOption}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;