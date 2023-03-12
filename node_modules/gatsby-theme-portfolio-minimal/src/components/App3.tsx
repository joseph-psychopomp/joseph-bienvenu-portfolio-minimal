import React from 'react';
import ReactDOM from 'react-dom';import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "./images3";


 const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <a href={image.link} target="_blank" ><div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}</a>
    </div>
  ),
}));

export default function App() {
  return (
    <div>
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
}