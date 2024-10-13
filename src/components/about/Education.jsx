import React from "react";

const educationContent = [
  {
    year: "March 2023 – October 2024",
    degree: "Master of Information Technology",
    institute: "Griffith University",
    details: `Focus: Software Development, Data Management, and Secure Application Design
During this program, I honed my skills in ull-stack development, working extensively with React.js, Node.js, and MySQL . My coursework and projects prepared me to take on complex technical challenges, such as those I encountered during my WIL placement.`,
  },
  {
    year: "August 2018 – July 2021",
    degree: "Bachelor of Computer Applications",
    institute: "Panjab University",
    details: `Focus: Web Development, Programming Fundamentals, and Database Management
This program laid the foundation for my coding and problem-solving skills, setting the stage for my journey into software development.`,
  },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE ",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
