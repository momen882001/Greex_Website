import React from 'react'
import imgLeft from '../../../assets/4247345.png'

function Video2() {
    
  return (
    <div className="video-contain">
    <div className="login" style={{height:"30%"}}>
    <section className="main" style={{padding:"0", margin:"0",flexDirection: "column"}}>
    <p className='video-text' style={{marginTop: "-5rem", fontSize: "4rem"}}>Why green economy ?</p>
    {/* <video controls width="600" height="400" autoPlay loop muted >
            <source src={video} type="video/mp4" />
        </video> */}
        <iframe className='video-youtube' width="560" height="315" src="https://www.youtube.com/embed/56NgffuOQlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
      <section className="side" style={{padding:"0", margin:"0"}}>
        <img src= {imgLeft} alt="" size="2x" style={{padding:"0", margin:"0",}}/>
    </section>

    </div>
    <div className="separator-video"></div>
    </div>
  )
}

export default Video2
