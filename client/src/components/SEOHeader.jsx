import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHeader = ({ 
  title = "Traincape Technology | IT Training & Certification",
  description = "IT Training & Certification provider for AWS, CompTIA, Microsoft, Cisco & PECB. Expert-led online courses for IT professionals.",
  keywords = "Traincape Technology, IT training, AWS certification, CompTIA, Microsoft, Cisco courses, IT certification",
  canonicalUrl
}) => {
  // Get current URL for canonical if not specified
  const pathname = window.location.pathname;
  const currentUrl = canonicalUrl || `https://traincapetech.in${pathname}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHeader; 