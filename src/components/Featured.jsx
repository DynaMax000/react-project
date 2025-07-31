import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { useState } from 'react';

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  
  const handleHover = (index) => {
    cards[index].start({
      y: "0"
    })
  }

  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%"
    })
  }


  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-2 pb-10 border-zinc-600'>
        <h1 className='text-white text-[6vh] tracking-tight font-["Neue_Montreal"]'> Featured Section
        </h1>
      </div>
      <div className='cards px-20 mt-20 flex gap-5 w-full'>
        <div className='w-1/2'>
          <h1 className='text-white text-[3vh] tracking-tight font-["Neue_Montreal"] mb-7'>• Salience Labs</h1>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className='cardcontainer relative h-[75vh]'>
            <h1 className='absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Neue_Montreal"]  text-[20vh] z-[9] tracking-tighter overflow-hidden'>
              {"Branding".split("").map((char, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                    className='inline-block'>
                    {char}
                  </motion.span>
                );
              })}
            </h1>
            <div className='rounded-xl overflow-hidden w-full h-full'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png'></img>
            </div>
            <div className='flex gap-3 text-black'>
              <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>brand identity</button>

              <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>pitch deck</button>
            </div>
          </motion.div>
        </div>
        <div className='w-1/2'>
          <h1 className='text-white text-[3vh] tracking-tight font-["Neue_Montreal"] mb-7'>• Cardboard Spaceships</h1>

          <motion.div
            className='cardcontainer relative h-[75vh]'
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}>
            <h1 className='absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Neue_Montreal"] text-[20vh] z-[9] tracking-tighter overflow-hidden'>
              {"Double".split("").map((char, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                    className='inline-block'>
                    {char}
                  </motion.span>
                );
              })}
            </h1>
            <div className='rounded-xl overflow-hidden w-full h-full'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png'></img>
            </div>
          </motion.div>
          <div className='flex gap-3 text-black'>
            <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>branded template</button>
            <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>sales deck</button>
            <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>social media templates</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured