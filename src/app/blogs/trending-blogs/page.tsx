import TrendBanner from '@/components/trending-blogs/TrendBanner'
import TrendingCarouselFe from '@/components/trending-blogs/TrendingCarouselFe'
import React from 'react'

const page = () => {
  return (
    <div className='px-20 py-8  bg-white space-y-8'>
      <TrendBanner />
      <TrendingCarouselFe />
    </div>
  )
}

export default page
