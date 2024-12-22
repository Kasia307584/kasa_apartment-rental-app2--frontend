import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavbarElement() {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {" "}
        <p>Accueil</p>
      </NavLink>
      <NavLink
        to="/terms"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        <p>A Propos</p>
      </NavLink>
    </nav>
  );
}

export default NavbarElement;
