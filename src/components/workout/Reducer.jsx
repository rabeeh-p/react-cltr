import React, { useReducer, useState } from 'react'

const Reducer = () => {
    const initialValue= 0

        const reducer = (state,action)=>{
            console.log(state,'state');
            console.log(action,'action');
            if (action == 'increment'){
                return state + 1
            }

            return state
            
        }

    const [count,dispatch] = useReducer(reducer,initialValue)    
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>increment</button>
      
    </div>
  )
}

export default Reducer
