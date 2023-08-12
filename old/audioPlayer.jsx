import React, { useState, useEffect, useRef } from 'react';
import './audioPlayer.css'
import AudioControls from './audioControls';

// With help from https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks

const AudioPlayer = ({ tracks }) => {
	// State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log("rendering comps")
  	// Destructure for conciseness
	const { title, artist, color, image, audioSrc } = tracks[trackIndex];

	// Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

	// Destructure for conciseness
	const { duration } = audioRef.current;

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }

  }

  useEffect(() => {
    if (isPlaying) {
      console.log("yee");
      audioRef.current.play();
      startTimer();
    } else {
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
	      toNextTrack();
	    } else {
	      setTrackProgress(audioRef.current.currentTime);
	    }
	  }, [10]);
  }
  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

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
  }, [trackIndex]);

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
      <img
        className="artwork"
        src={image}
        alt={`track artwork for ${title} by ${artist}`}
      />
      <h2 className="title">{title}</h2>
      <h3 className="artist">{artist}</h3>
      <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
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

export default AudioPlayer;