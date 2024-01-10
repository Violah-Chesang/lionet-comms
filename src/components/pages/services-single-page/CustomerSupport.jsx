import React from "react";
import "./servicesSinglePage.css";
import { useNavigate } from "react-router-dom";


export default function CustomerSupport() {
  const navigate = useNavigate();
  return (
    <div className="fibre">
      <div className="fibre-cover">
        <div className="support-content">
          <div className="fibre-content-cover">
            <div className="fibre-main">
              <h1>Customer Support</h1>

              <div className="fibre-desc">
                <p>
                We Help Businesses In Maintaining Their IT Infrastructure So That They Can Worry Less And Concentrate On Their Core Businesses. We Analyze Your System To Give Best Advise Possible For Optimal Service.
                </p>
                <br />
                <p>
                Our Contract Can Either Run On Monthly Basis Terms Or On Need Be Basis But One Thing We Assure You Is We Are Available Whenever You Need Us.
                </p>
                <br />
                <p>
                We Got You Covered.
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
