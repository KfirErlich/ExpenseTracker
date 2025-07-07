import React from 'react';
import './HeaderImage.css';

const HeaderImage = props => {
    return (
            <img className="header-image" src={props.imageUrl} alt={props.altText} />
    );
}

export default HeaderImage;