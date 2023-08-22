import React from 'react'
import {ReactComponent as Mail} from '../assets/envelope-regular.svg'
import {ReactComponent as Dotz} from '../assets/Dotz.svg'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='h-screen relative flex flex-col justify-center items-center text-center overflow-x-clip space-y-1'>
        <Dotz className='absolute -z-20 w-[200%] opacity-20 -rotate-45 ' />
      <h1 className=' text-4xl'>Contact</h1>
      <p>Email is the best way to get ahold of me</p>
      <div className='flex flex-row items-center space-x-3 p-4 rounded-xl transition-all hover:bg-orange-300 hover:opacity-40'>
        <Mail className='h-4'/>
        <a href="mailto:shane@shanethiede.com">shane@shanethiede.com</a>
      </div>
    </div>
  )
}

export default Contact