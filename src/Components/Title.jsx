import React from 'react'

const Title = ({children, className}) => {
  return (
    <div className='w-full'>
 <div className={`max-w-[700px] text-6xl font-[700] text-[#0a1a2f] text-center mx-auto tracking-wide leading-20 ${className}`}>
      {children}
    </div>
        
    </div>
   
  )
}

export default Title
