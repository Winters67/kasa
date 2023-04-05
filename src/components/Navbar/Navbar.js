import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";


function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  );
}

export default Navbar;
