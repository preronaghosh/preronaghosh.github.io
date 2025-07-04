import React, { useState } from "react";
import "./navbar.css";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openResume = () => {
    window.open("resume.pdf", "_blank");
  };
  function contactMeOnClickFunction() {
    return () => {
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
        offset: -50,
      });
    };
  }

  return (
    <nav className="navbar">
      <div className="deskTopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={50}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-80}
          duration={50}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="achievements"
          spy={true}
          smooth={true}
          offset={-80}
          duration={50}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
        activeClass="active"
        to="contact"  // Updated to point to "contact" element
        spy={true}
        smooth={true}
        offset={-50}
        duration={50}
        className="desktopMenuListItem"
       >
        Contact Me
      </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-80}
          duration={50}
          className="desktopMenuListItem"
          onClick={openResume}
        >
          Resume
        </Link>
      </div>
      {/* <button
        className="desktopMenuButton"
        onClick={contactMeOnClickFunction()}
      >
        <img src={contactImg} alt="contactImg" className="desktopMenuImg" />
        Contact Me
      </button> */}

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="achievements"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-80}
          duration={50}
          className="listItem"
          onClick={openResume}
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
