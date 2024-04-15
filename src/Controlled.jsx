import React, { useState } from 'react'
import ChangeName from './components/ChangeName'
import Counter from './components/Counter'

function Controlled() {
    const [name,setName]=useState("")
    const [sname,setSName]=useState("")
  const reset=()=>{
    setName("")
    setSName("")
  }
  
    return (
      <>
      {/* <h1>hello</h1>
      <Page1/> */}
      {/* <Comp2/> */}
      <Counter/>
      <ChangeName name={name} onUpdate={()=>setName("Kiet Mca")}/>
      <ChangeName name={sname} onUpdate={()=>setSName("rsmt bca")}/>
      <button className="btn btn-primary" onClick={reset}>reset</button>
     
      {/* <Day8Page1/> */}
      </>
    )
}

export default Controlled
