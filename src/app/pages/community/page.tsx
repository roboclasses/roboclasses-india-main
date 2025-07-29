import React from 'react'

import Competition from '@/components/community/Competition'
import EducationNews from '@/components/community/EducationNews'
import HeroSection from '@/components/community/HeroSection'
import CarouselFe from '@/components/CarouselFe'
import TrendingCarouselFe from '@/components/TrendingCarouselFe'

const page = () => {
  return (
    <div className='lg:px-16 lg:py-8 px-4 py-2 space-y-8 w-screen min-h-dvh'>
      <HeroSection />
      <TrendingCarouselFe />
      <CarouselFe />
      <Competition />
      <EducationNews />
    </div>
  )
}

export default page
