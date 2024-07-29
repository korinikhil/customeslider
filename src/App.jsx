import React, { useState } from 'react'
import Slider from './Slider'
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";


const App = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((currEl) => currEl === 0 ? Slider.length - 1 : currEl - 1)


  }
  const next = () => {

    setCurr((currData) => currData === Slider.length - 1 ? 0 : currData + 1)
  }

  return (
    <>
      <h1 className='text-center text-2xl mt-10 text-green-600' >Custom Simple Slider</h1>
      <div className="div overflow-x-hidden relative m-6 md:mx-16 ">
        <div className=''>
          <div className="box flex  transition-transform ease-in-out duration-500  " style={{ transform: `translateX(-${curr * 100}%)` }}>
            {
              Slider.map((e,index) => (
                <>
                  <div key={index} className="min-w-full">
                  <img src={e.img} alt="" />
                  
                  <p className='z-[9999] text-center relative '>{e.des}</p>
                  </div>
                </>
                
              ))
            }
          </div>
          <div className="button absolute inset-0 items-center p-2  flex justify-between ">
            <button className=' bg-gray-200 p-3 rounded-full hover:text-gray-600' onClick={prev}>
              <FaLessThan />
            </button>
            <button className='bg-gray-200 p-3 rounded-full hover:text-gray-600' onClick={next}>
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App