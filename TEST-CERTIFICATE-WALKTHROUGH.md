# 🧪 Test & Certificate System — Complete A-to-Z Guide

## 📌 Quick Summary

| What | How |
|------|-----|
| **Add questions** | Edit `server/data/course-questions.json` |
| **Upload to local DB** | `node server/scripts/upload-questions.js` |
| **Upload to production DB** | `node server/scripts/upload-questions.js prod` |
| **Total certifications** | 292 (CompTIA + PECB + GIPMC) |
| **Production Backend** | `https://traincape-backend-1.onrender.com` |
| **Production Frontend** | `https://cognify.traincapetech.in` |

---

## 🔄 Complete Flow (Step by Step)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        QUESTION SETUP                               │
│                                                                     │
│  1. course-questions.json  ──→  2. upload-questions.js  ──→  MongoDB│
│     (add questions here)       (run script)              (database) │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        USER FLOW                                    │
│                                                                     │
│  3. Certification Page  ──→  4. Test.jsx  ──→  5. Score & Result    │
│     (Take Test button)      (Quiz + Timer)    (POST /results)       │
│                                                                     │
│  6. Popup.jsx  ──→  7. CertificateTemplate.jsx  ──→  8. Download   │
│     (Pass/Fail)     (Certificate page)              (PDF)           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📁 All Files Involved

### Data & Scripts (Server Side)
| File | Purpose |
|------|---------|
| `server/data/course-questions.json` | All questions stored here (292 courses) |
| `server/scripts/upload-questions.js` | Uploads questions to MongoDB |
| `server/scripts/generate-all-questions-keys.cjs` | Auto-generates empty entries for all certifications |
| `server/model/question.model.js` | MongoDB schema for questions |
| `server/model/result.model.js` | MongoDB schema for test results |
| `server/routes/question.routes.js` | API: `/questions/getQuestions` & `/questions/addQuestion` |
| `server/routes/result.routes.js` | API: `/results/addResult` & `/results/verifyCertificate` |

### Frontend (Client Side)
| File | Purpose |
|------|---------|
| `client/src/pages/Certifications/CertificationDetail.jsx` | "Take Test" button on each certification |
| `client/src/pages/Test/Test.jsx` | Main quiz engine (timer, answers, submit) |
| `client/src/pages/Test/Popup.jsx` | Score popup after test completion |
| `client/src/pages/Test/CertificateTemplate.jsx` | Certificate display + PDF download |
| `client/src/components/ExamProctor.jsx` | Fullscreen + anti-cheat proctoring |
| `client/src/config/api.js` | API URLs (local vs production) |

---

## 🗄️ MongoDB Schema

### Questions Collection (`courses`)

```
Course Document
├── name: "Cybersecurity & Compliance"     ← course name
└── subTopics: [
      ├── name: "Cyber Security Professional (CSP-G)"   ← certification name
      └── levels:
            ├── easy: [ {questionText, options[], correctAnswer}, ... ]
            ├── intermediate: [ ... ]
            └── advanced: [ ... ]
    ]
```

### Results Collection (`results`)

```
Result Document
├── name: "rahul12"
├── email: "user@email.com"
├── course: "Cybersecurity & Compliance"
├── subTopic: "Cyber Security Professional (CSP-G)"
├── score: 8
├── totalQuestions: 10
├── level: "easy"
├── certificate: true          ← true if score >= 80%
├── certificateId: "uuid-xxx"  ← unique ID for verification
└── createdAt / updatedAt
```

---

## 📝 How to Add Questions

### Step 1: Open `server/data/course-questions.json`

Find your certification. Example for CWDE:

```json
"SoftwareDevelopmentTesting_CertifiedWebDevelopmentExpertCWDE": {
    "course": "Software Development & Testing",
    "subTopic": "Certified Web Development Expert (CWDE)",
    "questions": []
}
```

### Step 2: Add questions to the `questions` array

```json
"questions": [
    {
        "questionText": "What does HTML stand for?",
        "options": [
            "A) Hyper Text Markup Language",
            "B) High Tech Modern Language",
            "C) Hyper Transfer Markup Language",
            "D) Home Tool Markup Language"
        ],
        "correctAnswer": "A) Hyper Text Markup Language"
    },
    {
        "questionText": "Which CSS property changes text color?",
        "options": [
            "A) font-color",
            "B) text-color",
            "C) color",
            "D) foreground-color"
        ],
        "correctAnswer": "C) color"
    }
]
```

### ⚠️ Important Rules:
- `correctAnswer` must **exactly match** one of the `options` (including "A) " prefix)
- `course` must match `cert.categoryTitle` from CertificationDetail.jsx
- `subTopic` must match `cert.title` from CertificationDetail.jsx
- Minimum 5-10 questions recommended per certification

---

## ⬆️ How to Upload Questions to Database

### 🖥️ LOCAL (Development)

Make sure your local server is running (`npm start` in server folder), then:

```bash
cd "d:\train cape career\Traincape_Website"
node server/scripts/upload-questions.js
```
or
node Traincape_Website/server/scripts/upload-questions.js

This uploads to: `http://localhost:8080/questions/addQuestion`

### 🌐 PRODUCTION (Live Website)

```bash
cd "d:\train cape career\Traincape_Website"
node server/scripts/upload-questions.js prod
```

This uploads to: `https://traincape-backend-1.onrender.com/questions/addQuestion`

### What the script does:

```
1. Reads server/data/course-questions.json
2. Loops through all 292 courses
3. For each course with questions:
   → POST /questions/addQuestion with:
     {
       course: "Software Development & Testing",
       subTopic: "Certified Web Development Expert (CWDE)",
       level: "easy",
       questionText: "...",
       options: ["A)...", "B)...", "C)...", "D)..."],
       correctAnswer: "A)..."
     }
4. The API (question.routes.js):
   → Finds or creates the course document in MongoDB
   → Finds or creates the subTopic
   → Pushes question into levels.easy[] array
5. Skips courses with empty questions: []
```

### Output Example:

```
Found 292 courses in course-questions.json
Uploading to: https://traincape-backend-1.onrender.com

📝 comptia_CompTIACySA+: Uploading 10 questions...
   ✅ 10 uploaded, ❌ 0 failed
⏭️  comptia_CompTIAA+: No questions, skipping
⏭️  comptia_CompTIANetwork+: No questions, skipping
...

--- SUMMARY ---
✅ Uploaded: 10 questions
⏭️  Skipped: 291 courses (no questions)
❌ Failed: 0 questions
```

---

## 🧭 User Flow Explained

### Step 1: User visits certification page
- Any certification from the catalog (CySA+, CWDE, etc.)
- Clicks **"Take Test"** button

### Step 2: Take Test button sends data
```javascript
// CertificationDetail.jsx line 152
navigate("/test", { 
    state: { 
        course: cert.categoryTitle,   // e.g. "Cybersecurity & Compliance"
        subTopic: cert.title,         // e.g. "CompTIA CySA+"
        level: "easy" 
    } 
});
```

### Step 3: Test.jsx loads questions
```
GET /questions/getQuestions?course=Cybersecurity & Compliance&subTopic=CompTIA CySA+&level=easy
```
- Returns array of questions from MongoDB
- ExamProctor wraps the test → forces fullscreen + anti-cheat

### Step 4: User takes the quiz
- Timer running
- One question at a time
- Can navigate between questions

### Step 5: User submits → Score calculated
```
Score = number of correct answers
Pass = score >= 70% of total questions (in frontend)
```

### Step 6: Result saved to database
```
POST /results/addResult
{
    name, email, course, subTopic, score, totalQuestions, level
}
```
- Backend calculates: **certificate = score >= 80%**
- Generates unique **certificateId** (UUID)
- Saves to `results` collection

### Step 7: Popup shows result
- **Pass** → Shows score + Certificate ID + "Get Certificate" button
- **Fail** → Shows score + "Try Again"

### Step 8: Certificate page
- Exits fullscreen
- Shows beautiful certificate with name, course, date, signature
- **Download PDF** button (html2pdf.js)
- **Share Certificate** button (copies verification link)

### Step 9: Verification
- User can verify certificate at `/verify-certificate`
- Enters Certificate ID → System validates against `results` database
- Shows authentic certificate with "Valid Certificate Verified" badge

---

## 🔍 Verification Systems (Two Types)

We now have **two separate verification pages** for different purposes:

| Feature | Route | API Used | Purpose |
|---------|-------|----------|---------|
| **Certificate Lookup** | `/CertificateLookup` | `/certificates/{id}` | For **Course Completion** certificates (Legacy/Manual) |
| **Test Certificate** | `/verify-certificate` | `/results/verifyCertificate` | For **Online Test** certificates (New Automated System) |

> **Note:** Both are accessible from the **Footer** under "Links".

---

## 🔧 Production Deployment Checklist

When deploying to production, make sure:

| # | Task | How |
|---|------|-----|
| 1 | Questions uploaded to production DB | `node server/scripts/upload-questions.js prod` |
| 2 | Backend running on Render | Check `https://traincape-backend-1.onrender.com` |
| 3 | Frontend deployed | Check `https://cognify.traincapetech.in` |
| 4 | API endpoints correct | `client/src/config/api.js` auto-switches based on NODE_ENV |
| 5 | MongoDB accessible | Production MongoDB connection string in `.env` on Render |

---

## ⚠️ Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| "No questions found" on test | Questions not in DB | Run `upload-questions.js` (local or prod) |
| Wrong questions showing | `course`/`subTopic` mismatch | Ensure exact match with CertificationDetail data |
| Popup not showing | API error on result save | Fixed: fallback shows popup even on API error |
| Certificate goes fullscreen | ExamProctor auto-re-entry | Fixed: cleanup exits fullscreen on unmount |
| **Upload shows "Question already exists"** | **Duplicate Prevention** | **Normal behavior.** The system now skips duplicates automatically. |
| `correctAnswer` not matching | Must include prefix like "A) " | Match exact string from options |

---

## 🛠️ Managing Duplicates & Verification

We have implemented a **smart duplicate prevention system** to ensure 100% data integrity.

### 1. Automatic Prevention
When you run `upload-questions.js`, the server checks every question against the database before adding it.
- **If it exists:** Skips and logs "Question already exists".
- **If new:** Adds it to the database.

### 2. How to Verify Question Counts
To check exactly how many questions result in the database, you can use these scripts:

**Check CompTIA CySA+ Questions:**
```bash
node server/scripts/check-cysa-questions.js
```

**Clean Duplicates (If ever needed):**
```bash
node server/scripts/clean-cysa-questions.js
```
*(Note: These scripts are specific to CySA+ but can be adapted for other courses)*

### 3. Recommended Workflow
1. **Edit** `server/data/course-questions.json` to add new questions.
2. **Run** `node server/scripts/upload-questions.js` (for local) or `... prod` (for live).
3. **Read the summary** at the end of the script output. It will tell you:
   - ✅ Uploaded: [count] (New questions added)
   - ⏭️ Skipped: [count] (Courses with no questions)
   - ❌ Failed: [count] (Errors)

---

## 📊 Current Status

- **Total certification slots ready:** 292
- **With questions:** 1 (CompTIA CySA+ — 10 questions)
- **Remaining to populate:** 291 courses need questions
- **Passing score:** 80% (backend) / 70% (frontend display)
- **Question levels supported:** easy, intermediate, advanced
- **Currently using:** easy level only
