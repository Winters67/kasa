import "./Header.scss";
import Logo from "../../assets/img/LOGO.svg";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="App">
      <div className="containerHearder">
      <img src={Logo} alt="logo kasa" />
          <Navbar/>
      
      </div>
    </header>
  );
}

export default Header;
