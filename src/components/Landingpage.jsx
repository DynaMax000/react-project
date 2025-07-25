import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


function Landingpage() {
  return (
    <div className='w-full h-screen'>
      <div className='textstructure  px-20 py-4 mt-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
          return (
            <div key={index} className='masker'>
              <div className='w-fit flex items-end'>
              {index === 1 && <div className='bg-red-300 w-[8vw] h-[4.8vw] mr-[1vw] mb-[1vw] relative top-[.3vw] rounded-sm'></div>}
                <h1 className='text-[7vw] leading-[7vw] uppercase font-["Founders_Grotesk"] text-white font-semibold'>{text}</h1>
              </div>
            </div>
          )
        })}
      </div>

      <div className='border-t-2 flex justify-between px-20 py-5 border-zinc-700 mt-8'>
        {["For public and private companies", "From the first pitch to IPO"].map((text, index) => {
          return (
            <p key={index} className='text-white'>{text}</p>
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