import React, { useState } from 'react'

function ChangeName(props) {
    let {name,onUpdate}=props;
   
  return (
    <div>
      <h1>Change Name</h1>
     <h1>name is {name}</h1>


      <button className='btn btn-warning' onClick={onUpdate}>Change name</button>
    </div>
  )
}

export default ChangeName
