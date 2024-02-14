export function Controles(isPlaying, link, togglePlay, playNextSong) {
  return <div className="controls">
    <audio id="audioPlayer" controls={true} autoPlay={isPlaying}>
      <source src={link} type="audio/mpeg" />
    </audio>
    <div className="botones">
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={playNextSong}>Next</button>
    </div>
  </div>;
}
