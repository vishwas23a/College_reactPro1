import React, { useEffect, useState } from 'react'

function PracUseeffect() {
    const [data,setData]=useState(0)
    const [name,setName]=useState("")
    useEffect(()=>{
        setData(data+1)

    },[name])
    useEffect(()=>{
            console.log(name);
    },[name])
    const change=()=>{
        setName("vishwas")
    }
    const changeBack=()=>{
        setName("kiet Mca")

    }
  return (
    <div>

        <h2>useEffect</h2>
        <h2>{data}</h2>
        <h1>{name}</h1>
        <button  onClick={change} className='btn btn-warning'>Change</button>
        <button onClick={changeBack} className='btn btn-warning'>ChangeBack</button>
      
    </div>
  )
}

export default PracUseeffect
