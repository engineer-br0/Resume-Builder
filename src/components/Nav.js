import React from "react";
import styles from './Nav.module.css'
import Font,{Text} from "react-font";
import { Link } from "react-router-dom";

const Nav = () =>{
   return(
    <>
    <div className={styles.container}>
    <Link to="/">
    <Text family="BrushScriptMT" className={ `${styles.tag} ${styles.colored}`}> Resume </Text>
    </Link>
    <Link to="/">
    <Text > Home </Text>
    </Link>
    </div>
   
    </>
     
   );
}

export default Nav;

