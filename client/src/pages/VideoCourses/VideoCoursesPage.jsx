import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Play, BookOpen, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import API_BASE_URL from "../../config/api";

const VideoCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const baseUrl = API_BASE_URL || "http://localhost:3001";
        const res = await axios.get(`${baseUrl}/video-courses`, { headers });
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching video courses:", err);
        setError("Failed to load video courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Helmet>
        <title>Video Courses & Tutorials - Traincape Technology</title>
        <meta
          name="description"
          content="Access high-quality IT training video courses and tutorials. Learn at your own pace with industry experts."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-indigo-500 mb-4">
              Premium Video Courses
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Boost your IT skills with step-by-step video guides. Try the first video of any course completely free!
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-t-teal-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-slate-400">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="max-w-md mx-auto bg-red-950/30 border border-red-500/30 rounded-xl p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-red-200 mb-1">Unable to Load Courses</h3>
              <p className="text-slate-400 text-sm mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-800 hover:bg-red-700 transition-colors rounded-lg text-sm font-semibold"
              >
                Retry
              </button>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-20 border border-slate-800 rounded-2xl bg-slate-900/30">
              <BookOpen className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-300 mb-1">No Courses Available</h3>
              <p className="text-slate-500">New courses are currently being prepared. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="group relative bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col h-full"
                >
                  {/* Thumbnail / Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    {course.thumbnailUrl ? (
                      <img
                        src={course.thumbnailUrl}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-purple-950/40 flex items-center justify-center">
                        <Play className="w-12 h-12 text-teal-400/40 group-hover:text-teal-400 transition-colors" />
                      </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      {course.isPurchased ? (
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                          Purchased
                        </span>
                      ) : course.price === 0 ? (
                        <span className="px-3 py-1 bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                          Free Course
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                          ${course.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors mb-2 line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                      {course.description || "No description provided for this course."}
                    </p>

                    {/* Stats Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Play className="w-4 h-4 text-slate-400" />
                        {course.videosCount} Videos
                      </span>
                      <span>
                        {course.freeVideosCount > 0
                          ? `${course.freeVideosCount} Free Preview`
                          : "No Preview"}
                      </span>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => navigate(`/video-courses/${course._id}`)}
                      className="w-full mt-5 py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all duration-300 
                               bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white shadow-lg shadow-purple-950/20"
                    >
                      {course.isPurchased ? "Start Learning" : "View Course Details"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCoursesPage;
