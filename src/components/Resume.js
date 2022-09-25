import React from "react";
import styles from './Resume.module.css';
import { MapPin } from "react-feather";

const Resume = (props) =>{
  const sections = props.sections;

  const sectionDiv = {
     workExp : (
      <div className={styles.section}>
       <div className={styles.sectionTitle} > workExp</div>
       <div className={styles.content} >
        {sections.workExp.details?.map((item) =>(
          <div className={styles.item}> 
            {item.title ?
             <p className={styles.title}> {item.title} </p>
             : ""}  

             {item.companyName ?
              <p className={styles.subTitle}> {item.companyName}</p>
              : ""}

              {item.certificationLink ?
               <a className={styles.link}> {item.certificationLink}</a>
               : ""}
               
               {item.location ?
              <p className={styles.date}>
                 <MapPin/>{item.location}
              </p>
              : ""}

              {item.points?.length > 0 ? 
              <ul className={styles.points}>
               {item.points.map((point) =>(
                 <li className={styles.point}> {point }</li>
               ))}
               </ul>
              : ""}
          </div>
          ))}
      </div>
    </div>
     ),

     //projects : 
  }
  
  return(
    <>
      <div className={styles.container}>
        <div className={styles.header}>
        {sections[Object.keys(sections)[0]].detail.name}
        </div>

        <div className={styles.main} >
          {sectionDiv[Object.keys(sectionDiv)]}
        </div>
      </div>
    </>
  ); 
}

export default Resume;






























