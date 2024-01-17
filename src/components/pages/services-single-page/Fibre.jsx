import React from "react";
import "./servicesSinglePage.css";
import { useNavigate } from "react-router-dom";


export default function Fibre() {
  const navigate = useNavigate();
  return (
    <div className="fibre">
      <div className="fibre-cover">
        <div className="fibre-content">
          <div className="fibre-content-cover">
            <div className="fibre-main">
              <h1 className="fibre-head">Fibre Optic Networks Installation And Support</h1>

              <div className="fibre-desc">
                <p>
                  We Provide Fiber Optic Construction Services To Telecom
                  Operators. We Have Built Over 1000km Of Both Overhead And
                  Underground Cables.
                </p>
                <br />
                <p>
                  We Offer A Wide Range Of High-Quality Fiber Optic Network
                  Installation And Support Ranging From Designing,
                  Implementation, And Support.
                </p>
                <br />
                <p>
                  We Have Been Involved In Implementing Various Fibre Optic
                  Project Both Small And Large Scale. Contact Us For More
                  Details.
                </p>
              </div>
              <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
