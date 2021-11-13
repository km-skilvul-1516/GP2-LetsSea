import React from 'react';
import '../App.css';
import './HeroSection.css';

import video1 from '../assets/video-fix.mp4'

function HeroSection() {
  return (
    <div>
      <div className='hero-container'>

        {/* <img src =".../assets/fish.jpg" alt="asu mbak" /> */}

        <video src = {video1} autoPlay loop muted/>
      
      {/* <video src='../assets/video-fix.mp4' autoPlay loop muted /> */}
      
    </div>
    </div>
    
  );
}

export default HeroSection;
