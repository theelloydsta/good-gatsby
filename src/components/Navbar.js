import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => {
  return (
    <nav>
      <li><link to="/">Home</Link></li>
      <li><link to="/about">About</Link></li>
          <li><link to="/contact">Contact</Link></li>
    </nav>
  )
}


export default Navbar;