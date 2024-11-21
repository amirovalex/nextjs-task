import React from 'react'
import Button from './Button'
import Image from 'next/image'
const Section8 = () => {
  return (
    <div className='text-textPrimary py-7 lg:py-30 lg:pb-40 px-6 sm:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>

      <div>
        <div className='flex flex-col items-center pb-12'>
          <img src="/award-svgrepo-com-2.svg" alt="alt" width={100} height={100} className='max-h-sm' />
          <h2 className='heading pb-8 text-2xl sm:text-4xl lg:text-5xl font-bold max-w-2xl text-center'>GET RESULTS OR YOUR MONEY BACK</h2>
          <p className='text-md sm:text-lg lg:text-xl'>We&apos;re so confident in our program, we guarantee you&apos;ll lose weight - or your money back.</p>
        </div>
      </div>
      <div className='flex flex-col gap-3 md:grid md:grid-cols-5 md:grid-rows-1 gap-4'>
      <div className='col-span-3 flex items-center justify-center relative'>
          <Image
          src={"/GLP1_group2.jpg"}
          fill
          priority
          alt="GLP1_group2"
          className=" w-full !h-auto !relative"/>
        </div>
        <div className='card flex flex-col rounded-xl col-span-2 h-full'>
          <h3 className="subtitle bg-teal-light p-3 rounded-t-xl text-center text-xl font-bold">Get Started For Just $149</h3>
          <div className="card-inner flex flex-col gap-3 rounded-b-xl bg-stone-100 p-6 pb-6 h-full">
          <h2 className="title text-center text-2xl pb-3 font-bold">The most effective weight loss program <em>is yours</em></h2>
          <p className='pb-6 text-xl'>What&apos;s included?</p>
          <div className="flex flex-col gap-3 lg:gap-6 h-full justify-evenly">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex-shrink-0 relative">
              <Image src={"/Asset-6.svg"} fill alt="Icon" />
            </div>
            <p className="flex-1 text-xl">Access to Ozempic®, Wegovy® and other GLP-1 medicine</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex-shrink-0 relative">
              <Image src={"/Asset-5.svg"} fill alt="Icon" />
            </div>
            <p className="flex-1 text-xl">No insurance required</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex-shrink-0 relative">
              <Image src={"/Asset-4.svg"} fill alt="Icon" />
            </div>
            <p className="flex-1 text-xl">1:1 doctor support</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex-shrink-0 relative">
              <Image src={"/Asset-3_1.svg"} fill alt="Icon" />
            </div>
            <p className="flex-1 text-xl">Personalized guidance</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex-shrink-0 relative">
              <Image src={"/Asset-2_1.svg"} fill alt="Icon" />
            </div>
            <p className="flex-1 text-xl">Metabolic report</p>
          </div>
          </div>
          <div className="ml-auto mr-auto">
            <Button text={"Start Now - $149"}/>
          </div>
          <p className='text-center'>Medication is included in the cost of the MEDVi Program.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Section8