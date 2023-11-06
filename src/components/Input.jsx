import React, { useId } from 'react'

 const Input = React.forwardRef (function Input({
    label ,
    type = "text",
    className = "",
    labelColor = " ",
    ...props
}, ref) {
 const id = useId();

  return (
    <div className='w-full' >
        {
         label && <label
         className={`inline-block inter ${labelColor} mb-1 pl-1`}
         htmlFor={id}
         >
                {label}
         </label>
        }
        <input type={type} className= {`px-3 py-2   rounded-lg bg-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        id={id}
        ref={ref}
        />     
              
    </div>

  )
})

export default Input