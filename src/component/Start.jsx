import React, { useState } from 'react';
import '../style/start.css';
import { useNavigate } from 'react-router-dom';
import left from '../assets/l.png';
import right from '../assets/r.png';

function Start() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      navigate('/signup');
    }, 1000); // Wait for 1 second before navigating
  };

  return (
    <div className="containe">
      <div className={`curtain left ${isOpen ? 'open' : ''}`}>
        <img src={left} alt="" className='mgg' />
      </div>
      <div className={`curtain right ${isOpen ? 'open' : ''}`}>
        <img src={right} alt="" className='mg'/>
      </div>
      <button onClick={handleClick} className='start'>Let's Start</button>
    </div>
  );
}

export default Start;
