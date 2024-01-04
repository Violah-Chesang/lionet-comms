import React from 'react';
import './about.css';
import about from '../../../../src/images/fibre.jpg';
import mission from '../../../images/Installation.png';
import vision from '../../../images/lionet-fibre.png';
import values from '../../../images/lionet-support.png';

export default function About() {
  return (
    <div id='about' className='about'>
      <div className='about-cover'>
        <div className='history'>
          <h1 className='about-title'>Who are we?</h1>
          <img src={about} alt='fibre specialist' className='about-image' />
          <p className='about-history'>
          Lionet Communications Ltd Was Incorporated In The Year 2022 Having Operated For 5 Years As A Sole Proprietor Business. The Incorporation Brought On Board New Talents To Carry On With The Vision Of Becoming A Leader In Providing Business Solutions To Our Customers.
          </p>
        </div>
        <div className='about-row'>
          <div className='about-col'>
            <img src={mission} alt='' className='about-col-img'/>            
            <h2 className='about-col-title'>Mission</h2>
            <p className='about-col-details'>We Are Dedicated At Being Your Ideal Partner, By Providing Reliable And Competitive Services So As To Deliver The Best Solutions.</p>
          </div>
          <div className='about-col'>
            <img src={vision} alt='' className='about-col-img'/>
            <h2 className='about-col-title'>Vision</h2>
            <p className='about-col-details'>To Continue Enhancing Customer Experience By Striving To Make Positive Difference In Your Business Through Unmatched And Superior Customer Experience.</p>
          </div>
          <div className='about-col'>
            <img src={values} alt='' className='about-col-img'/>
            <h2 className='about-col-title'>Core Values</h2>
            <p className='about-col-details'>
              <ul>
                <li>- Reliable Services</li>
                <li>- Team Work</li>
                <li>- Customer Satisfaction</li>
                <li>- Professionalism</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
