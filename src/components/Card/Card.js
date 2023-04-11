import React from "react";

const Card = ({ title = "Defaut", imageURL, children }) => {
  return (
    
    <article className="ContainerCard">
      <div className="BgFiltre">
        <h1>{title}</h1>
        {/* <div>{children}</div> */}
      </div>
    </article>
   
  );
};

export default Card;
