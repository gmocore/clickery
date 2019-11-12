import React from 'react';

const Photo = ({src, alt, id}) =>
    
        <img className="img-thumbnail"
        style={{height: '200px', width: '200px'}}
            src={src}
            alt={alt}
            key={id}
            id={id}
        />;

export default Photo;