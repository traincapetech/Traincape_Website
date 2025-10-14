import React from "react";

const Popup = ({
  onClose,
  score,
  totalQuestions,
  certified,
  user,
  onGetCertificate,
  certificateId,
  // certificateUrl,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-fit">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Quiz Completed!
        </h2>
        <div className="text-center mb-4">
          <p className="text-lg font-bold">
            {user?.username} Your Score: {score} / {totalQuestions}
          </p>
          <p className="text-lg">
            {certified
              ? "Congratulations, you are certified!"
              : "Better luck next time!"}
          </p>
        </div>

        {certified && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 font-bold">Certificate ID : <span className="font-normal">{certificateId}</span> </p>
            {/* <p className="text-sm text-gray-600 font-bold">Certificate URL: <a href={certificateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-normal">{certificateUrl}</a></p> */}
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md"
          >
            Close
          </button>

          {certified && (
            <button
              onClick={onGetCertificate} // Trigger redirection to /cre
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Get Certificate
            </button>
          )}

       
        </div>
      </div>
    </div>
  );
};

export default Popup;