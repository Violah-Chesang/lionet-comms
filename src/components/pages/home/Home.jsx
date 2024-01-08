import React, { Component } from 'react';
import Nav from '../../nav/Nav';
import Main from '../../pages/main/Main';
import About from '../about/About';
import Services from '../../pages/services/Services';
import Contact from '../contact/Contact';
import { Route, Routes } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    )
  }
}
