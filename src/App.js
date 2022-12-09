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
import { useSelector } from "react-redux";


function App() {
  //const [isDarkMode, setIsDarkMode] = useState( false);
  const {isDarkMode} = useSelector(state => state.custom);
  const [login, setLogin] = useState(false);
  const [user, setUser] =useState("usera");
  const [sections,setSections] = useState({
    basicInfo : {
      id : "Basic Info",
      sectionTitle : "Basic Info",
      detail : {
        //important for solving 32,108 and 29,108 pages issue
        name: "Any Name",
        title: "Title",
        email: "abc@gmail.com"

      },
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
      details : []
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
    <Nav  login={login} setLogin={setLogin} user={user}/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/logIn" element={<LogIn setLogin={setLogin} setUser={setUser} setSections={setSections}/>} /> 
     <Route path="/signUp" element={<SignUp />} /> 
     <Route path="/body" element={<Body login={login} sections={sections} setSections={setSections}/>} /> 
    
    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;