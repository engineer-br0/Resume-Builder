import React, { useEffect , useRef} from "react";
import styles from './Resume.module.css';
import { MapPin, Linkedin, GitHub, AtSign, Phone } from "react-feather";

const Resume = React.forwardRef((props,ref) =>{
  const sections = props.sections;
  const getFormattedDate = (value) =>{
    let date = new Date(value);
    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  }

  const sectionDiv = {
    summary : (
      <div 
        key={"summary"} 
        className={styles.section}
        >
        <div className={styles.sectionTitle}> {sections.summary.sectionTitle} </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <p className={styles.overview}> {sections.summary?.detail}  </p>
          </div>
        </div>
      </div>
     ),

      workExp : (
      <div
      key={"workexp"}
       className={styles.section}>
       <div className={styles.sectionTitle} > {sections.workExp.sectionTitle} </div>
       <div className={styles.content} >
        {sections.workExp.details?.map((item) =>(
          <div key={item?.title} className={styles.item}>  
          <div className={styles.sectionKeAndar}>
          <div className={styles.sectionKeAndar}>
            {item?.title ?
             <p className={styles.title}> {(item.title)} </p>
             : ""}  
             {item?.companyName ?
              <p className={styles.subTitle}> {" , " + item.companyName}</p>
              : ""}
             </div>
             {item?.startDate && item.endDate ?
                 <div className={styles.date}>
                   {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                  </div>
                  : ""} 
              
          </div>    

              {item?.certificationLink ?
               <a className={styles.link}> {item.certificationLink}</a>
               : ""}

               
               
               {item?.location ?
              <p className={styles.date}>
                 <MapPin/>{item.location}
              </p>
              : ""}


              {item?.points?.length > 0 ? 
              <ul className={styles.points}>
               {item.points.map((point, index) =>(
                 <li key={index} className={styles.point}> {point }</li>
               ))}
               </ul>
              : ""}
          </div>
          ))}
      </div>
    </div>
     ),

     projects : (
      <div key={"project"} className={styles.section}>
       <div className={styles.sectionTitle} > {sections.projects.sectionTitle} </div>
       <div className={styles.content} >
        
        {sections.projects.details?.map((item, index) =>(
          <div key={item?.title + index} className={styles.item}> 
          
            {item?.title ?
             <p className={styles.subTitle}> {(item.title)} </p>
             : ""}  
             {item?.overview ?
              <p className={styles.date}> {item.overview}</p>
              : ""}
<div className={styles.sectionKeAndarLinks}>
              {item?.deployedLink ?
               <a className={styles.link}> {item.deployedLink}</a>
               : ""}
               
               {item?.github ?
              <p className={styles.date}>
                 <a className={styles.link}> {item.github}</a>
              </p>
              : ""}
</div>
              {item?.points?.length > 0 ? 
              <ul  className={styles.points}>
               {item.points.map((point, index) =>(
                 <li key={index} className={styles.point}> {point }</li>
               ))}
               </ul>
              : ""}
          </div>
               
          ))}
      </div>
    </div>
     ),

     education : (
      <div
      key={"education"}
       className={styles.section}>
       <div className={styles.sectionTitle} > {sections.education.sectionTitle} </div>
       <div className={styles.content} >
        {sections.education.details?.map((item,index) =>(
          <div key={item?.title} className={styles.item}> 
          <div className={styles.sectionKeAndar}>
            {item?.title ?
             <p className={styles.subTitle}> {item.title} </p>
             : ""}  
             {item?.startDate && item.endDate ?
                 <div className={styles.date}>
                   {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                  </div>
                  : ""}
                  </div>

             {item?.college ?
              <p className={styles.title}> {item.college}</p>
              : ""}

               
          </div>
          ))}
      </div>
    </div>
     ),

     achievements: (
      <div
        key={"achievements"}
        className={styles.section}
        >
          <div className={styles.sectionTitle}> {sections.achievement.sectionTitle} </div>
          <div className={styles.content}>
            {sections.achievement.details?.map((item,index)=>(
              <div key={item?.title} className={styles.item} >
                {item?.points?.length > 0 ?
                  <ul className={styles.points} >
                    {item?.points?.map((point)=>(
                      <li className={styles.point}> {point} </li>
                    ))}
                  </ul>
                 : ""}
              </div>
            ))}
          </div>
        </div>
     ),


     others : (
      <div 
        key={"others"} 
        className={styles.section}
        >
        <div className={styles.sectionTitle}> {sections.others.sectionTitle} </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <p className={styles.overview}> {sections.others?.detail} </p>
          </div>
        </div>
      </div>
     ),

  }

  const containerRef = useRef();

  useEffect(()=>{
    const colorRef = containerRef.current;
    colorRef.style.setProperty('--color', props.activeColor);
  },[props.activeColor])

  
  return(
    <>
    <div ref={ref}>
      <div  ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            {sections.basicInfo.detail.name}
          </div>
          <div className={styles.subHeading}>
            {sections.basicInfo.detail.title}
          </div>
          <div className={styles.links}>
            <a className={styles.link}> <Linkedin/> {sections.basicInfo.detail.linkedIn}</a>
            <a className={styles.link}> <GitHub/> {sections.basicInfo.detail.github}</a>
            <a className={styles.link}> <AtSign/> {sections.basicInfo.detail.email}</a>
            <a className={styles.link}> <Phone/> {sections.basicInfo.detail.phone}</a>
          </div>
        </div>

        <div className={styles.main} >
          {Object.keys(sectionDiv).map((key) =>(
            <div key={key} >
              {sectionDiv[key]}
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  ); 
})

export default Resume;
