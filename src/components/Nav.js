import React from "react";
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import cv from '../images/check.png'

const Nav = () =>{
   return(
    <>
    <div className={styles.container}>
    <Link className={styles.container} to="/">
    <img src={cv} />
    <p  className={ `${styles.tag} ${styles.colored}`}> OutLine. </p>
    </Link>
    <div className={styles.container2}>
    <Link to="/">
    <p className={styles.item}> Home </p>
    </Link>

    <Link to="/body">
      <button className={styles.item}>Create your CV Now</button>
     </Link>
    </div>
    </div>
   
    </>
     
   );
}

export default Nav;

