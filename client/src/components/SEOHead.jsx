import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  structuredData 
}) => {
  const location = useLocation();
  
  // Base URL - use www version as canonical
  const baseUrl = 'https://www.traincapetech.in';
  
  // Generate canonical URL
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;
  
  // Default meta description
  const defaultDescription = "Expert-led online courses for AWS, CompTIA, Microsoft, Cisco and other IT certifications. Advance your IT career with Traincape Technology.";
  
  // Default title
  const defaultTitle = "Traincape Technology | IT Training & Certification";
  
  // Default OG image
  const defaultOgImage = `${baseUrl}/android-chrome-512x512.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL - Always use www version */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content="Traincape Technology" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Traincape Technology" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Prevent indexing of non-www URLs */}
      {!location.pathname.includes('www.') && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Helmet>
  );
};

export default SEOHead; 