import React from 'react'
import heroPic from '../assets/tempPic.jpg'
import BgDots from './bgDots'
import { Link } from 'react-router-dom'

function Hero(props) {
  function scrollTo(elementID) {
    const ele = document.getElementById(elementID)
    ele.scrollIntoView()
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-1'>
        <BgDots />
        <h1 className=' text-4xl'>Shane Thiede</h1>
        <img src={heroPic} alt='Shane' className='relative rounded-full h-32 w-32 mx-auto object-cover' />
        <h2 className='text-xs tracking-widest'>Drummer, Producer, Engineer</h2>
        <div className='py-4 flex flex-col sm:flex-row'>
            <a href="/#about" className="heroButton">About Me</a>
            <a href="/#rdr" className="heroButton" >Remote Drum Recording</a>
            <a href="/#contact" className="heroButton">Contact</a>
        </div>
    </div>
  )
}

export default Hero