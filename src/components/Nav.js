import React,{useState, useEffect} from "react";
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import cv from '../images/check.png';
import DarkModeToggle from "react-dark-mode-toggle";

const Nav = (props) =>{
   const [isDarkMode, setIsDarkMode] = useState( false);
   useEffect(()=>{
      props.setIsDarkMode(isDarkMode);
   },[isDarkMode])
   return(
    <>
    <div className={ `${isDarkMode ? styles.containerDark : styles.container}`}>
      
    <Link className={styles.container} to="/">
    <img src={cv} />
    <p  className={ `${styles.tag} ${styles.colored}`}> OutLine. </p>
    </Link>
    <div className={styles.container2}>
    <Link to="/">
    <p className={styles.item}> Home </p>
    </Link>

    <Link to="/body">
      <button className={styles.item}>Create your CV Now</button>
     </Link>
     <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
    </div>
    </div>
   
    </>
     
   );
}

export default Nav;

