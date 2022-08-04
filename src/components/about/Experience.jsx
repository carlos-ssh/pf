import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: " Web Developer",
    compnayName: "Talent Network",
    details: `Front-end developer working on the development of the Talent Network website and clients.`,
  },
  {
    year: "2020 - 2022",
    position: " Technical Support Engineer",
    compnayName: "Microverse Inc.",
    details: `Code review, bug fixing, and maintenance of the Microverse projects,
              Update documentation for project requirements and provide support 1:1 calls.`,
  },
  {
    year: "2016 - 2020",
    position: "Web Designer",
    compnayName: "Metrika Digital",
    details: `Design and development projects for clients.`,
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
