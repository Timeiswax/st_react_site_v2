import React, { useState, useEffect, useRef, useCallback } from 'react';
import './comparisonPlayer.css'
import ComparisonControls from './comparisonControls';
import WaveSurferPlayer from './wavesurfer';

// Import WaveSurfer
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import Timeline from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js'


// With help from https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
// and https://wavesurfer-js.org/examples/#react.js

  // WaveSurfer hook
  const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null)
  
    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
      if (!containerRef.current) return
  
      const ws = WaveSurfer.create({
        ...options,
        container: containerRef.current,
      })
  
      setWavesurfer(ws)
  
      return () => {
        ws.destroy()
      }
    }, [options, containerRef])
  
    return wavesurfer
  }

const ComparisonPlayer = ({ fdata }) => {
	// State
  const containerRef = useRef()
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackVersion, setTrackVersion] = useState(0);
  const wavesurfer = useWavesurfer(containerRef, fdata)

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
      audioRef.current.play();
      //wavesurfer.play();
      startTimer();
    } else {
      audioRef.current.pause();
      //wavesurfer.pause();
    }
  }, [isPlaying, wavesurfer]);

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

  const onPlayClick = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false)
      //wavesurfer.pause() 
    } else {
      setIsPlaying(true)
      //wavesurfer.play()
    }
  }, [isPlaying])

  useEffect(() => {
    if (!wavesurfer) return

    setTrackProgress(0)
    setIsPlaying(false)

    const subscriptions = [
      wavesurfer.on('play', () => setIsPlaying(true)),
      wavesurfer.on('pause', () => setIsPlaying(false)),
      wavesurfer.on('timeupdate', (currentTime) => setTrackProgress(currentTime)),
    ]

    return () => {
      subscriptions.forEach((unsub) => unsub())
    }
  }, [wavesurfer])

	return (
  <div className="audio-player">
    <div className="track-info">
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      <ComparisonControls
          isPlaying={isPlaying}
          trackVersion={trackVersion}
          dryWetSelect={setTrackVersion}
          onPlayPauseClick={onPlayClick}
        />
      <WaveSurferPlayer
      height={100}
      waveColor="rgb(200, 0, 200)"
      progressColor="rgb(100, 0, 100)"
      url={drySrc}
      plugins={[Timeline.create()]}
      />
    </div>
  </div>
  );
}

export default ComparisonPlayer;

