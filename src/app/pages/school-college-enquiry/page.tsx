import React from 'react'

import BulkEnquiry from '@/components/school-college-enquiry/BulkEnquiry'
import HeroSection from '@/components/school-college-enquiry/Herosection'

const page = () => {
  return (
    <div className='lg:px-16 lg:py-8 px-4 py-2 bg-white space-y-8 w-screen min-h-dvh'>
      <HeroSection />
      <BulkEnquiry />
    </div>
  )
}

export default page
