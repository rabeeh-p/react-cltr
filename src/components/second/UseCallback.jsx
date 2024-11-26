import React, { useCallback, useState } from 'react'
import Callback from '../workout/Callback';

const NewComponent = React.memo(({calbackSample})=>{
  console.log('new component working');
  
  return (
    <div>
      <button onClick={calbackSample}>increment</button>
    </div>
  )
})
const NewComponent2 = ({calbackSample})=>{
  console.log('new component2 working');
  
  return (
    <div>
      <button onClick={calbackSample}>increment</button>
    </div>
  )
}

const UseCallback = () => {
  const [sample,setSample] = useState(1)
  const [name,setName] = useState('rabeeh')

  const calbackSample = useCallback(()=>{
    console.log('is working call back2');
    setSample(sample+1)
    
  },[sample])
  const Callback2 = ()=>{
    setName('aju')

  }

 
  return (


    <div>
      <h1>callback</h1>
      <h3>{sample}</h3>
      <h3>{name}</h3>
      <NewComponent calbackSample={calbackSample}/>
      <NewComponent2 calbackSample={Callback2}/>

      
    </div>
  )
}

export default UseCallback
