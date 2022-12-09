import React,{useState, useEffect} from "react";
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import cv from '../images/check.png';
import DarkModeToggle from "react-dark-mode-toggle";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import lista from '../images/list.svg'
import { signOut } from "firebase/auth";
import {auth} from '../firebase'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Nav = (props) =>{
  const dispatch = useDispatch();
   //const [isDarkMode, setIsDarkMode] = useState( false);
   const {isDarkMode} = useSelector(state => state.custom);
   const setIsDarkMode = () =>{
    dispatch({
      type : "setIsDarkMode"
    })
   }
   const [login, setLogin] = useState(false);
   const [user, setUser] =useState(props.user);
  //  useEffect(()=>{
  //     props.setIsDarkMode(isDarkMode);
  //  },[isDarkMode]);

   useEffect(()=>{
    setLogin(props.login)
 },[props.login])

 useEffect(()=>{
  setUser(props.user)
},[props.user])

const handleSignout = () =>{
  
   signOut(auth).then(()=>{
    props.setLogin(false);
   }
   ).catch(()=>{
   }
   )
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

    <div style={{padding:"0 7px 0 0 "}} >
    <Link to="/logIn">
      <button className={ ` ${styles.button1} ${login ? styles.hidden : ""}`}>Log In</button>
     </Link>
      
      <div onClick={handleSignout}>
         {user ?
           user?.photoURL 
            ? <img src={user.photoURL} className={ ` ${login ? styles.loginImg : styles.hidden}`}/> 
            : user?.displayName
             ? <div className={ ` ${login ? styles.loggedin : styles.hidden}`}> {user?.displayName[0]} </div>
             : user.email
              ? <div className={ ` ${login ? styles.loggedin : styles.hidden}`}> {user?.email[0].toUpperCase()} </div>
              : ""
            : ""}
      </div>
      </div>
    </div>
    
    </div>
    {/* <div>{open ? listOpener() : ""}</div> */}
    
    
    </>
     
   );
}

export default Nav;

