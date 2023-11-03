import { useEffect, useState } from 'react'
 import Header from './components/Header/Header'
 import Footer from './components/Footer/Footer'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import { Outlet } from 'react-router-dom'
import { login, logout } from './store/authSlice'

function App() {
 const [loader, setLoader] = useState(true)
 const dispatch = useDispatch();

 useEffect(()=>{
  authservice.getCurrentUser().then((userData) => {
    if(userData){
      dispatch(login({userData}))
    } else {
        dispatch(logout())
    }
  }).finally(() => setLoader(false))
 },[])

 return !loader ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
       <Outlet />
      </main>
      <Footer />
    </div>
  </div>
) : null
}

export default App