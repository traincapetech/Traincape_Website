import React, { useState } from "react";
import axios from "axios";
import {
  Plus,
  Search,
} from "lucide-react";
import { useEffect } from "react";
import EditEmployee from "./editEmployee/EditEmployee";
import {
  EducationalInfoSection,
  EmploymentSpecificInfoSection,
  IdentityVerificationInfoSection,
  PersonalInfoSection,
} from "./sections/AddEmployee";
import { EmployeeTable } from "./sections/ShowEmployee";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isEditingEmployee, setIsEditingEmployee] = useState(false);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [activeSection, setActiveSection] = useState("personal");
  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    linkedinUrl: "",
    currentAddress: "",
    permanentAddress: "",
    photo: null,
    collegeName: "",
    role: "",
    department: "",
    joiningDate: "",
    internshipDuration: "",
    status: "Active",
    isWhatsAppSameAsPhone: false,
    // These fields would store file objects in a real app
    tenthMarksheet: null,
    twelfthMarksheet: null,
    bachelorsCertificate: null,
    pgCertificate: null,
    aadharCard: null,
    panCard: null,
    policeClearance: null,
    resume: null,
    offerLetter: null,
  });

  // Function to fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await axios.get(
        "http://localhost:8080/employees/getEmployees"
      );
      console.log(response.data.employees);
      setEmployees(response.data.employees);
      setErrorMessage(null);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setErrorMessage("Failed to fetch employees. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmployee = async () => {
    if (!newEmployee.fullName) {
      setErrorMessage("Full Name is required.");
      return;
    } else if (!newEmployee.email) {
      setErrorMessage("Email is required.");
      return;
    } else if (!newEmployee.phoneNumber) {
      setErrorMessage("Phone Number is required.");
      return;
    } else if (!newEmployee.currentAddress) {
      setErrorMessage("Current Address is required.");
      return;
    } else if (!newEmployee.photo) {
      setErrorMessage("Photo is required.");
      return;
    } else if (!newEmployee.collegeName) {
      setErrorMessage("College Name is required.");
      return;
    } else if (!newEmployee.tenthMarksheet) {
      setErrorMessage("10th Marksheet is required.");
      return;
    } else if (!newEmployee.twelfthMarksheet) {
      setErrorMessage("12th Marksheet is required.");
      return;
    } else if (!newEmployee.aadharCard) {
      setErrorMessage("Aadhar Card is required.");
      return;
    } else if (!newEmployee.panCard) {
      setErrorMessage("PAN Card is required.");
      return;
    } else if (!newEmployee.resume) {
      setErrorMessage("Resume is required.");
      return;
    } else if (!newEmployee.role) {
      setErrorMessage("Role is required.");
      return;
    } else if (!newEmployee.department) {
      setErrorMessage("Department is required.");
      return;
    } else if (!newEmployee.joiningDate) {
      setErrorMessage("Joining Date is required.");
      return;
    } else if (!newEmployee.status) {
      setErrorMessage("Status is required.");
      return;
    } else {
      if (
        (newEmployee.role == "Full-time Employee" ||
          newEmployee.role == "Part-time Employee") &&
        !newEmployee.policeClearance
      ) {
        setErrorMessage(
          "Police Clearance Certificate is required for employees"
        );
        return;
      }
      if (newEmployee.role == "Intern" && !newEmployee.internshipDuration) {
        setErrorMessage("Internship Duration is required for interns");
        return;
      }
      try {
        const formData = new FormData();

        // Append text fields
        formData.append("fullName", newEmployee.fullName);
        formData.append("email", newEmployee.email);
        formData.append("phoneNumber", newEmployee.phoneNumber);
        formData.append("whatsappNumber", newEmployee.whatsappNumber);
        formData.append("linkedinUrl", newEmployee.linkedinUrl);
        formData.append("currentAddress", newEmployee.currentAddress);
        formData.append("permanentAddress", newEmployee.permanentAddress);
        formData.append("collegeName", newEmployee.collegeName);
        formData.append("role", newEmployee.role);
        formData.append("department", newEmployee.department);
        formData.append("joiningDate", newEmployee.joiningDate);
        formData.append("internshipDuration", newEmployee.internshipDuration);
        formData.append("status", newEmployee.status);

        // Append boolean field as string
        formData.append(
          "isWhatsAppSameAsPhone",
          String(newEmployee.isWhatsAppSameAsPhone)
        );

        // Append file fields (only if not null)
        if (newEmployee.photo) formData.append("photo", newEmployee.photo);
        if (newEmployee.tenthMarksheet)
          formData.append("tenthMarksheet", newEmployee.tenthMarksheet);
        if (newEmployee.twelfthMarksheet)
          formData.append("twelfthMarksheet", newEmployee.twelfthMarksheet);
        if (newEmployee.bachelorsCertificate)
          formData.append(
            "bachelorsCertificate",
            newEmployee.bachelorsCertificate
          );
        if (newEmployee.pgCertificate)
          formData.append("pgCertificate", newEmployee.pgCertificate);
        if (newEmployee.aadharCard)
          formData.append("aadharCard", newEmployee.aadharCard);
        if (newEmployee.panCard)
          formData.append("panCard", newEmployee.panCard);
        if (newEmployee.policeClearance)
          formData.append("policeClearance", newEmployee.policeClearance);
        if (newEmployee.resume) formData.append("resume", newEmployee.resume);
        if (newEmployee.offerLetter)
          formData.append("offerLetter", newEmployee.offerLetter);
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }
        // Post the data to the backend
        await axios.post(
          "http://localhost:8080/employees/addEmployee",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        fetchEmployees();
        alert("Employee added successfully");
      } catch (e) {
        console.error("Error adding Employee:", e);
        setErrorMessage(`Error adding Employee.${e.error}`);
      }
      // Reset form
      setNewEmployee({
        fullName: "",
        email: "",
        phoneNumber: "",
        whatsappNumber: "",
        linkedinUrl: "",
        currentAddress: "",
        permanentAddress: "",
        photo: null,
        collegeName: "",
        role: "",
        department: "",
        joiningDate: "",
        internshipDuration: "",
        status: "Active",
        tenthMarksheet: null,
        twelfthMarksheet: null,
        bachelorsCertificate: null,
        pgCertificate: null,
        aadharCard: null,
        panCard: null,
        policeClearance: null,
        resume: null,
        offerLetter: null,
        isWhatsAppSameAsPhone: false,
      });

      setIsAddingEmployee(false);
      setActiveSection("personal");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setNewEmployee({
        ...newEmployee,
        [name]: files[0],
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await axios.delete(
        `http://localhost:8080/employees/deleteEmployee/${id}`
      );
      alert("Employee deleted successfully");
      fetchEmployees();
      setErrorMessage(null);
    } catch (err) {
      console.error("Error deleting employee:", err);
      setErrorMessage("Failed to delete employee. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const filteredEmployees =
    employees.length > 0
      ? employees.filter(
          (emp) =>
            emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.role?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  // Fetch employees when component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div className="w-full p-4 sm:p-6 bg-white rounded-lg shadow">
    {loading ? (
      <p className="text-center">Loading employees...</p>
    ) : (
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Employee Management
          </h1>
          <button
            onClick={() => setIsAddingEmployee(!isAddingEmployee)}
            className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={18} className="mr-2" />
            Add Employee
          </button>
        </div>
  
        {/* Search */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search employees by name, email, department or role..."
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
  
        {/* Add Employee Form */}
        {isAddingEmployee && (
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>
  
            <PersonalInfoSection
              activeSection={activeSection}
              toggleSection={toggleSection}
              newEmployee={newEmployee}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              setNewEmployee={setNewEmployee}
            />
            <EducationalInfoSection
              activeSection={activeSection}
              toggleSection={toggleSection}
              newEmployee={newEmployee}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              setNewEmployee={setNewEmployee}
            />
            <IdentityVerificationInfoSection
              activeSection={activeSection}
              toggleSection={toggleSection}
              newEmployee={newEmployee}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              setNewEmployee={setNewEmployee}
            />
            <EmploymentSpecificInfoSection
              activeSection={activeSection}
              toggleSection={toggleSection}
              newEmployee={newEmployee}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              setNewEmployee={setNewEmployee}
            />
  
            {/* Form buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                onClick={() => {
                  setIsAddingEmployee(false);
                  setErrorMessage(null);
                }}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmployee}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Employee
              </button>
            </div>
          </div>
        )}
  
        {/* Error Message */}
        {errorMessage && (
          <p className="text-center my-5 text-red-500">{errorMessage}</p>
        )}
  
        {/* Employee Table */}
        <EmployeeTable
          employees={employees}
          filteredEmployees={filteredEmployees}
          onDelete={handleDelete}
          setIsEditingEmployee={setIsEditingEmployee}
          setEditingEmployeeId={setEditingEmployeeId}
        />
  
        {/* Edit Employee Dialog */}
        {isEditingEmployee && (
          <div>
            <EditEmployee
              employeeId={editingEmployeeId}
              onClose={() => {
                setIsEditingEmployee(false);
                setEditingEmployeeId(null);
                fetchEmployees();
              }}
            />
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default EmployeeManagement;