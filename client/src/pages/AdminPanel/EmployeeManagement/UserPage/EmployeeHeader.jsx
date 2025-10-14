// EmployeeHeader.js
import React from "react";

export const EmployeeHeader = ({ employee }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h1 className="text-3xl font-bold">{employee.fullName}</h1>
        <div className="flex flex-wrap items-center mt-2">
          <span className="flex items-center mr-4">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            {employee.department} / {employee.role}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs ${
              employee.status === "Active"
                ? "bg-green-200 text-green-800"
                : employee.status === "Inactive"
                ? "bg-red-200 text-red-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {employee.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap">
          <button
            onClick={() => setActiveTab("personal")}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "personal"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setActiveTab("work")}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "work"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Work Information
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "documents"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Documents
          </button>
        </nav>
      </div>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export const ErrorAlert = ({ message }) => {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4">
        <p className="font-bold">Error</p>
        <p>{message}</p>
      </div>
    );
  };