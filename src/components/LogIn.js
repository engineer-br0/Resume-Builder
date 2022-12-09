import React,{useEffect, useState} from "react";
import styles from './LogIn.module.css'
import InputControl from "./InputControl";
import Nav from "./Nav";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth, db} from '../firebase'
import G from '../images/g.svg'
import { useLocation } from "react-router-dom";
import { query, orderBy, collection, doc, addDoc, setDoc, getDoc } from "firebase/firestore"; 
import { useSelector } from "react-redux";

const LogIn = (props) =>{
    //const [isDarkMode, setIsDarkMode] = useState( props.isDarkMode);
    const {isDarkMode} = useSelector(state => state.custom);
    const [errorMes, setErrorMes] = useState("");
    // useEffect(() =>{
    //    setIsDarkMode(props.isDarkMode);
    // },[props.isDarkMode])
    const [values, setValues] = useState({
        email : "",
        pass : ""
    })

    const retrieveFromDatabase = (data) =>{
        props.setSections((prev) =>({
            ...prev,
            basicInfo : data.basicInfo,
            workExp : data.workExp,
            projects : data.projects,
            education : data.education,
            skills : data.skills,
            summary : data.summary,
            achievement : data.achievement,
            others : data.others
          }));
    }
    
    const handleSubmission = async(e) =>{
        e.preventDefault();

        try{
            const res = await signInWithEmailAndPassword(auth, values.email, values.pass);
               //console.log(res.user);
                props.setUser(res.user);
                props.setLogin(true);
                setErrorMes("Login successfully!");
                const docRef = doc(db, "users", `${res.user.email}`);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                  //console.log("Document data:", docSnap.data());
                  props.setSections(docSnap.data());
                  retrieveFromDatabase(docSnap.data());
                } else {
                console.log("No such document!");
                }
        }
        catch(err){
           // console.log(err.message);
            setErrorMes(err.message);
        }
       
        // signInWithEmailAndPassword(auth, values.email, values.pass).then(
        //     (res) =>{
        //         //props.setUser(res.user);
        //         console.log("login",res.user);
        //         props.setUser(res.user);
        //         props.setLogin(true);
        //     }
        // ).catch(
        //     (err)=>{
        //         console.log(err);
        //     }
        // )
    }
    const handleSubmissionGoogle = async(e) =>{
        e.preventDefault();
        //google sign in
        const provider = new GoogleAuthProvider;
        try{
        const res = await signInWithPopup(auth, provider);
                props.setUser(res.user);
                //console.log(res.user);
                props.setLogin(true);
                setErrorMes("Login successfully!")
                const docRef = doc(db, "users", `${res.user.email}`);
                //const q = query(docRef, orderBy("date"));
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                 // console.log("Document data:", data);
                  retrieveFromDatabase(data);
                  
                } else {
                console.log("No such document!");
                }
        }
        catch(err){
                //console.log(err);
                setErrorMes(err.message);
            }
        
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
              <p style={errorMes==="Login successfully!" ? {color:"green"} : {color:"red"}}>{errorMes}</p>
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