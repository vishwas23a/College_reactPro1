import React, { useState } from "react";

function Comp2() {
  let [change ,setChange]=useState(false);
  const changed=()=>{
    setChange(true)
    
  }
  let lang = [
    {

      id: 1,
      name: "java",
    },
    {

      id: 2,
      name: "kotlon",
    },
    {
   
      id: 3,
      name: "Python",
    },
    {

      id: 4,
      name: "javascript",
    },
  ];
  let dat=lang.filter((item)=>item.name==="javascript")
  let check=false;
  return (
    <>
      <div>language</div>
      <h1 className={change ? "fs-1 bg-warning": "bg-primary  text-white" }>{change? " best programming Language":"top 5 programming lang"}</h1>
      <ol>
        {lang.map((data, index) => (
          <li>
            {data.name} on {data.id}
          </li>
        ))}
    
      </ol>
      <button className="btn btn-primary" onClick={changed}>change</button>
      
        <li>{dat.name}</li>
      
    </>
  );
}

export default Comp2;
