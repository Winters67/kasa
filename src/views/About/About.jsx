import React, { useState } from "react";
import "../About/About.scss";
import Banner from "../../components/Banner/Banner";
import montagne from "../../assets/img/montagne.jpg";
import Square from "../../components/Square/Square";
import Fade from "../../components/Fade/Fade";
import squareData from "../../data/squareData.json";
import dropdown from "../../assets/img/dropdown.png";

const About = () => {
  const [open, setOpen] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false
  });




  const toggle = (button) => {
    setOpen((prevState) => ({
      ...prevState,
      [button]: !prevState[button]
    }));
  }

  const imageURL = montagne;
  return (
    <main>
      <Banner imageURL={imageURL} />
      <section>

        <button onClick={() => toggle("button1")}>{squareData.title1}<img className="dropdown" src={dropdown} alt="dropdown" /></button>
        <Fade visible={open.button1}>
          <Square text1={squareData.text1} />
        </Fade>

        <button onClick={() => toggle("button2")}>{squareData.title2}</button>
        <Fade visible={open.button2}>
          <Square text2={squareData.text2} />
        </Fade>

        <button onClick={() => toggle("button3")}>{squareData.title3}</button>
        <Fade visible={open.button3}>
          <Square text3={squareData.text3} />
        </Fade>

        <button onClick={() => toggle("button4")}>{squareData.title4}</button>
        <Fade visible={open.button4}>
          <Square text4={squareData.text4} />
        </Fade>
      </section>
    </main>
  );
};

export default About;