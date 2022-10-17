import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from '../../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link style={{color:"white"}} to="/">
      <span className="nav-logo" style={{color: "white", paddingLeft: "2rem", fontSize: "25px"}}>Greex</span>
      </Link>
      {/* <img src={logo} alt="" style={{width:"50px"}}/> */}
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/login" className="LCN"><a>Login</a></Link>
        <Link to="/signup" ><a>SignUp</a></Link>
        <Link to="/tracks" ><a>Tracks</a></Link>
        <Link to="/awareness" ><a>Awareness</a></Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;