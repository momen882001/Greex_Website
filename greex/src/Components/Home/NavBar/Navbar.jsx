import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from '../../../assets/img_1_1658846839128.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">DevLHB</span>
      {/* <img src={logo} alt="" style={{width:"50px"}}/> */}
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/login" ><a href="">Login</a></Link>
        <Link to="/signup" ><a href="">SignUp</a></Link>
        <Link to="/tracks" ><a href="">Tracks</a></Link>
        <Link to="/courses" ><a href="">Courses</a></Link>
        <Link to="/awareness" ><a href="">Awareness</a></Link>
        <Link to="/aboutus" ><a href="">AboutUs</a></Link>
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