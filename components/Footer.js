import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className=' text-textPrimary py-7 lg:py-10 lg:pb-20 text-center px-6 sm:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto flex flex-col gap-9'>
        <div className="footer-menu flex gap-3 flex-wrap items-center justify-center">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/privacy-practices">Privacy Practices</Link>
          <Link href="/medical-consent">Medical Consent</Link>
          <Link href="/california-privacy">For California Residents</Link>
          <Link href="/bill-of-rights">Bill of Rights</Link>
        </div>
        <div className="footer-contact-info">
          <p>Email: help@medvi.org | Phone: (323) 690-1564</p>
          <p>Mail: 131 CONTINENTAL DR STE 305, NEWARK, DE 19713</p>    
        </div>
        <div>
          <p>Medical Team</p>
          <p>We are supported by Beluga Health, a team of medical professionals operating across the country and certified in all 50 states to practice medicine. Medical Provider: Beluga Health | Provider: Dr. Jonah Mink | Phone: 618.740.4204 | www.belugahealth.com</p>
          </div>
        <div>
          <p>Pharmacy Providers</p>
          <p>We are partnered with Belmar Pharmacy to bring the best product and overall experience to our membership. We speak with our pharmacies weekly to discuss any product shortages, shipping delays, and get updated reports on their medication testing. Belmar Pharmacy | Phone: 800-525-9473 | belmarpharmasolutions.com</p>
          </div>
          <div>
          <p>*Results vary based on starting weight and program adherence. Inches lost from hips, waist, chest, thighs and arms in the first month.These users exercised daily and ate a reduced-calorie diet. Their fat loss is not typical. Results may vary. Medication prescriptions are at the discretion of medical providers and may not be suitable for everyone. MEDVi typically result in 1-2 lbs per week weight loss in 4 weeks, involving a healthy diet and exercise changes. Consult a healthcare professional before using medication or starting any weight loss program.*Based on the average weight loss in three 68-week clinical trials of patients without diabetes who reached and maintained a dose of 2.4 mg/week of GLP-1 treatment, along with a reduced-calorie diet and increased physical activity. <a href="/privacy" className='font-bold underline'>See details.</a></p>
          <p>‍Medication is included in the cost of the MEDVi Program. Wegovy® is FDA-approved for weight loss. Ozempic® is FDA-approved for type 2 diabetes treatment but may be prescribed for weight loss. The trademarks, service marks, trade names (Wegovy® ,Ozempic®), and products displayed on this Internet site are protected and belong to their respetive owners. Medical treatment is provided by “CareGLP Affiliated P.C.s,” an affiliated network for medical professional corporations and associations.</p>
        </div>
        <div className='flex justify-center align-center gap-6'>
          <Image src="/33864012.png" alt="alt" width={150} height={150} className='max-h-sm' />
          <Image src="/33864012 (1).png" alt="alt" width={150} height={150} className='max-h-sm' />
        </div>
      </div>
    </div>
  )
}

export default Footer