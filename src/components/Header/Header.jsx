import "./Header.scss";
import Logo from "../../assets/img/LOGO.svg";
import { NavLink, Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="App">
      <div className="containerHearder">
        <Link to="/">
          <img src={Logo} alt="logo kasa" />
        </Link>
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>

          {/* <NavLink to="/" className={(isActive) => { isActive ? "arctive" : "" }}></NavLink> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
