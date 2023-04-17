import "./Header.scss";
import Logo from "../../assets/img/LOGO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App">
      <div className="containerHearder">
        <Link to="/">
          <img src={Logo} alt="logo kasa" />
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
