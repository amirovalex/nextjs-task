import React from 'react';
import Image from 'next/image';
const Section6 = () => {
  return (
    <div className="text-textPrimary bg-teal-light pt-7 pb-7 lg:py-40 px-6 sm:px-10 lg:px-20">
      <div className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-4 gap-6 lg:gap-10">
          <div className="col-span-4 lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Life Changing Medication
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed font-light">
              Wegovy and Ozempic contain semaglutide (a GLP-1) that may be
              prescribed for weight loss if appropriate. It’s a once-weekly shot
              (or daily pill) that works by mimicking your body’s natural hormones,
              tricking your body into thinking you&apos;ve already eaten!
            </p>
          </div>

          <div className="col-span-4 lg:col-span-2 flex flex-col md:grid grid-cols-8 grid-rows-2 gap-6">
            <div className="bg-teal-dark col-span-5 p-6 py-12 rounded-lg shadow-lg flex flex-col items-start relative text-start">
              <h3 className="text-xl font-semibold mb-2">Ozempic®</h3>
              <p className="text-sm mb-4">Semaglutide</p>
              <a className="flex items-start space-x-2">
                <span className='w-2/3 font-bold'>Take the assessment now</span>
                <Image src="/66bcc79f4e174be477153619_pen-ozempic.png" alt="Ozempic" width={30} height={30} className='absolute top-auto right-[10%] bottom-0' />
              </a>
            </div>

            <div className="bg-teal-dark p-6 py-12 col-span-3 rounded-lg shadow-lg flex flex-col items-start relative">
              <h3 className="text-xl font-semibold mb-2">Wegovy®</h3>
              <p className="text-sm mb-4">Semaglutide</p>
              <a className="flex items-start space-x-2">
                <span className='w-2/3 font-bold'>Take the assessment now</span>
                <Image src="/66bcc79f4e174be47715361d_pen-wegovy.png" alt="Ozempic" width={30} height={30} className='absolute top-auto right-[10%] bottom-0' />
              </a>
            </div>

            <div className="bg-teal-dark p-6 py-12 col-span-5 rounded-lg shadow-lg text-center flex flex-col items-start relative">
              <h3 className="text-xl font-semibold mb-2">Semaglutide</h3>
              <p className="text-sm mb-4 w-2/3 text-left">Pills</p>
              <Image src="/medvi-pills.png" alt="Ozempic" width={120} height={120} className='absolute top-auto right-[0%] bottom-0' />
              </div>

            <div className="bg-teal-dark p-6 py-12 col-span-3 rounded-lg shadow-lg text-center flex flex-col items-start relative">
              <h3 className="text-xl font-semibold mb-2">Semaglutide</h3>
              <p className="text-sm mb-4 w-2/3 text-left">Injections</p>
              <Image src="/medvi-injection.png" alt="Ozempic" width={120} height={120} className='absolute top-auto right-[0%] bottom-0' />
              </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row items-center gap-10">
          <div className='w-full flex justify-center relative'>
            <Image
            src={"/medvi-semaglutide.jpeg"}
            fill
            priority
            alt="Ozempic"
            className=" w-full !h-auto !relative  rounded-lg"/>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Unlimited Medical Support
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed font-light">
              With MEDVi, you will not just get prescribed weight loss medication
              and left on your own. Your success is our success. We&apos;re with you
              on every step of your journey and you&apos;ll be guided by board-certified
              doctor support to guarantee you reach your weight loss goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;