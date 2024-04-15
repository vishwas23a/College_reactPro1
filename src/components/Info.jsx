import React from 'react'

function Info(props) {
    let {data}=props;

  return (
    <div>
        <h1>hello</h1>
        {
            data.map((item,index)=>(
                <li key={index}>language is {item}</li>
            ))
        }
        

      
    </div>
  )
}

export default Info
