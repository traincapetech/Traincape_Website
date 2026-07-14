import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import API_BASE_URL from "../../config/api";

const VideoCourseSuccess = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const sessionId = params.get("session_id");
        const email = params.get("email");

        if (!sessionId || !email) {
          setError("Missing checkout session identifiers. Check your email confirmation.");
          setLoading(false);
          return;
        }

        const baseUrl = API_BASE_URL || "http://localhost:3001";
        const res = await axios.get(`${baseUrl}/payments/stripe-success`, {
          params: { session_id: sessionId, email: email }
        });

        if (res.data.success) {
          toast.success("Payment verified! Course unlocked.");

          // Attempt to extract the course ID from the productMetadata transaction details
          let courseId = "";
          try {
            const rawMeta = res.data.transaction?.metadata?.productMetadata;
            if (rawMeta) {
              const meta = JSON.parse(rawMeta);
              if (meta && meta.length > 0) {
                courseId = meta[0].productId;
              }
            }
          } catch (e) {
            console.error("Error parsing product metadata:", e);
          }

          // Redirect to the course details page (if found) or fallback to general course page
          setTimeout(() => {
            if (courseId) {
              navigate(`/video-courses/${courseId}`);
            } else {
              navigate("/video-courses");
            }
          }, 3000);
        } else {
          setError(res.data.message || "Failed to confirm payment status.");
        }
      } catch (err) {
        console.error("Success verification failure:", err);
        setError("Error communicating with servers. Rest assured, your payment was recorded.");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [location, navigate]);

  return (
    <>
      <Helmet>
        <title>Payment Verification - Traincape Technology</title>
      </Helmet>

      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl space-y-6">
          {loading ? (
            <div className="space-y-4">
              <Loader className="w-16 h-16 text-teal-400 animate-spin mx-auto" />
              <h2 className="text-2xl font-bold">Verifying Payment...</h2>
              <p className="text-slate-400 text-sm">
                Confirming purchase state with Stripe networks. Do not close this window.
              </p>
            </div>
          ) : error ? (
            <div className="space-y-4">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
              <h2 className="text-2xl font-bold text-red-400">Verification Alert</h2>
              <p className="text-slate-400 text-sm bg-red-950/20 border border-red-500/20 p-3 rounded-xl">
                {error}
              </p>
              <button
                onClick={() => navigate("/video-courses")}
                className="w-full py-3 bg-red-800 hover:bg-red-700 transition-colors rounded-xl font-semibold"
              >
                Back to Courses
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
              <h2 className="text-2xl font-bold text-green-400">Purchase Confirmed!</h2>
              <p className="text-slate-300 text-sm">
                Thank you! Your transaction completed successfully.
              </p>
              <p className="text-slate-500 text-xs animate-pulse">
                Unlocking videos and redirecting you to course dashboard...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCourseSuccess;
