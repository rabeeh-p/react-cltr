import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Body() {
  const navigate = useNavigate()
  let [color,setColor] = useState('red')

  let clickedTheButton = ()=>{
    
    if (color === 'red'){
      setColor("yellow")
    }else{
      setColor("red")

    }
    
  }

  return (
    <div>
      <h1>body</h1>
      <div style={{backgroundColor:`${color}`,height:'150px',width:'300px',margin:'0px auto'}}>
        color
      </div>
      <button onClick={clickedTheButton} style={{marginLeft:'700px ',height:'20px',width:'80px',marginTop:'10px'}}>click me</button>
    
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        width: "200px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "20px auto",
      }}
    >
      <a
        onClick={()=>navigate('/usecallback')}
        href=""
        style={{
          textDecoration: "none",
          color: "#007BFF",
          margin: "10px 0",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Callback
      </a>
      <a
        style={{
          textDecoration: "none",
          color: "#007BFF",
          margin: "10px 0",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Use memo
      </a>
      <a
        style={{
          textDecoration: "none",
          color: "#007BFF",
          margin: "10px 0",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        React memo
      </a>
      <a
        style={{
          textDecoration: "none",
          color: "#007BFF",
          margin: "10px 0",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Context API
      </a>
      <a
       onClick={()=>navigate('/suggestion')}
        style={{
          textDecoration: "none",
          color: "#007BFF",
          margin: "10px 0",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Suggestion
      </a>
      <a
       onClick={()=>navigate('/reducer-page')}
        style={{
          textDecoration: "none",
          color: "#007BFF",
          margin: "10px 0",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Reucer page
      </a>
    </div>
    
    
    </div>
  )
}

export default Body
