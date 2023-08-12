import Wavesurfer from "wavesurfer.js";
import React, { useEffect, useRef } from "react";

const Waveform = ({container, isPlaying, trackProgress, setNewTime, mediaElement}) => {

    const waveform = useRef(null);
    //url = 'https://cdn.freesound.org/previews/86/86210_14771-lq.mp3'
    useEffect(() => {
        // Check if wavesurfer object is already created.
        if (!waveform.current) {
          //console.log(new Audio("https://cdn.freesound.org/previews/167/167115_331583-lq.mp3"))
          // Create a wavesurfer object
          // More info about options here https://wavesurfer-js.org/docs/options.html
          waveform.current = Wavesurfer.create({
            container: "#" + container,
            waveColor: "#567FFF",
            barGap: 2,
            barWidth: 3,
            barRadius: 3,
            cursorWidth: 3,
            cursorColor: "#567FFF",
            media: mediaElement,
            //media: new Audio("https://cdn.freesound.org/previews/167/167115_331583-lq.mp3"),
          });
          
          //return waveform.current.destroy()
        }
 
      });

      useEffect(() => {
        const subscriptions = [
        waveform.current.on('timeupdate', (currentTime) => trackProgress.current = currentTime),
        waveform.current.on('seeking', (currentTime) => {
          trackProgress.current = currentTime;
          setNewTime()

        })
        ]

        return () => {
          subscriptions.forEach((unsub) => unsub())
        }
      })
    
      // useEffect here?
      useEffect(() => {
        // Check if the audio is already playing
        if (isPlaying) {
            waveform.current.play();
            console.log(waveform.current)
        } else {
            waveform.current.pause();
            }
        }, [isPlaying]);

        return (
            <div id="waveform" />
        );

}

export default Waveform