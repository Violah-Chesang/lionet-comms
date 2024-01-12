import React from 'react';
import './nav.css';
import logo from '../../../src/images/lionet_logo.JPG';
import { NavLink } from 'react-router-dom';

export default function Nav() { 
  const showMenu = (e) => {
    const mainMenu = document.querySelector('.sidebar');
    mainMenu.style.display = "flex";
  }
 

  const hideMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
  }

  return (
    <div className='Nav'>
        <div className='logo'>
            <img className='logo-img' src={logo} alt='Logo' />
        </div>
        {/* <div className='white-space'></div> */}
          <div className='nav'>
            <nav className='mainMenu'>
              <NavLink className="hide-on-mobile" to='/'>Home</NavLink>
              <NavLink className="hide-on-mobile" to='/about'>About</NavLink>
              <NavLink className="hide-on-mobile" to="/services">Services</NavLink>
              <NavLink className="hide-on-mobile" to="/contact">Contact</NavLink>
              <NavLink className='humberger-menu' to="#"><svg onClick={ showMenu } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></NavLink>
            </nav>

            <nav className='sidebar'>
              <NavLink to='#'><svg className='close-menu' onClick={ hideMenu } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></NavLink>
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

