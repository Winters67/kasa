import React from 'react';
import "../Tag/Tag.scss";


const Tag = ({tag}) => {
    return (
        <div className='tag'>
            {tag}
        </div>
    );
};

export default Tag;