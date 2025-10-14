import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access user information from Redux state
  const { user } = useSelector((state) => state.user);

  // Reference for the dropdown menu
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser()); // Clear state
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
    navigate("/login");
  };

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Navigate to Admin Panel
  const navigateToAdmin = () => {
    navigate("/admin-panel");
    setIsDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-end items-center">
      {/* User profile icon and dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <img
            src="https://www.w3schools.com/w3images/avatar2.png" // Example user image
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-50 w-48">
            <div className="p-4 text-left">
              {/* Display username and email */}
              <p className="text-gray-600 font-bold text-lg">{user?.username}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <div className="border-t border-gray-200">
              {/* Admin panel link */}
              {user?.role === "admin" && (
                <button
                  className="w-full px-4 py-2 text-left text-sm text-blue-600 hover:bg-gray-100 focus:outline-none"
                  onClick={navigateToAdmin}
                >
                  Admin Panel
                </button>
              )}
              <button
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 focus:outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;