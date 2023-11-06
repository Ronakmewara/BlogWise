import React from 'react'
 import topLogo from "../assets/sparkle.png"
 
function Testemonial() {
  return (
    <div className='container mx-auto px-5 md:px-20  my-10 '>
        <h3 className=' ml-3 border-l-4 border-white/60 pl-3 text-2xl md:text-3xl inter font-semibold bg-gradient-to-r from-white/60 mb-12 to-white bg-clip-text  text-transparent ' > What people say </h3>
    <div className=' my-10  p-1 rounded-xl w-full btn-grad1 inter flex flex-col gap-5 justify-center items-center'>
        
        <i  className=" mt-2 fa-solid fa-quote-right text-6xl font-bold text-black "></i>
    
            <div className="text-black">
                <span className=' text-center text-base md:text-lg p-2 max-w-3xl  md:font-semibold inter block' >

            Joining BlogWise has been a game-changer for me. The valuable insights, expert advice, and engaging content have truly enriched my knowledge and perspective. I've found inspiration, learned new skills, and connected with a like-minded community that's as passionate as I am. Whether you're a beginner or an expert in knowledge, this platform is a goldmine of information, and I can't recommend it enough. Thank you for creating such an invaluable resource!
                </span>
            </div>

            <div className="bottom-logo">
            <i  className="fa-solid fa-minus  text-6xl font-bold text-black  "></i>
            </div>
    </div>
    </div>
  )
}

export default Testemonial