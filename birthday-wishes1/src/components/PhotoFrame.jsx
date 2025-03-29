import React from 'react';
import yourImage from '../assets/v.jpg';
export default function PhotoFrame() {
    return (
      <div className="photo-frame">
        <div className="polaroid">
          <div className="photo">
            <img src={yourImage} alt="Our beautiful memories" className="photo-img" />    
            <div className="placeholder-photo">Our Photo</div>
          </div>
          <div className="caption">Our Beautiful Memories</div>
        </div>
      </div>
    )
  }