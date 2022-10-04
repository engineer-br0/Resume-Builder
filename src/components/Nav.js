import React,{useState, useEffect} from "react";
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import cv from '../images/check.png';
import DarkModeToggle from "react-dark-mode-toggle";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import lista from '../images/list.svg'

const Nav = (props) =>{
   const [isDarkMode, setIsDarkMode] = useState( false);
   const [open,setOpen] = useState(false);
   useEffect(()=>{
      props.setIsDarkMode(isDarkMode);
   },[isDarkMode])

   const listOpener = (props)=>{
    return(
    <div className={styles.listOpen}>
      <ul>
        <li>
    <Link to="/logIn" >
      <button >Log In</button>
     </Link>
     </li>
     <li>
      <Link to="/signUp" >
      <button >Sign Up</button>
      </Link>
      </li>
      </ul>
    </div>
    );
   }
   return(
    <>
    <div className={ `${isDarkMode ? styles.containerDark : styles.container}`}>
      
    <Link className={styles.container} to="/">
    <img src={cv} />
    <p  className={ `${styles.tag} ${styles.colored}`}>Karma.<span className={styles.rma}>aaaaaii</span> </p>
    </Link>
    <div className={styles.container2}>
    <Link to="/">
    <p className={styles.item}> Home </p>
    </Link>

    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
    />
    {/* <DarkModeSwitch
      className={styles.toggle}
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
      style={{color:"red", }}
    /> */}

    <Link to="/logIn" >
      <button className={ `${styles.item} ${styles.logIn}`}>Log In</button>
     </Link>
     
      <Link to="/signUp" >
      <button className={ `${styles.item} ${styles.button1}`}>Sign Up</button>
      </Link>
      
      <img src={lista} className={styles.list} onClick={()=> open ? setOpen(false) : setOpen(true)}/>
      
    </div>
    
    </div>
    <div>{open ? listOpener() : ""}</div>
    
    </>
     
   );
}

export default Nav;

