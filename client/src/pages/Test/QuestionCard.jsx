import React from "react";

const QuestionCard = ({
  questionText, // Changed to match the API response
  options,
  currentQuestion,
  setCurrentQuestion,
  handleSubmit,
  selectedOption,
  handleOptionChange,
  totalQuestions,
  setReviewQuestions,
  reviewQuestions,
  setSkippedQuestions,
  onOptionSelect,
  userAnswers
}) => {
  // const handleNext = () => {
  //   if (currentQuestion < totalQuestions - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // };


  const handleNext = () => {
    if (userAnswers[currentQuestion] === undefined) {
      setSkippedQuestions((prev) =>
        prev.includes(currentQuestion) ? prev : [...prev, currentQuestion]
      );
    } else {
      setSkippedQuestions((prev) => prev.filter((q) => q !== currentQuestion));
    }

    setCurrentQuestion((prev) => prev + 1);
  };




  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };



  const isLastQuestion = currentQuestion === totalQuestions - 1;



  const handleReview = () => {
    setReviewQuestions((prev) => {
      if (prev.includes(currentQuestion)) {
        return prev.filter((q) => q !== currentQuestion); // unmark
      } else {
        return [...prev, currentQuestion]; // mark
      }
    });
  };


  const isReviewed = reviewQuestions.includes(currentQuestion);

  return (
    <div className="w-full p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Q.{currentQuestion + 1} {questionText} {/* Updated to questionText */}
      </h2>
      {/* <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option}
            </label>
          </div>
        ))}
      </div> */}
      <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => {
                handleOptionChange(option);
                onOptionSelect(option); // remove from skipped when chosen
              }}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-left items-center gap-10">
        <button
          onClick={handlePrev}
          className="bg-blue-900 text-white py-2 px-6 rounded-md"
        >
          Previous
        </button>



        <button
          onClick={handleReview}
          className={`py-2 px-6 rounded-md text-white ${isReviewed ? "bg-yellow-500" : "bg-blue-900"
            }`}
        >
          {isReviewed ? "Unmark Review" : "Review"}
        </button>


        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-6 rounded-md"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-900 text-white py-2 px-6 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;