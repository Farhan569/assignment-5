import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <div className='flex h-[80%] '>
        <div className='w-1/2 flex flex-col justify-center items-start m-44'>
          <h1 className='text-[40px] font-bold w-[496px] my-12'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className='text-3xl text-[#787054]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className='bg-[#A29875] text-white text-3xl p-[10px] rounded-[10px] w-[288px] h-[58px] my-12'>Explore Now</button>
        </div>
        <div className='w-1/2 flex justify-center items-center my-[198px]'>
          <Image
            src={"/images/Figma.svg"}
            alt="image"
            width={462}
            height={647}
            />
        </div>
      </div>
    </div>
  )
}

export default Homepage
