import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo_transparent.png";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav className={`navbar ${isHomePage ? "navbar-home" : ""}`}>
      <NavLink to="/">
     <img src={logo} alt="logo"/>
      </NavLink>
      <div>
        <NavLink className="nav-link" to="/headshots">Headshots</NavLink>
        <NavLink className="nav-link" to="/resume">Resume</NavLink>
        <NavLink className="nav-link" to="/media">Media</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;