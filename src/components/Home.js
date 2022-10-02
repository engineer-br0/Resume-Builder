import React from "react";
import { Link } from "react-router-dom";
import Font,{Text} from "react-font";
import styles from './Home.module.css'
import resume from '../images/resume.svg'
import Nav from "./Nav";

const Home = () =>{
  return(
   <>
    <div className={styles.container}>
        <Nav/>
        <div className={styles.front}>
            <div  className={styles.left}> 
            <div className={ `${styles.heading} ${styles.colored}`} style={{color:"green"}}>Fast. Easy. Effective.</div>
            <div className={styles.wrapper}>
            <div className={ `${styles.text}`} >Resume Builder. The Best CV Maker Online. </div>
            <Text className={ `${styles.text2}`} > </Text>
            </div>
            <div className={styles.wrapper}>
            <div className={ `${styles.text3}`}>If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper— </div>
            <div className={ `${styles.text3}`}>Let Zety do the heavy lifting.</div>
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
        
    </div>
   </>
  );
}

export default Home;