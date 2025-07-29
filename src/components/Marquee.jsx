import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004D43] relative z-10'>
      <div className='text border-b-2 border-t-2 border-zinc-400 flex whitespace-nowrap overflow-hidden'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity}}
          className='text-[22vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase text-zinc-200 pr-20'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity}}
          className='text-[22vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase text-zinc-200 pr-20'
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee