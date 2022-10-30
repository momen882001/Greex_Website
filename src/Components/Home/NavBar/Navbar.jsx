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
        <Link to="/login" className="LCN">Login</Link>
        <Link to="/signup" >SignUp</Link>
        <Link to="/tracks" >Tracks</Link>
        <Link to="/awareness" >Awareness</Link>
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