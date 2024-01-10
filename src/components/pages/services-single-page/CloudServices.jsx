import React from "react";
import "./servicesSinglePage.css";
import { useNavigate } from "react-router-dom";

export default function CloudService() {
  const navigate = useNavigate();
  return (
    <div className="fibre">
      <div className="fibre-cover">
        <div className="cloud-content">
          <div className="fibre-content-cover">
            <div className="fibre-main">
              <h1>Cloud Services</h1>

              <div className="fibre-desc">
                <p>
                  Cloud Services Are Meant To Help Businesses Achieve High
                  Levels Of Communication, Collaboration And Security Within The
                  Business Without A Heavy Investment In Servers, Server Rooms,
                  IT Expertise Or Maintenance.
                </p>
                <br />
                <p>
                  We Work Hand In Hand With Both Local And International
                  Partners And Vendors To Give You Quality And Customized
                  Solutions.
                </p>
                <br />
                <p>
                  Try Our Cloud Solutions. - Lionet Cloud ERP. Work From
                  Anywhere Conveniently. - Voice Solutions That Allows Companies
                  To Reduce Telephone Bills Centralized Management Of All
                  Extensions
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
