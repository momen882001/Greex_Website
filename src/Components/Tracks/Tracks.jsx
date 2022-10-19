import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './tracks.css'
import Navbar from '../Home/NavBar/Navbar';
import general from '../../assets/general.png'
import arc from '../../assets/arc.png'
import energy from '../../assets/energy.png'
import mat from '../../assets/mat.png'
import wm from '../../assets/wm.png'
import waterm from '../../assets/waterm.png'
import to from '../../assets/to.png'


function Tracks() {
  return (
    <div>
      <Navbar/>
      {/* <div className="header">
        <h2>
        كيف تعثر على الفرص والتدريبات المناسبة 
كيف تحقق أفضل استفادة من التدريب 
المحتوى العلمي المطلوب لكل تدريب
        </h2>
        <h4>
        موجه إلى طلاب الهندسة
        </h4>
      </div> */}
      <div className="tracks-cont">
        <Row className='row'>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={general} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    General Track
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> المهندسين والزراعيين وطلبة علوم وغيرهم 
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={arc} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    Green Architecture
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> طلبة عمارة والتصميم المعماري والداخلي 
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={energy} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    Green Energy
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> طلبة ميكانيكا - كيمياء - كهرباء - بترول 
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={mat} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    Green Material
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> طلبة مدني - كيمياء - فلزات
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={wm} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    Waste Management
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> طلبة ميكانيكا - كيمياء - مدني 
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={waterm} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    Water Management
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> طلبة ميكانيكا - كيمياء - مدني 
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className=" col-3" xs={12} sm={6} md={6} lg={3}>
                <div className="card car1">
                  <div className="image">
                    <img src={to} alt="" />
                  </div>
                  <div className="text">
                    <h2>
                    Opportunities and training
                    </h2>
                    <h3>
                      <span> الفئة المستهدفة:</span> جميع طلبة الهندسة 
                    </h3>
                  </div>
                </div>
              </Col>
        </Row>
      </div>
    </div>
  )
}

export default Tracks
