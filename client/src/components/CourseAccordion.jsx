import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const CourseAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition duration-300"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

export default CourseAccordion; 