import React, { useState } from 'react'

const Counter2 = () => {
    let [count,setCount] =useState(0)
    let [name,setName] =useState('rabeeh')


    
    let decrease = ()=>{
        if (count === 0){
            return
        }
        setCount(count - 1)
    }

    const handleChange = ()=>{
      setName('aju')
    }
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>increse</button>
      <button onClick={decrease}>decrease</button>

      <h2>{naem}</h2>
      <button onClick={handleChange}>change the name</button>
    </div>
  )
}

export default Counter2


