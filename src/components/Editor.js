import React, { useEffect, useState } from "react";

import style from "./Editor.module.css";
import InputControl from "./InputControl";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSecKey, setActiveSecKey] = useState(Object.keys(sections)[0]);

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedinLink: activeInformation?.detail?.linkedinLink || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePoints = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Designation"
          value={values.designation}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, designation: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Certificate Link"
          value={values.certificateLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificateLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Start Date"
          type="date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={style.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePoints(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePoints(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePoints(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectsBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Project Title"
          value={values.projectTitle}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, projectTitle: event.target.value }))
          }
        />
        <InputControl
          label="Overview"
          value={values.overview}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Deployed Link"
          value={values.deployedLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.githubLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))
          }
        />
      </div>
      <div className={style.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePoints(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePoints(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePoints(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Qualification"
          value={values.qualification}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              qualification: event.target.value,
            }))
          }
        />
      </div>
      <InputControl
        label="Institution"
        value={values.institution}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, institution: event.target.value }))
        }
      />
      <div className={style.row}>
        <InputControl
          label="Start Date"
          type="date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Name"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Linkedin Link"
          value={values.linkedinLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedinLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Phone"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={style.detail}>
      <div className={style.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePoints(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePoints(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePoints(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePoints(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={style.detail}>
      <InputControl
        label="Summary"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSecKey]) {
      case sections.info:
        return basicInfoBody;
      case sections.exp:
        return workExBody;
      case sections.project:
        return projectsBody;
      case sections.education:
        return educationBody;
      case sections.achieve:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSecKey]) {
      case sections.info: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedinLink: values.linkedinLink,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        props.setInformation((prev) => ({
          ...prev,
          [sections.info]: {
            ...prev[sections.info],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.exp: {
        const tempDetail = {
          designation: values.designation,
          companyName: values.companyName,
          certificateLink: values.certificateLink,
          location: values.location,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };

        const tempDetails = [...information[sections.exp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.exp]: {
            ...prev[sections.exp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          projectTitle: values.projectTitle,
          overview: values.overview,
          deployedLink: values.deployedLink,
          githubLink: values.githubLink,
          points: values.points,
        };

        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          qualification: values.qualification,
          institution: values.institution,
          certificateLink: values.certificateLink,
          startDate: values.startDate,
          endDate: values.endDate,
        };

        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achieve: {
        const tmepPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achieve]: {
            ...prev[sections.achieve],
            points: tmepPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if(!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSecKey]]: { 
        ...information[sections[activeSecKey]],
      details: details,
    },
    }));
    setActiveDetailIndex(details?.length-1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details ? [...activeInformation?.details] : "";
    if(!details) return;
    details.splice(index, 1)
    props.setInformation((prev)=> ({
      ...prev,
      [sections[activeSecKey]]: {
        ...information[sections[activeSecKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(prev => prev === index?0:prev-1);
  }

  useEffect(() => {
    setActiveInformation(information[sections[activeSecKey]]);
  }, [information]);

  useEffect(() => {
    const activeInfo = information[sections[activeSecKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSecKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      title: activeInfo?.detail?.title || "",
      linkedinLink: activeInfo?.detail?.linkedinLink || "",
      github: activeInfo?.detail?.github || "",
      email: activeInfo?.detail?.email || "",
      phone: activeInfo?.detail?.phone || "",
      summary: typeof activeInfo.detail != Object ? activeInfo.detail : "",
      qualification: activeInfo?.details
        ? activeInfo.details[0]?.institution || ""
        : "",
      institution: activeInfo?.details
        ? activeInfo.details[0]?.institution || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      projectTitle: activeInfo?.details
        ? activeInfo.details[0]?.projectTitle || ""
        : "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      deployedLink: activeInfo?.details
        ? activeInfo.details[0]?.deployedLink || ""
        : "",
      githubLink: activeInfo?.details
        ? activeInfo.details[0]?.githubLink || ""
        : "",
      designation: activeInfo?.details
        ? activeInfo.details[0]?.designation || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      certificateLink: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [activeInfo.points]
        : "",
    });
  }, [activeSecKey]);

  useEffect(()=>{
    const details=activeInformation?.details
    if(!details) return;

    const activeInfo = information[sections[activeSecKey]];
    setValues({
      designation: activeInfo.details[activeDetailIndex]?.designation || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      certificateLink: activeInfo.details[activeDetailIndex]?.certificateLink || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      projectTitle: activeInfo.details[activeDetailIndex]?.projectTitle || "",
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      deployedLink: activeInfo.details[activeDetailIndex]?.deployedLink || "",
      githubLink: activeInfo.details[activeDetailIndex]?.githubLink || "",
      qualification: activeInfo.details[activeDetailIndex]?.qualification || "",
      institution: activeInfo.details[activeDetailIndex]?.institution || "",
    })
  }, [activeDetailIndex]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${style.section} ${
              activeSecKey === key ? style.active : ""
            }`}
            key={key}
            onClick={() => setActiveSecKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={style.body}>
        <InputControl
          label="Title"
          placeholder="Enter the section details."
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={style.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${style.chip} 
                            ${activeDetailIndex === index ? style.active : ""}`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSecKey]}
                    {index + 1}
                  </p>
                  <X onClick={(event)=>{
                    event.stopPropagation();
                    handleDeleteDetail(index)}} />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={style.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
