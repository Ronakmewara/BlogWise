import React, { useCallback, useEffect } from 'react'
import {Button , Input , Loader, RTE , Select} from '../index'
import postService from '../../appwrite/postconfig'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'



function PostForm({post}) {

        const [posting, setposting] = useState(false)
    const{register , handleSubmit, watch , setValue , control ,getValues} = useForm({
        defaultValues : {
            title: post?.title || '',
            slug: post?.slug || '',
            content : post?.content || '',
            status : post?.status || 'active',
        }
    })

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);


    const submit = async(data) => {
                setposting(true);
       
        if(post){
                 const file =  data.image[0] ? await postService.uploadFile(data.image[0]) : null

                 if(file){
               
                     
                    postService.deleteFile(post.featuredImage)
                 }

                 const dbPost = await postService.updatePost(post.$id , {
                    ...data , featuredImage : file ? file.$id  : undefined
                 });
                 if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                 }

        }
        else {

            const file =  await postService.uploadFile(data.image[0])

            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;

                const dbPost = await postService.createPost({
                    ...data ,
                    userId : userData.$id,

                });
                if (dbPost) {
                     
                    navigate(`/post/${dbPost.$id}`);
                    setposting(false)
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {

            if(value && typeof value === 'string')
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

            return "";
    },[]);

    useEffect(() => {
            const subscription = watch((value ,{name}) => {
                      if(name === 'title'){
                        setValue('slug' , slugTransform(value.title, {
                            shouldValidate:true
                        }))
                      }  
            })

                return () => {
                    subscription.unsubscribe()
                } 
            },[watch , slugTransform , setValue])
  return (
    <>
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap relative ">
            <div className="md:w-2/3 w-full px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    labelColor = "text-white"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    labelColor = "text-white"
                    
                   {...register("slug", { required: true })}
                   onInput={(e) => {
                       setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                    />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="md:w-1/3 w-full px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    labelColor = "text-white"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                    />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={postService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                            />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    labelColor = "text-white"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full ">
                    {post ? "Update" : "Submit"}
                </Button>
                {
                    posting &&
                    <Loader className='mt-5'/>
                }
            </div>
        </form>
        {post && (
            <span className=' absolute top-24 left-28 text-black bg-amber-600 rounded-xl p-1 ' >
                Please Update title to generate the slug
            </span>
        )}
         
                </>
  )
}

export default PostForm