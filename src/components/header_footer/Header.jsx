import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="header">
      <NavBar className="navbar-header"/>
      <div className="header-title">
        <Link to='/' className="home-title-link">Lucas Knezevich</Link>
      </div>
    </div>
  )
}

export default Header
