import React, { useState, useRef } from "react";
import { Botones } from "./Botones";

export function Controles({ isPlaying, link, togglePlay, playNextSong, playPreviusSong }) {
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  }

  const audioRef = useRef(null);
  const timelineRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);



  
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };
  const handleChangeTime = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="controls">
      <audio
        ref={audioRef}
        id="audioPlayer"
        controls={true}
        autoPlay={isPlaying}
        onLoadedData={handleLoadedData}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={link} type="audio/mpeg" />
      </audio>
      <div className="tiempo">
          <div>{formatTime(currentTime)}/{formatTime(duration)} </div>
      </div>
      <input style={{backgroundSize: `${(100*currentTime) / duration}% 100%`}}
      className="timeline"
      ref={timelineRef}
        type="range"
        min={0}
        max={duration}
        step={0.1}
        value={currentTime}
        onChange={handleChangeTime}
      />

     

      <Botones
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        playNextSong={playNextSong}
        playPreviusSong={playPreviusSong}
      />
      
    </div>
  );
}
