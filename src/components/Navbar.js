import React from 'react'
import { Link } from 'gatsby'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
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
    </nav>
  )
}
