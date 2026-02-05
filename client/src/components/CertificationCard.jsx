import React from "react";
import { Link } from "react-router-dom";

export default function CertificationCard({ cert }) {
  return (
    <Link
      to={`/certifications/${cert.categorySlug}/${cert.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            {cert.title}
          </h3>
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded-full whitespace-nowrap">
            {cert.categoryTitle}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {cert.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {cert.groupTitle}
          </span>
          <span className="text-sm font-semibold text-blue-700 group-hover:underline">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}

