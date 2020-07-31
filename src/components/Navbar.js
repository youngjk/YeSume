import React from 'react'
import { Link } from 'gatsby'

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
