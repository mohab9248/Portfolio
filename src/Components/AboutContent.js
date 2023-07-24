import { Link } from "react-router-dom";
import "../Components/AboutContentStyles.css";
import React3 from "../assets/React3.jpg";
import React2 from "../assets/ReactProperties.jpg";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a React and React Native front-end developer. I create responsive
          websites and applications.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img-1" alt="react" />
          </div>
          <div className="img-stack bottom">
            <img src={React3} className="img-2" alt="react" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
