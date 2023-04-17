import React, { useState } from "react";
import "./Collapse.scss"
import dropdown from "../../assets/img/dropdown.png";

const Collapse = ({ visible, children, title, text }) => {
  const [open, setOpen] = useState(false);
  const [buttonClass, setButtonClass] = useState("");

  const toggle = () => {
    setOpen(!open);
    setButtonClass(open ? "" : "open");
  };

  let className = 'fade ';
  if (!visible) {
    className += 'out';
  }

  return (
    <div className={className}>
      {children}
      <div className="collapse">
        <button onClick={toggle} className={buttonClass}>
          {title}
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </button>
        {open && (
          <div className="collapse-content">
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
