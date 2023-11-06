import { useEffect, useState } from 'react'
 import Header from './components/Header/Header'
 import Footer from './components/Footer/Footer'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import authservice from './appwrite/auth'
import { Outlet, useNavigate } from 'react-router-dom'
import { login, logout } from './store/authSlice'

function App() {
 const [loader, setLoader] = useState(true)
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const authStatus = useSelector((state) => state.auth.status)
  useEffect(()=>{
    authservice.getCurrentUser().then((userData) => {
      if(userData){
        
        dispatch(login({userData}))
      } else {
          dispatch(logout())
      }
    }).finally(() => setLoader(false))}
  ,[navigate, authStatus ])

 return !loader ? (
  <div className='min-h-screen flex background flex-wrap content-between '>
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