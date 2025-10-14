import React, { useState } from "react";

const DocumentsSection = ({ employee }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const documents = {
    personal: [
      { key: "photo", label: "Profile Photo" },
      { key: "resume", label: "Resume" },
      { key: "aadharCard", label: "Aadhar Card" },
      { key: "panCard", label: "PAN Card" },
      { key: "policeClearance", label: "Police Clearance" },
    ],
    educational: [
      { key: "tenthMarksheet", label: "10th Marksheet" },
      { key: "twelfthMarksheet", label: "12th Marksheet" },
      { key: "bachelorsCertificate", label: "Bachelor's Certificate" },
      { key: "pgCertificate", label: "PG Certificate" },
    ],
    employment: [{ key: "offerLetter", label: "Offer Letter" }],
  };

  const toggleDocument = (section, key, label) => {
    setExpandedSections((prev) => {
      const newState = { ...prev };
      if (prev[section]?.key === key) {
        delete newState[section];
      } else {
        newState[section] = { key, label };
      }
      return newState;
    });
  };

  const DocumentPreview = ({ document, label }) => {
    if (!document || !document.data) {
      return <p className="text-red-500 text-center mt-4">No {label} found</p>;
    }

    return (
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 mt-6 shadow-md transition hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-5">
          {label}
        </h3>
        {renderDocumentContent(document)}
      </div>
    );
  };

  const renderDocumentContent = (doc) => {
    if (doc.contentType === "application/pdf") {
      const pdfData = `data:application/pdf;base64,${doc.data}`;
      return (
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <div className="relative w-full" style={{ paddingTop: "125%" }}>
            <iframe
              src={pdfData}
              title="PDF Viewer"
              className="absolute top-0 left-0 w-full h-full rounded-xl border border-gray-300"
            />
          </div>
        </div>
      );
    } else if (doc.contentType.startsWith("image/")) {
      return (
        <div className="flex justify-center">
          <img
            src={`data:${doc.contentType};base64,${doc.data}`}
            alt={doc.filename}
            className="rounded-xl shadow-md border border-gray-300 max-w-full max-h-[500px] object-contain"
          />
        </div>
      );
    } else {
      return <p className="text-red-500 text-center">Unsupported file type.</p>;
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(documents).map(([section, docs]) => (
        <div
          key={section}
          className="bg-white rounded-2xl shadow-md p-8 transition hover:shadow-lg"
        >
          <h4 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6 capitalize">
            {section} Documents
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docs.map(({ key, label }) => (
              <div key={key}>
                <h6
                  onClick={() => toggleDocument(section, key, label)}
                  className="text-lg font-medium cursor-pointer text-blue-600 hover:underline hover:text-blue-800 transition"
                >
                  {label}
                </h6>
              </div>
            ))}
          </div>

          {expandedSections[section] && (
            <DocumentPreview
              document={employee[expandedSections[section].key]}
              label={expandedSections[section].label}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentsSection;