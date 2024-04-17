
function NewCounter(props) {
let {counter,increase,decrease,remove}=props;


  return (
<div className='container-fluid '>

<div className='container mt-3 col-1 text-center bg-primary text-white'>
    <h1>{counter.count}</h1>
</div>
<div className='d-flex justify-content-center'>
<button onClick={()=>increase(counter)} className='btn btn-outline-primary m-3 container-fluid col-1 d-flex justify-content-center'>Increment </button>
<button onClick={()=>decrease(counter)}  className='btn btn-outline-primary m-3 container-fluid col-1 d-flex justify-content-center'> Decrement</button>
<button onClick={()=>remove(counter)}  className='btn btn-outline-primary m-3 container-fluid col-1 d-flex justify-content-center'> Delete</button>
</div>



</div>
  )
}

export default NewCounter
