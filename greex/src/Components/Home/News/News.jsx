import React , {useEffect} from 'react'
import imgRight from '../../../assets/3721898.png'
import booking from '../../../assets/3823344.png';
import onRes from '../../../assets/3721898.png';
import tracking from '../../../assets/3823344.png';
import Carousel from 'react-bootstrap/Carousel'
import AOS from "aos";
import "aos/dist/aos.css";

function News() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div>
            <div className="login" style={{ height: "30%" }}>
                <section className="main" style={{ padding: "0", margin: "0", flexDirection: "column" }}>
                    <p className='video-text' data-aos="fade-right" style={{ marginTop: "-3rem", fontSize: "4rem" }}>Greex News</p>

                    <div className="content" data-aos="fade-right">
                <Carousel
                fade
                variant="dark"
                nextLabel=""
                prevLabel="">
                <Carousel.Item interval={3000}>
            <img
              className="d-block w-100" id="slide"
              src= {tracking}
              alt="First slide"
            />
            <Carousel.Caption id='back-type'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={booking}
              alt="Second slide"
              id="slide"
            />

            <Carousel.Caption id='back-type'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={onRes}
              alt="Third slide"
              id="slide"
            />

            <Carousel.Caption id='back-type'>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
                </section>

                <section className="side" style={{ padding: "0", margin: "0" }} >
                    <img src={imgRight} alt="" size="2x" style={{ padding: "0", margin: "0", }}  />
                </section>
            </div>
        </div>
    )
}

export default News
