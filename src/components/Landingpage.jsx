import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


function Landingpage() {
  return (
    <div className='w-full h-screen'>
      <div className='textstructure  px-20 py-4 mt-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
          return (
            <div className='masker'>
              <h1 className='text-[7vw] mt-17 leading-[1vw] uppercase font-["Founders Grotesk"] text-white -tracking-[8px] font-semibold'>{text}</h1>
            </div>
          )
        })}
      </div>

      <div className='border-t-2 flex justify-between px-20 py-5 border-zinc-700 mt-32'>
        {["For public and private companies", "From the first pitch to IPO"].map((text, index) => {
          return (
            <p className='text-white'>{text}</p>
          )
        })}

        <div className='start flex items-center gap-2'>
          <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-white text-md'>
            <p className='text-white uppercase'>Start the project</p>
          </div>
          <div className='w-10 h-10 items-center justify-center flex border-[1px] border-zinc-400 rounded-full text-2xl text-white'>
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage