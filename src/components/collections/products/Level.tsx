import RoundedButton from '@/demo/button-demo/RoundedButton'
import React from 'react'

const Level = () => {
  return (
    <div className='flex flex-col gap-6 lg:px-20 px-10'>
        <h1 className='text-4xl font-extrabold'>Completed Level 1 already?</h1>
        <p className='font-medium'>Learn more about other levels</p>
        <div className='mt-2'>
        <RoundedButton name='Level 2' type='button'/>
        </div>
    </div>
  )
}

export default Level