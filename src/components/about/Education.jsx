import React from 'react';

const educationContent = [
  {
    year: '2022',
    degree: 'TDD Ruby on Rails bootcamp',
    institute: 'Brightcoders by Magma Labs.',
    details: `Spent 640 hours in pair programming developing Test driving development on Ruby & Ruby on Rails projects.`,
  },
  {
    year: '2019',
    degree: 'Software Engineering',
    institute: 'Microverse',
    details: ` Technical Curriculum: HTML & CSS, Ruby, Databases, Ruby on Rails, JavaScript, React & Redux;
    Gained proficiency in coding with 1000+ hours in study data structures and algorithms and solving challenges in Hackerank;
    Algorithms & Data Structures: Coding challenges, Algorithms, Data Structures Networking;
    Professional Skills: Business Communication, Online Presence;
    Git Flow, Remote Programming, MVC, TDD, OOP, DRY Rules, Lint code.`,
  },
  {
    year: '2008',
    degree: 'Computer systems engineering',
    institute: 'Instituto Tecnológico de La Laguna',
    details: `I learned to face situations and design solutions on my own, master the so-called flowcharts, design computational processes, and manage networks and databases.`,
  },

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
