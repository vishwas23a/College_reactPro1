import React, { useState } from 'react'

function PracState() {
    const [userInfo,setUserInfo]=useState({name:"vishwas",class:"MCA"});
    const [counter,setCounter]=useState(0);

    const change=()=>{
        setUserInfo({...userInfo,
            name:"vishwas",
           
        })
    }

  return (
    <div>
      <h2>hello state</h2>
      <hr />
      <h2>Name :{userInfo.name}</h2>
      <h2>class :{userInfo.class}</h2>

      <button onClick={change} className='btn btn-primary'> change</button>


      <br />
      <h2>Count: {counter}</h2>
    <button className='btn btn-secondary' onClick={()=>{
        setCounter((e)=>e+1)
        setCounter((e)=>e+2)
        setCounter((e)=>e+3)
        
        }} > increment</button>
    </div>
  )
}

export default PracState
