import React from 'react'
import './awareness.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgLeft from '../../assets/34474031.png'
import Navbar from '../Home/NavBar/Navbar';
// import Video2 from './video/Video2';
// import Video2 from './Video/Video2';



function Awareness() {
  return (
    <div>
        <Navbar/>
        {/* <Video2/> */}
      <div className="container">
        <section className="side" style={{padding:"0", margin:"0"}}>
          <img src= {imgLeft} alt="" size="2x" style={{padding:"0", margin:"0"}}/>
        </section>
          <Row className='row'>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green jobs</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green entrepreneurship</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green building materials</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green architecture</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green energy</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green farming</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Green manufacturing</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Waste recycling</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Water managements</Col>
            <Col className="awr col-3" xs={12} sm={6} md={6} lg={3}>Environmental Impact Assessment</Col>
          </Row>
    </div>
    </div>
  )
}

export default Awareness

