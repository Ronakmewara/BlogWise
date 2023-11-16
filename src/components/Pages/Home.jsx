import React, { useEffect, useState } from 'react'
 import {Container , Loader, PostCard} from '../index'
import postService from '../../appwrite/postconfig'
import HeroSection from '../HeroSection'
import HomepageCards from '../HomepageCards'
import Testemonial from '../Testemonial'
  
function Home() {

    const [posts, setposts] = useState([])

             

    useEffect(() => {
            postService.getLimitedPosts().then((posts) => {
                if(posts){  
                     
                    setposts(posts.documents)
                }
            })
    },[])

 
    if (posts.length === 0) {
        return (
            <div className=" flex justify-center items-center w-full py-8 mt-4 text-center">
                
                     
<Loader/>

                
            </div>
        )
    }
    return (
        <>
        <HeroSection/>
                    <HomepageCards/>
        <div className='w-full container px-5 md:px-20 mx-auto  py-8'>


             <div className=' ml-3 pl-4 border-l-4 border-white/60' >
                <h3 className=' text-3xl md:text-4xl bg-gradient-to-r from-white/60 mb-10 to-white bg-clip-text text-transparent font-bold ml-4 ' > Top Stories</h3>
             </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2  '>
                            <PostCard post = {post}   />
                        </div>
                    ))}
                </div>
            
        </div>
        <Testemonial/>
 </>
    )
}

export default Home