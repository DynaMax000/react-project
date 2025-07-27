import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-2 pb-10 border-zinc-600'>
        <h1 className='text-white text-[6vh] tracking-tight font-["Neue_Montreal"]'> Featured Section
        </h1>
      </div>
      <div className='cards px-20 mt-20 flex gap-5 w-full'>
        <div className='w-1/2'>
          <h1 className='text-white text-[3vh] tracking-tight font-["Neue_Montreal"] mb-7'>• Salience Labs</h1>
          <div className='cardcontainer relative h-[75vh]'>
            <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Founders_Grotesk"] text-[20vh] z-[9] tracking tighter leading-none'>
              {"Branding".split("").map((char, index) => {
                return (
                  <span>{char}</span>
                );
              })}
            </h1>
            <div className='rounded-xl overflow-hidden w-full h-full'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png'></img>
            </div>
            <div className='flex gap-3'>
              <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>brand identity</button>

              <button type='submit' className='bg-white px-3 py-1 border-2 border-black uppercase mt-3 rounded-full'>pitch deck</button>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <h1 className='text-white text-[3vh] tracking-tight font-["Neue_Montreal"] mb-7'>• Cardboard Spaceships</h1>

          <div className='cardcontainer relative h-[75vh]'>
            <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Founders_Grotesk"] text-[20vh] z-[9] tracking tighter leading-none'>
              {"Double".split("").map((char, index) => {
                return (
                  <span>{char}</span>
                );
              })}
            </h1>
            <div className='rounded-xl overflow-hidden  w-full h-full'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png'></img>
            </div>
          </div>
          <div className='flex gap-3'>
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