import React from 'react'
import "./Start.css";
import { Link } from 'react-router-dom';
import image from '../Assets/vball5.jpg'

import Button from '@mui/material/Button';
function Start() {
  return (
  <>
    <div className='start-container' style={{ backgroundImage:`url(${image})` }}>
      
    <a href='../../../../App.js'>Administrator</a>
    <h1>Administrator</h1>
    <h1>Administrator</h1>
  </div>
  
  </>
  );
}

export default Start