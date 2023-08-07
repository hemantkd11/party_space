import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-wrapper">
          <div className="footer-logo">On-Space</div>
          <div className="footer-cantaint">
            <div className="footer-gettoknoow flex-box">
              <div className="footer-section-context-header">
                Get To Know Us
              </div>
              <div className="footer-section-context">About</div>
              <div className="footer-section-context">Blog</div>
              <div className="footer-section-context">Become a Vendor</div>
            </div>
            <div className="footer-useful-links flex-box">
              <div className="footer-section-context-header">Useful Links</div>
              <div className="footer-section-context">Help & Support</div>
              <div className="footer-section-context">Contact us</div>
              <div className="footer-section-context">Career</div>
            </div>
            <div className="flex-box">
              <div className="footer-section-context-header">Legal</div>
              <div className="footer-section-context">Terms & Conditions</div>
              <div className="footer-section-context">
                Refund & Cancellation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
