import React from 'react';

import './error-indecator.css';
import icon from './error.png'

const ErrorIndicator = ()=>{
  return (
    <div className='error-indicator'>
      <img className='icon' src={icon} alt="icon error"/><br/>
      <span>Boom!</span><br/>
      <span>Something has gone terrible wrong</span><br/>
      <span>(but we already sent programmer to fix it)</span><br/>
    </div>
  );
};

export default ErrorIndicator;