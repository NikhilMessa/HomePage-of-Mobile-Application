import React from 'react';
import './PhotoContainer.css';
import abc from './images/photo.jpg';

const PhotoContainer = () => {
  return (
    <div className="photo">
      <img src={abc} alt=" " />
    </div>
  );
};

export default PhotoContainer;
