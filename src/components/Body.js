import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import style from "./Body.module.css";

import Editor from "./Editor"

import Resume from "./Resume";

import { ArrowDown } from "react-feather";

function Body(){
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

    const sections = {
        info: "Basic Info",
        exp: "Work Experience",
        project: "Projects",
        education: "Education",
        achieve: "Achievements",
        summary: "Summary"
    };

    const resumeRef = useRef();

    const [activeColor,setActiveColor] = useState(colors[0])

    const[resumeInfo, setResumeInfo] = useState({
        [sections.info]: {
            id: sections.info,
            sectionTitle: sections.info,
            detail: {},
        },
        [sections.exp]: {
            id: sections.exp,
            sectionTitle: sections.exp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achieve]: {
            id: sections.achieve,
            sectionTitle: sections.achieve,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        }
    });

    useEffect(()=>{
console.log(resumeInfo);
    }, [resumeInfo])

    return <div className={style.container}>
        <p className={style.heading}>Resume Builder</p>
        <div className={style.toolbar}>
            <div className={style.color}>
                {colors.map((item) => (
                    <span key={item}
                    style={{backgroundColor: item}}
                    className={`${style.colors} ${activeColor===item?style.active : ""}`}
                    onClick={()=>setActiveColor(item)}
                    />
                ))}
            </div>
            <ReactToPrint
                trigger={() => {
                    
                    return <button>Download <ArrowDown /></button>
                }}
                content={() => resumeRef.current}
                />
            
        </div>
        <div className={style.main}>
            <Editor 
            sections={sections}
            information={resumeInfo}
            setInformation = {setResumeInfo}
            />
            <Resume ref={resumeRef} sections={sections} information={resumeInfo} activeColor={activeColor} />
        </div>
    </div>
}

export default Body;