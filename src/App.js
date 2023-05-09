import React from "react";
import Login from './Components/login/Login'
import './App.css';
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/login/Details";

function App() {

  return (
    <>
    <Router>
      
  <NavBar/>
  <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/detail/:id" element={<Details/>} />
    
  </Routes>
  <Footer/>
  
</Router>

   

   
   
    </>
  );
}

export default App;
