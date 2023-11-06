import React from 'react'
import logo from "../assets/logo_new.png"
function Logo({width = '500px'}) {
  return (
    <div>
            <img className='w-20' src={logo} alt="" />
    </div>
  )
}

export default Logo