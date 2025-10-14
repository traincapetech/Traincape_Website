import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Handle the toggle of the question (expand or collapse)
  const handleToggle = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

 <>
       {/* SEO Content for this Page  */}
            <Helmet>
              <title>FAQs | IT Training and Certifications | Traincape Technology</title>
              <meta
                name="description"
                content="Explore Traincape Technology's frequently asked questions about IT Certifications, like CompTIA, AWS, Cisco, Microsoft, PMI, and over 150 other certifications. Your partner for IT training and certifications."
              />
              <link
                rel="canonical"
                href="https://traincapetech.in/frequently-asked-questions"
              />
            </Helmet>
      


    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold  mb-2">Frequently Asked Questions</h1>
        <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-base text-gray-600">
          A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do
        </p>
      </div>
      <div className="mt-8">
        <div className="mb-6">
          <div onClick={() => handleToggle(0)} className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black  flex justify-between items-center mb-4">
            <h2 className="md:text-2xl text-xl font-semibold">Are these courses free or paid?</h2>
            <button className="text-2xl font-bold">
              {expandedQuestion === 0 ? "-" : "+"}
            </button>
          </div>
          {expandedQuestion === 0 && (
            <div className="px-4 py-2.5 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-600 leading-10 md:text-xl text-base font-semibold">
                We offer paid training for over 150+ IT and Non-IT courses.
                <br />
                Some of the courses include:
                <br />
                1. PMP Project Manager Professional
                <br />
                2. ITIL V4 Information Technology Infrastructure
                <br />
                3. Prince-2
                <br />
                4. Microsoft Azure (AZ)
                <br />
                5. All Microsoft Certifications
                <br />
                6. AWS Certified Developer Engineer
                <br />
                7. AWS Certified SysOps Administrator
                <br />
                8. AWS Certified Solution Architect Professional
                <br />
                9. CCNA (CISCO Certified Network Associate)
                <br />
                10. CCNP (CISCO Certified Network Professional)
                <br />
                11. CBAP (Certified Bussiness Analyst Professional)
                <br />
                12. CKA (Certified Kubernetes Administrator)
                <br />
                13. CCIE (Cisco Certified Internetwork Expert)
                <br />
                14. CEH (Certified Ethical Hacker Certification)
                <br />
                15. CISM (Certified Information Security Manager)
                <br />
                16. CISCO (Computer Information Security Company)
                <br />
                17. CompTIA Security+
                <br />
                18. Network+
                <br />
                19. SQL & More
              </p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div onClick={() => handleToggle(1)} className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black flex justify-between items-center mb-4">
            <h2 className="md:text-2xl text-xl font-semibold">What will be the cost of a particular course?</h2>
            <button  className="text-2xl font-bold">
              {expandedQuestion === 1 ? "-" : "+"}
            </button>
          </div>
          {expandedQuestion === 1 && (
            <div className="px-4 py-2 bg-gray-100 rounded-lg text-base shadow-md">
              <p className="text-gray-600 leading-10 md:text-xl text-base font-semibold">
                With 150+ IT and non-IT courses available, each course has its own unique fee structure and duration. The cost of a course can vary widely based on factors such as the complexity of the subject matter, the level of expertise it offers, the duration of the course (whether it's short-term or long-term), and the institution or platform offering the course.
                <br />
                For example, IT courses might include programming languages like Python, Java, or C++, cybersecurity training, data science and machine learning, web development, cloud computing, and more.
                <br />
                Non-IT courses could range from business management and finance to creative arts, languages, health sciences, and many others. To determine the cost of a specific course, it's essential to look at the details provided by the course provider.
                <br />
                This information typically includes the course syllabus, duration (in weeks or months), whether it's self-paced or instructor-led, any certifications offered upon completion, and of course, the fee structure. Some courses may offer installment plans or discounts for early registration, while others might include additional resources or support services in their pricing.
              </p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div onClick={() => handleToggle(2)} className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black flex justify-between items-center mb-4">
            <h2 className="md:text-2xl text-xl font-semibold">Traincape Technology customer support hours?</h2>
            <button  className="text-2xl font-bold">
              {expandedQuestion === 2 ? "-" : "+"}
            </button>
          </div>
          {expandedQuestion === 2 && (
            <div className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-600 leading-10 md:text-xl text-base font-semibold">
                Traincape Technology offers customer support services from Monday to Sunday, from 11 am to 7 pm.
                <br />
                <br />
                <span className="font-semibold underline">Customer Support Hours</span>
                <br />
                * - Traincape Technology provides customer support 7 days a week, from Monday to Sunday.
                <br />
                * - The support hours are from 11 am to 7 pm each day.
                <br />
                <br />
                <span className="font-semibold underline">Availability and Accessibility</span>
                <br />
                * - With support available 8 hours per day, 7 days a week, Traincape Technology demonstrates a strong commitment to serving its customers.
                <br />
                * - The extended hours, including weekends, make it convenient for customers to contact support at their preferred time.
                <br />
                * - This level of accessibility helps address customer inquiries and resolve issues in a timely manner.
                <br />
                <br />
                <span className="font-semibold underline">Dedicated Support Team</span>
                <br />
                * - To provide support during these hours, Traincape Technology likely has a dedicated team of customer service representatives.
                <br />
                * - The team is trained to handle a variety of customer queries and concerns efficiently.
                <br />
                <br />
                <span className="font-semibold underline">Importance of Customer Support</span>
                <br />
                * - Offering comprehensive customer support is crucial for any business to maintain strong relationships with its customers.
                <br />
                * - Traincape Technology's extended support hours showcase their dedication to providing excellent customer service.
              </p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div onClick={() => handleToggle(3)} className="cursor-pointer bg-slate-200 md:p-4 p-2.5 border-2 border-black  flex justify-between items-center mb-4">
            <h2 className="md:text-2xl text-xl font-semibold">What will be the time duration of a particular course?</h2>
            <button  className="text-2xl font-bold">
              {expandedQuestion === 3 ? "-" : "+"}
            </button>
          </div>
          {expandedQuestion === 3 && (
            <div className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-600 leading-10 md:text-xl text-base font-semibold">
                With 150+ IT and non-IT courses available, each course has its own unique fee structure and duration. The cost of a course can vary widely based on factors such as the complexity of the subject matter, the level of expertise it offers, the duration of the course (whether it's short-term or long-term), and the institution or platform offering the course.
                <br />
                For example, IT courses might include programming languages like Python, Java, or C++, cybersecurity training, data science and machine learning, web development, cloud computing, and more.
                <br />
                Non-IT courses could range from business management and finance to creative arts, languages, health sciences, and many others. To determine the cost of a specific course, it's essential to look at the details provided by the course provider.
                <br />
                This information typically includes the course syllabus, duration (in weeks or months), whether it's self-paced or instructor-led, any certifications offered upon completion, and of course, the fee structure.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQ;