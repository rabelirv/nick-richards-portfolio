import { NavLink } from "react-router-dom";
import logo from "../assets/logo_transparent.png";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
     <img src={logo} alt="logo"/>
      </NavLink>
      <div>
        <NavLink className="nav-link" to="/headshots">Headshots</NavLink>
        <NavLink className="nav-link" to="/resume">Resume</NavLink>
        <NavLink className="nav-link" to="/media-contact">Media Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;