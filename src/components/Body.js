import React, {useRef, useEffect} from "react";
import { useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown, User } from "react-feather";
import Editor from "./Editor"
import Resume from "./Resume";
import style from './Body.module.css'
import Nav from "./Nav";

// const Temp = React.forwardRef((props,ref)=>(
//   <div ref={ref}>
//      hiidfkdj
//   </div>
// ))

const Body = () =>{
  
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const [activeColor, setActiveColor] = useState(colors[0]);
  const resumeRef = useRef();
  const containerRef = useRef();
  const [sections,setSections] = useState({
    basicInfo : {
      id : "Basic Info",
      sectionTitle : "Basic Info",
      detail : {}
    },
    workExp : {
      id : "Work Experiance",
      sectionTitle : "Work Experiance",
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
    // skills : {
    //   id : "Skills",
    //   sectionTitle : "Skills",
    //   detail : []
    // },
    achievement : {
      id : "Achievement",
      sectionTitle : "Achievement",
      details : []
    },
    summary : {
      id : "Summary",
      sectionTitle : "Summary",
      detail : ""
    },
    others : {
      id : "Others",
      sectionTitle : "Others",
      detail : ""
    }
  });

  useEffect(()=>{
    const colorRef = containerRef.current;
    colorRef.style.setProperty('--color', activeColor);
  },[activeColor])

  return(
    <>
    <Nav/>
    <div ref={containerRef} className={style.container} >
      {/* <h1 className={style.heading}> Resume Builder </h1> */}
      
      

      <div className={style.toolbar}>
        <div className={style.colors} >
         {colors.map((item) => (
          <span
           key={item}
           className={`${style.color} ${item === activeColor ? style.active : ""}` }
           style={{ backgroundColor : item }} 
           onClick={()=>{
            setActiveColor(item);
           }}
           />
         ))}
         </div>

        <ReactToPrint
        trigger = {()=> 
          <button>
           Download <ArrowDown/>
           </button>}
       content ={()=> resumeRef.current}
          />

      </div>
      <div className="main">
      <Editor 
                sections={sections}
                setSections = {setSections}
                activeColor = {activeColor}
      />
      <Resume
       sections = {sections}
       activeColor = {activeColor}
       ref = {resumeRef}
      />
      {/* <Temp ref={resumeRef}/> */}
      </div>
    </div>
    </>
  );
}

export default Body;