import React, { useEffect, useState, useRef } from "react";
import styles from './Editor.module.css'
import InputControl from "./InputControl";
import { X } from "react-feather";

const Editor = (props) =>{
   const containerRef = useRef();
   const sections = props.sections;
   const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]); 
   const [activeIndex, setActiveIndex] = useState(0);
   const [sectionTitle, setSectionTitle] = useState(sections[activeSectionKey].sectionTitle);
   const [activeInformation, setActiveInformation] = useState(sections[Object.keys(sections)[0]]);
   const [rerender, setRerender] = useState(1);
   const [values, setValues] = useState({
    // name : sections[activeSectionKey]?.detail?.name || "",
    // title : sections[activeSectionKey]?.detail?.title || "",
    // linkedIn : sections[activeSectionKey]?.detail?.linkedIn || "",
    // github : sections[activeSectionKey]?.detail?.github || "",
    // email : sections[activeSectionKey]?.detail?.email || "",
    // phone : sections[activeSectionKey]?.detail?.phone || "",
    points : []
   })


   const handlePointUpdate = (data, key) => {
     if(!Array.isArray(values.points)) values.points = [];
     let tempValues = {...values};
     tempValues.points[key] = data;
     setValues(tempValues);
   }
   
   const basicInfoBody = () =>{
    return(
      <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl 
          label="Name"
          type="text"
          value = {values.name || ""}
          placeholder = "Enter your name"
          onChange = {(event) => {
            setValues((prev)=>(
              {...prev, name: event.target.value}
            ))
          }}
          />
          {/* {console.log(values.name)}; */}
          <InputControl 
          label="Title"
          type="text"
          value = {values.title || ""}
          placeholder = "Enter title"
          onChange = {(event) => {
            setValues((prev)=>(
              {...prev, title: event.target.value}
            ))
          }}
          />
        </div>
        <div className={styles.row}>
        <InputControl
              label="Location"
              type="text"
              placeholder="Enter location eg. Remote"
              value={values.location || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, location: event.target.value }))
              }
            />
        </div>
        <div className={styles.row}>
          <InputControl 
          label="LinkedIn Profile Link"
          type="text"
          value = {values.linkedIn || ""}
          placeholder = "Enter your linkedIn profile link"
          onChange = {(event) => {
            setValues((prev)=>(
              {...prev, linkedIn: event.target.value}
            ))
          }}
          />
          <InputControl 
          label="Github profile link"
          type="text"
          value = {values.github || ""}
          placeholder = "Enter your github profile link"
          onChange = {(event) => {
            setValues((prev)=>(
              {...prev, github: event.target.value}
            ))
          }}
          />
        </div>
        <div className={styles.row}>
          <InputControl 
          label="Email"
          type="text"
          value = {values.email || ""}
          placeholder = "Enter your email"
          onChange = {(event) => {
            setValues((prev)=>(
              {...prev, email: event.target.value}
            ))
          }}
          />
          <InputControl 
          label="Phone"
          type="number"
          value = {values.phone || ""}
          placeholder = "Enter your phone no"
          onChange = {(event) => {
            setValues((prev)=>(
              {...prev, phone: event.target.value}
            ))
          }}
          />
        </div>
      </div>
      </>
    )
   }

   const workExpBody = (
        <div className={styles.detail}>
          <div className={styles.row}>
          <InputControl
             label="Section Title"
             type="text"
             value = {sectionTitle || ""}
             onChange = {(event) =>{
              setSectionTitle(event.target.value);
             }}
          />
          </div>
          <div className={styles.row}>
            <InputControl
              label="Title"
              type="text"
              placeholder="Enter title eg. Frontend developer"
              value={values.title || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, title: event.target.value }))
              }
            />
            <InputControl
              label="Company Name"
              type="text"
              placeholder="Enter company name eg. amazon"
              value={values.companyName || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, companyName: event.target.value }))
              }
            />
          </div>
          <div className={styles.row}>
            <InputControl
              label="Certificate Link"
              type="text"
              placeholder="Enter certificate link"
              value={values.certificationLink || ""}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  certificationLink: event.target.value,
                }))
              }
            />
            <InputControl
              label="Location"
              type="text"
              placeholder="Enter location eg. Remote"
              value={values.location || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, location: event.target.value }))
              }
            />
          </div>
          <div className={styles.row}>
            <InputControl
              label="Start Date"
              type="month"
              placeholder="Enter start date of work"
              value={values.startDate || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, startDate: event.target.value }))
              }
            />
            <InputControl
              label="End Date"
              type="month"
              placeholder="Enter end date of work"
              value={values.endDate || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, endDate: event.target.value }))
              }
            />
          </div>
          <div className={styles.column}>
            <label>Enter work description</label>
            <InputControl
              placeholder="Line 1"
              type="text"
              value={values.points ? values.points[0] : ""}
               onChange={(event) => handlePointUpdate(event.target.value, 0)}
            />
            <InputControl
              placeholder="Line 2"
              type="text"
              value={values.points ? values.points[1] : ""}
               onChange={(event) => handlePointUpdate(event.target.value, 1)}
            />
            <InputControl
              placeholder="Line 3"
              type="text"
              value={values.points ? values.points[2] : ""}
               onChange={(event) => handlePointUpdate(event.target.value, 2)}
            />
          </div>
        </div>
      );

      const summaryBody = (
        <div className={styles.detail}>
          <div className={styles.row}>
              <InputControl
                 label="Section Title"
                 type="text"
                 value = {sectionTitle || ""}
                 onChange = {(event) =>{
                  setSectionTitle(event.target.value);
                 }}
              />
              </div>
          <InputControl
            label="Summary"
            type="text"
            value={values.summary || ""}
            placeholder="Enter your objective/summary"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, summary: event.target.value }))
            }
          />
        </div>
      );  

   const projectsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
          <InputControl
             label="Section Title"
             type="text"
             value = {sectionTitle || ""}
             onChange = {(event) =>{
              setSectionTitle(event.target.value);
             }}
          />
          </div>
      <div className={styles.row}>
        <InputControl
          label="Title"
          type="text"
          value={values.title || ""}
          placeholder="Enter title eg. Chat app"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        type="text"
        value={values.overview || ""}
        placeholder="Enter basic overview of project"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          type="text"
          value={values.deployedLink || ""}
          placeholder="Enter deployed link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          type="text"
          value={values.github || ""}
          placeholder="Enter github link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          type="text"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          type="text"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          type="text"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          type="text"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const educationBody = (
        <div className={styles.detail}>
          <div className={styles.row}>
          <InputControl
             label="Section Title"
             type="text"
             value = {sectionTitle || ""}
             onChange = {(event) =>{
              setSectionTitle(event.target.value);
             }}
          />
          </div>
           <div className={styles.row}>
             <InputControl
               label="Title"
               type="text"
               value={values.title || ""}
               placeholder="Enter title eg. B-tech"
               onChange={(event) =>
                 setValues((prev) => ({ ...prev, title: event.target.value }))
               }
             />
          </div>
            <InputControl
              label="College/School Name"
              type="text"
              value={values.college || ""}
              placeholder="Enter name of your college/school"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, college: event.target.value }))
            }
          />
          <div className={styles.row}>
            <InputControl
              label="Start Date"
              type="month"
              placeholder="Enter start date of this education"
              value={values.startDate || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, startDate: event.target.value }))
              }
            />
            <InputControl
              label="End Date"
              type="month"
              placeholder="Enter end date of this education"
              value={values.endDate || ""}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, endDate: event.target.value }))
              }
            />
          </div>
        </div>
      );

    const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
          <InputControl
          type="text"
             label="Section Title"
             value = {sectionTitle || ""}
             onChange = {(event) =>{
              setSectionTitle(event.target.value);
             }}
          />
          </div>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          type="text"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          type="text"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          type="text"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          type="text"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const skillsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
          <InputControl
          type="text"
             label="Section Title"
             value = {sectionTitle || ""}
             onChange = {(event) =>{
              setSectionTitle(event.target.value);
             }}
          />
          </div>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          type="text"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          type="text"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          type="text"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          type="text"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const othersBody = (
    <div className={styles.detail}>
    <div className={styles.row}>
        <InputControl
        type="text"
           label="Section Title"
           value = {sectionTitle || ""}
           onChange = {(event) =>{
            setSectionTitle(event.target.value);
           }}
        />
        </div>
    <div className={styles.column}>
      <label>Others : </label>
      <InputControl
        placeholder="Line 1"
        type="text"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)}
      />
      <InputControl
        placeholder="Line 2"
        type="text"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)}
      />
      <InputControl
        placeholder="Line 3"
        type="text"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)}
      />
      <InputControl
        placeholder="Line 4"
        type="text"
        value={values.points ? values.points[3] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 3)}
      />
    </div>
  </div>
  );

   const generateBody = () => {
     switch (activeSectionKey){
     case "basicInfo" :
     return basicInfoBody();
     case "summary" :
      return summaryBody;
     case "workExp" :
      return workExpBody;
     case "projects" :
      return projectsBody;
     case "education" :
      return educationBody;
      case "skills" :
      return skillsBody;
     case "achievement" :
      return achievementsBody;
     
     case "others" :
      return othersBody;
     }
   }

   const handleSubmission = () =>{
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          location: values.location,
          linkedIn: values.linkedIn,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setSections((prev) => ({
          ...prev,
          basicInfo: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
          //console.log(sections.basicInfo);
          break;
        }

      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...sections.workExp.details];
        tempDetails[activeIndex] = tempDetail;

        props.setSections((prev) => ({
          ...prev,
          workExp: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        //console.log(sections.workExp);
        break;
        }

        case sections.projects: {
          const tempDetail = {
            title: values.title,
            overview :values.overview,
            startDate: values.startDate,
            endDate: values.endDate,
            deployedLink : values.deployedLink,
            github : values.github,
            points: values.points,
          };
          const tempDetails = [...sections.projects.details];
          tempDetails[activeIndex] = tempDetail;
  
          props.setSections((prev) => ({
            ...prev,
            projects: {
              ...prev[sections.projects],
              details: tempDetails,
              sectionTitle,
            },
          }));
          //console.log(sections.projects);
          break;
          }

          case sections.education: {
            const tempDetail = {
              title: values.title,
              college : values.college,
              startDate: values.startDate,
              endDate: values.endDate,
            };
            const tempDetails = [...sections.education.details];
            tempDetails[activeIndex] = tempDetail;
    
            props.setSections((prev) => ({
              ...prev,
              education: {
                ...prev[sections.education],
                details: tempDetails,
                sectionTitle,
              },
            }));
            //console.log(sections.education);
            break;
            }

            case sections.achievement: {
              const tempDetail = {
                points: values.points,
              };
              const tempDetails = [...sections.achievement.details];
              tempDetails[activeIndex] = tempDetail;
      
              props.setSections((prev) => ({
                ...prev,
                achievement: {
                  ...prev[sections.achievement],
                  details: tempDetails,
                  sectionTitle,
                },
              }));
              //console.log(sections.achievement);
              break;
              }

              case sections.skills: {
                const tempDetail = {
                  points: values.points,
                };
        
                props.setSections((prev) => ({
                  ...prev,
                  skills: {
                    ...prev[sections.skills],
                    detail: tempDetail,
                    sectionTitle,
                  },
                }));
                //console.log(sections.skills);
                break;
                }

              case sections.summary: {
                const tempDetail =  values.summary;
        
                props.setSections((prev) => ({
                  ...prev,
                  summary: {
                    ...prev[sections.summary],
                    detail: tempDetail,
                    sectionTitle,
                  },
                }));
                //console.log(sections.summary);
                break;
                }

                case sections.others: {
                  const tempDetail = {
                    points: values.points,
                  };
                  const tempDetails = [...sections.others.details];
                  tempDetails[activeIndex] = tempDetail;
          
                  props.setSections((prev) => ({
                    ...prev,
                    others: {
                      ...prev[sections.others],
                      details: tempDetails,
                      sectionTitle,
                    },
                  }));
                  //console.log(sections.achievement);
                  break;
                  }
    }
   }

   const handleNewChip = () =>{
     //const tempDetails = activeInformation.details;
     const tempDetails = sections[activeSectionKey]?.details;
     if (!tempDetails) return;
     const lastDetail = tempDetails.slice(-1)[0];
     if(!Object.keys(lastDetail).length) return;
     tempDetails?.push({});
     props.setSections((prev) =>({
      ...prev,
      [activeSectionKey] : {
        ...prev[activeSectionKey],
        details : tempDetails,
      }
     }))
    setActiveIndex(tempDetails?.length-1);
   }

   const handleDeleteChip = (index) =>{
    const tempDetails = activeInformation.details;
    tempDetails.splice(index, 1);
    props.setSections((prev)=>({
      ...prev,
      [activeSectionKey] : {
        ...prev[activeSectionKey],
        details : tempDetails
      }
    }))
    setActiveIndex(activeIndex <= index ? 0 : activeIndex-1);
    setRerender(rerender+1);
   }

   useEffect(() =>{
    setActiveInformation(sections[activeSectionKey]);
    setSectionTitle(sections[activeSectionKey].sectionTitle);
    setActiveIndex(0); //important
    const activeInfo = sections[activeSectionKey];
    setValues({
      name : activeInfo.detail?.name || "",
      title : activeInfo.details 
        ? activeInfo.details[0]?.title || "" 
        : activeInfo.detail?.title || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : activeInfo?.detail
          ? activeInfo.detail?.location || ""
          : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
          ? [...activeInfo.points]
          : "",
      linkedIn: activeInfo?.detail?.linkedIn || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    })
  },[activeSectionKey]);

  useEffect(()=>{  //important for chips
    const activeInfo = sections[activeSectionKey];
    if(activeInfo.details)
    setValues(
      {
        title : activeInfo?.details[activeIndex]?.title || "",
        overview: activeInfo.details[activeIndex]?.overview || "",
        link: activeInfo.details[activeIndex]?.link || "",
        certificationLink: activeInfo.details[activeIndex]?.certificationLink || "",
        companyName: activeInfo.details[activeIndex]?.companyName || "",
        location: activeInfo.details[activeIndex]?.location || "",
        startDate: activeInfo.details[activeIndex]?.startDate || "",
        endDate: activeInfo.details[activeIndex]?.endDate || "",
        points: activeInfo.details[activeIndex]?.points || "",
        linkedIn: activeInfo.details[activeIndex]?.linkedIn || "",
        github: activeInfo.details[activeIndex]?.github || "",
        college: activeInfo.details[activeIndex]?.college || "",
      }
    )},[activeIndex,rerender])

  useEffect(() => {
    setActiveInformation(sections[activeSectionKey]);
  }, [sections]);
   
  useEffect(()=>{
    const colorRef = containerRef.current;
    colorRef.style.setProperty('--color', props.activeColor);
  },[props.activeColor])

  return(
     <>
     <div ref={containerRef} className={styles.container}>

      <div className={styles.header}>
       {Object.keys(sections)?.map((key)=>(
        <div key={key}
         className={`${styles.section} ${(key === activeSectionKey ? styles.active : "") }`}
         onClick = {() => {setActiveSectionKey(key)}}
        >
          {sections[key].sectionTitle}
        </div>
       ))}
       </div>

       <div className={styles.body} >
<div className={styles.hint}>You can change all the details...</div>
        <div className={styles.chips}>
          {/* {activeInformation?.details  */}
          {sections[activeSectionKey]?.details
            ? sections[activeSectionKey]?.details?.map((item, index)=>(
             <div 
              className={`${styles.chip} ${index === activeIndex && styles.active}`}
              key={item + index}
              >
                <p onClick={()=> setActiveIndex(index)}> {sectionTitle} {index + 1} </p>
                <X
                 onClick={(event)=>{
                  //event.stopPropagation();
                  handleDeleteChip(index);
                 }}
                />
              </div>
            ))
            : ""}

              {sections[activeSectionKey]?.details 
              ? sections[activeSectionKey]?.details?.length > 0 
                ? <div className={styles.new} onClick={handleNewChip}>
                  +New
                  </div>
                :""
              :""
            }
        </div>
        
        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
       </div>


     </div>
     </>
  );
}

export default Editor;


















