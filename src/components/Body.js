import React from "react";
import { useState } from "react";
// import { useRef } from "react";
import './Body.css'
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "./Editor"
import Resume from "./Resume";

const Body = () =>{
  
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
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
    <div className="container" >
      <h1 className="heading"> Mridul Sharma </h1>

      <div className="toolbar">
        <div className="colors" >
         {colors.map((item) => (
          <span
           key={item}
           className="color"
           style={{ backgroundColor : item }} 
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
      />
      </div>
    </div>
    </>
  );
}

export default Body;
























