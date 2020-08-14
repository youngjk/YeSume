import React from 'react'
import { Link } from 'gatsby'
import './Navbar_style.css'

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
              <img src={'../../images/icon_facebook.png'}
                alt="facebook icon"></img>
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <img src={'../../images/icon_instagram.png'}
                alt="instagram icon"></img>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com">
              <img src={'../../images/icon_linkedin.png'}
                alt="linkedin icon"></img>
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}
