import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import ContactMe from "./Components/ContactMe";

import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </head>
 
      
         <body>
         <div className="mainContainer">
        <Navbar />
        <Intro />
        <div className="test2">
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <ContactMe />
          </div>
          
        </div>
        </div>
        </body>
   
    
     
    </div>
    
  );
}

export default App;
