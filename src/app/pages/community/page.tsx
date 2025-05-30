import React from 'react'

import Competition from '@/components/community/Competition'
import EducationNews from '@/components/community/EducationNews'
import HeroSection from '@/components/community/HeroSection'
import CarouselFe from '@/components/CarouselFe'
import TrendingCarouselFe from '@/components/TrendingCarouselFe'

const page = () => {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <HeroSection />
      <TrendingCarouselFe />
      <CarouselFe />
      <Competition />
      <EducationNews />
    </div>
  )
}

export default page
