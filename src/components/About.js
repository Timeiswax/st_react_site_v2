import React from 'react'
import drumPic from '../assets/drumPic.JPG'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center space-y-4 h-screen relative text-center px-4'>
        <h1 className='absolute top-24 text-4xl'>About Me</h1>
        <motion.img src={drumPic} alt='Shane playing Drums' 
        initial={{
            x:-200
        }}
        whileInView={{
            x:0
        }}
        transition={{
            duration:1
        }}
        className='w-64 md:rounded-xl rounded-full mx-auto flex-shrink-0'
        />
        <p className='px-4 text-sm'>Hi, I'm Shane Thiede. I'm a lifelong drummer, playing in professional recording and touring acts around the country like <a href="https://www.lolipoprecords.com/david-turel" className='text-stOrange'>David Turel</a> and <a href="bivouaccabs.com" className='text-stBlue'>Bivouac Cabs</a>.
        I'm available for session drumming, but I've also started recording & producing drums remotely using the equipment in my home studio, the <span className='tracking-widest uppercase'>mount shasta octave spa</span>. Check out examples of my work below, and feel free to reach out with any questions or requests!</p>
    </div>
  )
}

export default About