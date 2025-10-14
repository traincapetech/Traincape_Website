// import React from "react";

// const Sidebar = ({ role, selectedOption, onSelectOption }) => {
//   return (
//     <div className="lg:w-64 w-full bg-gray-800 text-white px-6 pb-4 space-y-6 lg:space-y-0 lg:flex lg:flex-col">
//       <h1 className="text-2xl font-bold md:pb-6">
//         {role === "Admin" ? "Admin Panel" : "Instructor Panel"}
//       </h1>
//       <ul className="space-y-2 lg:flex lg:flex-col">
//         <li
//           className={`py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 ${
//             selectedOption === "createAssignment" ? "bg-gray-700" : ""
//           }`}
//           onClick={() => onSelectOption("createAssignment")}
//         >
//           Create Assignment
//         </li>
//         <li
//           className={`py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 ${
//             selectedOption === "viewAssignments" ? "bg-gray-700" : ""
//           }`}
//           onClick={() => onSelectOption("viewAssignments")}
//         >
//           View Assignments
//         </li>
//         {/* <li
//           className={`py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 ${
//             selectedOption === "settings" ? "bg-gray-700" : ""
//           }`}
//           onClick={() => onSelectOption("settings")}
//         >
//           Settings
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

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
} from "lucide-react";

const Sidebar = ({ role, selectedOption, onSelectOption }) => {
  // Define comprehensive menu items
  const menuItems = [
    // Course Management
    {
      id: "createCourse",
      icon: PlusCircle,
      label: "Create New Course",
      category: "Courses",
    },
    {
      id: "viewCourses",
      icon: BookOpen,
      label: "Manage Courses",
      category: "Courses",
    },
    {
      id: "courseAnalytics",
      icon: BarChart2,
      label: "Course Performance",
      category: "Courses",
    },

    // Assignment Management
    {
      id: "createAssignment",
      icon: FileText,
      label: "Create Assignment",
      category: "Assignments",
    },
    {
      id: "viewAssignments",
      icon: Clock,
      label: "Manage Assignments",
      category: "Assignments",
    },

    // IT Solutions
    {
      id: "serviceCatalog",
      icon: Code,
      label: "IT Service Catalog",
      category: "IT Solutions",
    },
    {
      id: "consultationBooking",
      icon: Monitor,
      label: "Book Consultation",
      category: "IT Solutions",
    },

    // Student & Client Management
    {
      id: "studentManagement",
      icon: Users,
      label: "Student Management",
      category: "Users",
    },
    {
      id: "clientProfiles",
      icon: Award,
      label: "Client Profiles",
      category: "Users",
    },

    // Sales & Marketing
    {
      id: "salesDashboard",
      icon: ShoppingCart,
      label: "Sales Dashboard",
      category: "Business",
    },
    {
      id: "marketingTools",
      icon: MessageCircle,
      label: "Marketing Tools",
      category: "Business",
    },

    // Additional Features
    {
      id: "onlineSessions",
      icon: Video,
      label: "Online Sessions",
      category: "Learning",
    },
    {
      id: "supportCenter",
      icon: HelpCircle,
      label: "Support Center",
      category: "Additional",
    },
    {
      id: "settings",
      icon: Settings,
      label: "Platform Settings",
      category: "Additional",
    },
  ];

  // Group menu items by category
  const categorizedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="lg:w-64 w-25  bg-gray-800 text-white px-2 pb-4 space-y-2 flex flex-col">
      <h1 className="text-xl md:text-2xl font-bold md:pb-6">
        {role === "Admin" ? "Admin Panel" : "Instructor Dashboard"}
      </h1>

      {Object.entries(categorizedItems).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-[11px] md:text-sm font-semibold text-gray-400 mb-2 uppercase">
            {category}
          </h3>
          <ul className="space-y-2 lg:flex lg:flex-col">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className={`py-2 px-2 md:px-4 rounded-md cursor-pointer hover:bg-gray-700 flex items-center space-x-2  ${
                    selectedOption === item.id ? "bg-gray-700" : ""
                  }`}
                  onClick={() => onSelectOption(item.id)}
                >
                  <Icon size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] md:text-[15px] ">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;