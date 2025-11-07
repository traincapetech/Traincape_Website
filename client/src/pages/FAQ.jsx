import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleToggle = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Frequently Asked Questions (FAQ) – Traincape Technology</title>
        <meta
          name="description"
          content="Get answers to all your queries about Traincape Technology’s online IT training and certification courses in AWS, CompTIA, Microsoft, and Cisco."
        />
        <meta
          name="keywords"
          content="Traincape Technology FAQ, IT certification help, AWS training, CompTIA certification, Microsoft training, Cisco courses"
        />
        <link
          rel="canonical"
          href="https://traincapetech.in/frequently-asked-questions"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* ✅ Updated Headings */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions (FAQ) – Traincape Technology
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
            Solutions to all your doubts cleared
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-8">
          {/* Question 1 */}
          <div className="mb-6">
            <div
              onClick={() => handleToggle(0)}
              className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black flex justify-between items-center mb-4 rounded-lg"
            >
              <h3 className="md:text-2xl text-xl font-semibold">
                Are these courses free or paid?
              </h3>
              <button className="text-2xl font-bold">
                {expandedQuestion === 0 ? "-" : "+"}
              </button>
            </div>
            {expandedQuestion === 0 && (
              <div className="px-4 py-2.5 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-700 leading-8 md:text-lg font-medium">
                  We offer <strong>paid training</strong> for over 150+ IT and Non-IT
                  courses including:
                  <br />
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>PMP Project Management Professional</li>
                    <li>ITIL V4 Foundation</li>
                    <li>PRINCE2</li>
                    <li>Microsoft Azure (AZ Series)</li>
                    <li>AWS Certified Architect, Developer, SysOps</li>
                    <li>CompTIA Security+, Network+, A+</li>
                    <li>CCNA, CCNP, CCIE (Cisco)</li>
                    <li>CEH, CISM, CBAP, CKA</li>
                  </ul>
                </p>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="mb-6">
            <div
              onClick={() => handleToggle(1)}
              className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black flex justify-between items-center mb-4 rounded-lg"
            >
              <h3 className="md:text-2xl text-xl font-semibold">
                What will be the cost of a particular course?
              </h3>
              <button className="text-2xl font-bold">
                {expandedQuestion === 1 ? "-" : "+"}
              </button>
            </div>
            {expandedQuestion === 1 && (
              <div className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-700 leading-8 md:text-lg font-medium">
                  The cost varies depending on the course level and certification body.
                  For example:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      <strong>CompTIA or Cisco courses:</strong> Typically range between
                      ₹25,000 – ₹50,000.
                    </li>
                    <li>
                      <strong>Microsoft or AWS certifications:</strong> Usually between
                      ₹35,000 – ₹70,000.
                    </li>
                    <li>
                      <strong>Advanced management courses (like PMP, PRINCE2):</strong>{" "}
                      Around ₹60,000 – ₹1,00,000.
                    </li>
                  </ul>
                  Prices vary by course duration, mode (online/offline), and
                  certification level.
                </p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="mb-6">
            <div
              onClick={() => handleToggle(2)}
              className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black flex justify-between items-center mb-4 rounded-lg"
            >
              <h3 className="md:text-2xl text-xl font-semibold">
                What are Traincape Technology’s customer support hours?
              </h3>
              <button className="text-2xl font-bold">
                {expandedQuestion === 2 ? "-" : "+"}
              </button>
            </div>
            {expandedQuestion === 2 && (
              <div className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-700 leading-8 md:text-lg font-medium">
                  Our customer support operates <strong>7 days a week</strong>:
                  <br />
                  <strong>⏰ 11:00 AM to 7:00 PM (IST)</strong>
                  <br />
                  <br />
                  You can contact us anytime during these hours for guidance on course
                  selection, enrollment, or certification details.
                </p>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="mb-6">
            <div
              onClick={() => handleToggle(3)}
              className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black flex justify-between items-center mb-4 rounded-lg"
            >
              <h3 className="md:text-2xl text-xl font-semibold">
                What is the duration of a typical course?
              </h3>
              <button className="text-2xl font-bold">
                {expandedQuestion === 3 ? "-" : "+"}
              </button>
            </div>
            {expandedQuestion === 3 && (
              <div className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-700 leading-8 md:text-lg font-medium">
                  Course duration depends on the certification level:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Foundation Courses: 2–3 Days</li>
                    <li>Intermediate / Associate: 4–5 Days</li>
                    <li>Advanced or Professional: 1–2 Weeks</li>
                  </ul>
                  <br />
                  You can contact our support team to get the full training schedule
                  for each course.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
