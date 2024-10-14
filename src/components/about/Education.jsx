import React from "react";

const educationContent = [
  {
    year: "March 2023 – Present",
    degree: "Master of Information Technology",
    institute: "Griffith University",
    details: `During this program, I focused on software development, data management, and secure application design. I developed skills in full-stack development, working extensively with technologies such as React.js, Node.js, and MySQL. Through coursework and projects, I tackled complex technical challenges, including those encountered during my WIL placement, further enhancing my problem-solving abilities.`,
  },
  {
    year: "August 2018 – July 2021",
    degree: "Bachelor of Computer Applications",
    institute: "Panjab University",
    details: `This program provided a strong foundation in web development, programming fundamentals, and database management. It equipped me with essential coding and problem-solving skills, laying the groundwork for my journey into software development and preparing me for future technical roles.`,
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
