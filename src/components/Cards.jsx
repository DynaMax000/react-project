import React from 'react'

function Cards() {
  return (
    <div className='bg-zinc-300 h-screen w-full items-center justify-center flex gap-2 px-20'>
      <div className='w-1/2'>
        <div className='rounded-lg bg-[#004D43] h-[56vh] w-full flex items-center justify-center relative'>
          <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' width='180'></img>
          <button className='absolute left-10 border-[1px] border-[#CDEA68] rounded-full bottom-10 text-[#CDEA68] p-2'>@2019-2025 </button>
        </div>
      </div>
      <div className='w-1/2 flex gap-2'>
        <div className='rounded-lg bg-[#192826] w-full h-[56vh] flex items-center justify-center relative'>
          <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
          <button className='absolute left-10 border-[1px] border-white rounded-full bottom-10 text-white p-2 uppercase'>rating 5.0 on clutch </button>
        </div>
        <div className='rounded-lg bg-[#192826] w-full h-[56vh] flex items-center justify-center relative'>
          <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' width='102'></img>
          <button className='absolute left-10 border-[1px] border-white rounded-full bottom-10 text-white p-2 uppercase'>business bootcamp alumini</button>
        </div>
      </div>
    </div>
  )
}

export default Cards