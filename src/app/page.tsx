import React from 'react'

import AboutUs from '@/components/AboutUs'
import CarouselFe from '@/components/CarouselFe'
import HeroSection from '@/components/HeroSection'
import CardsSection from '@/components/homeschooling/CardsSection'
import ParentsCorner from '@/components/ParentsCorner'
import RightCourse from '@/components/robotics/RightCourse'
import StudentSpeaks from '@/components/StudentSpeaks'
import TrendingCarouselFe from '@/components/TrendingCarouselFe'


function page() {
  return (
    <div className='px-16 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
     <HeroSection />
     <AboutUs />
     <StudentSpeaks />
     <ParentsCorner />
     <CarouselFe /> 
     <CardsSection />
     <RightCourse />
     <TrendingCarouselFe />
    </div>
  )
}

export default page
