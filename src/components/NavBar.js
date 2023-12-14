import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'react-feather'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar">
      {isOpen
        ? (
            <X
              className="nav-menu-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          )
        : (
            <Menu
              className="nav-menu-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          )

      }
      {isOpen
        ? (
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </Link>
          </div>
          )
        : null
      }
    </div>
  )
}

export default NavBar
