import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  EducationInformation,
  AddressInformation,
  ContactInformation,
} from "./PersonalInformation";

import {
  EmploymentDetails,
  InternshipDuration,
  StatusInformation,
} from "./WorkInformation";

import { Loading, EmployeeHeader, Tabs, ErrorAlert } from "./EmployeeHeader";
import DocumentsSection from "./DocumentInformation";


const UserPage = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");

  // Get employee ID from URL params
  const { employeeId } = useParams();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        setLoading(true);

        // Update with your actual API endpoint
        const response = await axios.get(
          `http://localhost:8080/employees/getEmployee/${employeeId}`
        );

        console.log("RESPONSE IS--->", response);
        setEmployee(response.data.data);
        setError(null);
      } catch (err) {
        setError(`Failed to fetch employee data: ${err.message}`);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) {
      console.log("EmployeeID IS--->", employeeId);
      fetchEmployeeData();
    } else {
      setError("Employee ID not found in URL");
      setLoading(false);
    }
  }, [employeeId]);

  // Helper to render file links
 
  const renderTabContent = () => {
    if (!employee) return null;

    switch (activeTab) {
      case "personal":
        return (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <ContactInformation employee={employee} />
              <AddressInformation employee={employee} />
            </div>
            <EducationInformation employee={employee} />
          </div>
        );

      case "work":
        return (
          <div className="space-y-4">
            <EmploymentDetails employee={employee} />
            <InternshipDuration employee={employee} />
            <StatusInformation employee={employee} />
          </div>
        );

      case "documents":
        return <DocumentsSection employee={employee} />;

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorAlert message={error} />
        ) : (
          employee && (
            <>
              <EmployeeHeader employee={employee} />
              {/* Tabs */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Tab Content */}
                <div className="p-6">{renderTabContent()}</div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default UserPage;