import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "React Js" },
  { skillClass: "p50", skillPercent: "50", skillName: "Python" },
  { skillClass: "p65", skillPercent: "65", skillName: "Node Js" },
  { skillClass: "p45", skillPercent: "45", skillName: "Java" },
  { skillClass: "p65", skillPercent: "65", skillName: "MySQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
