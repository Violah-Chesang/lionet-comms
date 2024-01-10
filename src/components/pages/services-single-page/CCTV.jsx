import React from "react";
import "./servicesSinglePage.css";
import { useNavigate } from "react-router-dom";

export default function CCTV() {
  const navigate = useNavigate();
  return (
    <div className="fibre">
      <div className="fibre-cover">
        <div className="CCTV-content">
          <div className="fibre-content-cover">
            <div className="fibre-main">
              <h1>CCTV Installations And Support</h1>

              <div className="fibre-desc">
                <p>
                  Emergence Of Security Challenges Have Made CCTV Surveillance
                  To Be Widely Accepted By Many Companies. Its Becoming A Sure
                  Way To Make Sure Your Property Is Well Protected By Following
                  And Identifying Any Threats.
                </p>
                <br />
                <p>
                  With Our Expertise We Do CCTV System Planning, Designing,
                  Installation And Maintenance For Homes And Small Offices.
                </p>
                <br />
                <p>
                  All At Very Competitive Prices You Can Not Find Anywhere Else
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
