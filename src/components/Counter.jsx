import React, { useState } from 'react'

const Counter = () => {

    let [count,setCount] = useState(0)

    let increaseButtonClicked= ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <div className="counter">
      <h3>Counter</h3>
      <div className="counter-display">
        <span>{count}</span>
      </div>
      
      <div className="button-container">
        <button onClick={increaseButtonClicked} className="counter-button">Increase</button>
        <button onClick={()=>{
            if (count === 0){
                return
            }
            
            setCount(count-1)
        }} className="counter-button">Decrease</button>
      </div>
    </div>
      
    </div>
  )
}

export default Counter
