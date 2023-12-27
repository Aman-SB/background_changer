import React, { useState } from 'react'

let colorArray = ["red" , "blue" , "black" , "grey" , "green"];

const App = () => {

  const [cgcolor,setCgColor] = useState("");

  const handleColor = (color) => {
    setCgColor(color);
  }

  return (
      <div className='flex h-screen w-full justify-center bg-[orange] text-white' style={{backgroundColor : cgcolor}}>
        <div className='fixed flex justify-center bottom-12 inset-x-0 p-4 rounded-lg'>
            {
              colorArray.map((color,index) => <button key={index} className={`bg-[cgcolor] rounded-md p-4 m2`} onClick={() => handleColor(color)}>
                {color}
              </button>)
            }
        </div>
      </div>
  )
}

export default App;
