import "../Banner/Banner.scss";
import React from "react";

const Banner = ({ title, imageURL }) => {
  const bannerStyle = {
    backgroundImage: `url(${imageURL})`
  };
 
  return (
    <section className="main-container" style={bannerStyle}>
          <div className="opacityBg">
            <h1>{title}</h1>
          </div>
        </section>
      );
    };
    


export default Banner;
