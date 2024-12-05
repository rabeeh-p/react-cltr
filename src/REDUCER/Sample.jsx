import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increament, setYello } from './Store';

const Sample = () => {

  const sample = useSelector((state)=>state.count.count)
  console.log(sample,'sample value');

  const dispatch = useDispatch()

  const color = useSelector((state)=>state.color.backgroundColor)
  console.log(color,'clorr');
  
  
  return (
    <div>
      <h1>hello sample page</h1>
      <h1>{sample}</h1>

      <button onClick={()=>dispatch(increament())}>inc</button>


      <div style={{height:'200px',backgroundColor:`${color}`, margin:'10px',width:'200px'}}></div>

      <button onClick={()=>dispatch(setYello())}>change the color</button>
      
    </div>
  )
}

export default Sample
