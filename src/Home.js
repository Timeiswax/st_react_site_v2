import {React, useRef} from 'react'
import Navbar from './components/navbar'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import RemoteDrums from './components/RemoteDrums'
import About from './components/About'
import Contact from './components/Contact'
import { Link } from 'react-router-dom'

function Home() {
    const drumRef = useRef(null)
  return (
    <div className='h-screen snap-y snap-mandatory'>
        <Navbar />

        <section id='top' className='snap-start'>
            <Hero />
        </section>

        <section id='about' className='snap-center' >
            <About />
        </section>

        <section ref={drumRef} id='rdr' className='snap-center' >
            <RemoteDrums />
        </section>

        <section id='contact' className='snap-end'>
            <Contact />
        </section>

        <footer className='h-screen relative w-screen flex justify-center'>
            <a className='absolute bottom-0 p-8 hover:opacity-25' href="#top">Whoa there! Let's get you back to the top</a>
        </footer>
    </div>
  )
}

export default Home