import React, { useState, useMemo } from "react";
import BlogHero from "../../components/blog/BlogHero";
import SearchBar from "../../components/blog/SearchBar";
import CategoryTabs from "../../components/blog/CategoryTabs";
import FeaturedArticles from "../../components/blog/FeaturedArticles";
import BlogGrid from "../../components/blog/BlogGrid";
import SkeletonLoader from "../../components/blog/SkeletonLoader";
import EmptyState from "../../components/blog/EmptyState";
import { blogPosts } from "../../data/blog/posts";

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;

      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Determine featured post (first in filtered list or default top MERN stack post)
  const featuredPost = useMemo(() => {
    return blogPosts.find((post) => post.slug === "future-of-mern-stack-development-2026");
  }, []);

  // Exclude featured post from the main listing to prevent duplication if showing "All"
  const listingPosts = useMemo(() => {
    if (activeCategory === "all" && searchQuery === "" && featuredPost) {
      return filteredPosts.filter((post) => post.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, activeCategory, searchQuery, featuredPost]);

  // Paginate listing posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return listingPosts.slice(startIndex, startIndex + postsPerPage);
  }, [listingPosts, currentPage]);

  const totalPages = Math.ceil(listingPosts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero section with child search bar */}
      <BlogHero>
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          onClear={() => handleSearchChange("")}
        />
      </BlogHero>

      {/* Category Navigation bar */}
      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* Featured Article displayed only on home/all filter */}
      {activeCategory === "all" && searchQuery === "" && featuredPost && (
        <FeaturedArticles article={featuredPost} />
      )}

      {/* Articles Grid / State list */}
      <div className="max-w-7xl mx-auto pt-6">
        {listingPosts.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="max-w-7xl mx-auto px-6 text-left">
              <h2 className="text-xl md:text-2xl font-black text-slate-800 font-display">
                {activeCategory === "all" ? "Latest Articles" : `Articles in ${activeCategory.replace("-", " ")}`}
              </h2>
            </div>
            
            <BlogGrid articles={paginatedPosts} />

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  const isActive = currentPage === pageNumber;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all ${
                        isActive
                          ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
