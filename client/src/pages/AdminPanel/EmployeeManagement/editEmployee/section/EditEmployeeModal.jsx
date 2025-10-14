// components/EditEmployeeModal.jsx

import { X, Save } from "lucide-react";
import React from "react";

const EditEmployeeModal = ({
  formData,
  handleChange,
  handleSubmit,
  onClose,
  saving,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg my-8">
        <div className="flex justify-between items-center mt-10 mb-2">
          <h2 className="text-xl font-bold">Edit Employee</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto max-h-screen pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information Section */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Personal Information
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="whatsappNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  WhatsApp Number
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isWhatsAppSameAsPhone"
                    name="isWhatsAppSameAsPhone"
                    checked={formData.isWhatsAppSameAsPhone}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="isWhatsAppSameAsPhone"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Same as phone
                  </label>
                </div>
              </div>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                disabled={formData.isWhatsAppSameAsPhone}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:text-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="linkedinUrl"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn URL
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="currentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Current Address
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                rows={2}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Permanent Address
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                rows={2}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Employment Information */}
            <div className="md:col-span-2 mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Employment Information
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
            </div>

            <div>
              <label
                htmlFor="collegeName"
                className="block text-sm font-medium text-gray-700"
              >
                College Name
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Role</option>
                <option value="Intern">Intern</option>
                <option value="Full-time Employee">Full-time Employee</option>
                <option value="Part-time Employee">Part-time Employee</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Department</option>
                <option value="Tech">Tech</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="joiningDate"
                className="block text-sm font-medium text-gray-700"
              >
                Joining Date
              </label>
              <input
                type="date"
                id="joiningDate"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {formData.role === "Intern" && (
              <div>
                <label
                  htmlFor="internshipDuration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Internship Duration
                </label>
                <input
                  type="text"
                  id="internshipDuration"
                  name="internshipDuration"
                  value={formData.internshipDuration}
                  onChange={handleChange}
                  placeholder="e.g. 3 months"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Resigned">Resigned</option>
                <option value="Terminated">Terminated</option>
              </select>
            </div>

            {/* Documents Section */}
            <div className="md:col-span-2 mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Documents
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-medium mb-2">
                Educational Documents
              </div>

              <div>
                <label
                  htmlFor="tenthMarksheet"
                  className="block font-medium mb-1"
                >
                  10th Marksheet
                </label>

                <input
                  type="file"
                  id="tenthMarksheet"
                  name="tenthMarksheet"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="twelfthMarksheet"
                  className="block font-medium mb-1"
                >
                  12th Marksheet
                </label>
                <input
                  type="file"
                  id="twelfthMarksheet"
                  name="twelfthMarksheet"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="bachelorsCertificate"
                  className="block font-medium mb-1"
                >
                  Bachelor's Certificate
                </label>
                <input
                  type="file"
                  id="bachelorsCertificate"
                  name="bachelorsCertificate"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="pgCertificate"
                  className="block font-medium mb-1"
                >
                  PG Certificate
                </label>

                <input
                  type="file"
                  id="pgCertificate"
                  name="pgCertificate"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="text-lg font-medium mb-2">Identity Documents</div>

              <div>
                <label htmlFor="aadharCard" className="block font-medium mb-1">
                  Aadhar Card
                </label>
                <input
                  type="file"
                  id="aadharCard"
                  name="aadharCard"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="panCard" className="block font-medium mb-1">
                  PAN Card
                </label>
                <input
                  type="file"
                  id="panCard"
                  name="panCard"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="policeClearance"
                  className="block font-medium mb-1"
                >
                  Police Clearance
                </label>
                <input
                  type="file"
                  id="policeClearance"
                  name="policeClearance"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="text-lg font-medium mb-2">
                Professional Documents
              </div>

              <div>
                <label htmlFor="resume" className="block font-medium mb-1">
                  Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="offerLetter" className="block font-medium mb-1">
                  Offer Letter
                </label>
                <input
                  type="file"
                  id="offerLetter"
                  name="offerLetter"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;