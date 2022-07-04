import React from 'react'
import { useState } from 'react'
export default function BMI() {
  const [value , setValue] = useState("😊")
  const [Weight, setWeight] = useState("")
  const [height, setheight] = useState("")

  const Calculate =()=>{
    setValue((Weight/height/height*10000).toFixed(1))
  }
  const onChange = (e)=>{
    setWeight(e.target.value)
  }
  const onChangeheight = (e)=>{
    setheight(e.target.value)
  }

  return (
    <>
    <div className="navbar">
       <h1>BMI Calculator</h1> 
    </div>
    <div className="section">

    <div className="mainSection">
        <label htmlFor="#">Enter your Weight <span>(kg)</span></label>
        <input type="text" placeholder='Enter Your Weight' value={Weight} onChange={onChange} />

        <label className='heading' htmlFor="#">Enter your Height <span>(cm)</span></label>           
        <input type="text" value={height} onChange={onChangeheight} placeholder='Enter Your Height' />

        <button className='btn' onClick={Calculate}> Calculate BMI</button>
        <h3>Your BMI : {value}</h3>
    </div>
    

    </div>
    </>
  )
}
