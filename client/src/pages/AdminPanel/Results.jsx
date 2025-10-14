import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");
  const [subTopic, setSubTopic] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await axios.get(API_ENDPOINTS.RESULTS);
        setResults(Array.isArray(res.data) ? res.data : []);
      } catch (e) {
        setError("Failed to load results. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchResults();
  }, []);

  const filtered = useMemo(() => {
    return results.filter((r) => {
      const matchesSearch = !search
        || r.name?.toLowerCase().includes(search.toLowerCase())
        || r.email?.toLowerCase().includes(search.toLowerCase());
      const matchesCourse = !course || r.course === course;
      const matchesSub = !subTopic || r.subTopic === subTopic;
      const matchesLevel = !level || r.level === level;
      return matchesSearch && matchesCourse && matchesSub && matchesLevel;
    });
  }, [results, search, course, subTopic, level]);

  const uniqueCourses = useMemo(() => Array.from(new Set(results.map(r => r.course).filter(Boolean))), [results]);
  const uniqueSubTopics = useMemo(() => Array.from(new Set(results.map(r => r.subTopic).filter(Boolean))), [results]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Assignments / Test Results</h1>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
      )}

      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            className="p-2 border rounded-md"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="p-2 border rounded-md" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">All Courses</option>
            {uniqueCourses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select className="p-2 border rounded-md" value={subTopic} onChange={(e) => setSubTopic(e.target.value)}>
            <option value="">All Sub-topics</option>
            {uniqueSubTopics.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select className="p-2 border rounded-md" value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">All Levels</option>
            <option value="easy">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-700">
              <th className="text-left p-3 border-b">Name</th>
              <th className="text-left p-3 border-b">Email</th>
              <th className="text-left p-3 border-b">Course</th>
              <th className="text-left p-3 border-b">Sub-topic</th>
              <th className="text-left p-3 border-b">Level</th>
              <th className="text-left p-3 border-b">Marks</th>
              <th className="text-left p-3 border-b">Status</th>
              <th className="text-left p-3 border-b">Certificate ID</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={8}>No results found</td>
              </tr>
            ) : (
              filtered.map((r) => {
                const total = Number(r.totalQuestions) || 0;
                const score = Number(r.score) || 0;
                const pct = total > 0 ? Math.round((score / total) * 100) : 0;
                const passed = Boolean(r.certificate);
                return (
                  <tr key={r._id} className="hover:bg-gray-50">
                    <td className="p-3 border-b whitespace-nowrap">{r.name || "-"}</td>
                    <td className="p-3 border-b whitespace-nowrap">{r.email || "-"}</td>
                    <td className="p-3 border-b whitespace-nowrap">{r.course || "-"}</td>
                    <td className="p-3 border-b">{r.subTopic || "-"}</td>
                    <td className="p-3 border-b capitalize">{r.level || "-"}</td>
                    <td className="p-3 border-b">{total ? `${score}/${total} (${pct}%)` : "-"}</td>
                    <td className="p-3 border-b">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${passed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {passed ? "Pass" : "Fail"}
                      </span>
                    </td>
                    <td className="p-3 border-b">{r.certificateId || "-"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;


