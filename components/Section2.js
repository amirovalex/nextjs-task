import React from 'react'
import Button from './Button'
import WeightSlider from './WeightSlider'
const Section2 = () => {
  return (
    <div className='text-textPrimary bg-teal-light text-center py-7 lg:py-36 px-6 sm:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
       <div>
        <p className="title text-sm sm:text-md lg:text-lg uppercase pb-6">It's not magic, it's metabolic science.</p>
        <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold">LOSE UP TO 20% OF YOUR BODY WEIGHT IN 3 EASY STEPS</h2>
        </div>
        <div className="box-wrapper flex flex-col md:flex-row gap-6 py-12 sm:items-center">
          <div className='box w-full md:w-1/4 rounded-lg bg-teal-dark flex flex-col items-center justify-center p-6 py-9 min-h-72'>
            <img src="/form-svgrepo-com-2.svg" alt="alt" className='w-20 h-20' />
            <h3 className="subtitle text-lg sm:text-xl lg:text-2xl font-bold">Get Approved</h3>
            <p className='text-md sm:text-lg lg:text-xl font-light'>Take the assessment to get pre-approved instantly</p> 
          </div> 
          <div className='box w-full md:w-1/4 rounded-lg bg-teal-dark flex flex-col items-center justify-center  p-6 py-9 min-h-72'>
            <img src="/medicines-svgrepo-com.svg" alt="alt" className='w-20 h-20' />
            <h3 className="subtitle text-lg sm:text-xl lg:text-2xl font-bold">Get Prescribed</h3>
            <p className='text-md sm:text-lg lg:text-xl font-light'>A Board-Certified MEDVi physician will review your answers</p> 
          </div> 
          <div className='box w-full md:w-1/4 justify-center  rounded-lg bg-teal-dark flex flex-col items-center p-6 py-9 min-h-72'>
            <img src="/medicine-svgrepo-com.svg" alt="alt" className='w-20 h-20' />
            <h3 className="subtitle text-lg sm:text-xl lg:text-2xl font-bold">Get Receive Your RX</h3>
            <p className='text-md sm:text-lg lg:text-xl font-light'>Your prescription will be discreetly delivered right to your door in 3-5 days</p> 
          </div> 
          <div className='w-full md:w-1/4'><WeightSlider/></div> 
        </div> 
          <div className='flex justify-center flex-col items-center'>
            <h2 className="heading py-8 text-2xl sm:text-4xl lg:text-5xl font-bold">Ready to get pre-approved?</h2>
            <Button text={"Take the assesment"}/>
            </div>
      </div>
    </div>
  )
}

export default Section2