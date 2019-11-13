import React from "react";


const Photo = ({ src, alt, id, onClick }) => (
   
 
    <img
      className="img-thumbnail m-2 shadow border-secondary"
      style={{ height: "200px", width: "200px" }}
      src={src}
      alt={alt}
      key={id}
      id={id}
      onClick={onClick}
    />
  
);

export default Photo;
