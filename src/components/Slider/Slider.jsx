import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './Slider.scss';

function Slider(props) {
    const iconRight = <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
    const iconLeft = <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />


    // Utilisation du hook useState pour stocker l'état de la valeur de l'image courante
    const [value, setValue] = useState(props.defaultValue);


    // Fonction pour changer la valeur de l'image courante lors du clic
    function handleClick(index) {
        if (index < 0) {
            setValue(props.pictures.length - 1);
        } else if (index >= props.pictures.length) {
            setValue(0);
        } else {
            setValue(index);
        }
        props.onChange(index);
    }
    // Calcul du numéro de l'image courante
    const currentPhotoNumber = value + 1;
    return (
        <div className="SliderContainer">

            <img src={props.pictures[value]} alt="" />
            <button className="prev" onClick={() => handleClick(value - 1)}>
                {iconLeft}
            </button>
            <button className="next" onClick={() => handleClick(value + 1)}>
                {iconRight}
            </button>
            <div className="current-photo-number">{currentPhotoNumber}/{props.pictures.length}</div>
        </div>
    );
}

export default Slider;