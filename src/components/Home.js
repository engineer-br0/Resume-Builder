import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css'
import resume from '../images/resume.svg'
import Nav from "./Nav";

const Home = () =>{
  const [isDarkMode, setIsDarkMode] = useState( false);
  
  return(
   <>
   <Nav setIsDarkMode={setIsDarkMode}/>
    <div className={ `${isDarkMode ? styles.container2 : styles.container1}`}>
        
        <div className={styles.front}>
            <div  className={styles.left}> 
            <div className={ `${styles.heading} ${styles.colored}`} style={{color:"green"}}>Fast. Easy. Effective & FREE</div>
            <div className={styles.wrapper}>
            <div className={ `${styles.text}`} >The Best CV Maker Online. </div>
            <p className={ `${styles.text2}`} > </p>
            </div>
            <div className={styles.wrapper}>
            <div className={ `${styles.text3}`}>If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper— </div>
            <div className={ `${styles.text3}`}>Let <span className={styles.colored}>OutLine</span>  do the heavy lifting.</div>
            </div>
            
            <div className={styles.wrapper}>
            <Link to="/body">
            <button>Create your CV Now</button>
            </Link>
            </div>
            
            </div>

            <div className={styles.right}>
            <img  src={resume} />
            </div>
        </div>
        
        <div style={{ position:"fixed", bottom:"10px", width:"100%", textAlign:"center", fontWeight:"lighter"}}>©Mridul Sharma 2022</div>

        
        
    </div>
   </>
  );
}

export default Home;