import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, plus, toggleColor } from './Store';

const Sample = () => {

    const value = useSelector((state)=> state.counter.count)
    console.log(value,'value');

    const dispatch = useDispatch()
    console.log(dispatch,'diss');
    
    const backgroundColor = useSelector((state)=> state.color.backgroundColor)
    console.log(backgroundColor,'back');


    const color= useSelector((state)=>state.txtColor)

    console.log(color,'new colorrrrrrrrrrrrrrr');

    const newValue = useSelector((state)=>state.newValue.value)

    console.log(newValue,'sample');
    
    
    

    
  return (
    <div>
        <h1 style={color}>samplle page redux</h1>
        <h2>{value}</h2>
        <button onClick={()=>dispatch(increment())}>inc</button>



        <h1>newvalue {newValue}</h1>
        <button onClick={()=>dispatch(plus())}>plusss</button>


        <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor, // Dynamic background color
          margin: '0 auto',
        }}
      >
        <button
        onClick={() => dispatch(toggleColor())} // Dispatch action on click
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Toggle Color
      </button>
      </div>

      
    </div>
  )
}

export default Sample
