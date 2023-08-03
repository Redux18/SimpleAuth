import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Userdetails from './components/Userdetails';
import Userhome from './components/Userhome';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (

    <Router>
    <div className="App">

      <Routes>
      <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <Userdetails /> : <Login />} />
   
   

   <Route  path="/sign-up" element={<Signup/>} />
   <Route path="/sign-in" element={<Login />} />
   <Route path="/userDetails" element={<Userdetails />} />
        </Routes>

      
      
    </div>

    </Router>
  );
}

export default App;
