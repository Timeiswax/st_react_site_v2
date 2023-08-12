import React from 'react';
import { ReactComponent as Play } from '../assets/play.svg';
import { ReactComponent as Pause } from '../assets/pause.svg';

const ComparisonControls = ({
    isPlaying,
    trackVersion,
    dryWetSelect,
    onPlayPauseClick 
  }) => (
    <div className="audio-controls">
    {isPlaying && !trackVersion ? (
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
          dryWetSelect(false)
        }
      }
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    {isPlaying && trackVersion ? (
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
          dryWetSelect(true)
        }
      }
        aria-label="Play"
      >
        <Play />
      </button>
    )}  
      
    </div>
  )
  
  export default ComparisonControls;