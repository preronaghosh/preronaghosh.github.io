import "./experience.css";
import { experienceData, experienceStyles } from "../../data/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ford from "../../assets/ford.png"
import uw from "../../assets/uw.png";
import conti from "../../assets/conti.png"
import srm from "../../assets/srm.png"

const Experience = () => {
  const formatedCompanyLogos = {
    ford,
    uw,
    conti,
    srm
  };

  const renderJobExperience = () => {
    const { icon, content, arrowStyle } = experienceStyles;

    return experienceData.workExperience.map((job) => (
      <VerticalTimelineElement
        key={job.id}
        className="vertical-timeline-element-work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={job.date}
        iconStyle={icon}
        icon={
          <img
            className="timeline-logo"
            src={formatedCompanyLogos[job.companyLogo]}
            alt="icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">{job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
        <p className="vertical-timeline-element-other">{job.skills}</p>
      </VerticalTimelineElement>
    ));
  };

  return (
    <section id="experience">
      <h2 className="worksTitle">My Journey</h2>
      <div className="experience-container">
        <VerticalTimeline>
          {renderJobExperience()}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
