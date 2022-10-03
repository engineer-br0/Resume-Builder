import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import "./App.css";
import './index.css'
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState( false);
  // console.log(isDarkMode);
  return (
    <>
    
    
    <div className="App">
      
    <BrowserRouter>
     <Routes>
     
     
     <Route path="/" element={<Home />} />
     <Route path="/body" element={<Body />} /> 
    
    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;