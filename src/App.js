import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      
     <Route path="/" element={<Home />} />
     <Route path="/body" element={<Body />} /> 
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;