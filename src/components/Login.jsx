import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authservice from '../appwrite/auth';
import {Button, Input, Logo ,} from '../components/index'
import {login as authlogin} from '../store/authSlice'
 import { Link } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const [error, seterror] = useState("");

    const login = async(data) => {
            seterror("");
            try {
                const session =  await authservice.login(data)
                if(session){
                    const userData = await authservice.getCurrentUser()
                    if(userData)
                        dispatch(authlogin(userData));
                    navigate("/")  
                    
                }
            } catch (error) {
                seterror(error.message)
            }
    }


  return (
    <div className='flex items-center justify-center w-full '>
          <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center"> 
          <span className="inline-block w-full max-w-[100px]">
                         <Logo width='100%' />
                    </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className="space-y-5">
                <Input
                label = "Email : "
                placeholder = "Enter Your Email"
                type = "email"
                {...register("email" , {
                    required:true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label = "Password : "
                placeholder = "Enter Your Password"
                type = "password"
                {...register("password" , {
                    required:true,

                })}

                />
                <Button
                className='w-full'
                type='submit'

                >
                    Sign in
                </Button>
                
            </div>

        </form>
         </div>
         
    </div>
  )
}

export default Login