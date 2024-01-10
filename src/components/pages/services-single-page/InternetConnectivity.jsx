import React from "react";
import "./servicesSinglePage.css";
import { useNavigate } from "react-router-dom";

export default function Fibre() {
  const navigate = useNavigate();
  return (
    <div className="fibre">
      <div className="fibre-cover">
        <div className="internet-content">
          <div className="fibre-content-cover">
            <div className="fibre-main">
              <h1>Internet Connectivity & Network Support</h1>

              <div className="fibre-desc">
                <p>
                  We've Partnered With Leading ISPs In The Country To Offer High
                  Quality And Reliable Internet Connectivity. This Is Delivered
                  Via Fibre Optic Infrustracture, Microwave Radios, VSATs, And
                  GSM Networks.
                </p>
                <br />
                <p>
                  With Our Highly Trained Network Support And Maintenance Teams,
                  We Offer All Round IT Network Support Services, Majorly In
                  Nairobi City. We Looking Forward To Expanding To Other Regions
                  In The Near Future.
                </p>
              </div>
              <button className="back-btn" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
