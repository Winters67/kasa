import React from 'react';
import "../Tag/Tag.scss";


const Tag = (props) => {
    return (
        <div className='tag'>
            {props.tag}
        </div>
    );
};

export default Tag;