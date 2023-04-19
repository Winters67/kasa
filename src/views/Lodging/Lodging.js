import React from "react";
import DatasLodging from "../../data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

const Lodging = () => {
  const { id } = useParams();
  const lodging = DatasLodging.find((lodging) => lodging.id === id);
  console.log(lodging);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const pictures = lodging.pictures;
  const pictureProfil = lodging.host.picture;

  function handleSliderChange(newIndex) {
    setCurrentIndex(newIndex);
  }

  return (
    <main>
      <section key={lodging.id}>
        <Slider
          pictures={pictures}
          defaultValue={currentIndex}
          onChange={handleSliderChange}
        ></Slider>
      </section>
      <article className="titleLodging">
        <h1>{lodging.title}</h1>
        <h4>{lodging.location}</h4>
      </article>
      <article className="ProfilLodging">
        <p>{lodging.host.name}</p>
        <img src={pictureProfil} alt="profile" />
      </article>
    </main>
  );
};
export default Lodging;
