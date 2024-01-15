import React from "react";
import "./about.css";
import about from "../../../../src/images/cabling.jpg";
import mission from "../../../images/Installation.png";
import vision from "../../../images/lionet-fibre.png";
import values from "../../../images/lionet-support.png";

export default function About() {
  return (
    <div id="about" className="about">
        <div className="history">
            <div className="about-history">
              <h1 className="about-title">Who are we?</h1>
              <p>
                Lionet Communications Ltd was incorporated in the year 2022
                having operated for 5 years as a sole proprietor business. The
                incorporation brought on board new talents to carry on with the
                vision of becoming a leader in providing business solutions to
                our customers.
              </p>
            </div>

            <div className="about-image">
              <img src={about} alt="fibre specialist" />
            </div>
        </div>
        <span className="about-more">More about us...</span>
        
        <div className="about-row">          
          <div className="about-col">
            <img src={mission} alt="" className="about-col-img" />
            <h2 className="about-col-title">Mission</h2>
            <p className="about-col-details">
              We are dedicated at being your ideal partner, by providing
              reliable and competitive services so as to deliver the best
              solutions.
            </p>
          </div>
          <div className="about-col">
            <img src={vision} alt="" className="about-col-img" />
            <h2 className="about-col-title">Vision</h2>
            <p className="about-col-details">
              To continue enhancing customer experience by striving to make
              positive difference in your business through unmatched and
              superior customer experience.
            </p>
          </div>
          <div className="about-col">
            <img src={values} alt="" className="about-col-img" />
            <h2 className="about-col-title">Core Values</h2>
            <p className="about-col-details">
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
  );
}
