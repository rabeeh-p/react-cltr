import React, { createContext, useState } from 'react'

export const sampleContext = createContext()
const ContextApi = ({children}) => {
    const [hai,setHai] = useState('rabeeh12345')
    const[count, setCount] = useState(100)
  return (
    <sampleContext.Provider value={{hai,setHai,count,setCount}}>
      {children}
    </sampleContext.Provider>
    
    
  )
}


export default ContextApi



