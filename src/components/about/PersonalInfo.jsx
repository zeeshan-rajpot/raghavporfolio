import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Raghav " },
  { meta: "last name", metaInfo: "Kohli" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Gold Coast , Australia" },
  { meta: "phone", metaInfo: "+61 491 714 799" },
  { meta: "Email", metaInfo: "raghavkohli011@gmail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  // { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
