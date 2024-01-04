import React, { Component } from 'react';
import Nav from '../../nav/Nav';
import Main from '../../main/Main';
import About from '../about/About';
import Services from '../../services/Services';
import Contact from '../contact/Contact';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
       <Nav />
       <Main />
       <About />
       <Services />
       <Contact />
      </div>
    )
  }
}
