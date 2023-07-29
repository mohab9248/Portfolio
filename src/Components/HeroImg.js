import "./HeroImgStyles.css";
import React from "react";
import introimg from "../assets/into-bg.jpg";
import { Link } from "react-router-dom";
function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="intro-img"
        />
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
