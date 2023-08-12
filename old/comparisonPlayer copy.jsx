import React, { useState, useEffect, useRef } from 'react';
import './comparisonPlayer.css'
import ComparisonControls from './comparisonControls';

// With help from https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks

const ComparisonPlayer = ({ fdata }) => {
	// State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackVersion, setTrackVersion] = useState(0);

  	// Destructure for conciseness
	const { title, color, description, drySrc, wetSrc } = fdata[0];
  console.log(fdata)
  console.log(title)

	// Refs
  const audioRef = useRef(new Audio(drySrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

	// Destructure for conciseness
	const { duration } = audioRef.current;


  useEffect(() => {
    if (isPlaying) {
      console.log("play selected!")
      audioRef.current.play();
      startTimer();
    } else {
      console.log("pause selected!")
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  const startTimer = () => {
	  // Clear any timers already running
	  clearInterval(intervalRef.current);

	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      setTrackProgress(0);
	    } else {
	      setTrackProgress(audioRef.current.currentTime);
	    }
	  }, [1000]);
  }
  // Handle setup when changing tracks
/*   useEffect(() => {
    

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]); */

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }
  
  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }
  

	return (
  <div className="audio-player">
    <div className="track-info">
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      <ComparisonControls
          isPlaying={isPlaying}
          trackVersion={trackVersion}
          dryWetSelect={setTrackVersion}
          onPlayPauseClick={setIsPlaying}
        />
        <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        className="progress"
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />
    </div>
  </div>
  );
}

export default ComparisonPlayer;