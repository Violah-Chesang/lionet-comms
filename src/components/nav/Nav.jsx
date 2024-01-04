import React from 'react';
import './nav.css';
import logo from '../../../src/images/lionet_logo.JPG';

export default function Nav() {
  return (
    <div className='Nav'>
        <div className='logo'>
            <img className='logo-img' src={logo} alt='Logo' />
        </div>
        <div className='white-space'></div>
        <div className='nav'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

