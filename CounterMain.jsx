import React, { useEffect, useState } from "react";
import Counter from "./src/components/Counter";

function CounterMain() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [active,setActive]=useState(0)
  const [remove1,setRemove1]=useState(true)
  const [remove2,setRemove2]=useState(true)
  const [remove3,setRemove3]=useState(true)

  const increase1 = () => {
  
    setCount1(count1 + 1);

  };
  const decrease1 = () => {
  if(count1>0){
    setCount1(count1 - 1);
}
  };
  const resetCount1 = () => {
    setCount1(0);
  };
  const removeCount1=()=>{
    setRemove1(false)
  }

  const increase2 = () => {
    setCount2(count2 + 1);
  };
  const decrease2 = () => {
    if(count2>0){
      setCount2(count2 - 1);
  }
  };
  const resetCount2 = () => {
    setCount2(0);
  };
  const removeCount2=()=>{
    setRemove2(false)
  }
  const increase3 = () => {
    setCount3(count3 + 1);
  };
  const decrease3 = () => {
    if(count3){
    setCount3(count3 - 1);
    }
  };
  const resetCount3 = () => {
    setCount3(0);
  };
  const removeCount3=()=>{
    setRemove3(false)
  }
  const resetAll = () => {
    setCount1(0);
    setCount2(0);
    setCount3(0);
  };
  useEffect(() => {
    let activeCount = 0;
  
    if (count1 > 0) {
      activeCount++;
    }
    if (count2 > 0) {
      activeCount++;
    }
    if (count3 > 0) {
      activeCount++;
    }
  
    setActive(activeCount);
  }, [count1, count2, count3]);
  
const showComponent1=()=>{
  setRemove1(true)
}
const showComponent2=()=>{
  setRemove2(true)
}
const showComponent3=()=>{
  setRemove3(true)
}
  
  return (
    <div>
      <button
        className="btn btn-outline-danger d-flex justify-content-center container col-1 "
        onClick={resetAll}
      >
        Reset All
      </button>
      <h2 className="d-flex justify-content-center text-danger fs-1">{active }</h2>
      <div>
        {remove1 ? <Counter number={count1} increase={increase1} decrease={decrease1} />: ""}
        <span className="container col-6 d-flex justify-content-center">
          <button className="btn btn-outline-warning m-2" onClick={resetCount1}>
            Reset Count 1
          </button>
          <button className="btn btn-outline-warning m-2" onClick={removeCount1}>
            Delete component 1
          </button>
          <button className="btn btn-outline-warning m-2" onClick={showComponent1}>
            Show component 1
          </button>
        </span>
      </div>

      <div>
        { remove2 ?<Counter number={count2} increase={increase2} decrease={decrease2}/>:""}
        <span className="container col-6 d-flex justify-content-center">
          <button className="btn btn-outline-warning m-2" onClick={resetCount2}>
            Reset Count 1
          </button>{" "}
          <button className="btn btn-outline-warning m-2" onClick={removeCount2}>
            Delete component 2
          </button>
          <button className="btn btn-outline-warning m-2" onClick={showComponent2}>
            Show component 2
          </button>
        </span>
      </div>
      <div>
        { remove3? <Counter number={count3} increase={increase3} decrease={decrease3} />:""}
        <span className="container col-6 d-flex justify-content-center">
          <button className="btn btn-outline-warning m-2" onClick={resetCount3}>
            Reset Count 1
          </button>{" "}
          <button className="btn btn-outline-warning m-2" onClick={removeCount3}>
            Delete coumponent 3
          </button>
          <button className="btn btn-outline-warning m-2" onClick={showComponent3}>
            Show component 3
          </button>
        </span>
      </div>
    </div>
  );
}

export default CounterMain;
