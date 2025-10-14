import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/api";
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

// This dashboard now uses real data from Results API to build analytics
// Definitions:
// - totalAttempts: number of test results for the course
// - activeStudents: distinct emails who attempted the test
// - completionRate: percentage of passed attempts (certificate === true)
// - averageScore: average percentage score across attempts

const CourseAnalytics = () => {
  const [selectedView, setSelectedView] = useState("overview");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await axios.get(API_ENDPOINTS.RESULTS);
        setResults(Array.isArray(res.data) ? res.data : []);
      } catch (e) {
        setError("Failed to load analytics. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  const courseData = useMemo(() => {
    const byCourse = new Map();
    results.forEach((r) => {
      const courseName = r.course || "Unknown";
      if (!byCourse.has(courseName)) byCourse.set(courseName, []);
      byCourse.get(courseName).push(r);
    });
    let id = 1;
    return Array.from(byCourse.entries()).map(([name, list]) => {
      const totalAttempts = list.length;
      const emails = new Set(list.map((r) => (r.email || "").toLowerCase()));
      const activeEnrollments = emails.size;
      const passes = list.filter((r) => !!r.certificate).length;
      const completionRate = totalAttempts ? Math.round((passes / totalAttempts) * 100) : 0;
      const avgScorePct = (() => {
        const scores = list
          .map((r) => {
            const t = Number(r.totalQuestions) || 0;
            const s = Number(r.score) || 0;
            return t > 0 ? (s / t) * 100 : null;
          })
          .filter((v) => v !== null);
        if (!scores.length) return 0;
        return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      })();
      return {
        id: id++,
        name,
        totalEnrollments: totalAttempts,
        activeEnrollments,
        completionRate,
        averageScore: avgScorePct,
      };
    });
  }, [results]);

  // Calculate totals
  const totalEnrollments = courseData.reduce((sum, c) => sum + c.totalEnrollments, 0);

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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center mb-4">{error}</div>
      )}
      {isLoading && (
        <div className="text-center text-gray-600 mb-4">Loading analytics...</div>
      )}

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
                <p>Total Attempts: {course.totalEnrollments}</p>
                <p>Active Students: {course.activeEnrollments}</p>
                <p>Completion Rate: {course.completionRate}%</p>
                <p>Average Score: {course.averageScore}%</p>
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
                  name="Total Attempts"
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

      {/* Pricing Section removed: no real revenue data available */}

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
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar
                  dataKey="averageScore"
                  fill="#ff7300"
                  name="Average Score (%)"
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
          {/* No revenue data available from backend */}
          <div>
            <h3 className="font-bold">Avg. Completion Rate</h3>
            <p>
              {(
                courseData.length
                  ? courseData.reduce((sum, c) => sum + c.completionRate, 0) / courseData.length
                  : 0
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