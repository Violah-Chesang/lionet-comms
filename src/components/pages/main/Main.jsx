import React from 'react';
import './main.css';
import video from '../../../../src/images/pexel-home.mp4';

export default function Main() {
  return (
    <div className='main' id='home'>
        <video className='back-video' autoPlay loop muted playsInline>
            <source src={video} type='video/mp4' />
        </video>
        {/* Welcome message */}
        {/* <div className='welcome-background'>

        </div> */}
        <div className='welcome'>
          <div className='welcome-content'>
            <h1 className='welcome-title'>Welcome</h1> 
            <h3 className='welcome-sub'>Simple, Reliable, Solutions</h3>
            <p className='welcome-message'>Your trusted partner in service provision</p>
          </div>
        </div>
    </div>
  )
}
