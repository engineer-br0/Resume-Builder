import React, { useEffect, useRef } from "react";
import styles from "./Resume.module.css";
import { MapPin, Linkedin, GitHub, AtSign, Phone } from "react-feather";

const Resume = React.forwardRef((props, ref) => {
  const sections = props.sections;
  const getFormattedDate = (value) => {
    let date = new Date(value);
    return ` ${date.getMonth() + 1} / ${date.getFullYear()}`;
  };

  const sectionDiv = {
    summary: (
      <div
        key={"summary"}
        className={` ${
          sections.summary.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.summary.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <p className={styles.subTitle}> {sections.summary?.detail} </p>
          </div>
        </div>
      </div>
    ),

    education: (
      <div
        key={"education"}
        className={` ${
          sections.education.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.education.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          {sections.education.details?.map((item, index) => (
            <div key={item?.title} className={styles.item}>
              <div className={styles.sectionKeAndar}>
                {item?.title ? (
                  <p className={styles.title}> {item.title} </p>
                ) : (
                  ""
                )}
                {item?.startDate && item.endDate ? (
                  <div className={styles.date}>
                    {getFormattedDate(item.startDate)} -{" "}
                    {getFormattedDate(item.endDate)}
                  </div>
                ) : (
                  ""
                )}
              </div>

              {item?.college ? (
                <p className={styles.subTitle}> {item.college}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    skills: (
      <div
        key={"skills"}
        className={` ${
          sections.skills.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.skills.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          {sections.skills.detail?.points?.length > 0 ? (
            <ul className={styles.points}>
              {sections.skills.detail?.points?.map((point) => (
                <li className={styles.point}> {point} </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    ),

    workExp: (
      <div
        key={"workexp"}
        className={` ${
          sections.workExp.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.workExp.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          {sections.workExp.details?.map((item) => (
            <div key={item?.title} className={styles.item}>
              <div className={styles.sectionKeAndar}>
                <div>
                  {item?.title ? (
                    item?.companyName ? (
                      <p className={styles.title}>
                        {" "}
                        {item.title + " " + "@" + item.companyName}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </div>
                {item?.startDate && item.endDate ? (
                  <div className={styles.date}>
                    {getFormattedDate(item.startDate)} -{" "}
                    {getFormattedDate(item.endDate)}
                  </div>
                ) : (
                  ""
                )}
              </div>

              {item?.certificationLink ? (
                <a className={styles.link}> {item.certificationLink}</a>
              ) : (
                ""
              )}

              {item?.location ? (
                <p className={styles.date}>
                  <MapPin />
                  {item.location}
                </p>
              ) : (
                ""
              )}

              {item?.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points.map((point, index) => (
                    <li key={index} className={styles.point}>
                      {" "}
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    projects: (
      <div
        key={"project"}
        className={` ${
          sections.projects.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.projects.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          {sections.projects.details?.map((item, index) => (
            <div key={item?.title + index} className={styles.item}>
              <div style={{ display: "flex" }}>
                {item?.title ? (
                  <p className={styles.title}> {item.title} </p>
                ) : (
                  ""
                )}
                <div className={styles.sectionKeAndarLinks}>
                  {item?.deployedLink ? (
                    <p className={styles.date}>
                      <a className={styles.link} href={item.deployedLink}>
                        Deployed Link
                      </a>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {item?.overview ? (
                <p className={styles.date}> {item.overview}</p>
              ) : (
                ""
              )}

              {item?.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points.map((point, index) => (
                    <li key={index} className={styles.point}>
                      {" "}
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    achievements: (
      <div
        key={"achievements"}
        className={` ${
          sections.achievement.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.achievement.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          {sections.achievement.details?.map((item, index) => (
            <div key={item?.title} className={styles.item}>
              {item?.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item?.points?.map((point) => (
                    <li className={styles.point}> {point} </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    others: (
      <div
        key={"others"}
        className={` ${
          sections.others.sectionTitle ? styles.section : styles.hidden
        } `}
      >
        <div className={styles.sectionTitle}>
          {" "}
          {sections.others.sectionTitle}{" "}
        </div>
        <div className={styles.content}>
          {sections.others.details?.map((item, index) => (
            <div key={item?.title} className={styles.item}>
              {item?.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item?.points?.map((point, index2) => (
                    <li className={styles.point}> {point} </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const containerRef = useRef();

  useEffect(() => {
    const colorRef = containerRef.current;
    colorRef.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <>
      <div ref={ref}>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heading}>
              {sections.basicInfo.detail.name}
            </div>
            <div className={styles.subHeading}>
              {sections.basicInfo.detail.title}
            </div>
            {sections.basicInfo.detail.location && (
              <div className={styles.locationInfo}>
                <MapPin />
                {sections.basicInfo.detail.location}
              </div>
            )}
            {/* <br></br> */}
            <div className={styles.links}>
              {sections.basicInfo.detail.linkedIn && (
                <a
                  href={`${sections.basicInfo.detail.linkedIn}`}
                  className={styles.link}
                >
                  {" "}
                  <Linkedin /> {"LinkedIn"}
                </a>
              )}
              {sections.basicInfo.detail.github && (
                <a
                  href={`${sections.basicInfo.detail.github}`}
                  className={styles.link}
                >
                  {" "}
                  <GitHub /> {"GitHub"}
                </a>
              )}
              {sections.basicInfo.detail.email && (
                <a
                  href={`mailto:${sections.basicInfo.detail.email}`}
                  className={styles.link}
                >
                  {" "}
                  <AtSign /> {"Email"}
                </a>
              )}
              {sections.basicInfo.detail.phone && (
                <a
                  href={`tel:${sections.basicInfo.detail.phone}`}
                  className={styles.link}
                >
                  {" "}
                  <Phone /> {sections.basicInfo.detail.phone}
                </a>
              )}
            </div>
          </div>

          <div className={styles.main}>
            {Object.keys(sectionDiv).map((key) => (
              <div key={key}>{sectionDiv[key]}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Resume;
