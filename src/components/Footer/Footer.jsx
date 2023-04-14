import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/img/LOGOW.svg";

const Footer = () => {
  const icon = (
    <FontAwesomeIcon icon={faCopyright} style={{ color: "#ffffff" }} />
  );
  return (
    <footer className="ContainerFooter">
      <img src={Logo} alt="logo kasa" />
      <p>{icon} 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
