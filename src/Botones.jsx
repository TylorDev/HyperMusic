import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

export function Botones({togglePlay, isPlaying, playNextSong, playPreviusSong}) {
  return <div className="botones">
    <button onClick={playPreviusSong}>
      <FontAwesomeIcon icon={faBackward} />
    </button>
    <button onClick={togglePlay}>
      {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
    </button>
    <button onClick={playNextSong}>
      <FontAwesomeIcon icon={faForward} />
    </button>
  </div>;
}
