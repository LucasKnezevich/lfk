import React from 'react'
import { GitHub, Linkedin, Mail } from 'react-feather'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <a href="https://www.linkedin.com/in/lucasknezevich/" target='_blank' rel="noreferrer">
          <Linkedin className="footer_icon" />
        </a>
        <a href="https://github.com/LucasKnezevich" target='blank' rel="noreferrer">
          <GitHub className="footer_icon"/>
        </a>
        <a href="mailto:knezevich.lucas@gmail.com">
          <Mail className="footer_icon"/>
        </a>
      </div>
      <p>&copy; Lucas Knezevich &nbsp;|&nbsp;&nbsp;
        <Link to='/wings' className="footer_year">2024</Link>
      </p>

    </div>
  )
}

export default Footer
