import React, { useState } from "react";
import "./Collapse.scss";
import dropdown from "../../assets/img/dropdown.png";

const Collapse = ({ visible, children, title, text }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`fade ${visible ? "" : "out"}`}>
      <div className="collapse">
        <button
          onClick={toggle}
          className={`collapse-button ${open ? "open" : ""}`}
        >
          {title}
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </button>
        {open && (
          <div className="collapse-content">
            <p>{text}</p>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
