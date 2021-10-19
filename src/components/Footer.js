import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="background">
      <footer>
        {/* Mock-up logo */}
        <img className="logo" src="images/logo.png" alt="mock-logo" />
        <div className="footer-wrap">
          <div>
            <h3>Pages</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/investment">Investment</Link>
              </li>
            </ul>
          </div>
          <div className="footer-connect">
            <h3>Connect</h3>
            <ul>
              <li>
                <Link to="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link to="https://www.Instagram.com">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link to="https://www.LinkedIn.com">
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <span>Young Jin Kim</span>
              </li>
              <li>
                <Link to="mailto:yj42kim@gmail.com" className="footer-email">
                  yj42kim@gamil.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div id="mobile-footer">
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
