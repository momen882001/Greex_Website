import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Courses from './Components/Courses/Courses';
import Tracks from './Components/Tracks/Tracks';
import Awareness from './Components/Awareness/Awareness';
import Aboutus from './Components/AboutUs/Aboutus';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/courses" element={<Courses/>}/>
         <Route path="/tracks" element={<Tracks/>}/>
         <Route path="/awareness" element={<Awareness/>}/>
         <Route path="/aboutus" element={<Aboutus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
