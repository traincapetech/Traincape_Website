import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Edit, Trash2, Video, PlusCircle, ArrowLeft, Loader, Check, X, ShieldAlert } from "lucide-react";
import toast from "react-hot-toast";
import API_BASE_URL from "../../../config/api";

const VideoCourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCourse, setActiveCourse] = useState(null); // Course currently editing videos for
  const [editingCourse, setEditingCourse] = useState(null); // Course currently editing base details for
  const [isCreating, setIsCreating] = useState(false);

  // Course Form State
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseThumbnail, setCourseThumbnail] = useState("");

  // Video Form State
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFileId, setVideoFileId] = useState("");
  const [videoIsFree, setVideoIsFree] = useState(false);
  const [editingVideoIndex, setEditingVideoIndex] = useState(-1);

  const getHeaders = () => {
    const freshToken = localStorage.getItem("token");
    return {
      headers: { Authorization: `Bearer ${freshToken}` }
    };
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.get(`${baseUrl}/video-courses`, getHeaders());
      setCourses(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load courses from database");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    if (!courseTitle.trim()) {
      toast.error("Course Title is required");
      return;
    }
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.post(
        `${baseUrl}/video-courses`,
        {
          title: courseTitle,
          description: courseDesc,
          price: Number(coursePrice),
          thumbnailUrl: courseThumbnail,
          videos: []
        },
        getHeaders()
      );
      if (res.data.success) {
        toast.success("Course created successfully!");
        resetCourseForm();
        fetchCourses();
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Error creating course");
    }
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.put(
        `${baseUrl}/video-courses/${editingCourse._id}`,
        {
          title: courseTitle,
          description: courseDesc,
          price: Number(coursePrice),
          thumbnailUrl: courseThumbnail
        },
        getHeaders()
      );
      if (res.data.success) {
        toast.success("Course details updated!");
        resetCourseForm();
        fetchCourses();
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating course details");
    }
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video course permanently? All uploaded video list for this course will be deleted.")) {
      return;
    }
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.delete(`${baseUrl}/video-courses/${id}`, getHeaders());
      if (res.data.success) {
        toast.success("Course deleted successfully!");
        if (activeCourse && activeCourse._id === id) {
          setActiveCourse(null);
        }
        fetchCourses();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete course");
    }
  };

  const startEditCourse = (course) => {
    setEditingCourse(course);
    setIsCreating(false);
    setCourseTitle(course.title);
    setCourseDesc(course.description || "");
    setCoursePrice(course.price);
    setCourseThumbnail(course.thumbnailUrl || "");
  };

  const resetCourseForm = () => {
    setIsCreating(false);
    setEditingCourse(null);
    setCourseTitle("");
    setCourseDesc("");
    setCoursePrice(0);
    setCourseThumbnail("");
  };

  // Video Management Methods
  const loadCourseVideos = async (courseId) => {
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.get(`${baseUrl}/video-courses/${courseId}`, getHeaders());
      setActiveCourse(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load video list");
    }
  };

  const extractDriveFileId = (input) => {
    if (!input) return "";
    const cleanInput = input.trim();
    const fileDMatch = cleanInput.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileDMatch && fileDMatch[1]) {
      return fileDMatch[1];
    }
    const idParamMatch = cleanInput.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idParamMatch && idParamMatch[1]) {
      return idParamMatch[1];
    }
    return cleanInput;
  };

  const handleAddOrUpdateVideo = async (e) => {
    e.preventDefault();
    if (!videoTitle.trim() || !videoFileId.trim()) {
      toast.error("Title and Google Drive File ID are required");
      return;
    }

    const cleanedDriveFileId = extractDriveFileId(videoFileId);

    let updatedVideos = [...activeCourse.videos];
    const newVideo = {
      title: videoTitle,
      driveFileId: cleanedDriveFileId,
      isFree: videoIsFree
    };

    if (editingVideoIndex > -1) {
      updatedVideos[editingVideoIndex] = newVideo;
    } else {
      updatedVideos.push(newVideo);
    }

    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.put(
        `${baseUrl}/video-courses/${activeCourse._id}`,
        { videos: updatedVideos },
        getHeaders()
      );
      if (res.data.success) {
        toast.success(editingVideoIndex > -1 ? "Video updated!" : "Video added to course syllabus!");
        resetVideoForm();
        loadCourseVideos(activeCourse._id);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update course syllabus");
    }
  };

  const handleDeleteVideo = async (videoIndex) => {
    if (!window.confirm("Delete this lesson video?")) return;
    let updatedVideos = activeCourse.videos.filter((_, idx) => idx !== videoIndex);
    try {
      const baseUrl = API_BASE_URL || "http://localhost:3001";
      const res = await axios.put(
        `${baseUrl}/video-courses/${activeCourse._id}`,
        { videos: updatedVideos },
        getHeaders()
      );
      if (res.data.success) {
        toast.success("Video removed");
        loadCourseVideos(activeCourse._id);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete video");
    }
  };

  const startEditVideo = (video, index) => {
    setEditingVideoIndex(index);
    setVideoTitle(video.title);
    setVideoFileId(video.driveFileId);
    setVideoIsFree(video.isFree);
  };

  const resetVideoForm = () => {
    setEditingVideoIndex(-1);
    setVideoTitle("");
    setVideoFileId("");
    setVideoIsFree(false);
  };

  if (loading && courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Loader className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <p className="text-gray-500">Connecting database...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 text-gray-800">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Video Course Admin Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create, edit, price, and manage dynamic Google Drive video courses.
          </p>
        </div>
        {!activeCourse && !isCreating && !editingCourse && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all shadow-md text-sm"
          >
            <Plus className="w-4 h-4" />
            Add New Course
          </button>
        )}
      </div>

      {/* 1. Video Syllabus Editor for Active Course */}
      {activeCourse ? (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <button
              onClick={() => {
                setActiveCourse(null);
                fetchCourses();
              }}
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to courses
            </button>
            <h2 className="text-lg font-bold text-gray-900">
              Syllabus Editor: {activeCourse.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form to Add / Edit Video */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 h-fit space-y-4">
              <h3 className="text-base font-bold text-gray-800 border-b border-gray-200 pb-2">
                {editingVideoIndex > -1 ? "Modify Lesson Details" : "Add New Lesson Video"}
              </h3>
              <form onSubmit={handleAddOrUpdateVideo} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                    Lesson / Video Title
                  </label>
                  <input
                    type="text"
                    required
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    placeholder="e.g. 1. Intro to Cloud Architectures"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                    Google Drive File ID
                  </label>
                  <input
                    type="text"
                    required
                    value={videoFileId}
                    onChange={(e) => setVideoFileId(e.target.value)}
                    placeholder="e.g. 1aB2c3D4e5F6g7H8i9J0k..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white"
                  />
                  <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                    Copy the ID from your shareable file link (ensure file share settings are set to "Anyone with the link").
                  </p>
                </div>
                <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div>
                    <span className="block text-sm font-semibold">Free Preview Video?</span>
                    <span className="text-[10px] text-gray-400">If true, this video will play without purchase.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={videoIsFree}
                    onChange={(e) => setVideoIsFree(e.target.checked)}
                    className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all"
                  >
                    {editingVideoIndex > -1 ? "Save Updates" : "Insert Video"}
                  </button>
                  {editingVideoIndex > -1 && (
                    <button
                      type="button"
                      onClick={resetVideoForm}
                      className="py-2 px-3 border border-gray-300 hover:bg-gray-150 text-gray-600 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* List of Syllabus Videos */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-bold text-gray-800">Syllabus Outline</h3>
              <div className="space-y-3">
                {activeCourse.videos && activeCourse.videos.length > 0 ? (
                  activeCourse.videos.map((video, idx) => (
                    <div
                      key={video._id || idx}
                      className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900">{video.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] bg-slate-100 py-0.5 px-2 rounded-md border border-slate-200 text-gray-500 font-mono">
                              ID: {video.driveFileId.substring(0, 10)}...
                            </span>
                            {video.isFree ? (
                              <span className="text-[10px] bg-green-50 text-green-700 py-0.5 px-2 rounded-md font-semibold border border-green-200">
                                Free Preview
                              </span>
                            ) : (
                              <span className="text-[10px] bg-amber-50 text-amber-700 py-0.5 px-2 rounded-md font-semibold border border-amber-200">
                                Paid Lesson
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startEditVideo(video, idx)}
                          className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition-all rounded-lg"
                          title="Edit Lesson"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteVideo(idx)}
                          className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-red-600 transition-all rounded-lg"
                          title="Delete Lesson"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-8 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-gray-500 text-sm">
                    No lesson videos uploaded yet for this course.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : isCreating || editingCourse ? (
        // 2. Course Creation / Editing Base Details
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 max-w-xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-lg font-bold text-gray-900">
              {editingCourse ? "Edit Course Meta" : "Create Video Course"}
            </h2>
            <button
              onClick={resetCourseForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={editingCourse ? handleUpdateCourse : handleCreateCourse} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                Course Title
              </label>
              <input
                type="text"
                required
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="e.g. Certified Information Security Manager (CISM)"
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                Course Description
              </label>
              <textarea
                rows="4"
                value={courseDesc}
                onChange={(e) => setCourseDesc(e.target.value)}
                placeholder="Give a short summary about target skills and overview."
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                  Price (USD)
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(e.target.value)}
                  placeholder="49"
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                  Thumbnail Image URL
                </label>
                <input
                  type="text"
                  value={courseThumbnail}
                  onChange={(e) => setCourseThumbnail(e.target.value)}
                  placeholder="https://..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-250">
              <button
                type="submit"
                className="flex-grow py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all"
              >
                {editingCourse ? "Save Course Settings" : "Deploy Course"}
              </button>
              <button
                type="button"
                onClick={resetCourseForm}
                className="py-2.5 px-4 border border-gray-300 text-gray-600 hover:bg-gray-100 rounded-lg text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        // 3. Main Dashboard Course List Table
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-semibold text-gray-500">
                <th className="py-4 px-6">Thumbnail</th>
                <th className="py-4 px-6">Course Name</th>
                <th className="py-4 px-6">Cost</th>
                <th className="py-4 px-6 text-center">Lessons count</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="w-16 h-10 rounded-md bg-gray-250 overflow-hidden border border-gray-250">
                        {course.thumbnailUrl ? (
                          <img src={course.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                            <Video className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-gray-900 text-sm">{course.title}</div>
                      <div className="text-[10px] text-gray-400 mt-1 max-w-sm truncate">
                        {course.description || "No description provided."}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-sm">
                      {course.price === 0 ? (
                        <span className="text-green-600 font-bold">FREE</span>
                      ) : (
                        `$${course.price}`
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-sm font-semibold">
                      {course.videosCount} Lessons
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => loadCourseVideos(course._id)}
                          className="flex items-center gap-1 bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-semibold py-1.5 px-3 rounded-lg transition-colors border border-blue-100"
                        >
                          Syllabus
                        </button>
                        <button
                          onClick={() => startEditCourse(course)}
                          className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-green-600 transition-all rounded-lg"
                          title="Edit Meta Details"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course._id)}
                          className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-red-600 transition-all rounded-lg"
                          title="Delete Course"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-400 text-sm">
                    No courses built. Click 'Add New Course' to begin.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VideoCourseManagement;
