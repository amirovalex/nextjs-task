import React from 'react'
import ImageSlider from './ImageSlider'
const Section5 = () => {
  return (
    <div className='text-textPrimary tealGradient text-center pb-7 lg:pb-40 px-6 sm:px-10 lg:px-20'>
      <div className='max-w-2xl mx-auto'>
        <p className='text-md sm:text-lg lg:text-xl uppercase'>The Results Are In</p>
        <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold">Millions of people have reached their goal weight with GLP-1 medications</h2>
        <div className="rating flex flex-col items-center justify-center py-4">
          <h2 className="heading text-2xl sm:text-3xl lg:text-4xl font-bold">4.86</h2>
          <img src="/rating-1.png" alt="alt" className=' h-8 w-auto' />
          <p>3.4k Reviews</p>
        </div>
      </div>
        <ImageSlider />
    </div>
  )
}

export default Section5