import React, { useState } from 'react'

const Counter = () => {
 // let count=0;
  const [counter,setCounter] = useState(0) ;
  const increment = ()=>{
    setCounter((prev)=>prev+1)
   //  console.log(counter);
   };
  const decrement = ()=>{
   setCounter((prev)=>prev-1)
  //  console.log(counter);
  };
  //increment();
  
  
 // console.log(counter);
  return (
    <div>
      
      <h2>Count: {counter}</h2>
      <button onClick={increment} className='border-2 border-white bg-sky-400 p-2 mt-2 hover:bg-red-700'>Increment</button>
      <button onClick={decrement} className='border-2 border-white bg-sky-400 p-2 mt-2 hover:bg-red-700'>Decrement</button>
    </div>
  )
}

export default Counter
