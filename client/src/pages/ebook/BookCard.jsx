import React, { useState, memo } from "react";
import { useNavigate, Link } from "react-router-dom";

const BookCard = ({
  Doclink,
  author,
  description,
  image,
  pdflink,
  title,
  _id,
}) => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackImage = "https://via.placeholder.com/300x450?text=No+Cover";

  const handleClick = () => navigate(`/book-details/${_id}`);

  const truncate = (str = "", limit = 60) =>
    str.length > limit ? `${str.slice(0, limit)}...` : str;

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer flex flex-col"
    >
      <div className="relative w-full aspect-[2/3] bg-gray-100">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
            <span className="text-gray-400 text-sm">Loading cover...</span>
          </div>
        )}
        <img
          src={imgError ? fallbackImage : image}
          alt={title || "Book Cover"}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-105`}
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {truncate(title, 60) || "Untitled"}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-1">
          {author ? `By: ${truncate(author, 35)}` : "Unknown Author"}
        </p>

        {description && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {truncate(description, 100)}
          </p>
        )}

        <div className="mt-auto pt-4 flex justify-between items-center">
          {pdflink && (
            <Link
              to={pdflink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs px-3 py-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Read PDF
            </Link>
          )}

          {Doclink && (
            <Link
              to={Doclink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs px-3 py-1.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              View Doc
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(BookCard);