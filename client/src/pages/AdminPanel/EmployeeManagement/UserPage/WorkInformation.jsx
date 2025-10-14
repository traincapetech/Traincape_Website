export const EmploymentDetails = ({ employee }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Employment Details</h3>
      <div className="space-y-3">
        <div className="flex">
          <span className="text-gray-600 w-32">Role:</span>
          <span>{employee.role || "N/A"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-600 w-32">Department:</span>
          <span>{employee.department || "N/A"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-600 w-32">Joining Date:</span>
          <span>{employee.joiningDate || "N/A"}</span>
        </div>
      </div>
    </div>
  );

  export const InternshipDuration = ({ employee }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Internship Duration</h3>
      <div className="space-y-3">
        <div className="flex">
          <span className="text-gray-600 w-32">Duration:</span>
          <span>{employee.internshipDuration || "N/A"}</span>
        </div>
      </div>
    </div>
  );

export  const StatusInformation = ({ employee }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Status</h3>
      <div className="space-y-3">
        <div className="flex">
          <span className="text-gray-600 w-32">Status:</span>
          <span>{employee.status || "N/A"}</span>
        </div>
      </div>
    </div>
  );
  
  