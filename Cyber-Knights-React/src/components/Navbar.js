import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"><img src={Logo} alt="LOGO" /></Link>
        <div className="hiddenLinks">
          <Link to="/" >
            Dashboard
          </Link>
          <Link to="/services" >
            Services
          </Link>
          <Link to="/about" >
            About
          </Link>
          <Link to="/contact" >
            Contact
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <button onClick={toggleNavbar}>
          {/* Add your icon here */}
          {/* <ReorderIcon /> */}
        </button>
        <Link to="/" className="rightLink">
          Dashboard
        </Link>
        <Link to="/services" className="rightLink">
          Services
        </Link>
        <Link to="/about" className="rightLink">
          About
        </Link>
        <Link to="/contact" className="rightLink">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
