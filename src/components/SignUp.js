import React,{useState} from "react";
import Nav from "./Nav";
import styles from './SignUp.module.css'
import InputControl from "./InputControl";

const SignUp = () =>{
        const [isDarkMode, setIsDarkMode] = useState( false);
    
        return(
           <>
           <Nav setIsDarkMode={setIsDarkMode}/>
           <div className={isDarkMode ? styles.containerDark : styles.container}>
       <div className={isDarkMode ? styles.headerDark : styles.header}>Sign Up</div>
           {/* <p style={{fontFamily:"sans-serif", fontWeight:"lighter"}}>Welcome Back!</p> */}
           <div className={styles.container}>
            <div className={styles.content}>
            <InputControl 
                  label="First Name"
                  type="text"
                  />
                  <InputControl 
                  label="Last Name"
                  type="text"
                  />
               <InputControl 
                  label="Email"
                  type="text"
                  />
                  <InputControl 
                  label="Password"
                  type="text"
                  />
                  <p>don't have account<a href='/logIn'>Log In</a></p>
                  <div className={styles.container} style={{width:"100%", height:"fit-content"}}>
              <button >Continue</button>
              </div>
            </div>
            
            </div>
           </div>
           </>
        );
    }

export default SignUp;