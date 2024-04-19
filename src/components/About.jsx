import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function About() {
    const navigate=useNavigate()
    const goRoute=()=>{
        navigate(-1)
    }
  return (
    <div>
      <h1>About me</h1>
     
      <button className='btn btn-success' onClick={goRoute} >Home</button>

    </div>
  )
}

export default About
