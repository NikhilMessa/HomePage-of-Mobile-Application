import React from 'react';
import bannerImage from './images/banner.png';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" border-radius = '20px' />
    </div>
  );
}

export default Banner;