import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js"; // Import html2pdf.js
import Certificate from "../../assets/Certificate.png"; // Your certificate image

const CertificateTemplate = () => {
  const location = useLocation();
  const { username, courseName, subTopic, certificateId } = location.state || {};

  console.log("certificateId:", certificateId);

  const certificateRef = useRef(); // Reference to the certificate template container

  if (!username || !courseName || !subTopic) {
    return <p>Missing certificate details</p>;
  }

  const downloadPDF = () => {
    const options = {
      margin: [0, 0, 0, 0], // No margin
      filename: "certificate.pdf", // Name of the file
      image: { type: "png", quality: 1 }, // Image quality (if using images in PDF)
      html2canvas: { scale: 1 }, // Higher scale for better resolution
      jsPDF: { unit: "mm", format: "a3", orientation: "landscape" }, // A4 size, landscape mode
    };

    html2pdf()
      .from(certificateRef.current) // Reference to the certificate container
      .set(options)
      .save(); // Trigger download
  };

  return (
    <div className="">
      <div className="relative w-[80%] mx-auto " ref={certificateRef}>
        <img src={Certificate} className="w-full" alt="Certificate" />
        <div className="absolute bottom-5 right-2 text-black text-sm ">
          <p>ID : {certificateId}</p>
        </div>
        <div className="absolute top-0 left-0 w-full text-white">
          <h1 className="text-6xl text-center mt-[22rem]  w-full  font-extrabold font-vibes text-indigo-800 mb-2 ">
            {username}
          </h1>
          <p className="text-center text-black font-bold mt-[2.2rem] w-fit text-xl ml-[24.2rem] uppercase">
            {courseName} - {subTopic} 
          </p>
          
        </div>
      {/* <div className="relative w-[90%] mx-auto my-4 " ref={certificateRef}>
        <img src={Certificate} className="w-full" alt="Certificate" />

        <div className="absolute top-[45%] md:top-[45%] xl:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit text-center text-white">
          <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-vibes text-indigo-800  ">
            {username}
          </h1>
        </div>
        <div className="absolute top-[52.5%] left-[40%] md:left-[42.5%] lg:left-[42%] xl:left-[38%] lg:text-3xl transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white">
          <p className="text-[6px] sm:text-xs md:text-base lg:text-lg text-black font-bold uppercase">
            {courseName} - {subTopic}
          </p>
          </div> */}
          </div>

      {/* Button to trigger PDF download */}
      <div className="text-center mt-8 mb-4">
        <button
          onClick={downloadPDF}
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
          Download Certificate as PDF
        </button>
      </div>
    </div>
  );
};

export default CertificateTemplate;