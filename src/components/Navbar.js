import React from 'react'
import { Link } from 'gatsby'
import './Navbar_style.css'

// import Font Awesome social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

//import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav>

      {/* Mock-up logo */}
      <img class="mock-logo" src={"../../images/mock-logo.png"}
        alt="mock-logo"></img>

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
            <Link to="https://www.Instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>

          <li>
            <Link to="https://www.LinkedIn.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>

          <li>
            <Link to="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
        </ul>
      </div>
    </nav >
  )
}
