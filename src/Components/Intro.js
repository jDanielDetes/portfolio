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

    const style2={
        maxWidth:1000
    }




  return (
    <div>
       
      <Typewriter className="hero-title" text="Jean Detes" />
      <div class="nes-container with-title  test "  style={style2} id="test">
        <p class="title">About Me</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos vitae tempora accusamus omnis doloremque provident quidem quod ad eveniet!</p>
      </div>
    </div>
  );
}
