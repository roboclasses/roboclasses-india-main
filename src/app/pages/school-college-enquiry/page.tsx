import React from 'react'

import BulkEnquiry from '@/components/school-college-enquiry/BulkEnquiry'
import HeroSection from '@/components/school-college-enquiry/Herosection'

const page = () => {
  return (
    <div className='px-16 py-8  bg-white space-y-8'>
      <HeroSection />
      <BulkEnquiry />
    </div>
  )
}

export default page
