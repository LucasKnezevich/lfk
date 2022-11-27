import { GitHub, Linkedin, Mail } from "react-feather";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer_icons">
        <a href="https://www.linkedin.com/in/lucasknezevich/" target='_blank'>
          <Linkedin className="clickable_icon" />
        </a>
        <a href="https://github.com/LucasKnezevich" target='blank'>
          <GitHub className="clickable_icon"/>
        </a>
        <a href="mailto:knezevich.lucas@gmail.com">
          <Mail className="clickable_icon"/>
        </a>
      </div>
      <p>&copy; Lucas Knezevich &nbsp;|&nbsp; 2023</p>

    </div>
  )
}

export default Footer;