import React, { useState } from 'react'

const Counter2 = () => {
    let [count,setCount] =useState(0)


    
    let decrease = ()=>{
        if (count === 0){
            return
        }
        setCount(count - 1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>increse</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Counter2
