import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className=' px-6 sm:px-10 lg:px-20 bg-teal-light text-textPrimary flex justify-center'>
      <div className='max-w-7xl flex flex-col md:flex-row md:items-center'>
        <div className='py-7 lg:py-24 w-full flex flex-col align-top'>
            <p className='text-sm sm:text-md lg:text-lg pb-6'>Join 500,000+ weight loss patients</p>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl pb-6 font-bold text-wrap'>Weight loss is finally easy with a prescription to GLP-1 medication</h1>
            <div className='pb-6 flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                
                <img src="/Asset-3.svg" className='max-w-lg w-5 h-5' alt="alt" />
                <p className='text-lg sm:text-xl lg:text-2xl'>Lose pounds of body fat per week</p>
              </div>
              <div className='flex items-center gap-2'>
              <img src="/Asset-2.svg" className='max-w-lg w-5 h-5' alt="alt" />
                <p className='text-lg sm:text-xl  lg:text-2xl'>Get access to Ozempic®, Wegovy® and other GLP-1 medications</p>
              </div>
              <div className='flex items-center gap-2'>
              <img src="/Asset-1.svg" className='max-w-lg w-5 h-5' alt="alt" />
                <p className='text-lg sm:text-xl lg:text-2xl'>Get approved in minutes, no insurance required</p>
              </div>
            </div>
            <div className='flex justify-center sm:justify-start'>
              <Button text={"Take the assesment"}/>
            </div>
        </div>
        <div className='w-full flex justify-center relative'>
          <Image
          src={"/heromed-01.png"}
          fill
          priority
          alt="Heromed"
          className=" w-full !h-auto !relative"/>
        </div>
      </div>
    </div>
  )
}

export default Section1