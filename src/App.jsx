
import { music } from "./music";
import { MusicPlayer } from "./MusicPlayer";
import React, { useState, useEffect } from 'react';
import Vibrant from 'node-vibrant';


function App() {
   

  return (
    <div>
     <MusicPlayer music={music}></MusicPlayer>
   
    </div>
  )
}

export default App


