import React, { useContext, useMemo, useState } from 'react'
import {sampleContext} from './ContextApi';

const Memo = () => {
    const [count, setCount] = useState(0);
    const [sample, setSample] = useState(0);

    const{hai,setHai} = useContext(sampleContext)
    console.log(hai,'looo');
    
    
    const expensiveValue = useMemo(() => {
        console.log('Expensive calculation');
        return count * 2;
      }, [count]);

    const hello =()=>{
        console.log('hello is worked');
         
    }
    hello()
  return (
    <div>
        <h1>memo</h1>
        <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Expensive Value: {sample}</p>
      <button onClick={() => setSample(sample + 1)}>Increment</button>
      
    </div>
  )
}

export default Memo
