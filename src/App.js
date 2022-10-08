import React,{useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import "./App.css";
import './index.css'
import Home from "./components/Home";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { db } from "./firebase";
import { query, collection, doc, addDoc, setDoc, getDoc, orderBy } from "firebase/firestore"; 


function App() {
  const [isDarkMode, setIsDarkMode] = useState( false);
  const [login, setLogin] = useState(false);
  const [user, setUser] =useState("usera");
  const [sections,setSections] = useState({
    basicInfo : {
      id : "Basic Info",
      sectionTitle : "Basic Info",
      detail : {},
    },
    summary : {
      id : "Summary",
      sectionTitle : "Professional Summary",
      detail : ""
    },
    workExp : {
      id : "Work Experience",
      sectionTitle : "Work Experience",
      details : []
    },
    projects : {
      id : "Projects",
      sectionTitle : "Projects",
      details : []
    },
    education : {
      id : "Education",
      sectionTitle : "Education",
      details : []
    },
    achievement : {
      id : "Achievement",
      sectionTitle : "Achievement",
      details : []
    },
    skills : {
      id : "Skills",
      sectionTitle : "Skills",
      detail : []
    },
    
    others : {
      id : "Others",
      sectionTitle : "Others",
      detail : ""
    }
  });
  useEffect(() => {
    
    if(login){
       // Add a new document in collection "cities"
         const docRef = doc(db, "users", `${user.email}`);
         setDoc(docRef , sections);
    }
  },[sections])
  
  return (
    
    <>
    <div className="App">
      
    <BrowserRouter>
    <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} login={login} setLogin={setLogin} user={user}/>
     <Routes>
     <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
     <Route path="/logIn" element={<LogIn isDarkMode={isDarkMode} setLogin={setLogin} setUser={setUser} setSections={setSections}/>} /> 
     <Route path="/signUp" element={<SignUp isDarkMode={isDarkMode}/>} /> 
     <Route path="/body" element={<Body isDarkMode={isDarkMode} login={login} sections={sections} setSections={setSections}/>} /> 
    
    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;