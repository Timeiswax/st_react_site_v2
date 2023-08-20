import React from 'react'
import Navbar from './components/navbar'
import {ReactComponent as Dotz} from './assets/Dotz.svg'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import RemoteDrums from './components/RemoteDrums'

function Home() {
  return (
    <div className=''>
        <Navbar />

        <section id='hero' className='snap-start'>
            <Hero />
        </section>

        <section id='rdr' className='snap-center' >
            <RemoteDrums />
        </section>

        
    </div>
  )
}

export default Home