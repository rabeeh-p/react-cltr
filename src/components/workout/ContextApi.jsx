import React, { createContext, useState } from 'react'

export const sampleContext = createContext()
const ContextApi = ({children}) => {
    const [hai,setHai] = useState('rabeeh')
  return (
    <sampleContext.Provider value={{hai,setHai}}>
      {children}
    </sampleContext.Provider>
    
    
  )
}


export default ContextApi



