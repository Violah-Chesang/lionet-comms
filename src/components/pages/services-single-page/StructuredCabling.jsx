import React from "react";
import "./servicesSinglePage.css";
import { useNavigate } from "react-router-dom";

export default function StructuredCabling() {
  const navigate = useNavigate();
  return (
    <div className="fibre">
      <div className="fibre-cover">
        <div className="cabling-content">
          <div className="fibre-content-cover">
            <div className="fibre-main">
              <h1>Structured Cabling</h1>

              <div className="fibre-desc">
                <p>
                  We Help Design , Plan And Implement By Following The Best Laid
                  Out Standards To Cater For You Data Voice And Video
                  Infrastructure. A Lot Of Emphasis Is Put On The Future Need
                  For Expansion. Many Companies Trust Us To Deliver And We Have
                  Delivered Their Expectations.
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
