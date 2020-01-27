import React from "react";
import { useForm } from "react-hook-form";

export default function ContactMe() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = e =>{
  
    console.log(e)
  }
  console.log(errors);

  const style = {
    maxWidth: 1000,
    height: 344,
    border: "outset 10px #3f51b5",
    backgroundColor: "#fffff2",
    
  };

  const social={
    display:'flex',
    justifyContent:'space-between',
    marginTop:50
  }
  return (
    <div style={style} class="nes-input">
        <p>Contact me!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          ref={register({ required: true })}
          class="nes-input"
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          ref={register({ required: true })}
          class="nes-input"
        />

        <input type="submit"  class="nes-btn is-primary" />
      </form>
      <div style={social}>
        <a href="https://github.com/jDanielDetes"><i class="nes-icon github is-large"></i></a>
        <a href="https://www.linkedin.com/in/jean-detes/"><i class="nes-icon linkedin is-large"></i></a>
        <a href="mailto:jdanieldetes@gmail.com"><i class="nes-icon gmail is-large"></i></a>
      </div>
    </div>
  );
}

