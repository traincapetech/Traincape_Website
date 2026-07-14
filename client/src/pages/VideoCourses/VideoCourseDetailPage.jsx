import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Play, Lock, Unlock, AlertCircle, ArrowLeft, Loader } from "lucide-react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import API_BASE_URL from "../../config/api";

const VideoCourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const baseUrl = API_BASE_URL || "http://localhost:3001";
        const res = await axios.get(`${baseUrl}/video-courses/${id}`, { headers });
        setCourse(res.data);
        if (res.data.videos && res.data.videos.length > 0) {
          setSelectedVideo(res.data.videos[0]);
        }
      } catch (err) {
        console.error("Error loading course details:", err);
        setError("Failed to load course details. It may not exist or database is offline.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id, token]);

  const handleCheckout = async () => {
    if (!token || !user) {
      toast.error("Please login to purchase this course!");
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    setCheckoutLoading(true);
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const payload = {
        email: user.email,
        lineItems: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: course.title,
                description: course.description || "Video course access",
              },
              unit_amount: Math.round(course.price * 100), // Stripe expects cents
            },
            quantity: 1,
          },
        ],
        productIds: [course._id],
        success_url: `${window.location.origin}/video-courses/payment-success`,
        cancel_url: window.location.href,
      };

      const res = await axios.post(`${baseUrl}/payments/stripe`, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data && res.data.url) {
        window.location.href = res.data.url;
      } else {
        throw new Error("Invalid response from Stripe session creator");
      }
    } catch (err) {
      console.error("Checkout initiation error:", err);
      toast.error(err.response?.data?.message || "Failed to initiate payment. Please try again.");
    } finally {
      setCheckoutLoading(false);
    }
  };

  const getDriveEmbedUrl = (fileId) => {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-white">
        <Loader className="w-12 h-12 text-teal-400 animate-spin mb-4" />
        <p className="text-slate-400">Loading learning workspace...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Error Loading Course</h2>
          <p className="text-slate-400 mb-6">{error || "Course not found."}</p>
          <button
            onClick={() => navigate("/video-courses")}
            className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const userHasAccess = course.isPurchased;

  return (
    <>
      <Helmet>
        <title>{course.title} - Video Course</title>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white pb-20">
        {/* Navigation Bar */}
        <div className="bg-slate-900/40 border-b border-slate-900 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => navigate("/video-courses")}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Courses</span>
            </button>
            <div className="flex items-center gap-3">
              {userHasAccess ? (
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                  <Unlock className="w-3.5 h-3.5" /> Course Unlocked
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold rounded-full">
                  <Lock className="w-3.5 h-3.5" /> Preview Mode
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left/Middle Column: Video Player */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                {selectedVideo ? (
                  (selectedVideo.isFree || userHasAccess) ? (
                    // Playable Embed Iframe
                    <div className="absolute inset-0 w-full h-full">
                      <iframe
                        src={getDriveEmbedUrl(selectedVideo.driveFileId)}
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title={selectedVideo.title}
                      ></iframe>
                      {/* Transparent click blocker to cover Google Drive pop-out button */}
                      <div className="absolute top-0 right-0 w-20 h-16 bg-transparent z-10" />
                    </div>
                  ) : (
                    // Locked Screen Overlay
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center bg-slate-950/90 backdrop-blur-md">
                      <div className="w-16 h-16 bg-purple-500/15 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-6">
                        <Lock className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">
                        Premium Video Locked
                      </h3>
                      <p className="text-slate-400 max-w-md mb-6">
                        "{selectedVideo.title}" is a premium video. Purchase the course to unlock the full training.
                      </p>
                      <button
                        onClick={handleCheckout}
                        disabled={checkoutLoading}
                        className="py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 transition-all text-white flex items-center gap-2 shadow-lg shadow-purple-950/30"
                      >
                        {checkoutLoading ? (
                          <>
                            <Loader className="w-5 h-5 animate-spin" />
                            Redirecting to Stripe...
                          </>
                        ) : (
                          `Unlock Course for $${course.price}`
                        )}
                      </button>
                    </div>
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    No videos available in this course.
                  </div>
                )}
              </div>

              {/* Video & Course Info */}
              <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                    {course.title}
                  </h1>
                  {!userHasAccess && course.price > 0 && (
                    <button
                      onClick={handleCheckout}
                      disabled={checkoutLoading}
                      className="py-2.5 px-5 bg-teal-500 hover:bg-teal-400 transition-colors text-slate-950 font-bold rounded-xl text-sm"
                    >
                      Buy Course • ${course.price}
                    </button>
                  )}
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {course.description || "Welcome to the video course training dashboard. Select lessons from the syllabus outline to start learning."}
                </p>
              </div>
            </div>

            {/* Right Column: Playlist / Course Contents */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-900 rounded-2xl overflow-hidden flex flex-col h-[500px]">
                <div className="p-5 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
                  <h3 className="font-bold text-slate-100 text-lg">Course Syllabus</h3>
                  <span className="text-xs text-slate-500 bg-slate-950 py-1 px-2.5 rounded-full border border-slate-800">
                    {course.videos?.length || 0} Lessons
                  </span>
                </div>

                <div className="flex-grow overflow-y-auto p-4 space-y-3">
                  {course.videos && course.videos.length > 0 ? (
                    course.videos.map((video, idx) => {
                      const isActive = selectedVideo?._id === video._id;
                      const isPlayable = video.isFree || userHasAccess;

                      return (
                        <button
                          key={video._id}
                          onClick={() => setSelectedVideo(video)}
                          className={`w-full p-4 rounded-xl flex items-start gap-3 text-left transition-all duration-200 border ${
                            isActive
                              ? "bg-purple-950/20 border-purple-500/50 shadow-md shadow-purple-950/10"
                              : "bg-slate-900/30 border-transparent hover:bg-slate-900/60 hover:border-slate-800"
                          }`}
                        >
                          <div className="mt-0.5">
                            {isActive ? (
                              <Play className="w-4 h-4 text-teal-400 fill-teal-400" />
                            ) : isPlayable ? (
                              <Play className="w-4 h-4 text-slate-400" />
                            ) : (
                              <Lock className="w-4 h-4 text-slate-600" />
                            )}
                          </div>
                          <div className="flex-grow">
                            <h4 className={`text-sm font-semibold line-clamp-2 ${isActive ? "text-teal-300" : "text-slate-200"}`}>
                              {idx + 1}. {video.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-2">
                              {video.isFree ? (
                                <span className="text-[10px] px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-md font-semibold">
                                  Free Preview
                                </span>
                              ) : !userHasAccess ? (
                                <span className="text-[10px] px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-500 rounded-md font-semibold flex items-center gap-1">
                                  <Lock className="w-3 h-3" /> Paid Lesson
                                </span>
                              ) : (
                                <span className="text-[10px] px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-md font-semibold flex items-center gap-1">
                                  <Unlock className="w-3 h-3" /> Unlocked
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="text-center text-slate-500 py-10 text-sm">
                      No lessons uploaded yet.
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCourseDetailPage;
