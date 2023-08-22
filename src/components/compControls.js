import React from 'react';
import { ReactComponent as Play } from '../assets/play.svg';
import { ReactComponent as Pause } from '../assets/pause.svg';


const CompControls = ({
    isPlaying,
    trackVersion,
    dryWetSelect,
    onPlayPauseClick 
  }) => {
    
  return(
    <div className="flex w-32 justify-between">
      <div className='flex flex-col w-8 justify-center transition-all hover:opacity-80' >
        <h5 className='text-xl flex-grow'>Dry </h5>
        {isPlaying && trackVersion===0 ? (
          <button
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
          >
            <Pause />
          </button>
        ) : (
          <button
            type="button"
            className="play"
            onClick={() => {
              onPlayPauseClick(true)
              dryWetSelect(0)
            }
          }
            aria-label="Play"
          >
            <Play />
          </button>
      )}
      
      </div>
      <div className='flex flex-col columns-1 transition-all hover:opacity-80'>
        <h5 className='text-xl'>Wet</h5>
          {isPlaying && trackVersion===1 ? (
        <button
          type="button"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => {
            onPlayPauseClick(true)
            dryWetSelect(1)
          }
        }
          aria-label="Play"
        >
          <Play />
        </button>
      )}  
      </div>

    
      
    </div>
  )
    }
  
  export default CompControls;