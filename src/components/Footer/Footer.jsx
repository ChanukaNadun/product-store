import React from 'react'
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="footer mt-auto custom-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand mb-4">
              <h5 className="fw-bold mb-3">
                <span className="brand-gradient">My Website</span>
              </h5>
              <p>Making the web beautiful, one pixel at a time.</p>
              <div className="social-links mt-4">
                <a href="/" className="social-icon" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="/" className="social-icon" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="/" className="social-icon" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="/" className="social-icon" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading mb-4">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>About
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-4">Contact Us</h5>
            <ul className="footer-contact list-unstyled">
              <li className="mb-3">
                <i className="bi bi-envelope-fill me-3"></i>
                <a href="mailto:address@example.com">address@example.com</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone-fill me-3"></i>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill me-3"></i>
                <a href="tel:+1234567890">123 Main Street, City, Country</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-4">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates</p>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </form>
          </div>
        </div>


        <div className="footer-bottom mt-5 py-4 border-top">

          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 small">
                &copy; 2025 MyWebsite. All rights reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="/" className="footer-legal-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" className="footer-legal-link">
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" className="footer-legal-link">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
