import React from 'react'
import Image from 'next/image'
const Section9 = () => {
  return (
    <div className='tealGradient text-textPrimary py-7 lg:py-30 lg:pb-40 px-6 sm:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className="heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">
          <div className="box-dropdown p-6 bg-teal-dark rounded-lg">
            <div className="dropdown-title pb-6 flex items-center justify-between">
              <p className='heading text-lg sm:text-xl lg:text-2xl text-left'>How much does the program cost?</p>
              <Image src="/arrow-down.svg" alt="alt" width={30} height={30} className='max-h-sm' />
            </div>
            <div className="dropdown-inner items-center justify-between">
              <p className='heading text-md sm:text-lg lg:text-xl text-left mb-4 font-light'>The MEDVi Program costs $149 for your first month with no contract. This cost covers your physician review, full personalized plan, 1:1 guidance, metabolic report, and the cost of the prescription medication (must be shipped cold for $45). Refills are locked in at $299.</p>
            </div>
          </div>
          <div className="box-dropdown p-6 bg-teal-dark rounded-lg">
            <div className="dropdown-title pb-6 flex items-center justify-between">
              <p className='heading text-lg sm:text-xl lg:text-2xl text-left'>How are you responding to medication shortages?</p>
              <Image src="/arrow-down.svg" alt="alt" width={30} height={30} className='max-h-sm' />
            </div>
            <div className="dropdown-inner">
              <p className='heading text-md sm:text-lg lg:text-xl text-left mb-4 font-light'>Our doctors will explore prescribing alternate GLP-1 medications for you, if appropriate - with the same active ingredients as branded Ozempic and Wegovy. Compounded medication is personalized just for you by your doctor using the exact same active ingredients as the expensive branded options and are more readily available.</p>
            </div>
          </div>
          <div className="box-dropdown p-6 bg-teal-dark rounded-lg">
            <div className="dropdown-title pb-6 flex items-center justify-between">
              <p className='heading text-lg sm:text-xl lg:text-2xl text-left'>What if my insurance doesn&apos;t cover the medication?</p>
              <Image src="/arrow-down.svg" alt="alt" width={30} height={30} className='max-h-sm' />
            </div>
            <div className="dropdown-inner">
              <p className='heading text-md sm:text-lg lg:text-xl text-left mb-4 font-light'>While all MEDVi prescriptions are cash-pay, your insurance may reimburse you for branded options. We keep compounded medications fairly priced so no insurance is necessary and you get the same amazing effects as branded medication.</p>
            </div>
          </div>
          <div className="box-dropdown p-6 bg-teal-dark rounded-lg">
            <div className="dropdown-title pb-6 flex items-center justify-between">
              <p className='heading text-lg sm:text-xl lg:text-2xl text-left'>What can I expect after I sign up?</p>
              <Image src="/arrow-down.svg" alt="alt" width={30} height={30} className='max-h-sm' />
            </div>
            <div className="dropdown-inner">
              <p className='heading text-md sm:text-lg lg:text-xl text-left mb-4 font-light'>After you complete your online visit, our doctors will review your answers and determine whether treatment may be right for you. If appropriate, you will be prescribed medication which will be shipped right from the pharmacy to your door.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section9