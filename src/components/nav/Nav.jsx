import React from 'react';
import './nav.css';
import logo from '../../../src/images/lionet_logo.JPG';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='Nav'>
        <div className='logo'>
            <img className='logo-img' src={logo} alt='Logo' />
        </div>
        <div className='white-space'></div>
          <div className='nav'>
            <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
              {/* <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/services'>Services</a></li>
                  <li><a href='/contact'>Contact</a></li>
              </ul> */}
        </div>
    </div>
  )
}

