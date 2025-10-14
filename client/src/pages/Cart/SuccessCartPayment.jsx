import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useCartContext } from "../../components/CartContext";

const SuccessCartPayment = () => {
  const { clearCart } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [courseDetails, setCourseDetails] = useState([]);
  const [paidAmount, setPaidAmount] = useState(null);
  const [paidCurrency, setPaidCurrency] = useState('USD');
  const handleClearCart = () => {
    clearCart();
  };
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get URL parameters
        const params = new URLSearchParams(location.search);
        const sessionId = params.get("session_id");
        const email = params.get("email");

        if (!sessionId || !email) {
          setError(
            "Missing payment information - please check your confirmation email"
          );
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://traincape-backend-1.onrender.com/payments/stripe-success`,
          {
            params: {
              session_id: sessionId,
              email: email,
            },
            timeout: 10000, // 10 second timeout
          }
        );
        console.log("response.data", response.data);
        if (response.data.success) {
          console.log(
            "The data received from backend success page is ---->",
            response.data
          );
          setMessage(
            response.data.message ||
              "Purchase has been made successfuuly successful!"
          );

          if (response.data.transaction) {
            setCourseDetails(response.data.transaction);
            const amt = response.data.amount ?? response.data.transaction.amount ?? null;
            const cur = response.data.currency ?? 'USD';
            setPaidAmount(typeof amt === 'number' ? amt : (amt ? Number(amt) : null));
            setPaidCurrency(cur);
          } else {
            console.warn("No Course details in response");
          }
          handleClearCart();
          //   // Redirect to a function that will create the Course
          //   navigate("/process-Course", {

          //     state: {
          //       CourseData: updatedCourseData,
          //     //   files: CourseData.files || [],
          //     },
          //   });
        } else {
          setError(response.data.message || "Payment verification failed");
        }
      } catch (err) {
        console.error("Payment verification error:", err);

        let errorMsg =
          err.response?.data?.message ||
          err.message ||
          "An error occurred while verifying payment";

        // Handle timeout specifically
        if (err.code === "ECONNABORTED") {
          errorMsg = "Request timed out - please check your confirmation email";
        }

        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [location]);

  const formatDate = (dateString) => {
    if (!dateString) return "Processing...";
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch {
      return dateString;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-t-red-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-medium text-gray-700">
              Verifying your Course booking...
            </p>
            <p className="text-sm text-gray-500">This may take a few moments</p>
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Payment Verification Issue
            </h2>
            <p className="p-3 text-red-700 bg-red-100 rounded-md">{error}</p>

            {courseDetails && (
              <div className="p-4 mt-4 bg-blue-50 border border-blue-100 rounded-md">
                <h3 className="mb-2 text-lg font-medium text-gray-700">
                  Your Course Status
                </h3>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  {courseDetails.status}
                </p>
              </div>
            )}

            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/Courses")}
                className="flex-1 py-2 font-medium text-white transition-colors bg-red-600 rounded-md hover:bg-red-700"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex-1 py-2 font-medium text-gray-700 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Go to Home
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Courses Purchased!
            </h2>
            <p className="text-gray-600">{message}</p>

            {courseDetails ? (
              <div className="p-4 mt-4 text-left bg-gray-50 border border-gray-200 rounded-md">
                <h3 className="mb-2 text-lg font-medium text-gray-700">
                  Course Details
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">ID:</span>{" "}
                    {courseDetails.transactionId}
                  </p>
                  <p>
                    <span className="font-medium">Amount Paid:</span>{" "}
                    {(paidCurrency || 'USD') === 'USD' ? '$' : '₹'}
                    {paidAmount != null ? paidAmount.toFixed(2) : '--'}
                  </p>
                  <p>
                    <span className="font-medium">Purchased On:</span>{" "}
                    {formatDate(courseDetails.date)}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>
                    <span
                      className={`ml-2 font-medium ${
                        courseDetails.status === "confirmed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {courseDetails.status}
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 mt-4 text-yellow-800 bg-yellow-50 rounded-md">
                <p>
                  Course details are being processed. They will appear in your
                  account shortly.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => navigate("/Courses-details")}
                className="w-full py-2 font-medium text-white transition-colors bg-green-600 rounded-md hover:bg-green-700"
              >
                Continue Shopping
              </button>
              <a
                href="mailto:sales@traincapetech.in?subject=Voucher%20Delivery%20Assistance"
                className="w-full py-2 text-center font-medium text-gray-700 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Didn’t get voucher? Contact support
              </a>
            </div>

            <div className="mt-4 text-xs text-gray-600 bg-blue-50 border border-blue-100 p-3 rounded-md text-left">
              <p>If you did not receive your voucher email within a few minutes, check your spam folder. Still missing or incorrect? Reach us:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Email: sales@traincapetech.in</li>
                <li>Phone: +44 1253 928501</li>
                <li>WhatsApp: +44 1253 928501</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessCartPayment;