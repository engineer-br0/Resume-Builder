import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import "./App.css";
import './index.css'
import Home from "./components/Home";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState( false);
  // console.log(isDarkMode);
  return (
    <>
    
    
    <div className="App">
      
    <BrowserRouter>
     <Routes>
     
     
     <Route path="/" element={<Home />} />
     <Route path="/logIn" element={<LogIn />} /> 
     <Route path="/signUp" element={<SignUp />} /> 
     <Route path="/body" element={<Body />} /> 
    
    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;