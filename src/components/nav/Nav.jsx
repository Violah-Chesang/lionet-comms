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
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

