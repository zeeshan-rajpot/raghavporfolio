import React from "react";

const experienceContent = [
  {
    year: "July 2024 – Present",
    position: " Web Developer",
    compnayName: "WIL Intern – Gold Coast Health ",
    details: `Developed the Digital Mealtime Puzzle application to digitize child dietary assessments and reduce paperwork.
Collaborated with psychologists, speech pathologists, and paediatricians to gather requirements and implement features.
Designed and implemented multi-session tracking and automated report generation to improve clinical workflows.
Managed data privacy and compliance by developing the application for local use on Queensland Health devices.`,
  },
  {
    year: "December 2021 - February 2023",
    position: " Team Member, IT Services Management",
    compnayName: "TaskUs",
    details: `Managed IT services for a diverse set of clients, ensuring exceptional service delivery and customer satisfaction. Leveraged Jira to track and manage service requests, prioritize tasks, and ensure timely resolutions. Automated routine IT tasks through Python scripts, increasing efficiency and minimizing manual effort. Worked closely with cross-functional teams to troubleshoot and resolve complex technical issues, providing effective IT support. Documented IT processes and developed troubleshooting guides to streamline operations and enhance service quality.`,
  },
  {
    year: "July 2021 - September 2021",
    position: "Front End Developer Intern",
    compnayName: "Arcedior International",
    details: `Developed and maintained front-end features for retail management systems using JavaScript and MongoDB. Contributed to the design and development of user interfaces, prioritizing user experience and accessibility. Collaborated with the creative team to integrate visual elements into the web application, ensuring a cohesive and visually appealing design. Participated in code reviews with senior developers, following best practices to enhance code quality. Provided support by debugging and resolving front-end issues, ensuring smooth and reliable operation of web applications.
`,
  },


  {
    year: "July 2020 - September 2021",
    position: "Graphic Designer Intern",
    compnayName: "Bastta",
    details: `Designed a variety of artwork and graphic content using Photoshop and Illustrator to meet the brand’s creative needs. Worked closely with the marketing team to develop visually compelling materials for marketing campaigns. Created innovative solutions to strengthen the company’s brand identity and visual presence. Produced high-quality graphics for both digital and print media, ensuring consistency with brand guidelines. Managed multiple design projects simultaneously, delivering high-standard work within deadlines.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
