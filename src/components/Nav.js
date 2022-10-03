import React,{useState, useEffect} from "react";
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import cv from '../images/check.png';
import DarkModeToggle from "react-dark-mode-toggle";
import {DarkModeSwitch} from 'react-toggle-dark-mode';

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
    <p  className={ `${styles.tag} ${styles.colored}`}>Karma.<span className={styles.rma}>aaaaaai</span> </p>
    </Link>
    <div className={styles.container2}>
    <Link to="/">
    <p className={styles.item}> Home </p>
    </Link>

    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
      style={{padding:"10px"}}
    />
    {/* <DarkModeSwitch
      className={styles.toggle}
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
      style={{color:"red", }}
    /> */}

    <Link to="/body">
      <button className={styles.item}>Create your CV Now</button>
     </Link>
     
    </div>
    </div>
   
    </>
     
   );
}

export default Nav;

