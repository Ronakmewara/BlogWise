import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authservice  from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
       authservice.logout().then(()=> {
        dispatch(logout())
       })
    }

  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-300  bg-blue-500 rounded-lg text-white hover:bg-blue-200 hover:text-black  '>
        Logout
    </button>
  )
}

export default LogoutBtn