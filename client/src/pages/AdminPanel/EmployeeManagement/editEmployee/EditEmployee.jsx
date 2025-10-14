import { useState, useEffect } from "react";
import { X, Save, CheckCircle } from "lucide-react";
import axios from "axios";
import EditEmployeeModal from "./section/EditEmployeeModal";

export default function EditEmployee({ employeeId, onClose }) {

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
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

  // Simulate fetching employee data
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // Simulate API call delay
      const response = await axios.get(
        `http://localhost:8080/employees/getEmployee/${employeeId}`
      );
      console.log("Data from backend is--->", response.data);
      const fetchedData = response.data.data;

      // Set file fields to null explicitly
      const cleanData = {
        ...fetchedData,
        photo: null,
        tenthMarksheet: null,
        twelfthMarksheet: null,
        bachelorsCertificate: null,
        pgCertificate: null,
        aadharCard: null,
        panCard: null,
        policeClearance: null,
        resume: null,
        offerLetter: null,
      };

      setFormData(cleanData);
      setLoading(false);
    };

    fetchData();
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => {
      if (type === "file") {
        return {
          ...prev,
          [name]: files[0] || null,
        };
      }

      if (type === "checkbox") {
        if (name === "isWhatsAppSameAsPhone") {
          return {
            ...prev,
            [name]: checked,
            whatsappNumber: checked ? prev.phoneNumber : prev.whatsappNumber,
          };
        } else {
          return {
            ...prev,
            [name]: checked,
          };
        }
      }

      if (name === "phoneNumber") {
        return {
          ...prev,
          [name]: value,
          whatsappNumber: prev.isWhatsAppSameAsPhone
            ? value
            : prev.whatsappNumber,
        };
      }

      // ✅ Allow whatsappNumber to be updated if it's being edited directly
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const sendingData = new FormData();

    // Append text fields
    sendingData.append("fullName", formData.fullName);
    sendingData.append("email", formData.email);
    sendingData.append("phoneNumber", formData.phoneNumber);
    sendingData.append("whatsappNumber", formData.whatsappNumber);
    sendingData.append("linkedinUrl", formData.linkedinUrl);
    sendingData.append("currentAddress", formData.currentAddress);
    sendingData.append("permanentAddress", formData.permanentAddress);
    sendingData.append("collegeName", formData.collegeName);
    sendingData.append("role", formData.role);
    sendingData.append("department", formData.department);
    sendingData.append("joiningDate", formData.joiningDate);
    sendingData.append("internshipDuration", formData.internshipDuration);
    sendingData.append("status", formData.status);

    // Append file fields (only if not null)
    if (formData.photo) sendingData.append("photo", formData.photo);
    if (formData.tenthMarksheet)
      sendingData.append("tenthMarksheet", formData.tenthMarksheet);
    if (formData.twelfthMarksheet)
      sendingData.append("twelfthMarksheet", formData.twelfthMarksheet);
    if (formData.bachelorsCertificate)
      sendingData.append(
        "bachelorsCertificate",
        formData.bachelorsCertificate
      );
    if (formData.pgCertificate)
      sendingData.append("pgCertificate", formData.pgCertificate);
    if (formData.aadharCard)
      sendingData.append("aadharCard", formData.aadharCard);
    if (formData.panCard) sendingData.append("panCard", formData.panCard);
    if (formData.policeClearance)
      sendingData.append("policeClearance", formData.policeClearance);
    if (formData.resume) sendingData.append("resume", formData.resume);
    if (formData.offerLetter)
      sendingData.append("offerLetter", formData.offerLetter);
    for (let [key, value] of sendingData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/employees/updateEmployee/${employeeId}`,
        sendingData, // Missing data parameter for what needs to be updated,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSaving(false);
      onClose();
      alert('Employee updated successfully');
    } catch (error) {
      console.error("Error saving employee data:", error);
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Edit Employee</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="py-8 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <EditEmployeeModal
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onClose={onClose}
        saving={saving}
      />
  </>
  );
}