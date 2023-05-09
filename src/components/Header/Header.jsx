import "./Header.scss";
import Logo from "../../assets/img/LOGO.svg";
import { NavLink, Link } from "react-router-dom";

function Header() {


  return (
    <header className="App">
      <div className="containerHearder">
        <Link to="/">
          <img src={Logo} alt="logo kasa" />
        </Link>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header >
  );
}

export default Header;
