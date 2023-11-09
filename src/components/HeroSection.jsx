import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <div className=' max-w-[100vw] w-full h-[60vh] lg:h-[70vh]' >
      <div className="heading text-center ">
        <h1 className=' text-4xl  md:text-6xl  mb-12 font-bold inter mt-20 md:mt-44 bg-gradient-to-r from-white/10 to-white bg-clip-text text-transparent '>
        Discover your new ambition.
        </h1>
        <h3 className=' text-xl md:text-2xl text-gray-800 bg-gradient-to-r from-white/10 to-white  inter' > <span className='text-center px-5' > Your Gateway to Endless Stories and Knowledge</span> </h3>
                 <button className='btn-grad inter mx-auto mt-12 '>
                   EXPLORE
                 </button>

              
         

      </div>


    </div>
  )
}

export default HeroSection