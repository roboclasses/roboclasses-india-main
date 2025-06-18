import { AccordionDemo } from '@/demo/community-demo/AccordianDemo'
import React from 'react'

const EducationNews = () => {
  return (
    <div className='flex flex-col gap-8 items-center lg:p-20 p-10'>
      <div className='flex flex-col text-center gap-2'>
        <p className='lg:text-4xl text-2xl font-bold'>Education news</p>
        <p className='lg:text-sm text-xs font-semibold text-gray-500' style={{ letterSpacing: "0.05em" }} >What’s happening around the world</p>
      </div>
        <AccordionDemo />
    </div>
  )
}

export default EducationNews
