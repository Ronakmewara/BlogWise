import React from 'react'
import { Link } from 'react-router-dom'
import postService from '../appwrite/postconfig'

function PostCard({post}) {
    
  return (
    
    <Link to={`/post/${post.$id}`}>
        <div className=' h-72 w-64 bg-gray-100 rounded-xl items-center flex justify-center '>
            <div className='justify-center '>
            <img src={postService.getFilePreview(post.featuredImage)} alt={post.title}
                className='rounded-xl object-cover h-56 w-52  ' />
                <h2 className='text-center text-2xl mt-2' >{post.title}</h2>
            </div>
            </div>
    </Link>    
    
  )
}

export default PostCard