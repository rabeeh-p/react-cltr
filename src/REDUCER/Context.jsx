import React, { createContext, useState } from 'react';

export const sampleContext = createContext();

const Context = ({ children }) => {
  const hello = 'hello';
  const [name,setName] = useState('rabeeh1')
  const [count,setCount] = useState(100)

  

  return (
    <sampleContext.Provider value={{ hello,name, setName,count, setCount }}>
      {children}
    </sampleContext.Provider>
  );
};

export default Context;
