
import CompPlayer from './CompPlayer';
import { motion } from 'framer-motion';
import generateString from '../assets/generateRandomString';
let cards = require("../assets/audioExamples.json");

function RemoteDrums({props}) {
  const divID = generateString(5)
  return (
    <div className="h-screen relative flex flex-col justify-center items-center text-center overflow-hidden space-y-1">
        <div className='absolute top-24 '>
          <h1 className='text-4xl tracking-widest'>Remote Drum Recording</h1>
          <p className='text-xs px-16'>Here are some examples of work I've done tracking drums for other folks' records</p>
        </div>
          <motion.div 
          initial={{x:300}}
          whileInView={{x:0}}
          transition={{duration:1}}
          className='absolute bottom-24 flex w-full space-x-1 overflow-x-scroll p-10 snap-x snap-mandatory'>
          {cards.map((element) => {
            return (<CompPlayer key={generateString(5)} fdata={element} />)
          })
          }
        </motion.div>
    </div>
  );
}

export default RemoteDrums;