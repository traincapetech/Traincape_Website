//ishaan updated code
import React from "react";
import {
  PlusCircle,
  FileText,
  Settings,
  Users,
  BookOpen,
  BarChart2,
  ShoppingCart,
  Code,
  Monitor,
  HelpCircle,
  Clock,
  MessageCircle,
  Award,
  Video,
  Ticket,
  LogOut
} from "lucide-react";

const Sidebar = ({ role, selectedOption, onSelectOption }) => {
  // Only expose menu items that exist and are implemented
  const menuItems = [
    // General
    {
      id: "dashboard",
      icon: BarChart2,
      label: "Dashboard",
      category: "General",
      roles: ["Admin", "Instructor"],
    },
    // Assignments
    {
      id: "createAssignment",
      icon: FileText,
      label: "Create Assignment",
      category: "Assignments",
      roles: ["Admin", "Instructor"],
    },
    {
      id: "viewAssignments",
      icon: Clock,
      label: "View Assignments",
      category: "Assignments",
      roles: ["Admin", "Instructor"],
    },

    // Analytics
    {
      id: "courseAnalytics",
      icon: BarChart2,
      label: "Course Analytics",
      category: "Analytics",
      roles: ["Admin", "Instructor"],
    },
    {
      id: "results",
      icon: Award,
      label: "Results",
      category: "Analytics",
      roles: ["Admin", "Instructor"],
    },

    // Users
    {
      id: "employeeManagement",
      icon: Users,
      label: "Employee Management",
      category: "Users",
      roles: ["Admin"],
    },
    {
      id: "clientProfiles",
      icon: BookOpen,
      label: "Client Profiles",
      category: "Users",
      roles: ["Admin", "Instructor"],
    },

    // Business
    {
      id: "voucherManagement",
      icon: Ticket,
      label: "Voucher Management",
      category: "Business",
      roles: ["Admin"],
    },
    {
      id: "pecbBrochures",
      icon: FileText,
      label: "PECB Brochures",
      category: "Business",
      roles: ["Admin", "Instructor"],
    },
  ];

  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(role)
  );

  // Group menu items by category
  const categorizedItems = filteredMenuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Handle logout
  const handleLogout = () => {
    // Reset to role selection
    onSelectOption("roleSelection");
  };

  return (
    <div className="lg:w-64 w-25 bg-gray-800 text-white px-2 pb-4 space-y-2 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl md:text-2xl font-bold">
          {role === "Admin" ? "Admin Panel" : "Instructor Dashboard"}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Welcome, {role}
        </p>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto">
        {Object.entries(categorizedItems).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="text-[11px] md:text-sm font-semibold text-gray-400 mb-2 uppercase px-2">
              {category}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className={`py-2 px-2 md:px-4 rounded-md cursor-pointer hover:bg-gray-700 flex items-center space-x-2 transition-colors ${
                      selectedOption === item.id ? "bg-gray-700 border-l-4 border-blue-500" : ""
                    }`}
                    onClick={() => onSelectOption(item.id)}
                  >
                    <Icon size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[10px] md:text-[15px]">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout Section */}
      <div className="border-t border-gray-700 pt-4">
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 rounded-md hover:bg-gray-700 flex items-center space-x-2 transition-colors"
        >
          <LogOut size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] md:text-[15px]">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;