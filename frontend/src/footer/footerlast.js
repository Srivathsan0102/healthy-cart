import React from "react";
import './footer.css';
export default function FooterLast(){
    return(
        <>
        <div className="payment" style={{padding: '20px 0px'}}>
              <img  alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay1.svg" />
              <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay2.svg" />
              <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay3.svg" />
              <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay4.svg" />
              <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay5.svg" />
              <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay6.svg" />
            </div>
            <div className="copyright-section">
              <p className="copyright-text">Copyright © 2023, HealthKart.com, or its affiliates </p>
              <div className="policies" style={{color: '#fff !important'}}>
                <li>Terms &amp; Conditions</li>
                <li>Delivery Policy</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Returns Policy</li>
              </div>
            </div>
        </>
    )
}