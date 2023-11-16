
import React, { useState } from 'react'
import { Container, Logo , LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
 
function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate();
    const [mobileNav, setmobileNav] = useState()

    const navItems = [
        {
            name:'Home',
            url: "/",
            active:true
        },
       
        {
            name:'Signup',
            url: "/signup",
            active:!authStatus
        },
        {
            name:'All Post',
            url: "/all-posts",
            active:authStatus
        },
        {
            name:'Add Post',
            url: "/Add-post",
            active:authStatus
        },
           
          
        {
            name:'Login',
            url: "/login",
            active:!authStatus
        },  
    ]
  return (
    <header className='py-3 shadow text-white   '>
        <Container> 
            <nav className='md:flex items-center h-16 hidden ' >
                <div className="mr-4">
                    <Link to= "/" >
                        <Logo width='70px'/>
                    </Link>
                </div>
                <ul className='flex ml-auto font-semibold text-base items-center inter'>
                {
                                    userData && (
                                        <li className=' opacity-60' >
                                          welcome {userData.name}
                                        </li>
                                    )
             }
                    {
                        navItems.map((item) =>  item.active ?
                         (
                            <li key={item.name}>
                                
                               

                                    <button className='inline-block px-6 py-2 duration-200 hover:bg-white/10 rounded-xl' onClick={() => navigate(item.url)} >
                                        {item.name}
                                    </button>
                                 
                            </li>
                         ) 
                         : null)
                    }  
                  
                    {
                        authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                    }               
                </ul>
            </nav>
            <nav className='md:hidden ' >
                <div className="mr-4">
                </div>
                <div className='flex justify-between duration-200 px-5'>
                <Link to= "/" >
                        <Logo width='70px'/>
                    </Link>
                     <button onClick={() => setmobileNav(!mobileNav)} >{ !mobileNav ?  (<i  className="fa-solid fa-bars font-bold text-2xl "></i>) : (<i  className="fa-solid font-bold text-2xl fa-xmark"></i>)} </button>
                </div>
               {  mobileNav && <ul className='flex flex-col gap-3 justify-center items-center ml-auto font-semibold text-base inter'>
                 
                    {
                        navItems.map((item) =>  item.active ?
                         (
                            <li key={item.name}>
                                
                               

                                    <button className='inline-block px-6 py-2 duration-200 hover:bg-white/10 rounded-xl' onClick={() => {navigate(item.url); setmobileNav(false)}} >
                                        {item.name}
                                    </button>


                                 
                            </li>

                         ) 
                         : null)
                    }  
                            {
                                    userData && (
                                        <li>
                                            {userData.name}
                                        </li>
                                    )
                            }

                    {
                        authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                    }               
                </ul>}
            </nav>
        </Container>
    </header>
  )
}

export default Header