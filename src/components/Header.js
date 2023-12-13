import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <Link to='/' className="home-link">Lucas Knezevich</Link>
      </div>
      <ThemeToggle className="theme-toggle" />
    </div>
  )
}

export default Header;