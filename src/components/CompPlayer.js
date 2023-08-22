import React, { useState, useEffect, useRef, useCallback } from 'react';
import CompControls from './compControls';
import Waveform from './waveform';
import generateString from '../assets/generateRandomString';

// With help from https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
// and https://wavesurfer-js.org/examples/#react.js
// and https://tabsoverspaces.in/posts/create-a-audio-player-in-nextjs/
// and also https://github.com/mattbartley/AB-Audio-Player/commit/09a3f627a872e38efe93f6b5b5901d464f3c4443#diff-0993f3c6690deffcfa88c6652129bf458a28c99fd84f25c329bd8476cbce2487  

function CompPlayer({ fdata }) {
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
  <article className="flex flex-col bg-orange-100 rounded-xl p-4 space-y-2 items-center flex-shrink-0 mx-auto w-64 h-80 snap-center">
      <h2 className=" text-xl">{title}</h2>
      <h3 className=" text-xs tracking-widest flex-grow">{description}</h3>
      <CompControls
          isPlaying={isPlaying}
          trackVersion={trackVersion}
          dryWetSelect={setTrackVersion}
          onPlayPauseClick={setIsPlaying}
        />
      <div id={divID} className='h-24 w-full'>
        <Waveform 
        container={divID} 
        isPlaying={isPlaying} 
        trackProgress={timeVal} 
        setNewTime={setNewTime}
        mediaElement={dummyAudio.current} />
      </div>
   </article>
  );
}

export default CompPlayer;

