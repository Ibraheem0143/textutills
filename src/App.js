import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {

  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  
  const showalert = (message, type)=>{
     setalert({
        msg : message,
        type : type
     })
     setTimeout(() => {
      setalert(null);
     }, 1500);
  }
  const togglemode = () =>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode is Enabled" , "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode is Enabled" , "success");
      document.title = 'TextUtils - Light Mode';

    }
  }


  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtills" abouttext="About Us" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container" my='3'>
    {/* <Switch> */}
          {/* <Route exact path="/about">
              <About/>
          </Route> */}
          {/* <Route exact path="/"> */}
              <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}
</div>
{/* </Router> */}
</>
    );
}

export default App;
