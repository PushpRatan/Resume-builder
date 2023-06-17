import React, { useEffect, useRef, useState } from "react";
import style from "./Resume.module.css";
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from "react-feather";
import { forwardRef } from "react";

const Resume =forwardRef((props, ref) => {
    const information = props.information;
    const sections =props.sections;
    const containerRef=useRef();

    const [columns, setColumns] = useState([[],[]])
    const [source, setSource] = useState("")
    const [target, setTarget] = useState("")

    const info = {
      info: information[sections.info],
      workExp: information[sections.exp],
      project: information[sections.project],
      education: information[sections.education],
      achievement: information[sections.achieve],
      summary: information[sections.summary],
    };

    const getFormattedDate=(value)=>{
      if(!value)return "";
      const date = new Date(value)
      return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    }

  
    const sectionDiv={
      [sections.exp]: (
      <div key={"workexp"} draggable onDragOver={()=>setTarget(info.workExp?.id)} onDragEnd={()=>setSource(info.workExp?.id)} className={`${style.section} ${style.workExp} ${info.workExp?.sectionTitle ? "" : style.hidden}`}>
          <div className={style.sectionTitle}>{info.workExp.sectionTitle}</div>
          <div className={style.content}>
            {info.workExp?.details?.map((item)=>(
              <div className={style.item} key={item.designation}>
                {item.designation &&
                  (
                  <p className={style.title}>{item.designation}</p>
                )}
                {item.companyName && (
                  <p className={style.subTitle}>{item.companyName}</p>
                )}
                {item.certificateLink && (
                  <a className={style.link} href={item.certificateLink}>
                    <Paperclip />
                    {item.certificateLink}
                  </a>
                )}
                {item.startDate && item.endDate ? (
                  <div className={style.date}>
                    <Calendar />{" "}
                    {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                  </div>
                ) : (""
                )}
                {item.location && (
                  <p className={style.location}>
                    <MapPin />
                    Remote
                  </p>
                )}
                {item.points?.length > 0 && (
                  <div className={style.points}>
                    {item.points.map((elem, index)=>(
                      <li className={style.point} key={elem+index}>
                        {elem}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>
      ),
      [sections.project]: (
      <div key={"project"} draggable onDragOver={()=>setTarget(info.project?.id)} onDragEnd={()=>setSource(info.project?.id)} className={`${style.section} ${style.project} ${info.project?.sectionTitle ? "" : style.hidden}`}>
          <div className={style.sectionTitle}>{info.project.sectionTitle}</div>
          <div className={style.content}>
            {info.project?.details?.map((item)=>(
              <div className={style.item} key={item.project}>
                {item.projectTitle &&
                  (<p className={style.title}>{item.projectTitle}</p>
                )}
                {item.deployedLink && (
                  <a className={style.link} href={item.deployedLink}>
                    <Paperclip />
                    {item.deployedLink}
                  </a>
                )}
                {item.githubLink && (
                  <a className={style.link} href={item.githubLink}>
                    <GitHub />
                    {item.githubLink}
                  </a>
                )}                
                {item.overview &&
                  (
                    <p className={style.overview}>{item.overview}</p>
                  )                  
                }
                {item.points?.length > 0 && (
                  <div className={style.points}>
                    {item.points.map((elem, index)=>(
                      <li className={style.point} key={elem+index}>
                        {elem}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>
      ),
      [sections.education]: (
      <div key={"education"} draggable onDragOver={()=>setTarget(info.education?.id)} onDragEnd={()=>setSource(info.education?.id)} className={`${style.section} ${style.education} ${info.education?.sectionTitle ? "" : style.hidden}`}>
        <div className={style.sectionTitle}>{info.education.sectionTitle}</div>
        <div className={style.content}>
          {info.education?.details?.map((item)=>
            <div className={style.item}>
              {item.qualification && (
                <p className={style.title}>{item.qualification}</p>
              )}
              {item.institution && (
                <p className={style.subTitle}>{item.institution}</p>
              )}
              {item.startDate && item.endDate && (
                <div className={style.date}>
                  <Calendar />{" "}
                  {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      ),
      [sections.achieve]: (
      <div key={"achievement"} draggable onDragOver={()=>setTarget(info.achievement?.id)} onDragEnd={()=>setSource(info.achievement?.id)} className={`${style.section} ${style.achievement} ${info.achievement?.sectionTitle ? "" : style.hidden}`}>
      <div className={style.sectionTitle}>{info.achievement.sectionTitle}</div>
        <div className={style.content}>
          {info.achievement?.points?.length > 0 && (
            <div className={style.points}>
              {info.achievement?.points?.map((elem, index)=>(
                <li className={style.point} key={elem+index}>
                  {elem}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
      ),
      [sections.summary]: (
      <div key={"summary"} draggable onDragOver={()=>setTarget(info.summary?.id)} onDragEnd={()=>setSource(info.summary?.id)} className={`${style.section} ${info.summary?.sectionTitle ? "" : style.hidden}`}>
          <div className={style.sectionTitle}>{info.summary?.sectionTitle}</div>
          <div className={style.content}>
            <p className={style.overview}>{info.summary?.detail}</p>
          </div>
      </div>
      )
    }

    const swapSourceTarget= (source, target)=>{
      if(!source || !target)return;

      const tempColumns =  [[...columns[0]], [...columns[1]]];

      let sourceRowIndex= tempColumns[0].findIndex((item)=>item===source);
      let sourcecolumnIndex =0;
      if(sourceRowIndex<0){
        sourcecolumnIndex=1
        sourceRowIndex = tempColumns[1].findIndex((item)=> item === source);
      }

      let targetRowIndex= tempColumns[0].findIndex((item)=>item===target);
      let targetcolumnIndex =0;
      if(targetRowIndex<0){
        targetcolumnIndex=1
        targetRowIndex = tempColumns[1].findIndex((item)=> item === target);
      }

      const tempSource = tempColumns[sourcecolumnIndex][sourceRowIndex];
      tempColumns[sourcecolumnIndex][sourceRowIndex]= tempColumns[targetcolumnIndex][targetRowIndex];
      tempColumns[targetcolumnIndex][targetRowIndex] = tempSource;

      setColumns(tempColumns);
    };

    useEffect(()=>{
      setColumns([
        [sections.project, sections.education, sections.summary],
        [sections.exp, sections.achieve],
      ])
    }, [])

    useEffect(()=>{
      swapSourceTarget(source, target)
    }, [source])

    useEffect(()=>{
      const container = containerRef.current;
      if(!props.activeColor || !container)return;

      container.style.setProperty("--color", props.activeColor)
    }, [props.activeColor]);

  return (
    <div ref={ref}>
    <div ref={containerRef} className={style.container}>
      <div className={style.header}>
        <p className={style.heading}>{info.info?.detail?.name}</p>
        <p className={style.subHeading}>{info.info?.detail?.title}</p>

        <div className={style.links}>
          {
            info.info?.detail?.email && 
            <a className={style.link}>
              <AtSign /> {info.info?.detail?.email}
            </a>
          }
          {
            info.info?.detail?.phone &&
            <a className={style.link}>
            <Phone /> {info.info?.detail?.phone}
            </a>
          }
          {
            info.info?.detail?.linkedinLink &&
            <a className={style.link}>
            <Linkedin /> {info.info?.detail?.linkedinLink}
            </a>
          }

          {
            info.info?.detail?.github &&
            <a className={style.link}>
            <GitHub /> {info.info?.detail?.github}
            </a>
          }
        </div>
      </div>
      <div className={style.main}>
        <div className={style.col1}>
          {
            columns[0].map(item=>sectionDiv[item])
          }
        </div>
        <div className={style.col2}>
          {
            columns[1].map(item=>sectionDiv[item])
          }
        </div>
      </div>
    </div>
    </div>
  );
})

export default Resume;
