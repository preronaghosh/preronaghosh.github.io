import "./skills.css";
import njIcon from "../../assets/nj_logo.svg";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Areas of Focus</span>
      <span className="skillDesc">
      Currently working at <span className="introName"> Ford Motor Company of Canada </span> as a  
      <span className="introName"> Software Engineer </span>
      where I develop real-time, multithreaded kernel-based application framework for Vision systems. They support implementations of shared
      memory, multimedia processing and image processing for AI/ML.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={njIcon}
            alt="NodeJS Backend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Real-Time & Embedded Systems Development</h2>
            <p>
              C, C++, POSIX Threads, Multithreading, Shared Memory, IPC (Inter-Process Communication), 
              Embedded Linux, Kernel-space/User-space interaction, Memory allocators, Performance Optimization
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={reactIcon}
            alt="React Frontend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Vision & Multimedia Processing</h2>
            <p>GStreamer pipeline development and debugging, OpenVX and custom vision graph execution, Real-time image processing for ML/AI, 
              Camera simulation and sensor integration
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherIcon} alt="Other" className="skillBarImg" />
          <div className="skillBarText">
            <h2>System Simulation & Virtualization</h2>
            <p>QEMU for embedded virtualization, Docker within QEMU for isolated testing, 
              Test automation of embedded applications, Low-latency system profiling and debugging
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherIcon} alt="Other" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Tools & Technologies</h2>
            <p>
              Git, CI/CD, Jenkins, Python for scripting and automation,
              YAML, JSON for graph/config definitions, CAN, UDS (ISO 14229), Functional Safety (ISO 26262)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
