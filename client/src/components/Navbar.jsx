import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import DashboardHeader from "../pages/DashboardHeader";
import ReactDOM from "react-dom";

// Helper component for the gradient button style - NOW USING forwardRef
const GradientButton = React.forwardRef(({ children, className = "", ...props }, ref) => (
  <button
    ref={ref} // The ref is now correctly attached to the actual button
    className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-teal-300 to-purple-600 group-hover:from-teal-300 group-hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ${className}`}
    {...props}
  >
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-blue-500 group-hover:text-black">
      {children}
    </span>
  </button>
));

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const token = localStorage.getItem("token");
  const dropdownRef = useRef(null);
  const payNowButtonRef = useRef(null); 
  const mobileDropdownRef = useRef(null);
  const mobilePayNowButtonRef = useRef(null);


  const accountNumber = "732205000345";
  const bankName = "ICICI Bank";
  const branchName = "Palam Colony";
  const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
  const ifscCode = "ICIC0007322";
  const Email = "sales@traincapetech.info";

  const bankDetails = {
    "Account Number": accountNumber,
    "Bank Name": bankName,
    "Branch Name": branchName,
    "Account Holder Name": accountHolderName,
    "IFSC Code": ifscCode,
    "EMAIL": Email
  };

  const updateDropdownPosition = () => {
    if (payNowButtonRef.current) {
      const rect = payNowButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 8, 
        left: rect.right + window.scrollX - 192, 
        width: 192 
      });
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      
      // 1. If the desktop dropdown is open:
      if (showDropdown) {
          // Check if the click is on the desktop button, mobile button, or any of the dropdowns.
          const isClickInside = 
              (payNowButtonRef.current && payNowButtonRef.current.contains(event.target)) ||
              (mobilePayNowButtonRef.current && mobilePayNowButtonRef.current.contains(event.target)) ||
              (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
              (mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target));
          
          if (!isClickInside) {
              // If it's outside all related elements, close the dropdown
              setShowDropdown(false);
          }
      }
      
      // 2. Handle closing the mobile menu with an outside click
      // We must make sure the click wasn't on the hamburger button itself
      if(isMenuOpen && !event.target.closest('.lg\\:hidden > button[aria-label]')) {
         if (!document.querySelector('.mobile-menu').contains(event.target)) {
            setMenuOpen(false);
         }
      }
    };

    // Use 'click' event instead of 'mousedown' for better consistency with button 'onClick'
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showDropdown, isMenuOpen]); // Dependency array updated

  // Use another effect to handle bank details modal closing with ESC key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowBankDetails(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate("/login");
    setMenuOpen(false);
  };

  const handlePayNow = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Check if we are in desktop mode (menu closed) to set position
    // We only need position for the absolute desktop dropdown
    if (payNowButtonRef.current && !isMenuOpen) { 
        updateDropdownPosition();
    }
    
    // This is the core action: toggle the dropdown state
    setShowDropdown(prev => !prev); 
  };

  const handleBankTransfer = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowBankDetails(true);
    setShowDropdown(false);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  const copyToClipboard = () => {
    const detailsText = Object.entries(bankDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    navigator.clipboard.writeText(detailsText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Improved active state styling
  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-400 border-b-2 border-purple-400 font-semibold transition duration-300 ease-in-out"
      : "text-gray-300 hover:text-teal-300 border-b-2 border-transparent hover:border-teal-300 transition duration-300 ease-in-out";

  const handleExternalLink = (url, event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowDropdown(false);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderDropdown = () => {
    // Only render the absolute dropdown for desktop view
    if (!showDropdown || !payNowButtonRef.current || isMenuOpen) return null; 
    
    const dropdownContent = (
      <div
        ref={dropdownRef}
        className="absolute bg-gray-800 text-white shadow-2xl rounded-lg w-48 py-1 border border-purple-500/50 transform origin-top-right transition-all duration-300 ease-out animate-dropdown-in"
        style={{
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          zIndex: 9999,
          width: '12rem' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-1">
          <button
            onClick={(e) => handleExternalLink("https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB", e)}
            className="block w-full px-4 py-2 text-sm text-left hover:bg-purple-600/70 hover:text-white transition-colors duration-200"
          >
            PayPal
          </button>
          <button
            onClick={(e) => handleExternalLink("https://buy.stripe.com/8wM2az10TaYQgww29d", e)}
            className="block w-full px-4 py-2 text-sm text-left hover:bg-purple-600/70 hover:text-white transition-colors duration-200"
          >
            Credit / Debit Card (Stripe)
          </button>
          <button
            onClick={handleBankTransfer}
            className="block w-full px-4 py-2 text-sm text-left hover:bg-purple-600/70 hover:text-white transition-colors duration-200"
          >
            Bank Transfer
          </button>
        </div>
      </div>
    );
    
    return ReactDOM.createPortal(
      dropdownContent,
      document.body
    );
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-dropdown-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-in {
          animation: modalIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
      <nav className="bg-gray-950 sticky top-0 z-30 lg:h-20 h-24 md:px-0 lg:px-12 px-4 shadow-2xl shadow-purple-900/50 flex items-center" aria-label="Main Navigation" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="mx-auto flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center lg:w-[15%] justify-start">
            <div
              className="flex items-center cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Traincape Technology"
                className="w-auto h-20 md:h-24 lg:h-28 object-contain"
                width="130"
                height="130"
              />
            </div>
          </div>
          
          {/* Desktop Navigation (LG and up) */}
          <div className="hidden lg:flex justify-between w-full items-center text-white">
            <div className="flex space-x-8 mx-auto font-medium text-lg">
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
              <Link to="/about-us" className={isActive("/about-us")}>
                About
              </Link>
              <Link to="/our-services" className={isActive("/our-services")}>
                Services
              </Link>
              <Link to="/review-page" className={isActive("/review-page")}>
                Reviews
              </Link>
              <Link to="/contact-us" className={isActive("/contact-us")}>
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <GradientButton
                  ref={payNowButtonRef} 
                  onClick={handlePayNow}
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                  className="!p-0.5" 
                >
                  Pay Now
                </GradientButton>
              </div>

              {token ? (
                <div className="transform transition-all duration-300 hover:scale-105">
                  <DashboardHeader />
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={handleLogin}
                  aria-label="Login"
                  className="text-white font-semibold bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg shadow-purple-600/50"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          
          {/* Mobile Hamburger/Cross Icon */}
          <div className="lg:hidden" onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!isMenuOpen);
          }}>
            <button aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="p-2">
              {isMenuOpen ? (
                <ImCross className="text-white text-2xl animate-spin-once" />
              ) : (
                <GiHamburgerMenu className="text-white text-3xl transition duration-300 hover:text-teal-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`mobile-menu fixed top-0 right-0 w-64 h-full bg-gray-900 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 p-6 shadow-2xl shadow-black/70`}
          aria-modal="true"
          role="dialog"
          aria-hidden={!isMenuOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-8">
            <button 
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition duration-200 p-1"
            >
              <ImCross className="text-2xl" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-lg font-medium">
            <Link
              to="/"
              className={`${isActive("/")} py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`${isActive("/about-us")} py-2`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/our-services"
              className={`${isActive("/our-services")} py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/review-page"
              className={`${isActive("/review-page")} py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="relative mt-4 pt-4 border-t border-gray-700">
              <GradientButton
                ref={mobilePayNowButtonRef} 
                onClick={handlePayNow}
                className="w-full !p-0.5"
              >
                Pay Now
              </GradientButton>
              
              {/* Mobile dropdown logic is inside the mobile menu structure */}
              {showDropdown && (
                <div 
                  ref={mobileDropdownRef}
                  className="mt-3 bg-gray-800 text-white shadow-xl w-full rounded-lg overflow-hidden border border-teal-500/50 transform origin-top transition-all duration-300 ease-out animate-dropdown-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => handleExternalLink("https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB", e)}
                    className="block w-full px-4 py-3 text-sm text-left hover:bg-teal-600/70 transition-colors duration-200"
                  >
                    PayPal
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://buy.stripe.com/8wM2az10TaYQgww29d", e)}
                    className="block w-full px-4 py-3 text-sm text-left hover:bg-teal-600/70 transition-colors duration-200"
                  >
                    Credit / Debit Card (Stripe)
                  </button>
                  <button
                    onClick={handleBankTransfer}
                    className="block w-full px-4 py-3 text-sm text-left hover:bg-teal-600/70 transition-colors duration-200"
                  >
                    Bank Transfer
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6">
              {token ? (
                <div className="w-full">
                  <DashboardHeader />
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={handleLogin}
                  className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md block text-center transition duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-60 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </nav>

      {renderDropdown()}

      {/* Bank Details Modal */}
      {showBankDetails && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-[10000] p-4 transition-opacity duration-300 ease-out"
          onClick={() => setShowBankDetails(false)}
          aria-modal="true"
          role="dialog"
          aria-label="Bank Account Details Modal"
        >
          <div 
            className="bg-gray-800 rounded-xl p-8 max-w-lg w-full shadow-2xl border border-teal-400/50 transform transition-transform duration-300 scale-95 opacity-0 animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
                <h2 className="text-2xl font-extrabold text-white">Bank Transfer Details</h2>
                <button
                  onClick={() => setShowBankDetails(false)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1"
                  aria-label="Close modal"
                >
                  <ImCross className="text-xl" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {Object.entries(bankDetails).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-700 rounded-lg">
                    <span className="font-semibold text-teal-400 mr-2 min-w-[150px]">{key}: </span>
                    <span className="text-gray-100 break-all text-right">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                    copied 
                      ? "bg-green-500 hover:bg-green-600 text-white" 
                      : "bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white"
                  }`}
                >
                  {copied ? (
                    <>
                      <FaCheck className="mr-2" /> Details Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy className="mr-2" /> Copy All Details
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;