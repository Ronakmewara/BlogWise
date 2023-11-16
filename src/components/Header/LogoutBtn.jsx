import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authservice  from '../../appwrite/auth'
import { useState } from 'react'

function LogoutBtn() {
    const dispatch = useDispatch()
const [loading, setloading] = useState(false)

    const logoutHandler = () => {
        setloading(true);

       authservice.logout().then(()=> {
        dispatch(logout())
       })
    }

  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-300  bg-blue-500 rounded-lg text-white hover:bg-blue-200 hover:text-black  '>
      {
        loading ? "Logging out .." :  "Logout"
      } 
    </button>
  )
}

export default LogoutBtn