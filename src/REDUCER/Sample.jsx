import React, { useContext, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament } from './Store';
import { sampleContext } from '../REDUCER/Context'; // Ensure the path is correct

const Sample = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const { hello,name,setName } = useContext(sampleContext); // Accessing 'hello' from context

  console.log(hello, 'hello'); // 'hello' should be printed in console

const initialValue = 1
const reducer1= (state,action)=>{
  if (action === 'increment'){
    return state += 1
  }else{
    return state -= 1
  }

}
  const [value1, setValue] = useReducer(reducer1,initialValue,)

  return (
    <div>
      <h1>hello sample page {count}</h1>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <h2>{hello} to {name} </h2> 
      <button onClick={()=> setName('aju')}>change the name</button>

      <h1>the value{value1}</h1>
      <button onClick={()=>setValue('increment')}>inc</button>
    </div>
  );
};

export default Sample;
