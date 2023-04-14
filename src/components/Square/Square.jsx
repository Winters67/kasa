import "../Square/Square.scss"


import React from 'react';

const Square = ({ text1, text2, text3, text4 }) => {
    return (
        <div className="square">
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
        </div>
    );
};
export default Square;