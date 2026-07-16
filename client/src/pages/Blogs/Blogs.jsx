import React from "react";
import { useParams } from "react-router-dom";
import BlogListing from "./BlogListing";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { slug } = useParams();

  // If slug route parameter is present, render single blog detail view
  if (slug) {
    return <BlogDetails />;
  }

  // Otherwise render listing page grid
  return <BlogListing />;
}