import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import compTiaSingle from "./CompTIAsinglePage.module.css";
import comptia from "../../../assets/comptia-2.webp";

const CompTIAsinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={compTiaSingle.container}>
      <div className={compTiaSingle.HeadingContainer}>
        <div className={compTiaSingle.Heading}>
          <h1>
            CompTIA (Computing Technology Industry Association) is a non-profit
            trade organization that offers various IT certifications for
            professionals in the field. These certifications are designed to
            validate the skills and knowledge of IT professionals across
            different career paths, including IT support, network
            administration, cybersecurity, data analytics, and more. CompTIA
            certifications are organized into five main career pathways: Core
            Skills, Infrastructure, Cybersecurity, Data and Analytics, and
            Professional. They offer various tools to help prepare for
            certification exams, including CertMaster Learn, CertMaster
            Practice, and CertMaster Labs. CompTIA certifications typically
            expire after three years and can be renewed through continuing
            education units (CEUs).
          </h1>
        </div>
        <div className={compTiaSingle.ImgContainer}>
          <img src={comptia} alt="Comptia-security-Certification" />
        </div>
      </div>
      <div className={compTiaSingle.courseContainer}>
        <div className={compTiaSingle.certificateText}>
          <h1>CompTIA Certification</h1>
          <p>Empowering IT Professionals, Elevating Careers</p>
        </div>
        <div className={compTiaSingle.certificateContainer}>
          <div className={compTiaSingle.certificateDiv}>
            <h1>Security+ (SY0-701) CertMaster Learn,</h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1QS2EhIce24btFePUWXpmRAWvpTm0pRGJ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={compTiaSingle.certificateDiv}>
            <h1>Linux+ Certification Exam Objectives</h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Cr9QS3HPA1gA8Ubo8AvAa9OrvINgjKXK/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Project+ PK0-005 Certification</h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/19UmyZ-oBk0jt7xQUFCWD1WkOHswyV7Kb/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Project+ Certification Exam Objectives - PK0-004</h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1O5gGB7nINdaxiH5Vc27LadIXCr-a82rw/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA PenTest+ Certification Exam Objectives - PT0-002</h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1wLL1oDncl6D7GSBpl9tK40_sHw6uph60/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>
              CompTIA A+ Certification Exam Core 1 Objectives - CORE 1
              (220-1101)
            </h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1y3y94muo0LpehSOX0KIb832W-hbUL-cF/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Network+ Certification Exam Objectives - N10-008</h1>

            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1STSS_glddrQljf4Ia6HeA_3WqgIf54Hp/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Cloud+ CV0-003</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1OAnF8Kx65qq0hbquLjkfI7w_g4XgCTfk/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Server+ Certification Exam Objectives - SK0-005</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-L63ixcRhqB8mShCSG1TUOfjDV8Vmw9o/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Data+ Certification Exam Objectives - DA0-001</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1NbQ7RwZ7lxbAll1l2MpTkfREWOmYIqzF/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Cloud Essentials+ - CLO-002</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ffo3UY1RF78ht4pP9B1_o-HqIVtEaeKu/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Security+ Certification Exam Objectives - SY0-601</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13bYJEzcPuuyMYfu71ysKu979XZSil8iD/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA IT Fundamentals (ITF+)</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/17aZeJ_fkN0KwentzVk87vc_m657KG5Xt/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Cybersecurity Analyst</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hdu1VUxVstGMdA_gVep2IxHBT3O3dy1c/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Network+ Certification Exam Objectives - N10-008</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1myNQ9W1UB5lDi5VVzu29pw48UzZusNzZ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>
              CompTIA Advanced Security Practitioner (CASP+) Certification Exam
              Objectives -CAS-004
            </h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mrgiArscHw4V-7ZOSiaFWwug8Rgh3vZe/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={compTiaSingle.certificateDiv}>
            <h1>CompTIA Network+ Certification Exam Objectives -N10-007</h1>
            <div className={compTiaSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/14uawy5E69E04NDlVTewDG3iYm3MHLxHl/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompTIAsinglePage;
