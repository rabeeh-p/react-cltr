import React, { useCallback, useState } from 'react'

// function Child({ handleClick }) {
//     console.log("Child re-rendered");
//     return <button onClick={handleClick}>Click me</button>;
//   }

const Child = React.memo(({ handleClick }) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click me</button>;
});

const Callback = () => {
    const [count, setCount] = useState(0);
    const [sampel, setSample] = useState(0);


  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h1>hello</h1>
      <Child handleClick={handleClick} />
      <p>Count: {count}</p>

      <h1>{sampel}</h1>
      <button onClick={()=>setSample(sampel+1)}>increse</button>
    </div>
  )
}

export default Callback
