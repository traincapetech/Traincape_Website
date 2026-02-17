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
  const navigate = useNavigate();
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
        `${API_BASE_URL}/results/verifyCertificate?certificateId=${id.trim()}`
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
                    border: "8px solid #1a1a5e",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "hidden",
                    padding: "5% 8%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Gold inner border */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      right: "12px",
                      bottom: "12px",
                      border: "2px solid #c9a84c",
                      borderRadius: "2px",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Corner decorations */}
                  <div style={{ position: "absolute", top: "8px", left: "8px", width: "60px", height: "60px", borderTop: "4px solid #c9a84c", borderLeft: "4px solid #c9a84c" }} />
                  <div style={{ position: "absolute", top: "8px", right: "8px", width: "60px", height: "60px", borderTop: "4px solid #c9a84c", borderRight: "4px solid #c9a84c" }} />
                  <div style={{ position: "absolute", bottom: "8px", left: "8px", width: "60px", height: "60px", borderBottom: "4px solid #c9a84c", borderLeft: "4px solid #c9a84c" }} />
                  <div style={{ position: "absolute", bottom: "8px", right: "8px", width: "60px", height: "60px", borderBottom: "4px solid #c9a84c", borderRight: "4px solid #c9a84c" }} />

                  {/* TOP: Logo */}
                  <div style={{ textAlign: "center", zIndex: 1 }}>
                    <img src={Logo} alt="Traincape" style={{ height: "50px", marginBottom: "4px" }} />
                    <p style={{ fontSize: "10px", color: "#666", letterSpacing: "2px", textTransform: "uppercase" }}>
                      ISO/IEC 27001:2022
                    </p>
                  </div>

                  {/* TITLE */}
                  <div style={{ textAlign: "center", zIndex: 1, marginTop: "-8px" }}>
                    <h1
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(28px, 4vw, 52px)",
                        fontWeight: "700",
                        color: "#1a1a5e",
                        margin: "0",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                      }}
                    >
                      Certificate
                    </h1>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(14px, 2vw, 22px)",
                        fontWeight: "400",
                        color: "#333",
                        margin: "4px 0 0",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      of Achievement
                    </p>
                  </div>

                  {/* PRESENTED TO */}
                  <div style={{ textAlign: "center", zIndex: 1, marginTop: "-8px" }}>
                    <p
                      style={{
                        fontSize: "clamp(10px, 1.2vw, 14px)",
                        color: "#c9a84c",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        marginBottom: "8px",
                      }}
                    >
                      This Certificate is Presented to
                    </p>

                    {/* NAME BLOCK */}
                    <div
                      style={{
                        borderBottom: "2px solid #c9a84c",
                        paddingBottom: "8px",
                        display: "inline-block",
                        minWidth: "300px",
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(24px, 3.5vw, 44px)",
                          fontWeight: "600",
                          color: "#1a1a2e",
                          margin: "0",
                          letterSpacing: "1px",
                        }}
                      >
                        {verificationResult.name}
                      </h2>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div style={{ textAlign: "center", zIndex: 1, maxWidth: "80%", marginTop: "-4px" }}>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(10px, 1.3vw, 15px)",
                        color: "#444",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      For successfully completing the{" "}
                      <strong style={{ color: "#1a1a5e" }}>{verificationResult.subTopic}</strong>{" "}
                      assessment under{" "}
                      <strong style={{ color: "#1a1a5e" }}>{verificationResult.course}</strong>{" "}
                      from Traincape Technology.
                    </p>
                  </div>

                  {/* BOTTOM: Date + Seal + Signature */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      width: "100%",
                      zIndex: 1,
                      marginTop: "-4px",
                      position: "relative",
                    }}
                  >
                    {/* Date (left) */}
                    <div style={{ textAlign: "center", flex: "0 0 160px" }}>
                      <p style={{ fontSize: "12px", color: "#666", borderTop: "1px solid #999", paddingTop: "4px", minWidth: "120px", margin: "0" }}>
                        {today}
                      </p>
                      <p style={{ fontSize: "10px", color: "#999", margin: "2px 0 0" }}>Date</p>
                    </div>

                    {/* Spacer for seal */}
                    <div style={{ flex: "1" }} />

                    {/* Director + Signature (right) */}
                    <div style={{ textAlign: "center", flex: "0 0 160px" }}>
                      {/* Cursive signature */}
                      <p
                        style={{
                          fontFamily: "'Great Vibes', cursive",
                          fontSize: "clamp(22px, 2.5vw, 32px)",
                          color: "#1a1a2e",
                          margin: "0 0 2px",
                          lineHeight: "1",
                        }}
                      >
                        Parichay Singh
                      </p>
                      <p style={{ fontSize: "12px", color: "#333", fontWeight: "600", borderTop: "1px solid #999", paddingTop: "4px", minWidth: "120px", margin: "0" }}>
                        Parichay Singh
                      </p>
                      <p style={{ fontSize: "10px", color: "#999", margin: "2px 0 0" }}>Director</p>
                    </div>
                  </div>

                  {/* Seal / Stamp */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        border: "3px solid #c9a84c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #fdf6d8 0%, #c9a84c 100%)",
                        boxShadow: "0 2px 8px rgba(201,168,76,0.4)",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "7px", fontWeight: "bold", color: "#1a1a5e", letterSpacing: "1px", display: "block" }}>
                          ★ TRAINCAPE ★
                        </span>
                        <span style={{ fontSize: "9px", fontWeight: "900", color: "#1a1a5e", display: "block", margin: "1px 0" }}>
                          VERIFIED
                        </span>
                        <span style={{ fontSize: "6px", color: "#1a1a5e", display: "block", letterSpacing: "0.5px" }}>
                          TECHNOLOGY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate ID */}
                  <p style={{ fontSize: "8px", color: "#aaa", position: "absolute", bottom: "16px", right: "20px", fontFamily: "monospace" }}>
                    ID: {certificateId}
                  </p>
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
                <p className="text-sm font-semibold mb-1">{verificationResult.subTopic}</p>
                <p className="text-sm text-gray-600">Course: {verificationResult.course}</p>
                <p className="text-sm text-gray-600">Verified On: {today}</p>
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
                    const url = `${window.location.origin}/verify-certificate?id=${certificateId}`;
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