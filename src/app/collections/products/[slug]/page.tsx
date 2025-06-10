import CarouselFe from '@/components/CarouselFe'
import Course from '@/components/collections/products/Course'
import Enroll from '@/components/collections/products/Enroll'
import Feature from '@/components/collections/products/Feature'
import HeroSection from '@/components/collections/products/Hero'
import Level from '@/components/collections/products/Level'
import ParentsCorner from '@/components/ParentsCorner'
import Faq from '@/components/robotics/Faq'
import React from 'react'

const page = () => {
  return (
    <div className='lg:px-16 px-4 lg:py-8 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-20 w-screen min-h-dvh'>
      <HeroSection />
      <Feature />
      <Course />
      <Enroll />
      <Level />
      <ParentsCorner />
      <CarouselFe />
      <Faq />
    </div>
  )
}

export default page