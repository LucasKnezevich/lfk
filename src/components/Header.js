import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to='/' className="home_link">Lucas Knezevich</Link>
    </div>
  )
}

export default Header;