import { useState, useEffect } from "react";
import "./intro.css";

const roles = [
  "a Software Engineer",
  "an Embedded Software Engineer",
  "a C++ Software Developer",
  "an R&D Engineer",
];

const Intro = () => {
  const fullName = "Prerona Ghosh.";
  const [displayedName, setDisplayedName] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");

  // Type out the fullName once on mount
  useEffect(() => {
    let i = 0;
    const nameInterval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(nameInterval);
    }, 100);
    return () => clearInterval(nameInterval);
  }, []);

  // Typing effect for rotating roles
  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const typeRole = () => {
      typingInterval = setInterval(() => {
        setDisplayedRole((prev) => {
          const currentRole = roles[roleIndex];
          charIndex++;
          if (charIndex > currentRole.length) {
            clearInterval(typingInterval);
            // Wait 1.5 seconds, then move to next role
            setTimeout(() => {
              setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
              charIndex = 0;
            }, 1500);
            return currentRole;
          }
          return currentRole.slice(0, charIndex);
        });
      }, 100);
    };

    typeRole();

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="introText">
          Hi, I am <span className="introFullName">{displayedName}</span>
          <br />
          I am <span className="introRole">{displayedRole}</span>
        </span>
        <p className="introPara">
          <span className="introName">Software engineer </span>
          with 4+ years of experience in development of{" "}
          <span className="introName">
            embedded systems, multimedia and real-time applications.
          </span>
          <br />
          I am proficient in software design, hardware-software integration,
          testing, feasibility analysis and maintenance of legacy systems.
          <br />
        </p>

        <p className="introPara">
          Outside of work, I like to read, sing, watch movies and play games!
        </p>
      </div>
    </section>
  );
};

export default Intro;
