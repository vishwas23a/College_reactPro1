import React from 'react'
import B from './B'

function A(props) {
  return (
    <div>
      <h2>A componet</h2>
      <B Name={props.Name}/>
    </div>
  )
}

export default A
