import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Use useNavigate here
import { useSelector } from "react-redux";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";
import { IoMenu, IoClose } from "react-icons/io5";
import Popup from "./Popup.jsx";
import QuestionCard from "./QuestionCard.jsx";
import DashboardHeader from "../DashboardHeader.jsx";
import ExamProctor from "../../components/ExamProctor.jsx";

const Test = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Use useNavigate here

  const { course, subTopic, level } = location.state || {};

  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [certified, setCertified] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [certificateId, setCertificateId] = useState("");
  // const [certificateUrl, setCertificateUrl] = useState("");
  const [examStarted, setExamStarted] = useState(false);   // Tracks if the exam has started. (Currently not used actively in this code.)
  const [violations, setViolations] = useState([]);   //Tracks exam security violations (e.g., leaving the tab, switching screens).


  // Gets the current logged-in user from Redux store.
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!course || !level || !subTopic) return;
    setLoading(true);
    setError(null);

    const fetchQuestions = async () => {
      try {
        const encodedSubTopic = encodeURIComponent(subTopic);
        const response = await axios.get(
          `${API_ENDPOINTS.GET_QUESTIONS}?course=${course}&subTopic=${encodedSubTopic}&level=${level}&_=${Date.now()}`
        );
        setQuestions(response.data);
      } catch (error) {
        setError("Failed to load questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [course, level, subTopic]);

  useEffect(() => {
    if (timeLeft === 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleOptionChange = (option) => {
    if (timeLeft > 0) {
      setUserAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestion]: option,
      }));
    }
  };

 

  const handleSubmit = async () => {
    setQuizSubmitted(true);
    const score = calculateScore();

    // Calculate if the user is certified based on the score
    const passingScore = questions.length * 0.8; // 80% passing score
    const isCertified = score >= passingScore;

    setCertified(isCertified); // Set the certified status based on score

    const resultData = {
      name: user?.username,
      email: user?.email,
      course,
      subTopic,
      score,
      level,
      totalQuestions: questions.length,
      certificate: isCertified, // Send certificate status to backend
      violations: violations, // Include violation data
    };

    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/results/addResult",
        resultData
      );
      console.log("Result saved successfully:", response.data);

      const certificateId = response.data.result.certificateId;
      // const certificateUrl = response.data.certificateUrl;

      setCertificateId(certificateId);
      // setCertificateUrl(certificateUrl);

      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error("Error saving result:", error.response?.data || error.message);
      alert("There was an error saving your result. Please try again.");
    }
  };


  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSidebarClick = (index) => {
    if (timeLeft > 0) {
      setCurrentQuestion(index);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleGetCertificate = () => {
    // Pass the necessary values to the CertificateTemplate through state

    navigate('/cer', {
      state: {
        username: user?.username,
        courseName: course,
        subTopic: subTopic,
        certificateId: certificateId
      }
    });
  };

  // Handle security violations
  const handleViolation = (type, count) => {
    const newViolation = {
      type,
      count,
      timestamp: new Date().toISOString(),
      course,
      subTopic,
      level
    };
    setViolations(prev => [...prev, newViolation]);
    console.log(`Security violation: ${type} (${count})`);
  };

  // Handle exam termination
  const handleExamTermination = (violationData) => {
    console.log('Exam terminated due to violations:', violationData);
    // You can send this data to your backend for logging
    setQuizSubmitted(true);
    setCertified(false);
  };


  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }




  const handleOptionSelect = (selected) => {
    // Save the answer
    setUserAnswers((prev) => ({ ...prev, [currentQuestion]: selected }));

    // If it was marked as skipped before, remove it
    setSkippedQuestions((prev) => prev.filter((q) => q !== currentQuestion));
  };





  return (
    <ExamProctor
      onViolation={handleViolation}
      onExamTermination={handleExamTermination}
      maxViolations={3}
      debug={process.env.NODE_ENV === 'development'}
    >
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <div className="flex justify-between items-center bg-gray-900 p-4 sm:hidden">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <IoClose size={24} color="white" /> : <IoMenu size={24} color="white" />}
        </button>
      </div>

      <div className={`w-full sm:w-1/4 bg-gray-700 p-6 sm:block  m-3  rounded-xl ${isSidebarOpen ? "block" : "hidden sm:block"}`}>
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">Questions</h2>
        <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSidebarClick(index)}
              className={`w-10 lg:w-12 lg:h-12 h-10 text-center text-lg font-semibold rounded-md 
                ${currentQuestion === index
                  ? "bg-blue-900 text-white border border-white"
                  : reviewQuestions.includes(index)
                    ? "bg-yellow-500 text-white"
                    : skippedQuestions.includes(index)
                      ? "bg-red-500 text-white"
                      : userAnswers[index] !== undefined
                        ? "bg-green-500 text-white"
                        : "bg-white"
                }`}

              disabled={timeLeft === 0 || quizSubmitted}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow p-6">
        <div className="flex justify-center items-center mb-6">
          {/* First div - 80% width and text centered */}
          <div className="w-4/5 text-center md:text-lg text-base flex flex-col mt-2 space-y-2">
            <span className="font-semibold text-3xl">
              Course: <span className="text-blue-900">{course}</span>
            </span>
            <div className="w-36 bg-blue-900 mx-auto rounded-xl h-1" />
            <span>
              <span className="font-semibold">Sub-Topic:</span> {subTopic}
            </span>
            <span>
              <span className="font-semibold">Level:</span> {level}
            </span>

          </div>

          {/* Second div - 20% width */}
          <div className="w-1/5 mt-2 md:text-lg text-sm font-bold text-right ">
            <DashboardHeader />
            Time Left: {quizSubmitted ? "00:00" : formatTime(timeLeft)}
          </div>
        </div>

        <div className="rounded-lg shadow-md">
          {timeLeft > 0 && questions.length > 0 && !quizSubmitted && (
            <QuestionCard
              questionText={questions[currentQuestion]?.questionText}
              options={questions[currentQuestion]?.options || []}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              handleSubmit={handleSubmit}
              selectedOption={userAnswers[currentQuestion]}
              handleOptionChange={handleOptionChange}
              totalQuestions={questions.length}
              setReviewQuestions={setReviewQuestions}
              reviewQuestions={reviewQuestions}
              setSkippedQuestions={setSkippedQuestions}
              onOptionSelect={handleOptionSelect}   // <-- pass it
              userAnswers={userAnswers}
            />
          )}
        </div>

        {timeLeft === 0 && !quizSubmitted && (
          <div className="mt-4 text-center text-4xl text-red-500 font-bold">Time's Up!</div>
        )}
      </div>

      {showPopup && (
        <Popup
          onClose={closePopup}
          score={calculateScore()}
          totalQuestions={questions.length}
          certified={certified}
          user={user}
          onGetCertificate={handleGetCertificate} // Pass the redirection function here
          certificateId={certificateId} // Pass certificateId to popup
        // certificateUrl={certificateUrl} // Pass certificateUrl to popup
        />
      )}
    </div>
     </ExamProctor>
  );
};

export default Test;