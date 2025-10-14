import React, { useEffect, useState } from "react";
import banner from "../assets/loginbanner.jpeg";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import Lottie from "lottie-react";
import signup from "../assets/signup.json";
import { FaRegEyeSlash, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { reset_password, sendOTPToEmail, verifyOtp } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loadingPage/Loading";
import axios from "axios";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [error, setError] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    otp: ["", "", "", "", "", ""],
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1)
      inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0)
      inputRefs.current[index - 1].focus();
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };
  
  const [showOtp, setShowOtp] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
      otp: ["", "", "", "", "", ""],
      newPassword: "",
      confirmPassword: "",
    });
    setShowOtp(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!payload.email.trim()) {
        setError("Email is required");
        setLoading(false);
        return;
      }

      const result = await dispatch(sendOTPToEmail({ email: payload.email }));
      console.log("OTP response:", result);
      
      if (result.payload && result.payload.success) {
        setError(false);
        setShowOtp(true);
        setShowEmail(false);
        setLoading(false);
        setSuccessMessage("OTP sent successfully");
      } else {
        console.log(result);
        setError(result.payload?.message || "Failed to send OTP");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Please try again later");
      console.error(e);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    const otp = otpArray.join("");
    setPayload((prevPayload) => ({ ...prevPayload, otp: otp }));
    if (otp.trim() === "") {
      setError("Please enter the OTP");
      return;
    }
    try {
      setLoading(true);
      console.log("Submitting OTP:", otp);
      const result = await dispatch(verifyOtp({ otp, email: payload.email }));
      console.log("OTP verification result:", result);
      
      if (result.payload && result.payload.success) {
        setError(false);
        setShowNewPassword(true);
        setShowOtp(false);
        setLoading(false);
        setSuccessMessage("OTP verified successfully. Enter your new password");
      } else {
        setSuccessMessage(false);
        setError(result.payload?.message || "Invalid OTP");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Please try again later");
      console.error(e);
    }
  };

  const handleResetPassword = async (e) => {
    setSuccessMessage(false);
    e.preventDefault();
    if (payload.newPassword !== payload.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (payload.newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    try {
      setLoading(true);
      console.log("Reset password payload:", {
        email: payload.email,
        newPassword: payload.newPassword,
      });
      
      const result = await dispatch(
        reset_password({
          email: payload.email,
          newPassword: payload.newPassword,
        })
      );
      console.log("Password reset result:", result);
      
      if (result.payload && result.payload.success) {
        setError(false);
        setLoading(false);
        alert("Password changed successfully! Please login with your new password.");
        navigate("/login");
      } else {
        setError(result.payload?.message || "Failed to reset password");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Please try again later");
      console.error(e);
    }
  };

  return (
    <div
      className="w-full md:h-[85vh] h-[120vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {loading ? (
        <Loading />
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="grid-cols-1 md:flex m-auto p-4 ">
            <div className="bg-[#152B54] w-fit md:w-[30%]  ml-auto">
              <div className="relative">
                <img
                  src={logo}
                  alt="Traincape Technology"
                  className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] absolute top-0"
                />
              </div>
              <Lottie
                animationData={signup}
                loop={true}
                className=" w-full h-full my-auto"
                onError={(error) => {
                  console.warn('Lottie animation error:', error);
                }}
              />
            </div>
            {/* left forgot page */}
            <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">
              {/* <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px]"> */}
              <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">
                Forgot Password
              </h1>
              
              {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-800 rounded-md">
                  {error}
                </div>
              )}
              
              {successMessage && (
                <div className="mb-4 p-2 bg-green-100 text-green-800 rounded-md">
                  {successMessage}
                </div>
              )}
              
              <form>
                {/* Email Form */}
                {showEmail && (
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
                    >
                      {loading ? "Loading..." : "Send Reset OTP"}
                    </button>
                  </div>
                )}
                
                {/* OTP Form */}
                {showOtp && (
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-center text-[#152B54] mb-2">
                      Reset Password OTP
                    </h2>
                    <label
                      htmlFor="otp"
                      className="my-3 block text-sm font-medium text-gray-700"
                    >
                      Enter the OTP sent to your email
                    </label>
                    <div
                      onPaste={handlePaste}
                      className="flex justify-between mb-3"
                    >
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <input
                            type="text"
                            maxLength="1"
                            key={index}
                            required
                            className="w-12 h-12 text-3xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ref={(e) => (inputRefs.current[index] = e)}
                            onInput={(e) => handleInput(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                          />
                        ))}
                    </div>
                    <button
                      type="button"
                      onClick={handleOtpSubmit}
                      className="w-full py-2 mt-4 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
                    >
                      Verify OTP
                    </button>
                  </div>
                )}
                
                {/* New Password Form */}
                {showNewPassword && (
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-center text-[#152B54] mb-2">
                      Set New Password
                    </h2>
                    <div className="mb-4 relative">
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          id="newPassword"
                          name="newPassword"
                          value={payload.newPassword}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              newPassword: e.target.value,
                            })
                          }
                          required
                          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-2"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? <FaRegEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={payload.confirmPassword}
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            confirmPassword: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
                    >
                      Reset Password
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;