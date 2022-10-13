import React from 'react'
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';
import Video from './Video/Video';

function Home() {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Video/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export default Home
