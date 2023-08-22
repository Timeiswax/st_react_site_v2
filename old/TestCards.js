import React, { useState, useEffect, useRef, useCallback } from 'react';
import ComparisonControls from './comparisonControls';
import Waveform from './waveform';
import generateString from '../assets/generateRandomString';

function TestCards({ fdata }) {
    // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackVersion, setTrackVersion] = useState(0);
  const timeVal = useRef(0);
  const containerRef = useRef();
  const divID = generateString(5)
  	// Destructure for conciseness
	const { title, color, description, drySrc, wetSrc } = fdata[0];

	// Refs
  const dummyAudio = useRef(new Audio(wetSrc));
  dummyAudio.current.volume = 0;
  dummyAudio.current.loop = true;
  const dryRef = useRef(new Audio(drySrc));
  dryRef.current.loop = true;
  dryRef.current.preload = true;
  const wetRef = useRef(new Audio(wetSrc));
  wetRef.current.loop = true;
  wetRef.current.preload = true;
  const audioRefs = [dryRef, wetRef];

  const setNewTime = () => {
    // Force new time
    audioRefs[0].current.currentTime = timeVal.current;
    audioRefs[1].current.currentTime = timeVal.current;
  }


  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      dryRef.current.pause();
      wetRef.current.pause();
    }
  }, []);

  useEffect(() => {
    // Play and Pause
    if (isPlaying && trackVersion === 0) {
      setNewTime(timeVal.current)
      audioRefs[1].current.pause();
      audioRefs[0].current.play();

    } else if (isPlaying && trackVersion === 1) {
      setNewTime(timeVal.current)
      audioRefs[0].current.pause();
      audioRefs[1].current.play();

    } else {
      setNewTime(timeVal.current)
      audioRefs[trackVersion].current.pause();
    }
  }, [isPlaying, trackVersion]);
  return (
    <article className="rounded-xl bg-black mx-22">
    <div className="">
      <h2 className="">{title}</h2>
      <h3 className="">{description}</h3>
      
      <ComparisonControls
          isPlaying={isPlaying}
          trackVersion={trackVersion}
          dryWetSelect={setTrackVersion}
          onPlayPauseClick={setIsPlaying}
        />
      <div id={divID}>
        <Waveform 
        container={divID} 
        isPlaying={isPlaying} 
        trackProgress={timeVal} 
        setNewTime={setNewTime}
        mediaElement={dummyAudio.current} />
      </div>
    </div>
   </article>
  )
}

export default TestCards