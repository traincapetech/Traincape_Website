import React from 'react';
import { FaDownload, FaFilePdf, FaEye } from 'react-icons/fa';

const PdfBrochure = ({ courseName, pdfPath, className = "" }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${courseName}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-lg ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-red-500 p-3 rounded-lg">
            <FaFilePdf className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{courseName}</h3>
            <p className="text-gray-600">Download the official course brochure</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleView}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <FaEye className="text-sm" />
            <span>View</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <FaDownload className="text-sm" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfBrochure;
