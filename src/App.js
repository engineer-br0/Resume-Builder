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
  const [isDarkMode, setIsDarkMode] = useState( false);
  const [login, setLogin] = useState(false);
  const [user, setUser] =useState("usera");
  
  return (
    
    <>
    <div className="App">
      
    <BrowserRouter>
    <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} login={login} setLogin={setLogin} user={user}/>
     <Routes>
     <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
     <Route path="/logIn" element={<LogIn isDarkMode={isDarkMode} setLogin={setLogin} setUser={setUser}/>} /> 
     <Route path="/signUp" element={<SignUp isDarkMode={isDarkMode}/>} /> 
     <Route path="/body" element={<Body isDarkMode={isDarkMode}/>} /> 
    
    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;