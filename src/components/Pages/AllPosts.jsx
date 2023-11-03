import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../index'
import postService from "../../appwrite/postconfig";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading , setloading] = useState(true)


    useEffect(() => {
        postService.getPosts().then((post) => {
            if (post) {
                setPosts(post.documents)   
                setloading(false)
                               
            } 
        }) 
    
    }, [])
    
    
     
  return  loading ?  (
     
        <h2>Loading</h2>
      
  ) : (
      
      <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                         
                    </div>
                    
                ))
                
                }
            </div>
            </Container>
    </div>
     
  )
}

export default AllPosts