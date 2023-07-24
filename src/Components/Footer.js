import React from "react";
import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={23}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
            <div>
              <p>Meryata Zgharta</p>
              <p>Lebanon</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={23}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              +961 78 981 313
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={23}
                style={{
                  color: "#fff",
                  marginRight: "1.5rem",
                  marginTop: "1rem",
                }}
              />
              mohamad.abbas9248@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>my name is mohamad....</p>
          <div className="social">
            <FaFacebook
              size={23}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={23}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={23}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
