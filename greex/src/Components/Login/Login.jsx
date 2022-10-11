import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgLeft from '../../assets/3726696.svg'

function Login() {
  return (
    <div className="login" style={{"padding":"0", "margin":"0"}}>

    <section className="side">
        <img src= {imgLeft} alt="" size="2x"/>
    </section>

    <section className="main">
        <div className="login-container">
            <p className="title">Welcome back</p>
            <div className="separator"></div>
            <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

            <form class="login-form">
                <div class="form-control">
                    <input type="text" placeholder="Username"/>
                    <FontAwesomeIcon className="icon" icon={faUser} color="white" size="2x"/>
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password"/>
                    <FontAwesomeIcon className="icon" icon={faLock} color="white" size="2x" />
                </div>
                <button className="submit">Login</button>
                <div className="other">
                <Link to="/forgetpass">
                  <a href="">Forget Password?</a>
                  </Link>
                  <Link to="/signUp">
                  <a href="">Creat an account ?</a>
                  </Link>
                </div>
                {/* <div id="google">
                  <h5>or</h5>
                  <h5>Login with</h5>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faGoogle} color="white" size="2x"/>
                  </a>
                </div> */}
            </form>
        </div>
    </section>

</div>
  )
}

export default Login
