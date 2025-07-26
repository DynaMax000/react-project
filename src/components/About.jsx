import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black font-[Neue_Montreal]'>
      <h1 className='text-[4vw] leading-[3.3vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='border-t-[1px] border-[#8e9a63] w-full mt-20 flex gap-20'>
        <div className='w-1/2'>
          <h1 className='text-[4vw]'>Our Approach :</h1>
          <button className='bg-black p-4 rounded-full text-white flex items-center gap-6 uppercase'>Read More
            <div className='bg-white h-2 w-2 rounded-full'>
            </div>
          </button>
        </div>

        <div className='w-1/2 bg-[#a3a98c] h-[70vh] mt-4 rounded-2xl'>

        </div>
      </div>
    </div>
  )
}

export default About