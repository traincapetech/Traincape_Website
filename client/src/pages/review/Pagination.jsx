import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          className={`min-w-[2.5rem] h-10 px-3 rounded-md font-medium transition-all duration-200
            ${currentPage === i
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"}
          `}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-10 px-4 rounded-md bg-gray-200 text-gray-600 font-medium hover:bg-blue-500 hover:text-white disabled:opacity-50 transition-all"
      >
        Prev
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-10 px-4 rounded-md bg-gray-200 text-gray-600 font-medium hover:bg-blue-500 hover:text-white disabled:opacity-50 transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;