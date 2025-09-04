import React from 'react'

const Titles = ({ title, subTitle, align }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" ? "md:items-start md:text-left" : ""}`}>
      <h1 className='font-semibold text-4xl md:text-[40px]'>{title}</h1>
      {subTitle && (
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-[600px]'>
          {subTitle}
        </p>
      )}
    </div>
  )
}

export default Titles
