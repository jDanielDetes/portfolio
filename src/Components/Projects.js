import React from "react";
import ProjectCards from "./ProjectCards";
import image2 from "../images/stockmarketchart.c853bec5.jpg";
import CryptoProject from "../images/CryptoProject.png";
import AnywhereFitness from "../images/AnywhereFitness.png"
import Github from "../images/Github.png"
import Symphinity from "../images/test2.png"
import NASA from "../images/NASA.png"

export default function Projects(props) {
  const projects2 = [


    {title: "Symphinity",
    info:"One of my bigger projects! Symphinity uses Redux as it's state management and lets users favorite songs or depending on the song selected it will suggest songs based on beats per minute ",
    skill1:"Redux",
    skill2:"React",
    skill3:"API",
    skill4:"SCSS", 
    live:"https://symphinity-landing.netlify.com/",
    code:"https://github.com/jDanielDetes/dark-mode/tree/daniel-detes",
      image: Symphinity
    }
    // {title: "Crypto Price checker",
    // info:"This project was built using Reactjs and the data was pulled from a live API and displayed using semantic-UI and includes a dark mode Feature",
    // skill1:"react",
    // skill2:"Javascript",
    // skill3:"semantic-ui",
    // skill4:"API", 
    // live:"https://admiring-villani-925119.netlify.com/",
    // code:"https://github.com/jDanielDetes/dark-mode/tree/daniel-detes",
    //   image: CryptoProject
    // },
    // {
    //   title: "Anywhere Fitness",
    //   info:"A simple landing page created using just HTML,CSS and javascript this project was created with a heavy focus on design and mobile responsiveness ",
    //   skill1:"HTML",
    //   skill2:"CSS3",
    //   skill3:"JavaScript", 
    //   live:"https://frosty-euclid-827ed2.netlify.com/index.html",
    //   code:"https://github.com/Build-Week-AnywhereFitness/Marketing/tree/Landing-Page",
    //   image:AnywhereFitness
    // },
    // {title: "Github Friends",
    // info:"A simple page that was built using Githubs own API the data is fetched from the github user's friendslist and displayed in a grid system using semantic-ui ",
    // skill1:"react",
    // skill2:"semantic-ui",
    // skill3:"Javascript",
    // skill4:"", 
    // live:"",
    // code:"https://github.com/jDanielDetes/dark-mode/tree/daniel-detes",
    //   image: Github 
    // },
    // {title: "nasa photo of day",
    // info:"This project pulls data from  NASA's own photo of the day and displays it in a simple container and updates exactly when NASA's site does  ",
    // skill1:"HTML",
    // skill2:"Javascript",
    // skill3:"CSS3",
    // skill4:"", 
    // live:"https://admiring-villani-925119.netlify.com/",
    // code:"https://github.com/jDanielDetes/dark-mode/tree/daniel-detes",
    //   image: NASA
    // },
  ];

  let projectRow = projects2.map(project => {
    return (
      <div>
        <ProjectCards image={project.image}
        title={project.title}
        info={project.info}
        skill1={project.skill1}
        skill2={project.skill2}
        skill3={project.skill3}
        skill4={project.skill4}
        live={project.live}
        code={project.code} />
      </div>
    );
  });

  return <div>{projectRow}</div>;
}
