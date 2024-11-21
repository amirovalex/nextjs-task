import React from 'react'

const Section4 = () => {
  return (
    <div className='text-textPrimary bg-teal-light text-center pb-7 lg:pb-30 px-6 sm:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className="box-wrapper flex flex-col md:flex-row gap-6 py-12 :items-stretch">
            <div className='box w-full md:w-1/4 rounded-lg bg-teal-dark flex flex-col items-center justify-center md:justify-start p-6 py-9 min-h-72'>
              <img src="/weight-scale-svgrepo-com.svg" alt="alt" className='w-20 h-20' />
              <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold">18%</h2>
              <p className='text-md sm:text-lg lg:text-xl'>Average fat loss</p> 
            </div> 
            <div className='box w-full md:w-1/4 rounded-lg bg-teal-dark flex flex-col items-center justify-center md:justify-start  p-6 py-9 min-h-72'>
              <img src="/award-svgrepo-com.svg" alt="alt" className='w-20 h-20' />
              <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold">9/10</h2>
              <p className='text-md sm:text-lg lg:text-xl'>Patients say it&apos;s the most effective treatment they&apos;ve ever tried</p> 
            </div> 
            <div className='box w-full md:w-1/4 justify-center md:justify-start  rounded-lg bg-teal-dark flex flex-col items-center p-6 py-9 min-h-72'>
              <img src="/waist-svgrepo-com.svg" alt="alt" className='w-20 h-20' />
              <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold">6.5&quot;</h2>
              <p className='text-md sm:text-lg lg:text-xl'>Average reduction in waist size</p> 
            </div> 
            <div className='box w-full md:w-1/4 justify-center md:justify-start  rounded-lg bg-teal-dark flex flex-col items-center p-6 py-9 min-h-72'>
              <img src="/sema-icon-down-1.png" alt="alt" className='w-20 h-20' />
              <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold">193%</h2>
              <p className='text-md sm:text-lg lg:text-xl'>Patients have kept the weight off for good</p> 
            </div> 
          </div> 
      </div>
    </div>
  )
}

export default Section4