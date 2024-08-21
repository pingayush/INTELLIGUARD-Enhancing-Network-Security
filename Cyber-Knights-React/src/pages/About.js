import React from "react";
import aboutimg from "../assets/aboutimg.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutimg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <span><p>
        Welcome to Cyber Knight, your trusted partner in safeguarding your 
        digital assets from cyber threats. We specialize in providing cutting-edge 
        intrusion detection systems designed to protect against a wide range of intrusions,
         including web, cloud, IoT, and network-based attacks. Our expert team is dedicated 
         to staying ahead of evolving cybersecurity risks, leveraging advanced technologies 
         such as machine learning and behavioral analysis to detect and neutralize potential
          threats. With our tailor-made solutions, seamless integration, and minimal performance 
          impact, we empower businesses and individuals to proactively defend their systems and networks. 
          Trust Cyber Knight to deliver the highest level of security, allowing you to focus on your core
           objectives with confidence and peace of mind.
        Whether you are a small business owner, a medium-sized enterprise, or an individual
         seeking to fortify your online presence, our intrusion detection systems are designed to 
         cater to your specific needs. We take a user-centric approach, ensuring seamless integration
          into your existing infrastructure while minimizing any impact on system performance. 
          Our solutions provide comprehensive coverage, enabling you to protect your digital assets
           and maintain the trust of your customers and stakeholders.
        </p></span>
      </div>
    </div>
  );
}

export default About;
