import React, { Component } from 'react';
import Nav from '../../nav/Nav';
import Main from '../../pages/main/Main';
import About from '../about/About';
import Services from '../../pages/services/Services';
import Contact from '../contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Fibre from '../services-single-page/Fibre';
import InternetConnectivity from '../services-single-page/InternetConnectivity';
import CCTV from '../services-single-page/CCTV';
import CustomerSupport from '../services-single-page/CustomerSupport';
import StructuredCabling from '../services-single-page/StructuredCabling';
import CloudService from '../services-single-page/CloudServices';


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
          <Route path='/services/fibre' element={< Fibre />}></Route>
          <Route path='/services/internet-connectivity' element={< InternetConnectivity />}></Route>
          <Route path='/services/cctv' element={< CCTV />}></Route>
          <Route path='/services/customer-support' element={< CustomerSupport />}></Route>
          <Route path='/services/structured-cabling' element={< StructuredCabling />}></Route>
          <Route path='/services/cloud-services' element={< CloudService />}></Route>
        </Routes>
      </div>
    )
  }
}
