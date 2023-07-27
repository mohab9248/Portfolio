import "./HeroImgStyles.css";
import React from "react";
import introimg from "../assets/into-bg.jpg";
import { Link } from "react-router-dom";
function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={introimg} alt="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M MOHAMAD</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
