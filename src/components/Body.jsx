import React from 'react'
import {useState} from 'react'

function Body() {
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
    </div>
  )
}

export default Body
