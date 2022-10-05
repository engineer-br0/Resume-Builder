import React,{useEffect, useState} from "react";
import styles from './LogIn.module.css'
import InputControl from "./InputControl";
import Nav from "./Nav";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase'
import G from '../images/g.svg'
import { useLocation } from "react-router-dom";

const LogIn = (props) =>{
    const [isDarkMode, setIsDarkMode] = useState( props.isDarkMode);
    useEffect(() =>{
       setIsDarkMode(props.isDarkMode);
    },[props.isDarkMode])
    const [values, setValues] = useState({
        email : "",
        pass : ""
    })
    
    const handleSubmission = () =>{
       
        signInWithEmailAndPassword(auth, values.email, values.pass).then(
            (res) =>{
                //props.setUser(res.user);
                console.log("login",res.user);
                props.setUser(res.user);
                props.setLogin(true);
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    }
    const handleSubmissionGoogle = () =>{
        //google sign in
        const provider = new GoogleAuthProvider;
        signInWithPopup(auth, provider).then(
            (res) =>{
                props.setUser(res.user);
                console.log(res.user);
                props.setLogin(true);
            }
        ).catch(
            (err) =>{
                console.log(err);
            }
        )
    }

    return(
       <>
       {/* <Nav setIsDarkMode={setIsDarkMode}/> */}
       <div className={isDarkMode ? styles.containerDark : styles.container}>
       <div className={isDarkMode ? styles.headerDark : styles.header}>Log In</div>
       <p style={{fontFamily:"sans-serif", fontWeight:"lighter"}}>Welcome Back!</p>
       <div className={styles.container}>
        <div className={styles.content}>
           <InputControl 
              label="Email"
              type="text"
              onChange = {(event) =>{
                setValues((prev) => ({...prev, email:event.target.value}))
              }}
              />
              <InputControl 
              label="Password"
              type="text"
              onChange = {(event) => {
                setValues((prev) => ({...prev, pass:event.target.value}))
              }}
              />
              <p>don't have account<a href='/signUp'>Sign Up</a></p>
              <div className={styles.container} style={{width:"100%", height:"fit-content"}}>
              <button onClick={handleSubmission}>Continue</button>
              <br></br>
              <div>-------OR--------</div>
              <br></br>
              <div onClick={handleSubmissionGoogle } style={{cursor:"pointer"}}><img src={G} style={{height:"20px", position:"relative", top:"5px"}}/> Log in with Google</div> 
              
              </div>
        </div>
        
        </div>
        
       </div>
       </>
    );
}

export default LogIn;