import React from 'react';
import { ReactComponent as Play } from '../assets/play.svg';
import { ReactComponent as Pause } from '../assets/pause.svg';


const ComparisonControls = ({
    isPlaying,
    trackVersion,
    dryWetSelect,
    onPlayPauseClick 
  }) => {
    
  return(
    <div className="audio-controls">
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
  )
    }
  
  export default ComparisonControls;