// components/PersonalInfoSection.jsx
import { ChevronUp, ChevronDown } from "lucide-react";
// Role options
const roles = [
  "Intern",
  "Full-time Employee",
  "Part-time Employee",
  "Freelancer",
];

// Status options
const statusOptions = ["Active", "Completed", "Resigned", "Terminated"];

// Department options
const departments = ["Tech", "Sales", "Marketing", "HR"];

export const PersonalInfoSection = ({
  activeSection,
  toggleSection,
  newEmployee,
  handleInputChange,
  handleFileChange,
  setNewEmployee,
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
        onClick={() => toggleSection("personal")}
      >
        <span>1. Personal Information</span>
        {activeSection === "personal" ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {activeSection === "personal" && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number (optional if same as phone)
            </label>
            <input
              type="number"
              name="whatsappNumber"
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              value={
                newEmployee.isWhatsAppSameAsPhone
                  ? newEmployee.phoneNumber
                  : newEmployee.whatsappNumber
              }
              onChange={handleInputChange}
              disabled={newEmployee.isWhatsAppSameAsPhone}
            />
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                id="sameAsPhone"
                checked={newEmployee.isWhatsAppSameAsPhone}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setNewEmployee((prev) => ({
                    ...prev,
                    isWhatsAppSameAsPhone: checked,
                    whatsappNumber: checked ? prev.phoneNumber : "",
                  }));
                }}
              />
              <label htmlFor="sameAsPhone" className="text-sm text-gray-700">
                Same as Phone Number
              </label>
            </div>
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile URL (optional)
            </label>
            <input
              type="url"
              name="linkedinUrl"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.linkedinUrl}
              onChange={handleInputChange}
            />
          </div>

          {/* Current Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="currentAddress"
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.currentAddress}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Permanent Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Permanent Address (optional)
            </label>
            <textarea
              name="permanentAddress"
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.permanentAddress}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Photograph */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photograph (passport size) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const EducationalInfoSection = ({
  activeSection,
  toggleSection,
  newEmployee,
  handleInputChange,
  handleFileChange,
  setNewEmployee,
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
        onClick={() => toggleSection("education")}
      >
        <span>2. Educational Details</span>
        {activeSection === "education" ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {activeSection === "education" && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College/University Name (required for interns/freshers)
            </label>
            <input
              type="text"
              name="collegeName"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.collegeName}
              onChange={handleInputChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              10th Standard Marksheet <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="tenthMarksheet"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              12th Standard Marksheet <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="twelfthMarksheet"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bachelor's Degree Certificate (if applicable)
            </label>
            <input
              type="file"
              name="bachelorsCertificate"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postgraduate Degree Certificate (if applicable)
            </label>
            <input
              type="file"
              name="pgCertificate"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const IdentityVerificationInfoSection = ({
  activeSection,
  toggleSection,
  newEmployee,
  handleInputChange,
  handleFileChange,
  setNewEmployee,
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
        onClick={() => toggleSection("identity")}
      >
        <span>3. Identity & Verification Documents</span>
        {activeSection === "identity" ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {activeSection === "identity" && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhar Card <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="aadharCard"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PAN Card <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="panCard"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Police Clearance Certificate (PCC) (required for employees)
            </label>
            <input
              type="file"
              name="policeClearance"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resume/CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const EmploymentSpecificInfoSection = ({
  activeSection,
  toggleSection,
  newEmployee,
  handleInputChange,
  handleFileChange,
  setNewEmployee,
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
        onClick={() => toggleSection("employment")}
      >
        <span>4. Employment Specific Fields</span>
        {activeSection === "employment" ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {activeSection === "employment" && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role / Designation <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.role}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.department}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Joining Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="joiningDate"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.joiningDate}
              onChange={handleInputChange}
              required
            />
          </div>

          {newEmployee.role === "Intern" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Internship Duration (Months){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min="1"
                max="12"
                name="internshipDuration"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={newEmployee.internshipDuration}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newEmployee.status}
              onChange={handleInputChange}
              required
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Offer Letter Copy (if applicable)
            </label>
            <input
              type="file"
              name="offerLetter"
              accept=".pdf,.doc,.docx"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};