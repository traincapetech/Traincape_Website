import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./Gallery.css";

// Import a few key images for the gallery
import teamImg from "../assets/team.jpeg";
import workingBoy from "../assets/workingboy.jpg";
import training from "../assets/training.jpg";
import unitybanner from "../assets/unitybanner.jpg";
import tallybanner from "../assets/tallybanner.jpg";
import microsoft from "../assets/microsoft.jpg";


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Gallery image data with subcategories
  const galleryImages = [
   
    // Team images
    {
      id: 4,
      src: teamImg,
      alt: "Traincape Team",
      category: "team",
      subCategory: "full-team",
    },
    {
      id: 5,
      src: teamImg,
      alt: "Development Team",
      category: "team",
      subCategory: "developers",
    },
    

    // Training images
    {
      id: 17,
      src: training,
      alt: "Training Session",
      category: "training",
      subCategory: "workshops",
    },
    {
      id: 18,
      src: training,
      alt: "Hands-on Learning",
      category: "training",
      subCategory: "practical",
    },

    // Courses images
    {
      id: 19,
      src: unitybanner,
      alt: "Unity Development",
      category: "courses",
      subCategory: "unity",
    },
    {
      id: 20,
      src: tallybanner,
      alt: "Tally Program",
      category: "courses",
      subCategory: "tally",
    },
    {
      id: 21,
      src: microsoft,
      alt: "Microsoft Training",
      category: "courses",
      subCategory: "microsoft",
    },

  ];

  // Calculate counts for each category
  const categoryCounts = galleryImages.reduce((counts, image) => {
    counts[image.category] = (counts[image.category] || 0) + 1;
    return counts;
  }, {});

  // Get subcategories for the selected category
  const getSubCategories = () => {
    if (selectedCategory === "all") return null;
    
    const subCategories = [
      ...new Set(
        galleryImages
          .filter((img) => img.category === selectedCategory)
          .map((img) => img.subCategory)
          .filter(subCategory => subCategory !== undefined)
      ),
    ];
    
    return subCategories;
  };

  const subCategories = getSubCategories();

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && lightboxOpen) {
      closeLightbox();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="gallery-page">
      <Helmet>
        <title>Gallery | Traincape Technology</title>
        <meta
          name="description"
          content="Explore our campus, training sessions, and more"
        />
      </Helmet>

      <header className="gallery-header">
        <h1>Photo Gallery</h1>
        <p>Explore our campus, training sessions, and facilities</p>
      </header>

      <div className="gallery-filters">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All ({galleryImages.length})
        </button>
        <button
          className={selectedCategory === "campus" ? "active" : ""}
          onClick={() => setSelectedCategory("campus")}
        >
          Campus ({categoryCounts["campus"] || 0})
        </button>
        <button
          className={selectedCategory === "team" ? "active" : ""}
          onClick={() => setSelectedCategory("team")}
        >
          Team ({categoryCounts["team"] || 0})
        </button>
        <button
          className={selectedCategory === "training" ? "active" : ""}
          onClick={() => setSelectedCategory("training")}
        >
          Training ({categoryCounts["training"] || 0})
        </button>
        <button
          className={selectedCategory === "courses" ? "active" : ""}
          onClick={() => setSelectedCategory("courses")}
        >
          Courses ({categoryCounts["courses"] || 0})
        </button>
        <button
          className={selectedCategory === "events" ? "active" : ""}
          onClick={() => setSelectedCategory("events")}
        >
          Events ({categoryCounts["events"] || 0})
        </button>
      </div>

      {/* Show current category info */}
      {selectedCategory !== "all" && (
        <div className="category-info">
          <h2>
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          <p>Showing {filteredImages.length} images</p>

          {subCategories && subCategories.length > 0 && (
            <div className="subcategory-tags">
              {subCategories.map((sub) => (
                sub && (
                  <span key={sub} className="subcategory-tag">
                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                  </span>
                )
              ))}
            </div>
          )}
        </div>
      )}

      <div className="gallery-container">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="image-caption">
              <p>{image.alt}</p>
              {image.subCategory && (
                <span className="subcategory-label">
                  {image.subCategory}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="no-images">
          <p>No images found for this category</p>
        </div>
      )}

      {lightboxOpen && (
        <div className="lightbox">
          <span className="close-lightbox" onClick={closeLightbox}>
            ×
          </span>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox-img"
          />
          <div className="lightbox-caption">
            <p>{currentImage.alt}</p>
            {currentImage.subCategory && (
              <span className="subcategory-lightbox">
                {currentImage.subCategory}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;