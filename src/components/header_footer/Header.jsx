import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <Link to='/' className="home-title-link">Lucas Knezevich</Link>
      </div>
      <div className='header-options'>
        <ThemeSwitch className="nav-theme-switch"/>
        <NavBar className="navbar-header"/>
      </div>
    </div>
  )
}

export default Header
