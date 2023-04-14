import "../Fade/Fade.scss"
import React from 'react';

const Fade = ({ visible, children }) => {

    let ClassName = 'fade ';
if (!visible) {
  ClassName += 'out';
}


    return <div className={ClassName}>{children}</div>
        ;
};

export default Fade;