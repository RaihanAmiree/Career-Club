import React from 'react'

const TitleDark = ({children, className}) => {
  return (
    <div className='w-full'>
 <div className={`max-w-[700px] text-6xl font-[700] text-white text-center mx-auto mt-30 tracking-wide leading-20 ${className}`}>
      {children}
    </div>
        
    </div>
   
  )
}

export default TitleDark
