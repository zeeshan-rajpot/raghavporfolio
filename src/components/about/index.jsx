import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/img/cv.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal infos
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12 mx-auto">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-5">
                <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          {/* <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div> */}
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

       <hr className="separator" /> 

        {/* Skills Starts */}
         <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div> 
       {/* Skills Ends  */}

        <hr className="separator mt-1" />


        <div className=" container col-lg-12 m-15px-tb">
          <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
            1. Introduction / Professional Summary
          </h1>
          <p className="open-sans-font mb-4">Hello! My name is Raghav Kohli, and I am currently pursuing a Master of Information Technology at Griffith University, Australia. With over three years of experience in software development and IT service management, I am passionate about building innovative solutions that enhance workflows, particularly in the healthcare sector.
            <br />
            During my recent WIL placement at Gold Coast Health – Child Development Service, I had the opportunity to develop the Digital Mealtime Puzzle, a web-based application designed to assist clinical teams in managing children's dietary assessments. This experience deepened my understanding of the intersection of technology and healthcare, solidifying my passion for creating software that has a positive impact on people’s lives.
          </p>
          <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
            2. Career Aspirations
          </h1>
          <p className="open-sans-font mb-4">My long-term goal is to specialize in healthcare technology, building tools that improve clinical efficiency and enhance patient care. I am particularly interested in developing applications that balance usability, functionality, and security to address real-world challenges faced by healthcare professionals.

            I aspire to work in environments where collaboration, innovation, and empathy drive the development of impactful solutions. This placement has inspired me to explore roles where I can continue building software that improves both clinical workflows and patient outcomes.
          </p>
          {/* <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
            3. Educational Background
          </h1>
          <li>
            <strong>Master of Information Technology</strong>  – Griffith University (March 2023 – October 2024)
          </li>
          <p className="open-sans-font mb-4">Focus: Software Development, Data Management, and Secure Application Design
            <br />
            During this program, I honed my skills in <strong>ull-stack development</strong>f, working extensively with <strong>React.js, Node.js, and MySQL</strong> . My coursework and projects prepared me to take on complex technical challenges, such as those I encountered during my WIL placement.
          </p>
          <li>
            <strong>Bachelor of Computer Applications</strong>  – Panjab University (August 2018 – July 2021)
          </li>
          <p className="open-sans-font mb-4">Focus: Web Development, Programming Fundamentals, and Database Management
            <br />
            This program laid the foundation for my <strong>coding and problem-solving</strong> skills, setting the stage for my journey into software development.
          </p>
          <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
            4. Work Experience
          </h1>
          <h1 className="text-uppercase mb-2">
            WIL Intern – Gold Coast Health (March 2024 – Present)
          </h1>
          <li>
            Developed the <strong>Digital Mealtime Puzzle application</strong> to digitize child dietary assessments and reduce paperwork.
          </li>
          <li>
            Collaborated with <strong>psychologists, speech pathologists, and paediatricians</strong> to gather requirements and implement features.
          </li>
          <li>
            Designed and implemented <strong>multi-session tracking and automated report</strong>  generation to improve clinical workflows.
          </li>
          <li>
          Managed <strong>data privacy</strong> and compliance by developing the application for local use on Queensland Health devices.
          </li> */}
        </div>




        {/* Experience & Education Starts */}
        <div className="row my-5">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}

        {/* About Me Section */}
    
      </div>
    </section>
  );
};

export default index;
