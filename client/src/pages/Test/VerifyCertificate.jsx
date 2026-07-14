import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import Logo from "../../assets/apple-touch-icon.png";
import API_BASE_URL from "../../config/api";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [error, setError] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const location = useLocation();
  const certificateRef = useRef();

  // Auto-verify if ID is in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("certificateId") || params.get("id");
    if (id) {
      setCertificateId(id);
      verifyCertificate(id);
    }
  }, [location.search]);

  const handleCertificateIdChange = (e) => {
    setCertificateId(e.target.value);
  };

  const verifyCertificate = async (id) => {
    if (!id.trim()) {
      setError("Please enter a Certificate ID.");
      return;
    }
    try {
      setVerifying(true);
      setVerificationResult(null);
      setError(null);

      const response = await axios.get(
        `${API_BASE_URL}/results/verifyCertificate?certificateId=${encodeURIComponent(id.trim())}`
      );

      if (response.data.success) {
        setVerificationResult(response.data.result);
      } else {
        setError("Certificate could not be verified. Please check the ID.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred during verification."
      );
    } finally {
      setVerifying(false);
    }
  };

  const handleVerify = () => {
    verifyCertificate(certificateId);
  };

  const downloadPDF = () => {
    if (!verificationResult) return;

    // Fallback values if API returns slightly different keys
    const courseName = verificationResult.course || "Course";
    const subTopic = verificationResult.subTopic || "Certification";

    const options = {
      margin: 0,
      filename: `${courseName}_${subTopic}_Certificate.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    };
    html2pdf().from(certificateRef.current).set(options).save();
  };

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Verify Certificate
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Enter the unique Certificate ID to verify authenticity.
          </p>
        </div>

        {/* Verification Form */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 p-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-grow">
              <label htmlFor="certificateId" className="sr-only">
                Certificate ID
              </label>
              <input
                id="certificateId"
                name="certificateId"
                type="text"
                required
                className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-lg transition duration-200"
                placeholder="Enter Certificate ID..."
                value={certificateId}
                onChange={handleCertificateIdChange}
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              />
            </div>
            <button
              onClick={handleVerify}
              disabled={verifying}
              className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 shadow-md ${verifying ? "opacity-75 cursor-not-allowed" : ""
                }`}
            >
              {verifying ? "Verifying..." : "Verify Now"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Certificate Display */}
        {verificationResult && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {/* LEFT — Certificate */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-4">
                {/* ===== HTML CERTIFICATE ===== */}
                <div
                  ref={certificateRef}
                  style={{
                    width: "100%",
                    aspectRatio: "1.414 / 1",
                    background: "linear-gradient(135deg, #fdfcfb 0%, #f9f7f4 100%)",
                    border: "3px solid #c9a84c",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "hidden",
                    padding: "4% 6%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Gold ornamental corner decorations */}
                  {/* Top-left */}
                  <svg style={{ position: "absolute", top: "0", left: "0", width: "100px", height: "100px" }} viewBox="0 0 100 100" fill="none">
                    <path d="M0,0 C0,0 30,5 50,25 C30,30 10,20 0,0Z" fill="#c9a84c" opacity="0.3"/>
                    <path d="M0,0 C5,15 15,30 35,40 C15,35 5,20 0,0Z" fill="#c9a84c" opacity="0.5"/>
                    <path d="M0,5 Q20,20 40,25 Q20,30 5,15Z" fill="#c9a84c" opacity="0.2"/>
                    <circle cx="20" cy="20" r="3" fill="#c9a84c" opacity="0.6"/>
                    <circle cx="35" cy="35" r="2" fill="#c9a84c" opacity="0.4"/>
                  </svg>
                  {/* Top-right */}
                  <svg style={{ position: "absolute", top: "0", right: "0", width: "100px", height: "100px", transform: "scaleX(-1)" }} viewBox="0 0 100 100" fill="none">
                    <path d="M0,0 C0,0 30,5 50,25 C30,30 10,20 0,0Z" fill="#c9a84c" opacity="0.3"/>
                    <path d="M0,0 C5,15 15,30 35,40 C15,35 5,20 0,0Z" fill="#c9a84c" opacity="0.5"/>
                    <path d="M0,5 Q20,20 40,25 Q20,30 5,15Z" fill="#c9a84c" opacity="0.2"/>
                    <circle cx="20" cy="20" r="3" fill="#c9a84c" opacity="0.6"/>
                    <circle cx="35" cy="35" r="2" fill="#c9a84c" opacity="0.4"/>
                  </svg>
                  {/* Bottom-left */}
                  <svg style={{ position: "absolute", bottom: "0", left: "0", width: "100px", height: "100px", transform: "scaleY(-1)" }} viewBox="0 0 100 100" fill="none">
                    <path d="M0,0 C0,0 30,5 50,25 C30,30 10,20 0,0Z" fill="#c9a84c" opacity="0.3"/>
                    <path d="M0,0 C5,15 15,30 35,40 C15,35 5,20 0,0Z" fill="#c9a84c" opacity="0.5"/>
                    <path d="M0,5 Q20,20 40,25 Q20,30 5,15Z" fill="#c9a84c" opacity="0.2"/>
                    <circle cx="20" cy="20" r="3" fill="#c9a84c" opacity="0.6"/>
                    <circle cx="35" cy="35" r="2" fill="#c9a84c" opacity="0.4"/>
                  </svg>
                  {/* Bottom-right */}
                  <svg style={{ position: "absolute", bottom: "0", right: "0", width: "100px", height: "100px", transform: "scale(-1,-1)" }} viewBox="0 0 100 100" fill="none">
                    <path d="M0,0 C0,0 30,5 50,25 C30,30 10,20 0,0Z" fill="#c9a84c" opacity="0.3"/>
                    <path d="M0,0 C5,15 15,30 35,40 C15,35 5,20 0,0Z" fill="#c9a84c" opacity="0.5"/>
                    <path d="M0,5 Q20,20 40,25 Q20,30 5,15Z" fill="#c9a84c" opacity="0.2"/>
                    <circle cx="20" cy="20" r="3" fill="#c9a84c" opacity="0.6"/>
                    <circle cx="35" cy="35" r="2" fill="#c9a84c" opacity="0.4"/>
                  </svg>

                  {/* TOP: Logo + Title */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 1 }}>
                    <div style={{ 
                      width: "70px", height: "70px", 
                      background: "#1a1a5e", 
                      borderRadius: "8px", 
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "8px"
                    }}>
                      <img src={Logo} alt="Traincape" style={{ width: "100%", filter: "brightness(0) invert(1)" }} />
                    </div>
                    <div>
                      <h1
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(24px, 3.5vw, 48px)",
                          fontWeight: "700",
                          color: "#1a1a5e",
                          margin: "0",
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          lineHeight: "1.1",
                        }}
                      >
                        Certificate
                      </h1>
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(12px, 1.8vw, 20px)",
                          fontWeight: "400",
                          color: "#c9a84c",
                          margin: "2px 0 0",
                          letterSpacing: "4px",
                          textTransform: "uppercase",
                        }}
                      >
                        {verificationResult.isAdminCert ? "of Completion" : "of Achievement"}
                      </p>
                    </div>
                  </div>

                  {/* AWARDED TO */}
                  <div style={{ textAlign: "center", zIndex: 1, width: "100%" }}>
                    <p
                      style={{
                        fontSize: "clamp(11px, 1.4vw, 16px)",
                        color: "#1a1a5e",
                        textTransform: "uppercase",
                        letterSpacing: "4px",
                        fontWeight: "700",
                        marginBottom: "8px",
                      }}
                    >
                      This Certificate is Awarded to
                    </p>

                    {/* NAME BLOCK — cursive */}
                    <div
                      style={{
                        display: "inline-block",
                        minWidth: "300px",
                        maxWidth: "80%",
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "'Great Vibes', cursive",
                          fontSize: "clamp(28px, 4.5vw, 56px)",
                          fontWeight: "400",
                          color: "#1a1a2e",
                          margin: "0",
                          lineHeight: "1.2",
                        }}
                      >
                        {verificationResult.name}
                      </h2>
                      <div style={{ 
                        height: "2px", 
                        background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", 
                        margin: "4px auto 0",
                        width: "80%",
                      }} />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div style={{ textAlign: "center", zIndex: 1, maxWidth: "80%", marginTop: "-4px" }}>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(9px, 1.2vw, 14px)",
                        color: "#444",
                        lineHeight: "1.7",
                        margin: "0",
                      }}
                    >
                      {verificationResult.isAdminCert ? (
                        <>
                          for successfully completing the{" "}
                          <strong style={{ color: "#1a1a5e" }}>{verificationResult.course}</strong>{" "}
                          Training Program. Through commitment and active participation,{" "}
                          has demonstrated proficiency in the relevant concepts, governance practices,{" "}
                          and professional fundamentals.
                        </>
                      ) : (
                        <>
                          For successfully completing the{" "}
                          <strong style={{ color: "#1a1a5e" }}>{verificationResult.subTopic}</strong>{" "}
                          assessment under{" "}
                          <strong style={{ color: "#1a1a5e" }}>{verificationResult.course}</strong>{" "}
                          from Traincape Technology.
                        </>
                      )}
                    </p>
                  </div>

                  {/* BOTTOM: Certificate ID + Verification URL + Signature */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      width: "100%",
                      zIndex: 1,
                      marginTop: "auto",
                    }}
                  >
                    {/* Certificate ID & Date (left) */}
                    <div style={{ textAlign: "left", flex: "0 0 200px" }}>
                      <p style={{ fontSize: "10px", fontFamily: "monospace", color: "#666", margin: "0 0 4px" }}>
                        Certificate ID: {certificateId}
                      </p>
                      <p style={{ fontSize: "10px", color: "#999", margin: "0" }}>
                        {verificationResult.issueDate 
                          ? new Date(verificationResult.issueDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) 
                          : today}
                      </p>
                    </div>

                    {/* Verification URL + Seal (center) */}
                    <div style={{ textAlign: "center", flex: "1" }}>
                      {/* Seal */}
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          border: "3px solid #c9a84c",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(135deg, #fdf6d8 0%, #c9a84c 100%)",
                          boxShadow: "0 2px 8px rgba(201,168,76,0.4)",
                          margin: "0 auto 4px",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <span style={{ fontSize: "6px", fontWeight: "bold", color: "#1a1a5e", letterSpacing: "1px", display: "block" }}>
                            ★ TRAINCAPE ★
                          </span>
                          <span style={{ fontSize: "8px", fontWeight: "900", color: "#1a1a5e", display: "block", margin: "1px 0" }}>
                            VERIFIED
                          </span>
                          <span style={{ fontSize: "5px", color: "#1a1a5e", display: "block", letterSpacing: "0.5px" }}>
                            TECHNOLOGY
                          </span>
                        </div>
                      </div>
                      <p style={{ fontSize: "8px", color: "#888", margin: "0", letterSpacing: "0.5px" }}>
                        www.traincapetech.in/verify-certificate
                      </p>
                    </div>

                    {/* Signature (right) */}
                    <div style={{ textAlign: "center", flex: "0 0 180px" }}>
                      {/* Logo small */}
                      <p style={{ 
                        fontSize: "9px", fontWeight: "800", color: "#1a1a5e", 
                        textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 2px",
                        lineHeight: "1.2",
                      }}>
                        Traincape<br/>Technology
                      </p>
                      {/* Cursive signature */}
                      <p
                        style={{
                          fontFamily: "'Great Vibes', cursive",
                          fontSize: "clamp(18px, 2vw, 26px)",
                          color: "#1a1a2e",
                          margin: "4px 0 2px",
                          lineHeight: "1",
                        }}
                      >
                        Parichay Singh Rana
                      </p>
                      <div style={{ borderTop: "1px solid #999", paddingTop: "4px", display: "inline-block", minWidth: "120px" }}>
                        <p style={{ fontSize: "11px", color: "#333", fontWeight: "600", margin: "0" }}>
                          Parichay Singh Rana
                        </p>
                        <p style={{ fontSize: "9px", color: "#888", margin: "2px 0 0" }}>Founder & CEO</p>
                      </div>
                    </div>
                  </div>

                </div>
                {/* ===== END CERTIFICATE ===== */}
              </div>

              <div className="bg-green-50 p-4 border border-green-200 rounded-xl mt-4 flex items-center justify-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-800 font-bold">Valid Certificate Verified</span>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div>
              <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-sm font-bold text-gray-500 uppercase mb-3">
                  Recipient
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {verificationResult.name ? verificationResult.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <p className="text-lg font-bold">{verificationResult.name}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-sm font-bold text-gray-500 uppercase mb-3">
                  Course Details
                </h2>
                <p className="text-sm font-semibold mb-1">{verificationResult.course}</p>
                {!verificationResult.isAdminCert && verificationResult.subTopic !== verificationResult.course && (
                  <p className="text-sm text-gray-600">Topic: {verificationResult.subTopic}</p>
                )}
                {verificationResult.isAdminCert && verificationResult.issuedBy && (
                  <p className="text-sm text-gray-600">Issued By: {verificationResult.issuedBy}</p>
                )}
                <p className="text-sm text-gray-600">
                  {verificationResult.issueDate 
                    ? `Issued: ${new Date(verificationResult.issueDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}` 
                    : `Verified On: ${today}`}
                </p>
                <p className="text-xs font-mono mt-2 text-gray-500 truncate" title={certificateId}>
                  ID: {certificateId}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-6 space-y-3">
                <button
                  onClick={downloadPDF}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  ⬇ Download PDF
                </button>
                <button
                  onClick={() => {
                    const url = `${window.location.origin}/verify-certificate?id=${encodeURIComponent(certificateId)}`;
                    navigator.clipboard.writeText(url);
                    alert("Certificate link copied to clipboard!");
                  }}
                  className="w-full border border-gray-300 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
                >
                  🔗 Copy Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;