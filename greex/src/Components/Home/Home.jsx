import React from 'react'
import { Link } from "react-router-dom";
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';

function Home() {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export default Home
