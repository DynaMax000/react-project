import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full -mt-43 py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
      <div className='text border-b-2 border-t-2 border-zinc-400 flex whitespace-nowrap overflow-hidden gap-10'>
        <h1 
          className='text-[22vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase text-zinc-200'
        >
          WE ARE OCHI
        </h1>
        <h1 
          className='text-[22vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase text-zinc-200'
        >
          WE ARE OCHI
        </h1>
      </div>
    </div>
  )
}

export default Marquee