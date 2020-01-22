import React,{Fragment} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import PhoneStack from './Components/PhoneStack';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App">
      <head>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </head>
    <ContactMe/>
    </div>
  );
}

export default App;
