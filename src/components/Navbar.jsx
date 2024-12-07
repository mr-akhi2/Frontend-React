import React, { useState } from 'react'
import logo from "../images/logo.jpg";
import "./navbar.css"
import {Routes,Route,Link} from "react-router-dom";
import Client from './Client';
import Login from './Login';
import PatientAppointmentForm from "./PatientAppointmentForm";
import DashBoard from "./DashBoard";
import Report from "./ReportG";
import Claim from "./Claim";
import Billing from './billing';
import AddClient from "./AddClient"
import Claimstatus from "./Claimstatus";
import Home from "../Home/Home";

const Navbar = () => {
  const[islogin,setlogin]=useState(false);
  return (
    <>
    {islogin?(<>
    <div id='navbar'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home"><img src={logo} alt="" id='logo'/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Appointment">Appointment</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Client
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/AddClient">Add client</Link></li>
            <li><Link class="dropdown-item" to="/client">Client list</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/generate">Generate Report</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Billing
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/bill">Billing Status</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Insurance
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/claim">ADD Claim</Link></li>
            <li><Link class="dropdown-item" to="/Clients">Claim Status</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Dashboard">DashBoard</Link>
        </li>
        
      </ul>
        <button id='logoutbtn'><Link className='text text-light' id="logout" to="/" onClick={()=>{setlogin(false)}} >Logout</Link></button>
    </div>
  </div>
</nav>
  </div>
    <div className='main_container'>
   <Routes>
   <Route path="/home" element={<Home/>}/>
    <Route path="/Client" element={<Client/>}/>
    <Route path="/generate" element={<Report/>}/>
    <Route path="/Appointment" element={<PatientAppointmentForm/>}/>
    {/* <Route path="/Login" element={<Login setlogin={setlogin}/>}/> */}
    <Route path="/claim" element={<Claim/>}/>
    <Route path="/bill" element={<Billing/>}/>
    <Route path="/AddClient" element={<AddClient/>}/>
    <Route path="/Clients" element={<Claimstatus/>}/>
    <Route path="/Dashboard" element={<DashBoard/>}/>
   </Routes>
    </div>
    </>
    ):<Login setlogin={setlogin}/>
    }
    </>
  )
}

export default Navbar;