import React from 'react';

const Photo = ({id, name, image}) =>
   
        <img 
            src={image}
            alt={name}
            key={id}
            id={id}
        />;

export default Photo;