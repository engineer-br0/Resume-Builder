import React,{useState} from "react";
import styles from './LogIn.module.css'
import InputControl from "./InputControl";
import Nav from "./Nav";

const LogIn = () =>{
    const [isDarkMode, setIsDarkMode] = useState( false);

    return(
       <>
       <Nav setIsDarkMode={setIsDarkMode}/>
       <div className={isDarkMode ? styles.containerDark : styles.container}>
       <div className={isDarkMode ? styles.headerDark : styles.header}>Log In</div>
       <p style={{fontFamily:"sans-serif", fontWeight:"lighter"}}>Welcome Back!</p>
       <div className={styles.container}>
        <div className={styles.content}>
           <InputControl 
              label="Email"
              type="text"
              />
              <InputControl 
              label="Password"
              type="text"
              />
              <p>don't have account<a href='/signUp'>Sign Up</a></p>
              <div className={styles.container} style={{width:"100%", height:"fit-content"}}>
              <button >Continue</button>
              </div>
        </div>
        
        </div>
        
       </div>
       </>
    );
}

export default LogIn;