import React, { createContext, useState } from 'react';

export const sampleContext = createContext();

const Context = ({ children }) => {
  const hello = 'hello';
  const [name,setName] = useState('rabeeh')

  return (
    <sampleContext.Provider value={{ hello,name, setName }}>
      {children}
    </sampleContext.Provider>
  );
};

export default Context;
