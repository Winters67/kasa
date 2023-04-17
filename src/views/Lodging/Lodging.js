import React from "react";
import DatasLodging from "../../data/logements.json";

const Lodging = (props) => {
  const { id } = props.match.params.id;
  const lodging = DatasLodging.find((lodging) => lodging.id === id);
  console.log(lodging.id);

  return <div>Fiche de logement</div>;
};

export default Lodging;
