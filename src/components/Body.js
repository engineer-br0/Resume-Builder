import React from "react";
import { useState } from "react";
// import { useRef } from "react";
import './Body.css'
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "./Editor"

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
      detail : {}
    },
    others : {
      id : "Others",
      sectionTitle : "Others",
      detail : {}
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
      </div>
    </div>
    </>
  );
}

export default Body;

























// import React, { useRef, useState } from "react";
// import ReactToPrint from "react-to-print";
// import { ArrowDown } from "react-feather";

// import Resume from "./Resume"
// import Editor from "./Editor"
// import "./Body.css";

// function Body() {
//   //const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
//   const colors
//   const sections = {
//     basicInfo: "Basic Info",
//     workExp: "Work Experience",
//     project: "Projects",
//     education: "Education",
//     achievement: "Achievements",
//     summary: "Summary",
//     other: "Other",
//   };
//   const resumeRef = useRef();

//   const [activeColor, setActiveColor] = useState(colors[0]);
//   const [resumeInformation, setResumeInformation] = useState({
//     [sections.basicInfo]: {
//       id: sections.basicInfo,
//       sectionTitle: sections.basicInfo,
//       detail: {},
//     },
//     [sections.workExp]: {
//       id: sections.workExp,
//       sectionTitle: sections.workExp,
//       details: [],
//     },
//     [sections.project]: {
//       id: sections.project,
//       sectionTitle: sections.project,
//       details: [],
//     },
//     [sections.education]: {
//       id: sections.education,
//       sectionTitle: sections.education,
//       details: [],
//     },
//     [sections.achievement]: {
//       id: sections.achievement,
//       sectionTitle: sections.achievement,
//       points: [],
//     },
//     [sections.summary]: {
//       id: sections.summary,
//       sectionTitle: sections.summary,
//       detail: "",
//     },
//     [sections.other]: {
//       id: sections.other,
//       sectionTitle: sections.other,
//       detail: "",
//     },
//   