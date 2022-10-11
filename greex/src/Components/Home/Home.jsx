import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">
        <div className='btn btn-success'>Login</div>
        </Link>
      <Link to="/signup">
        <div className='btn btn-warning'>SignUp</div>
        </Link>
      <Link to="/tracks">
        <div className='btn btn-danger'>Tracks</div>
        </Link>
      <Link to="/awareness">
        <div className='btn btn-info'>Awareness</div>
        </Link>
      <Link to="/courses">
        <div className='btn btn-secondary'>Courses</div>
        </Link>
      <Link to="/aboutus">
        <div className='btn btn-dark'>AboutUs</div>
        </Link>
    </div>
  )
}

export default Home
