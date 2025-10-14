import React, { useEffect, useState } from "react";
import "../css/internshipModule.css";
import Tripti from "../assets/Tripti.jpeg";
import vanshika from "../assets/vanshika.jpeg";
import Akansha from "../assets/Akansha.jpeg";
import Purpose from "../assets/purpose.jpg";
import learning from "../assets/learning.jpg";
import support from "../assets/support.jpg";
import progress from "../assets/progress.jpg";
import career from "../pages/Career/Career.module.css";
import emailjs from "@emailjs/browser";
import love from "../assets/Love (1).jpg";
import Akshay from "../assets/Akshay (1).jpg";
import Ritik from "../assets/Ritik (1).jpg";
import hand from '../assets/hand.jpg';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import vikas from "../assets/vikas.jpg";
import kartikey from "../assets/kartikey.jpg";
// import shubh from "../assets/shubh.jpg";
import harshda from "../assets/harshda.jpg";
import ashu from "../assets/ashu.jpg";

export default function Internship() {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    resumeLink: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    vikas, kartikey,harshda, ashu,
    vanshika, Tripti, love, Akansha, Akshay, Ritik, one, two, three, four
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_pjwgjas";
    const templateId = "template_oihg6cs";
    const publicId = "GmJ24jEVf6swWXgb0";

    const templateParams = {
      from_name: payoload.name,
      from_email: payoload.email,
      from_subject: payoload.subject,
      to_name: "Parichay singh Rana",
      message: `Name: ${payoload.name}\nEmail: ${payoload.email}\nWhatsapp-Number: ${payoload.phoneNumber}\nSelected Role: ${payoload.subject}\nMessage: ${payoload.message}\nResume Link: ${payoload.resumeLink}`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (res) => {
        alert("Email sent successfully!", res);
      },
      (err) => {
        console.log("Error:", err);
      }
    );

    setPayoload({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      resumeLink: "",
    });
  };

  const handleChange = (e) => {
    setPayoload({ ...payoload, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      
        <div className="internship-banner"></div>
        <div className="banner-text">
          <h1>Kickstart Your Career with Our Internship Program!</h1>
          <h3>Gain hands-on experience, learn from industry experts, and work on real projects that make an impact. Join us and take the first step toward a successful career!</h3>
          <h5>Unlock opportunities, develop new skills, grow your professional network.</h5> 
        </div>
      

      <div className="intern">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className="carousel-slide">
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="our-intern"> 
          <h1>Our Interns</h1>
          <h2>
            #TraincapeInterns play vital roles across our diverse teams, including software development, product management, user experience, and more. Join us in shaping the future of technology for everyone.
          </h2>
        </div>
      </div>

      <div className="join-us">
        <h1>Why Traincape Technology</h1>
        <div className="join-us-box">
          <img src={Purpose} alt="" />
          <div className="join-us-text">
            <h2>Driven by Purpose</h2>
            <h3>We empower our team members to achieve impactful results that enhance society and demonstrate that anything can be accomplished.</h3>
          </div>
        </div>
        <div className="join-us-box">
          <div className="join-us-text">
            <h2>Fostering Lifelong Learning</h2>
            <h3>We provide our associates with resources to learn from Traincape's experience, empowering them to deliver innovative solutions and stay ahead of industry shifts.</h3>
          </div>
          <img src={learning} alt="" />
        </div>
        <div className="join-us-box">
          <img src={support} alt="" />
          <div className="join-us-text">
            <h2>Support</h2>
            <h3>We support everyone in realizing their full potential through upskilling and reskilling initiatives.</h3>
          </div>
        </div>
        <div className="join-us-box">
          <div className="join-us-text">
            <h2>Progress</h2>
            <h3>We invest in our employees' development, inspiring them to pursue continuous improvement.</h3>
          </div>
          <img src={progress} alt="" />
        </div>
      </div>

      <div className={career.contact}>
        <div className={career.officeMail}>
          <h1>Want To Join Us</h1>
          <p>We're Ready To Connect You!</p>
          <input
            type="text"
            name="name"
            value={payoload.name}
            className={career.inputbox}
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={payoload.email}
            className={career.inputbox}
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="phoneNumber"
            value={payoload.phoneNumber}
            className={career.inputbox}
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="resumeLink"
            value={payoload.resumeLink}
            className={career.inputbox}
            placeholder="Paste Your Google Drive Resume Link"
            required
            onChange={handleChange}
          />
          <select
            name="subject"
            value={payoload.subject}
            className={career.select}
            required
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="App-development">App development</option>
            <option value="Website-Development">Website Development</option>
            <option value="Salesforce-Developer">Salesforce Developer</option>
            <option value="Sales">Sales</option>
            <option value="Lead-Generation">Lead Generation</option>
          </select>
          <textarea
            name="message"
            className={career.textarea}
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={handleChange}
            value={payoload.message}
          ></textarea>
          <button className={career.contactBtn} onClick={handleSubmit}>
            Send Message
          </button>
        </div>
        <div className={career.contactImg}>
          <img src={hand} alt="Career" />
        </div>
      </div>
    </>
  );
}