import React, { useState } from "react";
import axios from "axios";
import Certificate from "../../assets/Certificate.png";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleCertificateIdChange = (e) => {
    setCertificateId(e.target.value);
  };

  const handleVerify = async () => {
    try {
      setVerifying(true);
      setVerificationResult(null);
      setError(null);

      const response = await axios.get(
        `https://traincape-backend-1.onrender.com/results/verifyCertificate?certificateId=${certificateId}`
      );

      if (response.data.success) {
        setVerificationResult(response.data.result);
      } else {
        setError("Certificate could not be verified.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during verification.");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white = rounded-lg shadow-xl xl:w-[70%] lg:w-[90%] w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Verify Certificate
        </h2>

        <div className="mb-4 p-4 md:p-6 flex items-center space-x-4">
          <div className="flex-1">
            <label
              htmlFor="certificateId"
              className="block text-sm font-semibold"
            >
              Enter Certificate ID:
            </label>
            <input
              type="text"
              id="certificateId"
              value={certificateId}
              onChange={handleCertificateIdChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter Certificate ID"
            />
          </div>

          <button
            onClick={handleVerify}
            className="px-4 py-1.5 mt-7 bg-blue-500 text-white text-base md:text-xl font-semibold rounded hover:bg-blue-700"
          >
            Verify
          </button>
        </div>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {verificationResult && (
          <div className="relative">
            <img src={Certificate} className="w-full" alt="Certificate" />
            
            <div className="absolute top-[45%] md:top-[48%] xl:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-center text-white">
              <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-vibes text-indigo-800 md:mb-2 ">
                {verificationResult.name}
              </h1>
              </div>
              <div className="absolute top-[52.5%] left-[40%] md:left-[43%] lg:left-[45%] xl:left-[41%] lg:text-3xl transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white">
              <p className="text-[6px] sm:text-xs md:text-base lg:text-lg text-black font-bold uppercase">
                {verificationResult.course} - {verificationResult.subTopic}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;