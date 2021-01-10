import React from 'react'
import { Link } from 'gatsby'
import './Navbar_style.css'

// import Font Awesome social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

  const textNav = React.createRef();

  const ToggleHandler = (e) => {
    // prevent refreshing
    e.preventDefault();
    // Access to DOM Node
    let mainNav = textNav.current;
    // re-write 'textNav' class to 'textNav active' on click
    mainNav.classList.toggle('active');
    // add class name 'fade-in' after 150 ms to add animation
    setTimeout(() => {
      mainNav.classList.toggle('fade-in');
    }, 150);
  }

  return (
    <div>
      <nav>
        {/* Mock-up logo */}
        <img className="mock-logo" src={"../../images/mock-logo.png"}
          alt="mock-logo" />

        <button className="navbar-toggle" id="mobile-navbar-toggle" onClick={ToggleHandler}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="nav">
          <div className="text-nav" ref={textNav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/investment">Contact</Link>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Link to="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
