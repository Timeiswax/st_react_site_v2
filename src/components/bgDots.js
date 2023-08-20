import React from 'react'
import {ReactComponent as Dotz} from '../assets/Dotz.svg'
import { cubicBezier, motion } from 'framer-motion'


function BgDots() {
  return (
    <div className='absolute -z-20'>        
        <motion.div
        initial={{
            rotate: 360,
            opacity:.2,
        }}
        animate={{
            rotate: 0,
        }}
        transition={{
            duration: 1.5
            
        }}
        >
            <Dotz className='w-screen p-2'/>
        </motion.div>
    </div>
  )
}

export default BgDots

/* fixed block mx-auto text-center -z-20 */