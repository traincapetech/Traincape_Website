import React from 'react';
import SEOHead from './SEOHead';

// Pre-configured SEO data for different page types
const pageSEOData = {
  about: {
    title: "About Us | Traincape Technology - IT Training & Certification",
    description: "Learn about Traincape Technology, a premier IT training and certification provider. Expert-led courses in AWS, CompTIA, Microsoft, Cisco, and more. Join thousands of successful IT professionals.",
    canonical: "https://www.traincapetech.in/about-us",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Traincape Technology",
      "description": "Premier IT Training and Certification provider",
      "url": "https://www.traincapetech.in/about-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Traincape Technology",
        "url": "https://www.traincapetech.in",
        "logo": "https://www.traincapetech.in/android-chrome-512x512.png",
        "description": "Premier IT Training and Certification provider",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+916280281505",
          "contactType": "customer service"
        }
      }
    }
  },
  
  contact: {
    title: "Contact Us | Traincape Technology - Get in Touch",
    description: "Contact Traincape Technology for IT training and certification inquiries. Expert support for AWS, CompTIA, Microsoft, Cisco courses. Call +91 6280281505 or email us today.",
    canonical: "https://www.traincapetech.in/contact-us",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Traincape Technology",
      "description": "Get in touch with our IT training experts",
      "url": "https://www.traincapetech.in/contact-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Traincape Technology",
        "url": "https://www.traincapetech.in",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+916280281505",
          "contactType": "customer service",
          "availableLanguage": "English, Hindi"
        }
      }
    }
  },
  
  courses: {
    title: "IT Training Courses | AWS, CompTIA, Microsoft, Cisco | Traincape Technology",
    description: "Explore our comprehensive IT training courses: AWS, CompTIA, Microsoft, Cisco, PECB, IBM, Adobe, and more. Expert-led online certification programs for IT professionals.",
    canonical: "https://www.traincapetech.in/courses",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "IT Training Courses",
      "description": "Comprehensive IT training and certification courses",
      "url": "https://www.traincapetech.in/courses",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "AWS Certification Training",
            "description": "Amazon Web Services cloud computing certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Traincape Technology"
            }
          },
          {
            "@type": "Course",
            "name": "CompTIA Certification Training",
            "description": "CompTIA IT fundamentals and professional certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Traincape Technology"
            }
          },
          {
            "@type": "Course",
            "name": "Microsoft Certification Training",
            "description": "Microsoft Azure, Office 365, and other Microsoft certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Traincape Technology"
            }
          },
          {
            "@type": "Course",
            "name": "Cisco Certification Training",
            "description": "Cisco networking and security certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Traincape Technology"
            }
          }
        ]
      }
    }
  },
  
  training: {
    title: "Corporate Training | IT Skills Development | Traincape Technology",
    description: "Corporate IT training programs for organizations. Customized training solutions in AWS, Microsoft, Cisco, and more. Boost your team's IT skills with expert-led training.",
    canonical: "https://www.traincapetech.in/training",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Corporate IT Training",
      "description": "Professional IT training services for organizations",
      "provider": {
        "@type": "Organization",
        "name": "Traincape Technology"
      },
      "serviceType": "Corporate Training",
      "areaServed": "Worldwide"
    }
  },
  
  career: {
    title: "IT Career Opportunities | Join Traincape Technology",
    description: "Explore career opportunities at Traincape Technology. Join our team of IT training professionals. Current openings for instructors, developers, and support staff.",
    canonical: "https://www.traincapetech.in/career",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "IT Training Professionals",
      "description": "Join our team of IT training experts",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Traincape Technology"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India"
        }
      }
    }
  },
  
  faq: {
    title: "FAQ | Frequently Asked Questions | Traincape Technology",
    description: "Find answers to frequently asked questions about IT training, certifications, course schedules, and more. Get help with AWS, CompTIA, Microsoft, and Cisco courses.",
    canonical: "https://www.traincapetech.in/faq",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What IT certifications do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer certifications in AWS, CompTIA, Microsoft, Cisco, PECB, IBM, Adobe, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Are your courses online or in-person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer both online and in-person training options to suit your needs."
          }
        }
      ]
    }
  },
  
  blogs: {
    title: "IT Training Blog | Latest Insights & Tips | Traincape Technology",
    description: "Stay updated with the latest IT training insights, certification tips, industry trends, and career advice. Expert articles on AWS, Microsoft, Cisco, and more.",
    canonical: "https://www.traincapetech.in/blogs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Traincape Technology Blog",
      "description": "IT training insights and industry updates",
      "url": "https://www.traincapetech.in/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Traincape Technology"
      }
    }
  }
};

const PageSEO = ({ pageType, customData = {} }) => {
  const seoData = pageSEOData[pageType] || {};
  
  // Merge custom data with default data
  const finalData = {
    ...seoData,
    ...customData
  };
  
  return <SEOHead {...finalData} />;
};

export default PageSEO; 