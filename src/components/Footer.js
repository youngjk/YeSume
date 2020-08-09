import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'

export const Footer = () => {
  return (
    <div class="footer_background">
      <div id="footer">
        <ul>
          <li>
            <Link to="www.facebook.com">Image:Facebook</Link>
          </li>
          <li>
            <Link to="www.linkedin.com">Image:LinkedIn</Link>
          </li>
          <li>
            <Link to="www.instagram.com">Image:Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
