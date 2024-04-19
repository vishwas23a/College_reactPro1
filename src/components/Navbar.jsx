import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        {/* <ul>
       <NavLink to="/">    <li>HomePage</li></NavLink> 
      <NavLink to="CardHandler">   <li>CardHandler</li></NavLink>  
      <NavLink to="Comp2">   <li>Comp2</li></NavLink>  

        </ul> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand " to="/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <NavLink className="nav-link" to="CardHandler">CardHandler </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Comp2">Comp2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Counter2">new Page</NavLink>
        </li>
        <NavLink className="nav-link" to="About">   <button className="btn btn-primary">
       About
        </button></NavLink>
        <NavLink className="nav-link" to="/StudentInfo">   <button className="btn btn-primary">
       Student
        </button></NavLink>
      
      
      </ul>
  
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
