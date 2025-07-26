import React from 'react'
import { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', (e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      // // Calculate rotation for left eye
      // const leftEyeX = window.innerWidth / 2 - 100; // Adjust based on eye position
      // const leftEyeY = window.innerHeight / 2;
      // const deltaXLeft = mouseX - leftEyeX;
      // const deltaYLeft = mouseY - leftEyeY;
      // const angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
      // setRotateLeft(angleLeft - 180);

      // // Calculate rotation for right eye
      // const rightEyeX = window.innerWidth / 2 + 100; // Adjust based on eye position
      // const rightEyeY = window.innerHeight / 2;
      // const deltaXRight = mouseX - rightEyeX;
      // const deltaYRight = mouseY - rightEyeY;
      // const angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);
      // setRotateRight(angleRight - 180);

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    }))
  })

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex gap-6'>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
            <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute left-1/2 top-1/2 -translate-x-50% -translate-y-50% w-full h-5'>
                <div className='w-5 h-5 bg-white rounded-full'>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
            <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute left-1/2 top-1/2 -translate-x-50% -translate-y-50% w-full h-5'>
                <div className='w-5 h-5 bg-white rounded-full'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes