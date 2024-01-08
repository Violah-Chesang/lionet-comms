import React from 'react';
import './services.css';
import support from '../../../../src/images/lionet-support.png';
import {useNavigate} from 'react-router-dom';

export default function Services() {
  let navigate = useNavigate();
  return (
    <div className='services' id='services'>
      <div className='services-cover'>
        <h1 className='service-title'>Our Services</h1>
        <div className='header-row'>
          <div className='header-col'>
            <div className='header-col-content'>
              <span className='services-content-header'>Evolutionizing connection and communication</span>
              <p>We pride ourselves on delivering cutting-edge solutions that effectively meets your needs during this digital age.</p>
          
            </div>
          </div>

          <div className='header-col'>
            <div className='header-col-content'>
              <div className='image-container'>
                <img className='header-col-img' src={support} alt='technian'/>
                <p>Discover a new realm of connectivity and technology solutions with Lionet Communications Ltd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services row 1 */}
        <div className='rows'>
          <div className='row-title'>
            <h1>What we offer:</h1>
          </div>
          <div className='services-row'>
            <div className='services-col'>
              <div className='services-col-title'>
                <h2>Fibre Optic Networks Installation And Support</h2>
              </div>
              <div className='services-col-desc'>
                <p>We Provide Fiber Optic Construction Services To Telecom Operators. We Have Built Over 1000km Of Both Overhead And Underground Cables.</p>
              </div>
              <button className='service-btn' onClick={() => navigate('fibre')}>Read more</button>
            </div>

            <div className='services-col'>
              <div className='services-col-title'>
                <h2>Internet Connectivity & Network Support</h2>
              </div>
              <div className='services-col-desc'>
                <p>We've Partnered With Leading ISPs In The Country To Offer High Quality And Reliable Internet Connectivity.
                  This Is Delivered Via Fibre Optic Infrustracture, Microwave Radios, VSATs, And GSM Networks.</p>
              </div>
              <button className='service-btn'>Read more</button>
            </div>

            <div className='services-col'>
              <div className='services-col-title'>
                <h2>CCTV Installations And Support</h2>
              </div>
              <div className='services-col-desc'>
                <p>Emergence Of Security Challenges Have Made CCTV Surveillance To Be Widely Accepted By Many Companies. Its Becoming A Sure Way To Make Sure Your Property Is Well Protected By Following And Identifying Any Threats.</p>
              </div>
              <button className='service-btn'>Read more</button>
            </div>
          </div>

          {/* services row 2 */}
          <div className='services-row'>
            <div className='services-col'>
              <div className='services-col-title'>
                <h2>Customer Support</h2>
              </div>
              <div className='services-col-desc'>
                <p>We Help Businesses In Maintaining Their IT Infrastructure So That They Can Worry Less And Concentrate On Their Core Businesses. We Analyze Your System To Give Best Advise Possible For Optimal Service.</p>
              </div>
              <button className='service-btn'>Read more</button>
            </div>

            <div className='services-col'>
              <div className='services-col-title'>
                <h2>Structured Cabling</h2>
              </div>
              <div className='services-col-desc'>
                <p>We Help Design , Plan And Implement By Following The Best Laid Out Standards To Cater For You Data Voice And Video Infrastructure. A Lot Of Emphasis Is Put On The Future Need For Expansion. Many Companies Trust Us To Deliver And We Have Delivered Their Expectations.</p>
              </div>
              <button className='service-btn'>Read more</button>
            </div>

            <div className='services-col'>
              <div className='services-col-title'>
                <h2>Cloud Services</h2>
              </div>
              <div className='services-col-desc'>
                <p>Cloud Services Are Meant To Help Businesses Achieve High Levels Of Communication, Collaboration And Security Within The Business Without A Heavy Investment In Servers, Server Rooms, IT Expertise Or Maintenance..</p>
              </div>
              <button className='service-btn'>Read more</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
