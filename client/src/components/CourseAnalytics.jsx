import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

const courseData = [
  {
    id: 1,
    name: "Full Stack Web Development",
    totalEnrollments: 450,
    activeEnrollments: 350,
    originalPrice: 1499,
    discountedPrice: 999,
    completionRate: 72,
    category: "Web Development",
    instructors: ["John Doe", "Sarah Smith"],
    averageRating: 4.7,
  },
  {
    id: 2,
    name: "Cloud Computing Masterclass",
    totalEnrollments: 320,
    activeEnrollments: 250,
    originalPrice: 1299,
    discountedPrice: 799,
    completionRate: 65,
    category: "Cloud & DevOps",
    instructors: ["Mike Johnson"],
    averageRating: 4.5,
  },
  {
    id: 3,
    name: "AI and Machine Learning",
    totalEnrollments: 280,
    activeEnrollments: 220,
    originalPrice: 1799,
    discountedPrice: 1199,
    completionRate: 68,
    category: "Artificial Intelligence",
    instructors: ["Emily Chen", "Alex Rodriguez"],
    averageRating: 4.9,
  },
  {
    id: 4,
    name: "Cybersecurity Essentials",
    totalEnrollments: 200,
    activeEnrollments: 160,
    originalPrice: 1099,
    discountedPrice: 699,
    completionRate: 60,
    category: "Security",
    instructors: ["David Kim"],
    averageRating: 4.6,
  },
];

const CourseAnalytics = () => {
  const [selectedView, setSelectedView] = useState("overview");

  // Calculate total analytics
  const totalEnrollments = courseData.reduce(
    (sum, course) => sum + course.totalEnrollments,
    0
  );
  const totalRevenue = {
    original: courseData.reduce(
      (sum, course) => sum + course.originalPrice * course.totalEnrollments,
      0
    ),
    discounted: courseData.reduce(
      (sum, course) => sum + course.discountedPrice * course.totalEnrollments,
      0
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-50 min-h-screen"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xl md:text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Course Analytics Dashboard
      </motion.h1>

      {/* View Selection Tabs */}
      <div className="justify-self-center w-[80%]  grid md:grid-cols-4 grid-cols-2 gap-4 mb-6">
        {["overview", "enrollment", "pricing", "performance"].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={` py-2 rounded-lg ${
              selectedView === view
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } capitalize `}
          >
          <p className="text-[10px] sm:text-sm"> {view} View</p> 
          </button>
        ))}
      </div>

      {/* Overview Section */}
      {selectedView === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courseData.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <h2 className="text-sm text-center lg:text-xl font-semibold mb-2">{course.name}</h2>
              <div className="space-y-2">
                <p>Total Enrollments: {course.totalEnrollments}</p>
                <p>Active Students: {course.activeEnrollments}</p>
                <p>Completion Rate: {course.completionRate}%</p>
                <p>Average Rating: {course.averageRating}/5</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Enrollment Section */}
      {selectedView === "enrollment" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Course Enrollments</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="totalEnrollments"
                  fill="#8884d8"
                  name="Total Enrollments"
                />
                <Bar
                  dataKey="activeEnrollments"
                  fill="#82ca9d"
                  name="Active Enrollments"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Enrollment by Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseData}
                  dataKey="totalEnrollments"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`hsl(${index * 60}, 70%, 50%)`}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Pricing Section */}
      {selectedView === "pricing" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Revenue Analysis</h2>
            <div className="space-y-4">
              <p>
                Total Original Revenue: $
                {totalRevenue.original.toLocaleString()}
              </p>
              <p>
                Total Discounted Revenue: $
                {totalRevenue.discounted.toLocaleString()}
              </p>
              <p>
                Total Savings for Students: $
                {(
                  totalRevenue.original - totalRevenue.discounted
                ).toLocaleString()}
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="originalPrice"
                  fill="#ff7300"
                  name="Original Price"
                />
                <Bar
                  dataKey="discountedPrice"
                  fill="#003366"
                  name="Discounted Price"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Pricing Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseData}
                  dataKey="discountedPrice"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`hsl(${index * 60}, 70%, 50%)`}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Performance Section */}
      {selectedView === "performance" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Completion Rates</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="completionRate"
                  fill="#82ca9d"
                  name="Completion Rate (%)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Course Ratings</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Bar
                  dataKey="averageRating"
                  fill="#ff7300"
                  name="Average Rating"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Summary Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Overall Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold">Total Courses</h3>
            <p>{courseData.length}</p>
          </div>
          <div>
            <h3 className="font-bold">Total Enrollments</h3>
            <p>{totalEnrollments}</p>
          </div>
          <div>
            <h3 className="font-bold">Total Revenue</h3>
            <p>${totalRevenue.discounted.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-bold">Avg. Completion Rate</h3>
            <p>
              {(
                courseData.reduce(
                  (sum, course) => sum + course.completionRate,
                  0
                ) / courseData.length
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseAnalytics;