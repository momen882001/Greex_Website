import React from 'react'
import video from '../../../assets/videos/Greex description .mp4'
import imgLeft from '../../../assets/signup.svg'
import './Video.css'

function Video() {
    
  return (
    <div className="login" >
      <section className="side" style={{padding:"0", margin:"0"}}>
        <img src= {imgLeft} alt="" size="2x" style={{padding:"0", margin:"0"}}/>
    </section>

    <section className="main" style={{padding:"0", margin:"0"}}>
    <video controls width="600" height="400" autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
    </section>
    </div>
  )
}

export default Video
