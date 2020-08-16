import React from 'react'
import { Link } from 'gatsby'
import './Navbar_style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export const Navbar = () => {
  return (
    <nav>

      <div class="textNav">
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

      <div class="socialNav">
        <ul>
          <li>
            <Link to="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>

          <li>
            <Link to="https://www.Instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>

          <li>
            <Link to="https://www.LinkedIn.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}
