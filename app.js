import React from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Script from "./component/Script";
import Login from "./component/Login";
import Signup from "./component/Signup";


function App() {
  return (
    <div className='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Script />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />

            </Routes>
        
        </Router>
    </div>
  )
}

export default app