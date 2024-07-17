import React from 'react';

const ImageResults = ({ images, onSelectImage }) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.largeImageURL} alt={image.alt_description} />
          <button onClick={() => onSelectImage(image.largeImageURL)}>
            Add Captions
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageResults;
