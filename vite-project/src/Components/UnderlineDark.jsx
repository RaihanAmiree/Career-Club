import React from 'react'

const UnderlineDark = (props) => {
  return (
    <div className="inline-block group">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-3">
              {props.title}
            </h2>
            <div className="h-1 w-24 bg-white mx-auto rounded-full transition-all duration-300 group-hover:w-36"></div>
          </div>
  )
}

export default UnderlineDark
