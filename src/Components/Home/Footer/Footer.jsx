import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle, faInstagram, faGithub, faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>

      <div class="footer">
        <div class="container-footer">
          <div class="box">
            <h3>Greex</h3>
            <p class="text">
              It is a green educational platform that aims to qualify young people for jobs and environmentally friendly fields through many courses and trainings.          </p>

          </div>
          <div class="box">
            {/* <ul class="links">
            <li><a href="#">Important Link 1</a></li>
            <li><a href="#">Important Link 2</a></li>
            <li><a href="#">Important Link 3</a></li>
            <li><a href="#">Important Link 4</a></li>
            <li><a href="#">Important Link 5</a></li>
          </ul> */}
            <div class="line">
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <div class="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
            </div>
            <div class="line">
              <i class="far fa-clock fa-fw"></i>
              <div class="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div class="line">
              <i class="fas fa-phone-volume fa-fw"></i>
              <div class="info">
                <span>+20123456789</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>

          <div class="box">

            <ul class="social">
              <li className='facebook'>
                <Link>
                  <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faTelegram} color="white" size="lg" />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p class="copyright">Greex Company && 2022</p>
      </div>
    </div>
  )
}

export default Footer