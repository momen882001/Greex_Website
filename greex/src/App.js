import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Tracks from './Components/Tracks/Tracks';
import Awareness from './Components/Awareness/Awareness';
import Error from './Components/Error_page/Error';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/tracks" element={<Tracks/>}/>
         <Route path="/awareness" element={<Awareness/>}/>
         <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
