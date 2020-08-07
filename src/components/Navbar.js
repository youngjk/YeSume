import React from 'react'
import { Link } from 'gatsby'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link id="NavCom" to="/">Home</Link>
        </li>
        <li>
          <Link id="NavCom" to="/career">Career</Link>
        </li>
        <li>
          <Link id="NavCom" to="/investment">Investment</Link>
        </li>
      </ul>
    </nav>
  )
}
