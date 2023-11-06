import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import {Container , PostForm} from '../index'
import postService from '../../appwrite/postconfig';

function EditPost() {

    const navigate = useNavigate();
    const {slug} = useParams();
    const [post, setpost] = useState(null)

    useEffect(() => {
            if(slug){
                postService.getPost(slug).then((post) => {
                    if(post){
                        setpost(post)
                    }
                })
            } else {
                navigate("/")
            }
    },[slug , navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
    }
    
    export default EditPost