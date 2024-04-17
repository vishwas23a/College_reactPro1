import React, { useEffect, useState } from 'react'
import NewCounter from './src/components/NewCounter'

function NewCounterHandle() {
    const [counter ,setCounter]=useState([
        {id:1,count:0},
        {id:2,count:0},
        {id:3,count:0},
        {id:4,count:0},
    

    ])
    const increase=(active)=>{
        
        if(active.count>=0){
            const lcounter=[...counter]
            const index=lcounter.indexOf(active)
            lcounter[index].count++;
            setCounter(lcounter);
        }
      
    }
    const decrease=(active)=>{ 
        if(active.count>0){
            const lcounter=[...counter]
            const index=lcounter.indexOf(active)
            lcounter[index].count--;
            setCounter(lcounter);
        }
}
    const remove=(active)=>{
       const lcounter=counter.filter(item=>item!==active);
       setCounter(lcounter)
}
const reset=()=>{
const lcounter=counter.map(item=>{
    item.count=0;
    return item;
})
setCounter(lcounter)
}
const getCount=()=>{
    const lcounter=counter.filter(item=>item.count>0).length

    return lcounter
}


  return (
    <>
    <div>
    <button onClick={reset} className='d-flex justify-content-center container col-1 btn btn-success'> reset</button>
    <p>{getCount()}</p>
      {counter.map(item=>(
        <NewCounter key={item.id} counter={item} increase={increase} decrease={decrease} remove={remove}/>
      ))}
    </div>
    
    </>
  )
}

export default NewCounterHandle
