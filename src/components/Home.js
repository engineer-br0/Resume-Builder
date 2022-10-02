import React from "react";
import { Link } from "react-router-dom";
import Font,{Text} from "react-font";
import styles from './Home.module.css'
import resume from '../images/resume.svg'

const Home = () =>{
  return(
   <>
    <div className={styles.container}>
        <div className={styles.nav}>
           <Text family="BrushScriptMT" className={ `${styles.tag} ${styles.colored}`}> Resuma </Text>
           <div>
            <Link className={styles.link} to="/body" > Body</Link>
           </div>
        </div>
        <div className={styles.front}>
            <div  className={styles.left}> 
            <div className={ `${styles.heading} ${styles.colored}`} style={{color:"green"}}>Fast. Easy. Effective.</div>
            <div className={styles.wrapper}>
            <div className={ `${styles.text}`} >Resuma.  </div>
            <Text className={ `${styles.text2}`} >The Best CV Maker Online. </Text>
            </div>
            <div className={styles.wrapper}>
            <div className={ `${styles.text3}`}>If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper— </div>
            <div className={ `${styles.text3}`}>Let Zety do the heavy lifting.</div>
            </div>
            
            <Link to="/body">
            <button>Create your CV Now</button>
            </Link>
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