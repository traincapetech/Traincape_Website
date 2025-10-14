import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";
import API_BASE_URL from "../../config/api";
import {
  FileText,
  Users,
  BarChart2,
  Award,
  Clock,
  TrendingUp,
  BookOpen,
  Settings,
  AlertCircle
} from "lucide-react";

const Dashboard = ({ role, selectedCourse, onSelectOption }) => {
  const [stats, setStats] = useState({
    totalAssignments: 0,
    totalStudents: 0,
    activeCourses: 0,
    completionRate: 0,
    recentAssignments: 0,
    pendingReviews: 0,
    voucherAvailable: 0,
    voucherSold: 0,
    voucherRevenue: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError("");

        // Fetch questions/assignments count
        const questionsResponse = await axios.get(API_ENDPOINTS.QUESTIONS);
        const totalAssignments = questionsResponse.data?.length || 0;

        // Fetch users/students count
        const usersResponse = await axios.get(API_ENDPOINTS.USERS);
        const totalStudents = usersResponse.data?.length || 0;

        // Fetch results for completion rate
        const resultsResponse = await axios.get(API_ENDPOINTS.RESULTS);
        const totalResults = resultsResponse.data?.length || 0;
        const completionRate = totalStudents > 0 ? Math.round((totalResults / totalStudents) * 100) : 0;

        // Fetch recent questions (last 10)
        const recentQuestions = questionsResponse.data?.slice(-10) || [];

        // Fetch recent results for pending reviews
        const recentResults = resultsResponse.data?.slice(-5) || [];
        const pendingReviews = recentResults.filter(result => !result.completed).length;

        // Get unique courses count
        const uniqueCourses = new Set(questionsResponse.data?.map(q => q.course) || []).size;

        // Fetch voucher analytics (auth required)
        let voucherAvailable = 0, voucherSold = 0, voucherRevenue = 0;
        try {
          const token = localStorage.getItem("token");
          if (token) {
            const vouchersRes = await axios.get(`${API_BASE_URL}/vouchers/analytics`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const a = vouchersRes.data?.analytics || {};
            voucherAvailable = a.availableVouchers || 0;
            voucherSold = a.soldVouchers || 0;
            voucherRevenue = a.totalRevenue || 0;
          }
        } catch (_) {
          // Ignore voucher errors on dashboard
        }

        setStats({
          totalAssignments,
          totalStudents,
          activeCourses: uniqueCourses,
          completionRate,
          recentAssignments: recentQuestions.length,
          pendingReviews,
          voucherAvailable,
          voucherSold,
          voucherRevenue
        });

        // Create recent activity from actual data
        const activity = [];
        
        // Add recent questions
        recentQuestions.slice(-3).forEach(question => {
          activity.push({
            id: `question-${question._id}`,
            type: 'assignment',
            title: 'New assignment created',
            description: `${question.course} - ${question.subTopic || 'General'}`,
            time: new Date(question.createdAt || Date.now()).toLocaleString(),
            icon: FileText,
            color: 'bg-green-100',
            iconColor: 'text-green-600'
          });
        });

        // Add recent results
        recentResults.slice(-3).forEach(result => {
          activity.push({
            id: `result-${result._id}`,
            type: 'result',
            title: 'Assignment completed',
            description: `${result.course} - Score: ${result.score || 'N/A'}`,
            time: new Date(result.createdAt || Date.now()).toLocaleString(),
            icon: Award,
            color: 'bg-purple-100',
            iconColor: 'text-purple-600'
          });
        });

        // Sort by time (most recent first)
        activity.sort((a, b) => new Date(b.time) - new Date(a.time));
        setRecentActivity(activity.slice(0, 6)); // Show only 6 most recent

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError("Failed to load dashboard data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const quickActions = [
    {
      id: "createAssignment",
      icon: FileText,
      label: "Create Assignment",
      description: "Add new questions and assignments",
      color: "bg-blue-500",
      roles: ["Admin", "Instructor"]
    },
    {
      id: "results",
      icon: Award,
      label: "Results",
      description: "View assignments/test results",
      color: "bg-teal-500",
      roles: ["Admin", "Instructor"]
    },
    {
      id: "viewAssignments",
      icon: Clock,
      label: "View Assignments",
      description: "Manage existing assignments",
      color: "bg-green-500",
      roles: ["Admin", "Instructor"]
    },
    {
      id: "courseAnalytics",
      icon: BarChart2,
      label: "Course Analytics",
      description: "View performance metrics",
      color: "bg-purple-500",
      roles: ["Admin", "Instructor"]
    },
    {
      id: "employeeManagement",
      icon: Users,
      label: "Employee Management",
      description: "Manage team members",
      color: "bg-orange-500",
      roles: ["Admin"]
    },
    {
      id: "clientProfiles",
      icon: Award,
      label: "Client Profiles",
      description: "Manage client certificates",
      color: "bg-indigo-500",
      roles: ["Admin", "Instructor"]
    },
    {
      id: "voucherManagement",
      icon: Award,
      label: "Voucher Management",
      description: "Batches, inventory and sales",
      color: "bg-teal-500",
      roles: ["Admin"]
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
      description: "Configure platform settings",
      color: "bg-gray-500",
      roles: ["Admin"]
    }
  ];

  const filteredQuickActions = quickActions.filter(action => 
    action.roles.includes(role)
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {role}!
        </h1>
        <p className="text-blue-100">
          {role === "Instructor" && selectedCourse 
            ? `You're managing the ${selectedCourse} course. Here's your dashboard overview.`
            : "Here's your comprehensive dashboard overview."
          }
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Assignment Questions</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalAssignments}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeCourses}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Recent Assignments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.recentAssignments}</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingReviews}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <Award className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
        {/* Voucher KPIs */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Voucher Available</p>
              <p className="text-2xl font-bold text-gray-900">{stats.voucherAvailable}</p>
            </div>
            <div className="p-3 bg-teal-100 rounded-full">
              <Award className="h-6 w-6 text-teal-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Voucher Sold</p>
              <p className="text-2xl font-bold text-gray-900">{stats.voucherSold}</p>
            </div>
            <div className="p-3 bg-teal-100 rounded-full">
              <Award className="h-6 w-6 text-teal-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Voucher Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.voucherRevenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-teal-100 rounded-full">
              <Award className="h-6 w-6 text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredQuickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-left group"
                onClick={() => onSelectOption && onSelectOption(action.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${action.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {action.label}
                    </h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        {recentActivity.length > 0 ? (
          <div className="space-y-3">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-full ${activity.color}`}>
                    <Icon className={`h-4 w-4 ${activity.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No recent activity found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
