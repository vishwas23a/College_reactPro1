import React from 'react'

function Comp2() {
    let lang=["java","kotlon","Python","javascript","c"]
  return (
    <>

    <div>language</div>
    <h1> best programming Language</h1>
    <ol>

            {lang.map((data)=>(
                <li>{data} on {index}</li>
           
                
            ))}
    
    </ol>


      
    </>
  )
}

export default Comp2
