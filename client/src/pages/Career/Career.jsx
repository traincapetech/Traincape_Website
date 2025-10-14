import React, { useEffect, useState } from "react";
import career from "./Career.module.css";
import banner from "../../assets/CareerBannerIMG.svg";
import { AiOutlineTeam } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import hand from '../../assets/hand.jpg';
// import careerImg from "../../assets/CareerPageIMG.svg";
import { Helmet } from "react-helmet";


const Career = () => {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    resumeLink: "",
  });

  const handleSubmit = (e) => {
    // Your EmailJS serviceIdD and templateId and Public Key
    const serviceId = "service_pjwgjas";
    const templateId = "template_oihg6cs";
    const publicId = "GmJ24jEVf6swWXgb0";

    // Create a new object that contains dynamic template params
    const [name, email, subject, message, phoneNumber, resumeLink] =
      Object.values(payoload);
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: "Parichay singh Rana",
      message: `Name - ${name}\nEmail - ${email}\nWhatsapp-Number - ${phoneNumber}\nSelect Roll - ${subject}\nMessage - ${message} \nResume Link - ${resumeLink}`,
    };
    e.preventDefault();

    //send the Email using EmailJS

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (res) => {
        alert("Email sent successfully!", res);
      },
      (err) => {
        console.log(err);
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
  return (

  <>
      {/* SEO Content for this Page  */}
        <Helmet>
            <title>
             Career at Traincape Technology | Work with us
              </title>
              <meta
                name="description"
                content="Join Traincape Technology and grow your career with us. Explore TrainCape’s openings in Development, Sales, and other departments. Your career starts with us."
              />
              <link
                rel="canonical"
                href="https://traincapetech.in/Career-details"
              />
        </Helmet> 


    <div className={career.container}>
    <div className={career.banner}>
      <div className={career.bannerIMG}>
        <img src={banner} alt="Explore career opportunities at TrainCape Technology" className={career.bannerimg} />
      </div>
      <div className={career.bannerText}>
        {/* <h1 className="text-center font-bold text-4xl">JOIN US</h1> */}
        {/* <p>
          Learning opportunities are essential for upgrading skills and
          advancing careers. They include training courses, self-training, and
          attending professional events to stay relevant and enhance
          employability.
        </p> */}
        {/* <button className={career.joinBtn}>Join Us</button> */}
      </div>
    </div>
    <div className={career.benefits}>
      <div className={career.banefitText}>
        <h3>BENEFITS</h3>
        <h1>Why You Should Join Our Awesome Team</h1>
        <p>
          This article defines learning opportunities as situations in which
          it is possible for you to do something that you want to do. It also
          provides examples of how learning opportunities can be used in
          different contexts.
        </p>
      </div>
      <div className={career.banefit}>
        <div>
          <i>
            <AiOutlineTeam className={career.icon} />
          </i>
          <h1>Team Work</h1>
          <p>
            Teamwork is key to success. Quotes like "Alone we can do so
            little; together we can do so much" and "Teamwork makes the dream
            work" emphasize the power of collaboration and unity.
          </p>
        </div>
        <div>
          <i>
            <SiFsecure className={career.icon} />
          </i>
          <h1>Secured Feature</h1>
          <p>
            Secured features protect software and data from unauthorized
            access and security threats. They include system secure feature
            keys, secure software development, and security mechanisms like
            authentication and audits.
          </p>
        </div>
        <div>
          <i>
            <GiSkills className={career.icon} />
          </i>
          <h1>Learning Oportunity</h1>
          <p>
            Learning opportunities refer to the types of work or tasks that
            students face to achieve knowledge and enhance learning value.
            These opportunities can include classroom, online, blended,
            self-guided, coaching, mentoring, and other educational
            experiences.
          </p>
        </div>
        <div>
          <i>
            <GiUpgrade className={career.icon} />
          </i>
          <h1>Upgrate Skilss</h1>
          <p>
            Learning opportunities are essential for upgrading skills and
            advancing careers. They include training courses, self-training,
            and attending professional events to stay relevant and enhance
            employability.
          </p>
        </div>
      </div>
    </div>
    <div className={career.contact}>
      <div className={career.officeMail}>
        <h1>Want To Join US</h1>
        <p>We're Ready To Connect You!</p>
        <div className={career.NameAndEmail}>
          <br />
          <input
            type="text"
            name="name"
            value={payoload.name}
            className={career.inputbox}
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            value={payoload.email}
            className={career.inputbox}
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <br />
        </div>
        <input
          type="tel"
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
          id={career.select}
          required
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="lead-person">Lead Person</option>
          <option value="sale-person">Sale Person</option>
          {/* <option value="Project Management">Project Management</option> */}
        </select>
        <br />
        <br />
        <textarea
          name="message"
          className={career.textarea}
          cols="30"
          rows="10"
          placeholder="Your Message"
          onChange={handleChange}
        ></textarea>
        <button className={career.contactBtn} onClick={handleSubmit}>
          Send Message
        </button>
      </div>
      <div className={career.contactImg}>
        <img src={hand} alt="Traincape Tecnology career options" />
      </div>
    </div>
  </div>
  </>
);
};



export default Career;