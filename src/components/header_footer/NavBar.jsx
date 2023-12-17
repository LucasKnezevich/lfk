import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'react-feather'
import ThemeSwitch from './ThemeSwitch'

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
          <div className="nav-items">
            {/* <ThemeToggle /> */}
            <Link to="/" className="nav-link" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </Link>
            <ThemeSwitch className="nav-theme-switch"/>
          </div>
          )
        : null
      }
    </div>
  )
}

export default NavBar
