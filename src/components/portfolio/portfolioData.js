/* eslint-disable */
import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";
import Image7 from "../../assets/img/portfolio/project-7.jpg";
import Image8 from "../../assets/img/portfolio/project-8.jpg";
import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "KASTLE FINE ART",
    image: Image1,
    tag: ["wordpress"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Kastle Fine Art",
        language: "PHP/Wordpress",
        preview: "kastlefineart.com",
        sourcecode: "N/A",
        link: "https://www.kastlefineart.com/",
      },
    ],
  },
  {
    id: 2,
    type: "The BookShelve",
    image: Image2,
    tag: ["rubyonrails"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "A blog for book lovers. Features: User Authentication, CRUD, Search, Pagination, Comments, Likes, and many more.",
        client: "Personal Milestone",
        language: "Ruby on Rails, HTML, CSS, Bootstrap, Javascript, postgreSQL",
        preview: "thebookshelve.com",
        link: "https://thebookshelve.herokuapp.com/",
      },
    ],
  },
  {
    id: 3,
    type: "Social Media App",
    image: Image3,
    tag: ["rubyonrails"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "A social media app with features like user authentication, posts, comments, likes, and many more.",
        client: "Personal Milestone",
        language: "Ruby on Rails, HTML, CSS, Bootstrap, Javascript, postgreSQL",
        preview: "stayintouch.com",
        link: "https://app-socialmedia.herokuapp.com/users/sign_in",
      },
    ],
  },
  {
    id: 4,
    type: "Wordpress Ecommerce Website",
    image: Image4,
    tag: ["wordpress"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "The High Company",
        client: "THC",
        language: "Wordpress",
        preview: "thc.mx",
        link: "https://thehighcompany.mx/",
      },
    ],
  },
  {
    id: 5,
    type: "react application",
    image: Image5,
    tag: ["react"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Insurance Quoter",
        client: "Personal Milestone",
        language: "HTML, CSS, ReactJS",
        preview: "quoter.com",
        link: "https://einsurance.netlify.app/",
      },
    ],
  },
  {
    id: 6,
    type: "react application",
    image: Image6,
    tag: ["react"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Application that fetches data from an API and displays it in a table.",
        client: "Personal Milestone",
        language: "React, HTML, CSS, Bootstrap, Javascript",
        preview: "cotizaya.com",
        link: "https://cotiza-ya.netlify.app/",
      },
    ],
  },
  {
    id: 7,
    type: "React Application",
    image: Image7,
    tag: ["react"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Queretaro Investments, real estate company",
        client: "Queretaro Investments",
        language: "React, Styled Components, Javascript, HTML, CSS",
        preview: "queretaroinvestments.com",
        link: "https://qro-investments.netlify.app/",
      },
    ],
  },
  {
    id: 8,
    type: "command line application",
    image: Image8,
    tag: ["bash"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Ruby Linter",
        client: "Personal Milestone",
        language: "HTML, CSS, Javascript",
        preview: "github.com",
        link: "https://github.com/carlos-ssh/Capstone_Ruby",
      },
    ],
  },
  {
    id: 9,
    type: "command console application",
    image: Image9,
    tag: ["bash"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Multiply Console App",
        client: "Personal",
        language: "Javascript, NodeJS, Bash",
        preview: "github.com",
        link: "https://github.com/carlos-ssh/math_charts",
      },
    ],
  },
];

export default PortfolioData;
