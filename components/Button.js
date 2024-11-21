import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-btnPrimary rounded-full py-3 flex justify-center font-bold pointer uppercase w-fit	px-6 text-lg lg:text-2xl'>
      <span>{text}</span></div>
  )
}

export default Button