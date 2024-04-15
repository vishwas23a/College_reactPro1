import React, { useEffect, useState } from 'react'

function Counter(props) {
let {number,increase,decrease}=props;


       
    
  return (
    <div className='container-fluid '>

        <div className='container mt-3 col-1 text-center bg-primary text-white'>
            <h1>{number}</h1>
        </div>
        <div className='d-flex justify-content-center'>
      <button onClick={increase} className='btn btn-outline-primary m-3 container-fluid col-1 d-flex justify-content-center'>Increment </button>
      <button onClick={decrease}  className='btn btn-outline-primary m-3 container-fluid col-1 d-flex justify-content-center'> Decrement</button>
      </div>



    </div>
   
  )
}

export default Counter
