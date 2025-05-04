import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-4 custom-footer">
      <div className="container-fluid text-center text-md-start">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">My Website</h5>
            <p>Making the web beautiful, one pixel at a time.</p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: address@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="text-center mt-3 small">
          &copy; 2025 MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer
