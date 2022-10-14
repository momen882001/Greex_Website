import React from 'react'
import video from '../../../assets/videos/Greex description .mp4'
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
    <p className='video-text' style={{marginTop: "-5rem", fontSize: "4rem"}}>What is Greex ?</p>
    <video controls width="600" height="400" autoPlay loop muted >
            <source src={video} type="video/mp4" />
        </video>
    </section>
    </div>
    <div className="separator-video"></div>
    </div>
  )
}

export default Video
