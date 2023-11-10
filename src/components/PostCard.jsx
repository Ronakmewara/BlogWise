import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import postService from '../appwrite/postconfig'
import  parse  from 'html-react-parser';
 
function PostCard({post}) {
    
 


  return (
    

    <Link to={`/post/${post.$id}`}>
      
<div  className=" max-w-[300px] lg:max-w-[340px] max-h-[500px] btn-grad1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <img  className="rounded-t-lg h-60 w-full object-cover " src={postService.getFilePreview(post.featuredImage)} alt={post.title} />

    <div  className="p-5">
        
            <h5  className="mb-2 max-w-full  text-xl md:text-2xl font-bold tracking-tight text-gray-900 text-black">{post.title}</h5>
        
        <div  className="mb-3  limited font-normal w-full h-12  text-gray-700 text-black">{parse(post.content)}</div>
        <p  className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darsk:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
              
        </p>
    </div>
</div>


       
    </Link>    
    
  )
}

export default PostCard