import React from 'react';
import './CardContainer.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image1} alt=" " />
        <div className="card-content">
          <p>Incorporation of Public Company</p>
        </div>
      </div>
      <div className="card">
        <img src={image2} alt=" " />
        <div className="card-content">
          <p>Incorporation of Private Company</p>
        </div>
      </div>
      <div className="card">
        <img src={image3} alt=" " />
        <div className="card-content">
          <p>Incorporation of Nidhi Company</p>
        </div>
      </div>
      <div className="card">
        <img src={image4} alt=" " />
        <div className="card-content">
          <p>Incorporation of Producer Company</p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
