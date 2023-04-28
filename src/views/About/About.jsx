import React from "react";
import "../About/About.scss";
import Banner from "../../components/Banner/Banner";
import montagne from "../../assets/img/montagne.jpg";
import Collapse from "../../components/Collapse/Collapse";
import squareData from "../../data/squareData.json";

const About = () => {

  const imageURL = montagne;
  return (
    <main className="mainAbout" >
      <Banner imageURL={imageURL} />
      <section className="containerCollapse">
        {squareData.map((square) => (
          <Collapse title={square.title} text={square.text} />
        ))}

      </section>
    </main>
  );
};

export default About;