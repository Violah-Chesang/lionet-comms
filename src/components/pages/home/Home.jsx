import React from 'react';
import Nav from '../../nav/Nav';
import Main from '../../pages/main/Main';
import About from '../about/About';
import Services from '../../pages/services/Services';
import Contact from '../contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Fibre from '../services-single-page/fibre/Fibre';

export default function Home() {

    return (
      <div className='home'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services/fibre' element={<Fibre />} ></Route>
        </Routes>
      </div>
    )
  
}

