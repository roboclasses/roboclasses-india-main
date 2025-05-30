import TrendBanner from '@/components/trending-blogs/TrendBanner'
import TrendingCarouselFe from '@/components/trending-blogs/TrendingCarouselFe'
import React from 'react'

const page = () => {
  return (
    <div className='px-20 py-8 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] bg-slate-100 space-y-8'>
      <TrendBanner />
      <TrendingCarouselFe />
    </div>
  )
}

export default page
