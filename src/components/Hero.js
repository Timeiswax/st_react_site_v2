import React from 'react'
import heroPic from '../assets/tempPic.jpg'
import BgDots from './bgDots'
function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-1'>
        <BgDots />
        <h1 className=' text-4xl'>Shane Thiede</h1>
        <img src={heroPic} alt='Shane' className='relative rounded-full h-32 w-32 mx-auto object-cover' />
        <h2 className='text-xs tracking-widest'>Drummer, Producer, Engineer</h2>
        <div className='py-4 flex flex-col sm:flex-row'>
            <button className="heroButton">Remote Drum Recording</button>
            <button className="heroButton">Music</button>
            <button className="heroButton">Contact</button>
        </div>
    </div>
  )
}

export default Hero