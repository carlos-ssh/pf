import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Carlos" },
  { meta: "last name", metaInfo: "Flores" },
  { meta: "Age", metaInfo: "34 Years" },
  { meta: "Nationality", metaInfo: "Mexican" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Queretaro City" },
  { meta: "phone", metaInfo: "+52 (442) 840 3087" },
  { meta: "Email", metaInfo: "carlos.anezeh@gmail.com" },
  { meta: "Skype", metaInfo: "carlos-ssh" },
  { meta: "langages", metaInfo: "Spanish, English" },
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
