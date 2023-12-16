import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="header">
      <NavBar className="navbar-header"/>
      <div className="header-title">
        <Link to='/' className="home-title-link">Lucas Knezevich</Link>
      </div>
      <ThemeToggle className="header-theme-toggle" />
    </div>
  )
}

export default Header
