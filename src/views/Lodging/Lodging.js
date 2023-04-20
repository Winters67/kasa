import React from "react";
import DatasLodging from "../../data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Tag from "../../components/Tag/Tag";

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
    <main className="mainLodging">
      <section className="slider-section" key={lodging.id}>
        <Slider
          pictures={pictures}
          defaultValue={currentIndex}
          onChange={handleSliderChange}
        />
      </section>
      <article className="lodging-info">
        <article className="titleLodging">
          <h1>{lodging.title}</h1>
          <h4>{lodging.location}</h4>
        </article>
        <article className="ProfilLodging">
          <p>{lodging.host.name}</p>
          <img src={pictureProfil} alt="profile" />
        </article>
      </article>
      <div className="tagContainer">
        {lodging.tags.map((tag, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </div>
    </main>
  );
};
export default Lodging;
