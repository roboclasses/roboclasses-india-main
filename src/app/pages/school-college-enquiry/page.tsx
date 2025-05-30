import React from 'react'

import BulkEnquiry from '@/components/school-college-enquiry/BulkEnquiry'
import HeroSection from '@/components/school-college-enquiry/Herosection'

const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection />
      <BulkEnquiry />
    </div>
  )
}

export default page
