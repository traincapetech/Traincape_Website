export const AddressInformation = ({ employee }) => (
    <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">
        Address Information
      </h3>
      <div className="space-y-3">
        <div>
          <span className="text-gray-600 block mb-1">Current Address:</span>
          <p className="bg-gray-50 p-2 rounded">
            {employee.currentAddress || "N/A"}
          </p>
        </div>
        <div>
          <span className="text-gray-600 block mb-1">Permanent Address:</span>
          <p className="bg-gray-50 p-2 rounded">
            {employee.permanentAddress || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
  export const EducationInformation = ({ employee }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Education</h3>
      <div className="space-y-3">
        <div className="flex">
          <span className="text-gray-600 w-32">College:</span>
          <span>{employee.collegeName || "N/A"}</span>
        </div>
      </div>
    </div>
  );
  
  export const ContactInformation = ({ employee }) => (
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6 mb-4 md:mb-0">
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">
          Contact Information
        </h3>
        <div className="space-y-3">
          <div className="flex">
            <span className="text-gray-600 w-32">Email:</span>
            <a
              href={`mailto:${employee.email}`}
              className="text-blue-600 hover:underline"
            >
              {employee.email}
            </a>
          </div>
          <div className="flex">
            <span className="text-gray-600 w-32">Phone:</span>
            <span>{employee.phoneNumber || "N/A"}</span>
          </div>
          <div className="flex">
            <span className="text-gray-600 w-32">WhatsApp:</span>
            <span>{employee.whatsappNumber || "N/A"}</span>
          </div>
          <div className="flex">
            <span className="text-gray-600 w-32">LinkedIn:</span>
            {employee.linkedinUrl ? (
              <a
                href={employee.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate max-w-xs"
              >
                {employee.linkedinUrl}
              </a>
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
      </div>
    );