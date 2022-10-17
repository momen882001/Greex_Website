import React from 'react'
import '../Login/Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser ,faUnlockKeyhole ,faAt} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import swal from 'sweetalert';
// import Swal from 'sweetalert2'; 
import imgRight from '../../assets/signup.svg'
import Navbar from '../Home/NavBar/Navbar';

function Signup() {


  // const click = () => {
  //     Swal.fire({
  //       title: 'Video',
  //       icon: 'info',
  //       html:
  //         '<iframe width="400" height="315" src="https://www.youtube.com/embed/d_elXY2Lcfk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //       showCloseButton: true,
  //       showCancelButton: true,
  //       focusConfirm: false,
  //       confirmButtonText:
  //         'Great!',
  //       confirmButtonAriaLabel: 'Thumbs up, great!',
  //       cancelButtonText:
  //         'close',
  //       cancelButtonAriaLabel: 'Thumbs down'
  //     })
  //   }

  return (
    <div>
      <Navbar/>
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
                <button className="submit" style={{marginTop: "10px"}} >Submit</button>
                <div className="other">
                  <Link to="/login">
                  Already have an account ?
                  </Link>
                </div>
            </form>
        </div>
    </section>

    
    <section className="side" >
        <img src= {imgRight} alt="" size="2x" style={{maxWidth: "80%"}}/>
    </section>
    </div>
</div>
  )
}

export default Signup
