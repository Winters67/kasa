import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Star/Star.scss"

const Star = ({ rating, index, size, margin }) => {
    rating = Number(rating);

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: i < rating ? "#FF6060" : "#E3E3E3", marginRight: "5px", fontSize: size, margin: margin }} key={i} />);
    }

    return (
        <div className='star' key={index}>
            {stars}
        </div>
    );
};

export default Star;
