import React, { useReducer } from 'react'

function Reducer() {
    const initState={color:"#000000",size:"30px"}
    const reducer=(state,action)=>{

            switch(action){
                case "red":return {...state,color:"#ff0000"}
                case "50px":return{...state,size:"50px"}
                case "green":return {...state,color:"#00ff00"}
                case "blue":return {...state,color:"#0000ff"}
                default:return state

            }
    }
    const [state,dispatch]=useReducer(reducer,initState)
  return (
    <div>
      <h1>Reducer Example</h1>
<h2 style={{color:state.color,fontSize:state.size }}>Vishwas React </h2>
<button onClick={()=>dispatch("red")} className='btn btn-primary'>Red</button>
<button onClick={()=>dispatch("50px")} className='btn btn-warning'>setSize</button>
<button onClick={()=>dispatch("blue")} className='btn btn-primary'>blue</button>
<button onClick={()=>dispatch("green")} className='btn btn-primary'>green</button>
    </div>
  )
}

export default Reducer
