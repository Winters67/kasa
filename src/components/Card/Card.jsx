import React, { useState } from "react";
import DatasLodging from "../../data/logements.json";

const CardDisplay = () => {
  const [datasLodging, setDatasLodging] = useState(DatasLodging);
  console.log(datasLodging);

  return datasLodging.map((card) => (
    <article className="ContainerCard">
      <img src={(`${card.cover}`)} alt="" />
      <div className="BgFiltre">
        <h1>{card.title}</h1>
      </div>
    </article>
  ));
};

export default CardDisplay;
