# SEO Implementation Guide

## 🚀 Quick Implementation Steps

### 1. For Main Pages (About, Contact, Courses, etc.)

Add this to the top of your page component:

```jsx
import PageSEO from '../components/PageSEO';

// In your component's return statement, add this as the first element:
return (
  <div>
    <PageSEO pageType="about" /> {/* or "contact", "courses", "training", etc. */}
    {/* Your existing page content */}
  </div>
);
```

### 2. For Course Pages (AWS, Microsoft, Cisco, etc.)

Add this to your course page components:

```jsx
import CourseSEO from '../components/CourseSEO';

// In your component's return statement:
return (
  <div>
    <CourseSEO courseType="aws" /> {/* or "microsoft", "cisco", "comptia", etc. */}
    {/* Your existing course content */}
  </div>
);
```

### 3. For Custom Pages

Use the SEOHead component directly:

```jsx
import SEOHead from '../components/SEOHead';

// In your component's return statement:
return (
  <div>
    <SEOHead 
      title="Your Custom Title"
      description="Your custom description"
      canonical="https://www.traincapetech.in/your-page"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Your Page Name",
        "description": "Your page description"
      }}
    />
    {/* Your existing content */}
  </div>
);
```

## 📋 Available Page Types

### PageSEO Component
- `about` - About Us page
- `contact` - Contact Us page
- `courses` - Main courses listing
- `training` - Corporate training page
- `career` - Career opportunities page
- `faq` - Frequently asked questions
- `blogs` - Blog listing page

### CourseSEO Component
- `aws` - AWS certification training
- `microsoft` - Microsoft certification training
- `cisco` - Cisco certification training
- `comptia` - CompTIA certification training
- `pecb` - PECB certification training
- `ibm` - IBM certification training
- `adobe` - Adobe certification training
- `autodesk` - Autodesk certification training
- `tally` - Tally certification training
- `unity` - Unity game development training
- `meta` - Meta platform training
- `pmi` - PMI project management training
- `swift` - Swift iOS development training

## 🔧 Customization

### Override Default SEO Data
```jsx
<PageSEO 
  pageType="about" 
  customData={{
    title: "Custom About Title",
    description: "Custom description for this specific page"
  }}
/>
```

### Add Custom Structured Data
```jsx
<CourseSEO 
  courseType="aws"
  customData={{
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Custom AWS Course",
      "offers": {
        "@type": "Offer",
        "price": "450",
        "priceCurrency": "USD"
      }
    }
  }}
/>
```

## 📝 Example Implementations

### About Us Page
```jsx
import React from 'react';
import PageSEO from '../components/PageSEO';

const AboutUs = () => {
  return (
    <div>
      <PageSEO pageType="about" />
      <h1>About Traincape Technology</h1>
      {/* Your about page content */}
    </div>
  );
};

export default AboutUs;
```

### AWS Course Page
```jsx
import React from 'react';
import CourseSEO from '../components/CourseSEO';

const AWSCourse = () => {
  return (
    <div>
      <CourseSEO courseType="aws" />
      <h1>AWS Certification Training</h1>
      {/* Your AWS course content */}
    </div>
  );
};

export default AWSCourse;
```

### Custom Page with Specific SEO
```jsx
import React from 'react';
import SEOHead from '../components/SEOHead';

const CustomPage = () => {
  return (
    <div>
      <SEOHead 
        title="Special Training Program | Traincape Technology"
        description="Exclusive training program for enterprise clients"
        canonical="https://www.traincapetech.in/enterprise-training"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Enterprise Training Program",
          "provider": {
            "@type": "Organization",
            "name": "Traincape Technology"
          },
          "serviceType": "Corporate Training"
        }}
      />
      <h1>Enterprise Training Program</h1>
      {/* Your custom page content */}
    </div>
  );
};

export default CustomPage;
```

## ✅ Verification Checklist

After implementing SEO components:

1. **Check Meta Tags**: Use browser developer tools to verify:
   - Title tag is correct
   - Meta description is present
   - Canonical URL is set to www version

2. **Test Structured Data**: Use Google's Rich Results Test:
   - Go to [Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your page URL
   - Verify structured data is detected

3. **Check Redirects**: Test these URLs:
   - `https://traincapetech.in` → should redirect to `https://www.traincapetech.in`
   - `http://traincapetech.in` → should redirect to `https://www.traincapetech.in`

4. **Verify Sitemap**: Check that your page is included in:
   - `https://www.traincapetech.in/sitemap.xml`

## 🚨 Common Issues

### SEO Component Not Working
- Ensure you're importing the correct component
- Check that the component is placed at the top of your JSX return
- Verify the pageType/courseType matches the available options

### Meta Tags Not Updating
- Clear browser cache
- Rebuild and redeploy the application
- Check that the SEO component is being rendered

### Canonical URLs Not Working
- Verify the `_redirects` file is in the build folder
- Check that your hosting provider supports redirects
- Test with curl: `curl -I https://traincapetech.in`

---

**Need Help?** Check the main deployment guide or contact support. 