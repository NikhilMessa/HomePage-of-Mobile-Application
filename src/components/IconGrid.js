import React from 'react';
import { FaMobile, FaTv,  FaRupeeSign, FaParking, FaNewspaper, FaStickyNote, FaUserTie, FaRegWindowRestore, FaAirFreshener,FaBroadcastTower,FaTint,FaAngleRight } from 'react-icons/fa';
import './IconGrid.css';

function IconGrid() {
  const icons = [
    { icon: <FaMobile />, name: 'Mobile' },
    { icon: <FaTv />, name: 'DTH Recharge' },
    { icon: <FaRupeeSign />, name: 'Loan' },
    { icon: <FaParking />, name: 'Promotion' },
    { icon: <FaNewspaper />, name: 'News' },
    { icon: <FaStickyNote />, name: 'Blog' },
    { icon: <FaUserTie />, name: 'Jobs' },
    { icon: <FaRegWindowRestore />, name: 'Feedback' },
    { icon: <FaAirFreshener />, name: 'Gas Booking' },
    { icon: <FaBroadcastTower />, name: 'Electricity Bill' },
    { icon: <FaTint />, name: 'Water Bill' },
    { icon: <FaAngleRight />, name: 'See More' },
  ];

  return (
    <div className="icon-grid">
      {icons.map((item, index) => (
        <div key={index} className="grid-item">
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default IconGrid;
