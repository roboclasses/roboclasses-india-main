import TrendBanner from '@/components/trending-blogs/TrendBanner'
import TrendingCarouselFe from '@/components/trending-blogs/TrendingCarouselFe'
import React from 'react'

const page = () => {
  return (
    <div className='lg:px-16 lg:py-8 px-4 py-2 space-y-8 w-screen min-h-dvh'>
      <TrendBanner />
      <TrendingCarouselFe />
    </div>
  )
}

export default page
