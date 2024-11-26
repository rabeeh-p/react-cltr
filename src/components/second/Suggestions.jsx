import React, { useState } from 'react'

const Suggestions = () => {
    const [suggestion, setSuggest] = useState([])
    const [input,setInputValue]= useState('')
    const words = ['hello', 'hai','good']

    const handleClick = (e)=>{

        const input = e.target.value

        setInputValue(input)

        if (input){
            const result = words.filter((item)=>{
                return item.toLocaleLowerCase().includes(input)
            })
            setSuggest(result)
            console.log(suggestion);
            console.log(
                'is wokring'
            );

        }else{
            setSuggest([])
        }



    }

  return (
    <div>
        <h1>suggestion</h1>
        <input type="text" name="" id="" onChange={handleClick} />

        <ul>
            {suggestion.length > 0 && 
                suggestion.map((item)=>{
                    return (
                        <li>{item}</li>
                    )
                }
                    
                )
            }
        </ul>
      
    </div>
  )
}

export default Suggestions
