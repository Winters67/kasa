import React from "react";

const Card = ({ title, cover, id }) => {

  return (
    <a href={`/lodging/${id}`} className="card-link">
      <article className="ContainerCard">
        <img src={cover} alt="" />
        <div className="BgFiltre">
          <h1>{title}</h1>
        </div>
      </article>
    </a>
  );
};

export default Card;