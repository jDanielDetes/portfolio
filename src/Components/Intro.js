import React from "react";
import Typewriter from "./Typewriter";
import "./Intro.css"


export default function Intro() {

    const style={
        maxWidth: 345,
        height: 440,
        border: 'outset 10px #3f51b5',
        backgroundColor: '#fffff2',
        fontSize: '10px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

        
    }

   




  return (
    <div>
       
      <Typewriter className="hero-title" text="Jean Detes" />
      <div class="nes-container with-title  test "   id="test">
        <p class="title">About Me</p>
        <p>I'm a web developer based in Columbia,maryland. I have a passion for web development and love to create responsive websites for desktop and mobile devices.</p>
      </div>
    </div>
  );
}
