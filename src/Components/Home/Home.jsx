import React from 'react'
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';
import News from './News/News';
import Video from './Video/Video';

function Home() {
  return (
    <div>
        <Navbar/>
        <Video/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home
