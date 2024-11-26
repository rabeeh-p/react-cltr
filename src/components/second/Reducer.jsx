import React, { act, useReducer } from 'react'

const Reducer = () => {
    const intialValue = 1
    const reducer = (state,action) =>{
        if (action === 'increament') {
            return state + 1
        }else{
            return state - 1
        }
    }
    const [ count, dispatch] = useReducer(reducer,intialValue)
  return (
    <div>
      <h1>reduer page</h1>
      <h1> {count}</h1>
      <button onClick={()=>dispatch('increament')}> increament1</button>
      <button onClick={()=>dispatch('des')}> dec</button>
    </div>
  )
}

export default Reducer
