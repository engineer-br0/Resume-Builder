import React,{useState, useEffect} from "react";
import Nav from "./Nav";
import styles from './SignUp.module.css'
import InputControl from "./InputControl";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const SignUp = (props) =>{
        const [isDarkMode, setIsDarkMode] = useState( false);
        useEffect(() =>{
            setIsDarkMode(props.isDarkMode);
         },[props.isDarkMode])
        const [values, setValues] = useState({
            email : "",
            pass : ""
        })

        const handleSubmission =() =>{
            console.log(values);
            createUserWithEmailAndPassword(auth, values.email, values.pass).then(
                (res) =>{
                    console.log(res)
                }
            ).catch(
                (err)=>{
                    console.log(err);
                }
            )
        }
    
        return(
           <>
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
                  onChange = {(event) => {
                    setValues((prev) => ({...prev, email : event.target.value}))
                  }}
                  />
                  <InputControl 
                  label="Password"
                  type="text"
                  onChange = {(event) => {
                    setValues((prev) => ({...prev, pass:event.target.value}))
                  }}
                  />
                  <p>don't have account<a href='/logIn'>Log In</a></p>
                  <div className={styles.container} style={{width:"100%", height:"fit-content"}}>
              <button onClick={handleSubmission}>Continue</button>
              </div>
            </div>
            
            </div>
           </div>
           </>
        );
    }

export default SignUp;