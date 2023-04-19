import React from "react";
import { Link } from "react-router-dom";


const Card = ({ id, title, cover }) => {

  return (
    <Link to={`/lodging/${id}`} className="card-link">
      <article className="ContainerCard">
        <img src={cover} alt="" />
        <div className="BgFiltre">
          <h1>{title}</h1>
        </div>
      </article>
    </Link>
  );
};

export default Card;