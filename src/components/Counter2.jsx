import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Counter2() {
  return (
    <div>
      hello new route
<div className='container col-7 d-flex gap-3 '>
      <NavLink   to="Product1">  Product1</NavLink>
      <NavLink to="Product2"> Product2</NavLink>
      <NavLink to="Product3"> Product3</NavLink>
    </div>
    <Outlet/>
    </div>
  )
}

export default Counter2
