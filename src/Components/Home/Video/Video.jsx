import React from 'react'
import imgLeft from '../../../assets/3823344.png'
import './Video.css'

function Video() {
    
  return (
    <div className="video-contain">
    <div className="login" style={{height:"30%"}}>
      <section className="side" style={{padding:"0", margin:"0"}}>
        <img src= {imgLeft} alt="" size="2x" style={{padding:"0", margin:"0",}}/>
    </section>

    <section className="main" style={{padding:"0", margin:"0",flexDirection: "column"}}>
    <p className='video-text'>What is Greex ?</p>
        <iframe className='video-youtube' width="560" height="315" src="https://www.youtube.com/embed/9ADOKs4EomM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    </div>
    <div className="separator-video"></div>
    </div>
  )
}

export default Video
