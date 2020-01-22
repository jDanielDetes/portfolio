import React,{Fragment} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import PhoneStack from './Components/PhoneStack';

function App() {
  return (
    <div className="App">
      <head>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </head>
      <Fragment>
      {/*This React component is perfect for showcasing your mobile app portfolio!
      ***All that is required to use this in your portfolio is to replace the images in
      the folder with ones of your choosing, and import src/components/molecules/PhoneStack.js
      and PhoneStack.css into your project.*/}
      <PhoneStack />
    </Fragment>
    </div>
  );
}

export default App;
