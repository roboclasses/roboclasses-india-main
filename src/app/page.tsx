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
    <div className='lg:px-16 px-4 lg:py-8 py-2 space-y-8 w-screen min-h-dvh'>
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
