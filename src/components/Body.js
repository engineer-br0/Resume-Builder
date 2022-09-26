import React from "react";
import { useState } from "react";
// import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "./Editor"
import Resume from "./Resume";
import style from './Body.module.css'

const Body = () =>{
  
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const [activeColor, setActiveColor] = useState(colors[0]);
  // const resumeRef = useRef();

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

  return(
    <>
    <div className={style.container} >
      <h1 className={style.heading}> Mridul Sharma </h1>

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
         trigger={() => {
          return (
            <button>
              Download <ArrowDown/>
            </button>
          );
        }}
        // content = { () => resumeRef.current }
        />

      </div>
      <div className="main">
      <Editor 
                sections={sections}
                setSections = {setSections}
      />
      <Resume
       sections = {sections}
       activeColor = {activeColor}
      />
      </div>
    </div>
    </>
  );
}

export default Body;