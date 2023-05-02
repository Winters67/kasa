import React from "react";
import DatasLodging from "../../data/logements.json";
import { useParams, Navigate  } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Tag from "../../components/Tag/Tag";
import Star from "../../components/Star/Star";
import Collapse from "../../components/Collapse/Collapse";
import { useState } from "react";

const Lodging = () => {
  const { id } = useParams();
  const lodging = DatasLodging.find((lodging) => lodging.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = lodging.pictures;
  const pictureProfil = lodging.host.picture;

  if (!lodging) {
    return <Navigate  to="/404" />;
  }
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

      <section className="lodging-info">
        <div className="containerTitle">
          <div className="titleLodging">
            <div>
              <h1>{lodging.title}</h1>
              <h4>{lodging.location}</h4>
            </div>
            <div className="tags">
              {lodging.tags.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </div>
          </div>
          <div className="containerProfil">
            <div className="ProfilLodging">
              <p>{lodging.host.name}</p>
              <img src={pictureProfil} alt="profile" />
            </div>
            <div className="starContainer">
              <Star
                rating={lodging.rating}
                index={1}
                size="24px"
                margin="5px"
              />
            </div>
          </div>
        </div>

        <div className="equipementContainer">
          <div className="description">
            <Collapse title={`Description`} text={lodging.description} />
          </div>
          <div className="equipments">
            <Collapse title={`Équipements`}>
              <ul>
                {lodging.equipments.map((equipments, index) => (
                  <li key={index}>{equipments}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Lodging;
