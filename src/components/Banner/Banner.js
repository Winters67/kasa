import "../Banner/Banner.scss";
import React from "react";

const Banner = ({ title, imageURL }) => {
  // const title = "Chez vous, partout et ailleurs";
  return (
    <>
      <section className="main-container">
        <div className="opacityBg">
          <h1>{title}</h1>
        </div>
      </section>
    </>
  );
};

export default Banner;
