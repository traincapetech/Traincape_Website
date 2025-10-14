# PECB PDF Brochures Setup Guide

## How to Set Up PECB PDF Brochures

### 1. Create Brochures Folder
The brochures folder has been created at: `src/assets/brochures/`

### 2. Upload Your PDF Files
Place all your PECB PDF brochures in the `src/assets/brochures/` folder with descriptive names like:
- `iso-27001-foundation.pdf`
- `iso-27001-lead-implementer.pdf`
- `iso-9001-foundation.pdf`
- `computer-forensics.pdf`
- `go4whatsapp.pdf`
- etc.

### 3. Update the Mapping File
Edit `src/data/pecbBrochures.js` and update the mapping with your actual PDF file names:

```javascript
const pecbBrochures = {
  "PECB Certified ISO 27001 Foundation": "/brochures/iso-27001-foundation.pdf",
  "PECB Certified ISO 27001 Lead Implementer": "/brochures/iso-27001-lead-implementer.pdf",
  "PECB Certified Go4WhatsApp": "/brochures/go4whatsapp.pdf",
  // Add all your courses here with their corresponding PDF files
};
```

### 4. How It Works
- When a user visits a PECB course page, the system checks if a brochure exists for that course
- If a brochure exists, it shows a "View PDF" and "Download" button
- If no brochure exists, it shows "Brochure will be available soon"

### 5. Course Names to Use
Make sure the course names in the mapping match exactly with the course names used in your PECB course files. The current course names are:
- "PECB Certified Go4WhatsApp"
- "PECB Certified ISO 27001 Foundation"
- "PECB Certified ISO 27001 Lead Implementer"
- "PECB Certified ISO 9001 Foundation"
- "PECB Certified ISO 9001 Lead Implementer"
- "PECB Certified ISO 22301 Business Continuity"
- "PECB Certified ISO 45001 Occupational Health"
- "PECB Certified ISO 37001 Anti-Bribery"
- "PECB Certified ISO 31000 Risk Manager"
- "PECB Certified ISO/IEC 27005 Risk Manager"
- "PECB Certified ISO/IEC 27032 Cybersecurity"
- "PECB Certified Computer Forensics"
- "PECB Certified Cybersecurity Audit"
- "PECB Certified SCADA Security Manager"

### 6. Testing
After uploading PDFs and updating the mapping:
1. Visit any PECB course page
2. Look for the "Course Brochure" section in the Overview tab
3. Click "View PDF" to open in new tab or "Download" to download

### 7. File Structure
```
src/
├── assets/
│   └── brochures/
│       ├── iso-27001-foundation.pdf
│       ├── iso-27001-lead-implementer.pdf
│       ├── go4whatsapp.pdf
│       └── ... (all your PDF files)
├── data/
│   └── pecbBrochures.js (mapping file)
└── components/
    └── PecbBrochureSection.jsx (brochure component)
```

That's it! Once you upload your PDF files and update the mapping, the brochure functionality will work automatically on all PECB course pages.
