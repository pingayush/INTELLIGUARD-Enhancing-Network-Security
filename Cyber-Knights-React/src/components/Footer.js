import React from "react";
import InstagramIcon from "../assets/icons8-instagram-50.png";
import TwitterIcon from "../assets/twitter-circled.png";
import FacebookIcon from "../assets/icons8-facebook-50.png";
import LinkedInIcon from "../assets/icons8-linkedin-50 (1).png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p><img src={FacebookIcon} alt="facebook"/></p>
        <p><img src={LinkedInIcon} alt="linkedin"/></p>
        <p><img src={TwitterIcon} alt="twitter"/></p>
        <p><img src={InstagramIcon} alt="insta"/></p>
      </div>
      <p> &copy; Cyber-Knights </p>
    </div>
  );
}

export default Footer;
