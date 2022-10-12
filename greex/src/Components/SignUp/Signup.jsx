import React from 'react'
import '../Login/Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser ,faUnlockKeyhole ,faAt} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgRight from '../../assets/signup.svg'

function Signup() {
  return (
    <div className="login">

    <section className="main">
        <div className="login-container">
            <p className="title">Sign-Up</p>
            <div className="separator" style={{marginBottom: "35px"}}></div>
            {/* <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p> */}

            <form class="login-form">
                <div class="form-control">
                    <input type="text" placeholder="Username" required/>
                    <FontAwesomeIcon className="icon" icon={faUser} color="white" size="2x"/>
                </div>
                <div class="form-control">
                    <input type="email" placeholder="Email" required/>
                    <FontAwesomeIcon className="icon" icon={faAt} color="white" size="2x" />
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password" required/>
                    <FontAwesomeIcon className="icon" icon={faUnlockKeyhole} color="white" size="2x" />
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Confirm Password" required/>
                    <FontAwesomeIcon className="icon" icon={faLock} color="white" size="2x" />
                </div>
                <button className="submit" style={{marginTop: "10px"}}>Submit</button>
                <div className="other">
                  <Link to="/login">
                  <a href="">Already have an account ?</a>
                  </Link>
                </div>
            </form>
        </div>
    </section>

    
    <section className="side" >
        <img src= {imgRight} alt="" size="2x" style={{maxWidth: "90%"}}/>
    </section>

</div>
  )
}

export default Signup
