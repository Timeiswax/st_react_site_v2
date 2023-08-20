import {ReactComponent as Dotz} from '../assets/Dotz.svg'
import {ReactComponent as Burg} from '../assets/burg.svg'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
//import './navbar.css'

const dotStyle = {
    height: 30, 
    width: 30, 
    padding:10, 
    margin:3,
    transition: 0.3,
}

function Navbar() {
    return(
        <header className="fixed top-0 flex h-24 w-screen p-4 justify-between items-center z-20 mx-auto">
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }} 
            transition={{
                duration: 1.5,
            }}>
                <Dotz className="w-16"/>
            </motion.div>
            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center">
                <SocialIcon url="https://www.instagram.com/shanethiede/" 
                bgColor='#bfbfbf'
                style={dotStyle}
                />
                <SocialIcon url="https://open.spotify.com/album/1uXUMueKcQNJCDwh16WJ3e?si=HL754A93RRy6CeE1iT4lLw" 
                bgColor='#bfbfbf'
                style={dotStyle}
                />
            </motion.div>
            {/* SOCIAL LINKS */}
            {/* <Burg className='w-12'/> */}
        </header>
    )
}

export default Navbar