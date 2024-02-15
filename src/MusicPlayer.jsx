import { useState } from "react";
import { Controles } from "./Controles";
import { Album } from "./Album";
import { Metadata } from "./Metadata";

export const MusicPlayer = ({ music }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer.paused) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  const playNextSong = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause(); // Pausa la canción actual
    const nextIndex = (currentSongIndex + 1) % music.length;
    setCurrentSongIndex(nextIndex); // Cambia al siguiente índice de la canción
    audioPlayer.load(); // Recarga el audio para reproducir la nueva canción
    audioPlayer.play(); // Inicia la reproducción de la nueva canción
    setIsPlaying(true); // Actualiza el estado de reproducción
  };

  const playPreviusSong = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause(); // Pausa la canción actual
    let nextIndex = currentSongIndex - 1; // Calcula el próximo índice
  
    // Si el próximo índice es negativo, establece el índice al último elemento del array
    if (nextIndex < 0) {
      nextIndex = music.length - 1;
    }
  
    setCurrentSongIndex(nextIndex); // Cambia al siguiente índice de la canción
    audioPlayer.load(); // Recarga el audio para reproducir la nueva canción
    audioPlayer.play(); // Inicia la reproducción de la nueva canción
    setIsPlaying(true); // Actualiza el estado de reproducción
  };
  const { name, link, album } = music[currentSongIndex];

  return (
    <div className="music-player" style={{ backgroundImage: `url(${album})` }}>
      <div className="blur">
        {Album(album)}

        <Metadata music={music[currentSongIndex]}></Metadata>
        
        <Controles isPlaying={isPlaying} link={link} togglePlay={togglePlay} playNextSong={playNextSong}  playPreviusSong= {playPreviusSong}/>
      </div>
    </div>
  );
};








