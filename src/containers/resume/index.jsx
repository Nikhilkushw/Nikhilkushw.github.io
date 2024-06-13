import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import resume from "./Image/resume.pdf";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="resumePdf">
        <iframe
        style={{borderRadius:'20px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}
          className="pdf"
          src={resume}
          width="70%"
          height="410"
          title="PDF Viewer"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
