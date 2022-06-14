import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
const [mode , setmode]=useState("light");
const [btntext , setbtntext]=useState("ENABLE DARK MODE")
const [alert,setalert]=useState(null);
const showalert =(message,type)=>{
setalert({
  msg:message,
  type:type
})
}

const changemode=()=>{
  setmode("light")
    document.body.style.backgroundColor="white";
    showalert("LIGHT MODE HAS BEEN ENABLED",'success');
  }

const changemode1 =()=>{
  setmode("dark")
    document.body.style.backgroundColor="#561b1b";
    showalert("RED DARK MODE HAS BEEN ENABLED",'success');
  }

  const changemode2 =()=>{
    setmode("dark")
      document.body.style.backgroundColor="#0d2a13";
      showalert("GREEN DARK MODE HAS BEEN ENABLED",'success');
    }
  

const changemode3 =()=>{
  setmode("dark")
    document.body.style.backgroundColor="#051328";
    showalert("BLUE DARK MODE HAS BEEN ENABLED",'success');
  }

  return (
    <>

   
 
    {/* <About mode={mode}/> */}
    {/* <Router>
    <Navbar title="LAIBA'S TEXT ANALYZER" mode={mode} btntext={btntext} change={changemode} change1={changemode1} change2={changemode2} change3={changemode3}/>
      
    <Alert alert={alert}/>
    <Routes>
            <Route exact path="/text" element={<Textform heading="Enter text to analyze"  mode={mode}/>}>
            </Route>
            <Route exact path="/about" element={<About/>}>
            </Route>
        </Routes>
    </Router> */}

   
<Navbar title="LAIBA'S TEXT ANALYZER" mode={mode} btntext={btntext} change={changemode} change1={changemode1} change2={changemode2} change3={changemode3}/>
      <Alert alert={alert}/>
      <Textform heading="Enter text to analyze"  mode={mode}/>
      <About mode={mode}/>
    
    </>
  );
}

export default App;