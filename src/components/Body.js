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

const Body = (props) =>{
  const [isDarkMode, setIsDarkMode] = useState( false);
  useEffect(() =>{
    setIsDarkMode(props.isDarkMode);
 },[props.isDarkMode])
  
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const [activeColor, setActiveColor] = useState(colors[0]);
  const resumeRef = useRef();
  const containerRef = useRef();


  useEffect(()=>{
    const colorRef = containerRef.current;
    colorRef.style.setProperty('--color', activeColor);
  },[activeColor])

  return(
    <>
    
    <div ref={containerRef} className={ `${isDarkMode ? style.container2 : style.container}`} >
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
        pageStyle="@page{size : A4 ;}"
        trigger = {()=> 
          <button>
           Download <ArrowDown/>
           </button>}
       content ={()=> resumeRef.current}
          />

      </div>
      <div className={style.main}>
      <div className={style.left}>
      <Editor  
                sections={props.sections}
                setSections = {props.setSections}
                activeColor = {activeColor}
      />
      </div>
      <div className={style.right}>
      <Resume 
       sections = {props.sections}
       activeColor = {activeColor}
       ref = {resumeRef}
      />
       </div>
      {/* <Temp ref={resumeRef}/> */}
      </div>
    </div>
    </>
  );
}

export default Body;