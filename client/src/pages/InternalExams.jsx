import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InternalExams = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState("easy");

  const handleStart = () => {
    navigate("/test", {
      state: { course: "Internal", subTopic: "Lead-and-Sales-Assessment", level },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-indigo-600 text-white py-10 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Internal Employees Assessments</h1>
            <p className="mt-2 text-indigo-100">Restricted to Traincape employees. Attempt requires login.</p>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-800">Lead and Sales Assessment</h2>
                <p className="mt-2 text-slate-600">
                  Evaluate core knowledge of lead management, sales processes, qualification, follow-ups, and CRM hygiene.
                </p>
                <div className="mt-5 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800">Assessment Details</h3>
                  <ul className="mt-2 text-slate-700 list-disc pl-5 space-y-1">
                    <li>Levels: Easy, Intermediate, Advanced</li>
                    <li>Auto pass at 70% score; certificate ID generated</li>
                    <li>Duration and question counts vary by level</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
                  <h3 className="text-lg font-semibold text-slate-800">Quick Start</h3>
                  <p className="text-slate-600 mt-1">Choose a level and start the assessment.</p>

                  <label className="block text-sm font-medium text-slate-700 mt-3">Select Level</label>
                  <select
                    className="mt-1 w-full border border-slate-300 rounded-lg p-2"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="easy">Easy</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>

                  <button
                    onClick={handleStart}
                    className="mt-4 w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
                  >
                    Start Assessment
                  </button>
                  <div className="mt-4 text-sm text-slate-600">
                    Already completed? 
                    <button
                      onClick={() => navigate("/verifyCertificate")}
                      className="ml-1 text-indigo-600 hover:underline"
                    >
                      Verify your certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-800">Step 1</h4>
                <p className="text-slate-600">Login with your Traincape credentials.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-800">Step 2</h4>
                <p className="text-slate-600">Start the assessment and submit your answers.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-800">Step 3</h4>
                <p className="text-slate-600">If you pass, your certificate ID is generated instantly.</p>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-500">
              Note: Only internal employees are authorized to attempt this assessment. Do not share your credentials.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalExams; 