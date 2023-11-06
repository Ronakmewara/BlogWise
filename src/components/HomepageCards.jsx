import React from 'react'
import handlogo from '../assets/relationship.png'
import sparkle from '../assets/sparkle.png'
function HomepageCards() {
  return (
    <div className='container mx-auto mt-20 px-5 md:px-20'>
        <h3 className=' ml-3 border-l-4 border-white/60 pl-3 text-2xl md:text-3xl inter font-semibold bg-gradient-to-r from-white/60 mb-10 to-white bg-clip-text text-transparent ' > Why choose BlogWise </h3>
    <div className=' mb-12  inter flex flex-row gap-3 flex-wrap justify-between '>
        <div className='card mx-auto h-[22rem] max-w-[300px] btn-grad w-full p-4 flex flex-col gap-5  border-2 border-white/25 rounded-xl' >
                <div className="logo">
                <i  className="fa-regular fa-face-smile text-4xl text-black "></i>
                </div>
                <div className="heading">
                 <span className='  text-xl md:text-2xl font-semibold inter' >    User Engagement</span> 
                </div>
                <div className="desc">
                        <span>
                        By integrating your blog content, you provide visitors with more reasons to stay on your landing page, engage with your brand, and explore valuable information, which can lead to higher conversion rates.
                        </span>
                </div>      
        </div>
        <div className='card h-[22rem]  mx-auto max-w-[300px] btn-grad w-full p-4 flex flex-col gap-5  border-2 border-white/25 rounded-xl' >
                <div className="logo  w-12 mx-auto">
                    <img className='' src={handlogo} alt="" />
                </div>
                <div className="heading">
                 <span className=' text-xl md:text-2xl font-semibold inter' > Trust and Credibility</span> 
                </div>
                <div className="desc">
                        <span>
                        Showcasing your well-researched and informative blog posts on your landing page demonstrates your expertise and authority in your field, instilling trust and credibility in your visitors.
                        </span>
                </div>      
        </div>
        <div className='card mx-auto h-[22rem] max-w-[300px] btn-grad w-full p-4 flex flex-col gap-5  border-2 border-white/25 rounded-xl' >
                <div className="logo  w-12 mx-auto">
                <img className='' src={sparkle} alt="" />
                </div>
                <div className="heading">
                 <span className='  text-xl md:text-2xl font-semibold inter' >Improved Aesthetics</span> 
                </div>
                <div className="desc">
                        <span>
                        Leveraging your blog's design elements, such as typography and visuals, can enhance the overall look and feel of your landing page, making it more visually appealing and user-friendly.
                        </span>
                </div>      
        </div>
         

    </div>
    </div>
  )
}

export default HomepageCards