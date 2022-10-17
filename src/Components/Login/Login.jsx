import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faAt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgLeft from '../../assets/3726696.svg'
import Navbar from '../Home/NavBar/Navbar';

function Login() {
  return (
    <div style={{padding:"0",margin:"0"}}>
        <Navbar/>
    <div className="login" style={{padding:"0",margin:"0"}}>

    <section className="side" style={{padding:"0", margin:"0"}}>
        <img src= {imgLeft} alt="" size="2x" style={{padding:"0", margin:"0"}}/>
    </section>

    <section className="main" style={{padding:"0", margin:"0"}}>
        <div className="login-container">
            <p className="title">Welcome back</p>
            <div className="separator"></div>
            <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

            <form class="login-form">
                <div class="form-control">
                    <input type="email" placeholder="Email" required/>
                    <FontAwesomeIcon className="icon" icon={faAt} color="white" size="2x"/>
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password" required/>
                    <FontAwesomeIcon className="icon" icon={faLock} color="white" size="2x" />
                </div>
                <button className="submit">Login</button>
                <div className="other">
                <Link to="">
                  <a href="">Forget Password?</a>
                  </Link>
                  <Link to="/signUp">
                  <a href="">Create an account ?</a>
                  </Link>
                </div>
            </form>
        </div>
    </section>
    </div>
</div>
  )
}

export default Login
