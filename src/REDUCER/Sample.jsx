import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increament } from './Store'

const Sample = () => {

  const count = useSelector((state)=> state.count.count)

  const dispatch = useDispatch()


  

  
  
  return (
    <div>
      <h1>hello sample page{count}</h1>

      <button onClick={()=>dispatch(increament())}>increament</button>

     
    </div> 
  )
}

export default Sample
