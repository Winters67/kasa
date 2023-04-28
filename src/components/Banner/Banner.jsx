import "../Banner/Banner.scss";
import React from "react";

const Banner = ({ title, title1, imageURL }) => {
  const bannerStyle = {
    backgroundImage: `url(${imageURL})`
  };

  return (
    <section className="main-container" style={bannerStyle}>
      <div className="opacityBg">
        <h1 className="banner-text">
          <span>{title}</span>{title1}
        </h1>
      </div>
    </section>
  );
};



export default Banner;
