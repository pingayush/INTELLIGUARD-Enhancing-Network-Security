import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/homebg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="headerContainer">
        <h1> Intrusion Detection System</h1>
        {/* <p> Unleashing vigilance. Safeguarding networks through intrusion detection</p> */}
        <Link to="/services">
          <button> EXPLORE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
